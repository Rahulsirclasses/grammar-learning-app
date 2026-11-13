import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import { AUTH_COOKIE_NAME, getAuthCookieOptions, signAuthToken } from "@/lib/auth/jwt"
import { createUser, findUserByEmail } from "@/lib/mongodb/repositories/user-repository"

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const email = String(body.email || "").toLowerCase().trim()
  const password = String(body.password || "")
  const name = String(body.name || "").trim()
  const phone = String(body.phone || "").trim()

  const phoneRegex = /^[0-9]{10}$/
  if (!email || !password || !phoneRegex.test(phone)) {
    return NextResponse.json({ error: "Email, password, and a valid 10-digit phone number are required" }, { status: 400 })
  }

  if (password.length < 6) {
    return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 })
  }

  const existing = await findUserByEmail(email)
  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 })
  }

  const passwordHash = await bcrypt.hash(password, 10)
  const newUser = await createUser({ email, passwordHash, name, phone })

  const token = await signAuthToken({
    id: newUser.id,
    role: newUser.role,
  })

  const response = NextResponse.json({
    success: true,
    user: {
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
      name: newUser.user_metadata?.name || newUser.email.split("@")[0],
    },
  })

  const cookieOptions = getAuthCookieOptions()
  response.cookies.set(AUTH_COOKIE_NAME, token, cookieOptions)

  return response
}
