import { AdminUserModel } from "@/lib/mongodb/models"
import { connectToMongoDB } from "@/lib/mongodb/mongodb"

export async function isAdminEmail(email?: string | null) {
  if (!email) return false
  await connectToMongoDB()
  const count = await AdminUserModel.countDocuments({ email })
  return count > 0
}
