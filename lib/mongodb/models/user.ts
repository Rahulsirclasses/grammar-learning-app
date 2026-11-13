import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
  {
    id: { type: String, index: true, unique: true, sparse: true },
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, default: null },
    phone: { type: String, default: null },
    googleId: { type: String, index: true, sparse: true },
    provider: { type: String, default: "email" },
    role: { type: String, default: "user" },
    status: {
      type: String,
      enum: ["pending", "active", "disabled"],
      default: "pending",
      index: true
    },
    user_metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
    resetTokenHash: { type: String, default: null },
    resetTokenExpiresAt: { type: Date, default: null },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  },
  {
    strict: false,
    versionKey: false,
  },
)

let UserModel: mongoose.Model<any>

try {
  UserModel = mongoose.model("User")
} catch {
  UserModel = mongoose.model("User", UserSchema, "users")
}

export { UserModel }
