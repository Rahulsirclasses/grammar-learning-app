import { connectToMongoDB } from "@/lib/mongodb/mongodb"
import { getModelForTable } from "@/lib/mongodb/repositories/model-map"

function sanitizeDoc<T extends Record<string, any>>(doc: T | null) {
  if (!doc) return doc
  const cloned = { ...doc }
  delete cloned._id
  delete cloned.__v
  return cloned
}

export function sanitizeDocs<T extends Record<string, any>>(docs: T[]) {
  return docs.map((doc) => sanitizeDoc(doc) as T)
}

export async function findMany(table: string, filter: Record<string, any>, sort?: Record<string, 1 | -1>) {
  await connectToMongoDB()
  const model = getModelForTable(table)
  if (!model) throw new Error(`Unsupported table: ${table}`)

  const rows = await model.find(filter).sort(sort ?? {}).lean()
  return sanitizeDocs(rows as Record<string, any>[])
}

export async function findOne(table: string, filter: Record<string, any>) {
  await connectToMongoDB()
  const model = getModelForTable(table)
  if (!model) throw new Error(`Unsupported table: ${table}`)

  const row = await model.findOne(filter).lean()
  return sanitizeDoc(row as Record<string, any> | null)
}

export async function countRows(table: string, filter: Record<string, any> = {}) {
  await connectToMongoDB()
  const model = getModelForTable(table)
  if (!model) throw new Error(`Unsupported table: ${table}`)

  return model.countDocuments(filter)
}

export async function insertRows(table: string, payload: Record<string, any> | Record<string, any>[]) {
  await connectToMongoDB()
  const model = getModelForTable(table)
  if (!model) throw new Error(`Unsupported table: ${table}`)

  const items = Array.isArray(payload) ? payload : [payload]
  const inserted = await model.insertMany(items, { ordered: true })
  const plain = inserted.map((item: any) => item.toObject())
  return sanitizeDocs(plain as Record<string, any>[])
}

export async function updateRows(table: string, filter: Record<string, any>, patch: Record<string, any>) {
  await connectToMongoDB()
  const model = getModelForTable(table)
  if (!model) throw new Error(`Unsupported table: ${table}`)

  const result = await model.updateMany(filter, { $set: patch })
  return { modifiedCount: result.modifiedCount }
}

export async function deleteRows(table: string, filter: Record<string, any>) {
  await connectToMongoDB()
  const model = getModelForTable(table)
  if (!model) throw new Error(`Unsupported table: ${table}`)

  const result = await model.deleteMany(filter)
  return { deletedCount: result.deletedCount }
}
