import crypto from "crypto"
import { NextResponse } from "next/server"
import { setPasswordResetToken } from "@/lib/mongodb/repositories/user-repository"

function sha256(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex")
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const email = String(body.email || "").toLowerCase().trim()
  const redirectTo = String(body.redirectTo || "").trim()

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 })
  }

  const rawToken = crypto.randomBytes(32).toString("hex")
  const tokenHash = sha256(rawToken)
  const expiresAt = new Date(Date.now() + 1000 * 60 * 30)

  await setPasswordResetToken(email, tokenHash, expiresAt)

  const fallbackOrigin = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  const base = redirectTo || `${fallbackOrigin}/auth/reset-password`
  const resetUrl = `${base}${base.includes("?") ? "&" : "?"}token=${encodeURIComponent(rawToken)}`

  // Replace this with a real email provider integration in production.
  console.log(`Password reset link for ${email}: ${resetUrl}`)

  return NextResponse.json({ ok: true })
}
