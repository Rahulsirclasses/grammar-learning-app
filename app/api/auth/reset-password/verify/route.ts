import crypto from "crypto"
import { NextResponse } from "next/server"
import { findUserByResetToken } from "@/lib/mongodb/repositories/user-repository"

function sha256(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex")
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const token = String(searchParams.get("token") || "")

  if (!token) {
    return NextResponse.json({ valid: false }, { status: 400 })
  }

  const tokenHash = sha256(token)
  const user = await findUserByResetToken(tokenHash)

  return NextResponse.json({ valid: !!user })
}
