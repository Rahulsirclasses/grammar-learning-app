import mongoose from "mongoose"

const ProgressSchema = new mongoose.Schema(
  {
    id: { type: String, index: true, unique: true, sparse: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  },
  {
    strict: false,
    versionKey: false,
  },
)

let ProgressModel: mongoose.Model<any>

try {
  ProgressModel = mongoose.model("Progress")
} catch {
  ProgressModel = mongoose.model("Progress", ProgressSchema, "progress")
}

export { ProgressModel }
