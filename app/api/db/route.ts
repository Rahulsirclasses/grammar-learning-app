import { NextRequest, NextResponse } from "next/server"
import { deleteRows, insertRows, updateRows } from "@/lib/mongodb/repositories/table-repository"
import { requireRole, handleAuthError } from "@/lib/auth/requireAuth"

export async function POST(request: NextRequest) {
  try {
    requireRole(request, ["admin", "super-admin"])

    const body = await request.json().catch(() => ({}))
    const table = String(body.table || "")
    const action = String(body.action || "")
    const payload = body.payload
    const filter = body.filter || {}

    if (!table || !action) {
      return NextResponse.json({ error: "Missing table/action" }, { status: 400 })
    }

    try {
      if (action === "insert") {
        const data = await insertRows(table, payload)
        return NextResponse.json({ data })
      }

      if (action === "update") {
        const data = await updateRows(table, filter, payload)
        return NextResponse.json({ data })
      }

      if (action === "delete") {
        const data = await deleteRows(table, filter)
        return NextResponse.json({ data })
      }

      return NextResponse.json({ error: "Unsupported action" }, { status: 400 })
    } catch (error) {
      const message = error instanceof Error ? error.message : "Database operation failed"
      return NextResponse.json({ error: message }, { status: 500 })
    }
  } catch (error: any) {
    return handleAuthError(error)
  }
}
