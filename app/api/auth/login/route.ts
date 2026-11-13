import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import { AUTH_COOKIE_NAME, getAuthCookieOptions, signAuthToken } from "@/lib/auth/jwt"
import { findUserByEmail, mapDbUserToAuthShape } from "@/lib/mongodb/repositories/user-repository"

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const email = String(body.email || "").toLowerCase().trim()
  const password = String(body.password || "")

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
  }

  const dbUser = await findUserByEmail(email)

  if (!dbUser || Array.isArray(dbUser)) {
    return NextResponse.json({ error: "Invalid login credentials" }, { status: 401 })
  }

  const userObj = dbUser as any;

  if (!userObj.passwordHash) {
    return NextResponse.json({ error: "Invalid login credentials" }, { status: 401 })
  }

  const ok = await bcrypt.compare(password, userObj.passwordHash)
  if (!ok) {
    return NextResponse.json({ error: "Invalid login credentials" }, { status: 401 })
  }

  const user = mapDbUserToAuthShape(dbUser)
  if (!user) {
    return NextResponse.json({ error: "User mapping failed" }, { status: 500 })
  }

  const token = await signAuthToken({
    id: user.id,
    role: user.role,
  })

  const response = NextResponse.json({
    success: true,
    user: {
      id: dbUser.id || dbUser._id?.toString(),
      email: dbUser.email,
      role: dbUser.role,
      name: dbUser.user_metadata?.name || dbUser.email.split("@")[0],
    },
  })

  const cookieOptions = getAuthCookieOptions()
  response.cookies.set(AUTH_COOKIE_NAME, token, cookieOptions)

  return response
}
