import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { AUTH_COOKIE_NAME, verifyAuthToken } from "@/lib/auth/jwt"
import { findUserById } from "@/lib/mongodb/repositories/user-repository"

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get(AUTH_COOKIE_NAME)?.value

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const payload = await verifyAuthToken(decodeURIComponent(token))
    if (!payload || !payload.id) {
      return NextResponse.json({ error: "Invalid session" }, { status: 401 })
    }

    const dbUser = (await findUserById(payload.id)) as any
    if (!dbUser || Array.isArray(dbUser)) {
      const response = NextResponse.json({ error: "User not found" }, { status: 401 })
      response.cookies.delete(AUTH_COOKIE_NAME)
      return response
    }

    return NextResponse.json({
      id: dbUser.id || dbUser._id?.toString(),
      email: dbUser.email,
      role: dbUser.role,
      status: dbUser.status,
      name: dbUser.user_metadata?.name || dbUser.email?.split("@")[0],
      avatar: dbUser.user_metadata?.avatar || null,
    })
  } catch (err) {
    console.error("Auth me error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 401 })
  }
}
