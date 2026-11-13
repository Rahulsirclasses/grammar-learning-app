/*
  Usage:
  1) Create a full Supabase backup first.
  2) Set env:
     - SUPABASE_URL
     - SUPABASE_SERVICE_ROLE_KEY
     - MONGODB_URI
     - MIGRATION_BACKUP_CONFIRMED=true
  3) Run with tsx:
     pnpm dlx tsx scripts/migrate-supabase-to-mongodb.ts
*/

import { connectToMongoDB } from "@/lib/mongodb/mongodb"
import { getModelForTable, getSupportedTables } from "@/lib/mongodb/repositories/model-map"

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const BATCH_SIZE = Number(process.env.MIGRATION_BATCH_SIZE || 500)
const BACKUP_CONFIRMED = process.env.MIGRATION_BACKUP_CONFIRMED === "true"

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY")
}

if (!BACKUP_CONFIRMED) {
  throw new Error("Backup confirmation missing. Set MIGRATION_BACKUP_CONFIRMED=true after taking Supabase backup.")
}

const TABLES = [
  "users",
  "admin_users",
  "practice_questions",
  "topic_quizzes",
  "fill_blanks_questions",
  "mock_tests",
  "mock_test_sections",
  "leaderboard",
  "bookmarks",
  "progress",
  "theory_content",
]

function headers() {
  return {
    apikey: SUPABASE_SERVICE_ROLE_KEY as string,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    "Content-Type": "application/json",
  }
}

async function fetchSupabaseBatch(table: string, from: number, to: number) {
  const url = `${SUPABASE_URL}/rest/v1/${table}?select=*`
  const response = await fetch(url, {
    headers: {
      ...headers(),
      Range: `${from}-${to}`,
      Prefer: "count=exact",
    },
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Failed to fetch ${table} ${from}-${to}: ${response.status} ${text}`)
  }

  const rows = (await response.json()) as Record<string, any>[]
  const rangeHeader = response.headers.get("content-range")
  let total = rows.length
  if (rangeHeader && rangeHeader.includes("/")) {
    const totalPart = rangeHeader.split("/")[1]
    if (totalPart && totalPart !== "*") {
      total = Number(totalPart)
    }
  }

  return { rows, total }
}

async function fetchAllRows(table: string) {
  let from = 0
  let total = 0
  const allRows: Record<string, any>[] = []

  while (true) {
    const to = from + BATCH_SIZE - 1
    const { rows, total: fetchedTotal } = await fetchSupabaseBatch(table, from, to)
    total = fetchedTotal

    if (!rows.length) {
      break
    }

    allRows.push(...rows)
    from += rows.length

    if (allRows.length >= total) {
      break
    }
  }

  return { rows: allRows, total }
}

function normalizeDocument(row: Record<string, any>) {
  const doc = { ...row }
  if (doc.id && typeof doc.id !== "string") {
    doc.id = String(doc.id)
  }
  return doc
}

async function migrateTable(table: string) {
  const model = getModelForTable(table)
  if (!model) {
    throw new Error(`Unsupported table in migration map: ${table}`)
  }

  const { rows, total } = await fetchAllRows(table)
  const docs = rows.map(normalizeDocument)

  await model.deleteMany({})

  for (let i = 0; i < docs.length; i += BATCH_SIZE) {
    const chunk = docs.slice(i, i + BATCH_SIZE)
    if (chunk.length) {
      await model.insertMany(chunk, { ordered: true })
    }
  }

  const mongoCount = await model.countDocuments({})

  return {
    table,
    supabaseCount: total,
    mongoCount,
    ok: total === mongoCount,
  }
}

async function main() {
  await connectToMongoDB()

  const supported = new Set(getSupportedTables())
  const tables = TABLES.filter((table) => supported.has(table))
  const results: Array<{ table: string; supabaseCount: number; mongoCount: number; ok: boolean }> = []

  for (const table of tables) {
    const result = await migrateTable(table)
    results.push(result)
    console.log(`[${result.ok ? "OK" : "MISMATCH"}] ${table}: Supabase=${result.supabaseCount} MongoDB=${result.mongoCount}`)
  }

  const mismatches = results.filter((r) => !r.ok)
  if (mismatches.length) {
    throw new Error(`Migration completed with mismatches in ${mismatches.map((m) => m.table).join(", ")}`)
  }

  console.log("Migration completed successfully with count parity.")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
