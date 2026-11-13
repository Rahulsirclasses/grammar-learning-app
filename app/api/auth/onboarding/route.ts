import { NextRequest, NextResponse } from "next/server"
import { connectToMongoDB } from "@/lib/mongodb/mongodb"
import { UserModel } from "@/lib/mongodb/models"
import { createClient } from "@/lib/mongodb/server"

export async function POST(request: NextRequest) {
  try {
    const { phone } = await request.json()
    
    const phoneRegex = /^[0-9]{10}$/
    if (!phone || !phoneRegex.test(phone)) {
      return NextResponse.json({ error: "Please enter a valid 10-digit phone number" }, { status: 400 })
    }

    const dbClient = await createClient()
    const { data: { user } } = await dbClient.auth.getUser()
    
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectToMongoDB()
    await UserModel.updateOne(
      { id: user.id },
      { $set: { phone, updated_at: new Date() } }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[Onboarding API] Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
