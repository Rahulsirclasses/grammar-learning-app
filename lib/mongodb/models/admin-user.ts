import mongoose from "mongoose"

const AdminUserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  },
  {
    strict: false,
    versionKey: false,
  },
)

let AdminUserModel: mongoose.Model<any>

try {
  AdminUserModel = mongoose.model("AdminUser")
} catch {
  AdminUserModel = mongoose.model("AdminUser", AdminUserSchema, "admin_users")
}

export { AdminUserModel }
