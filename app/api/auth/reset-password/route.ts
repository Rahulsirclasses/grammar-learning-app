import bcrypt from "bcryptjs"
import crypto from "crypto"
import { NextResponse } from "next/server"
import { findUserByResetToken, updateUserPassword } from "@/lib/mongodb/repositories/user-repository"

function sha256(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex")
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const token = String(body.token || "")
  const password = String(body.password || "")

  if (!token || !password) {
    return NextResponse.json({ error: "Token and password are required" }, { status: 400 })
  }

  if (password.length < 6) {
    return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 })
  }

  const tokenHash = sha256(token)
  const user = (await findUserByResetToken(tokenHash)) as any

  if (!user) {
    return NextResponse.json({ error: "Invalid or expired reset link" }, { status: 400 })
  }

  const passwordHash = await bcrypt.hash(password, 10)
  const userId = user.id || user._id?.toString()
  await updateUserPassword(userId, passwordHash)

  return NextResponse.json({ ok: true })
}
