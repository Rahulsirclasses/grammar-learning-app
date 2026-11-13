import mongoose from "mongoose"

const TheoryContentSchema = new mongoose.Schema(
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

let TheoryContentModel: mongoose.Model<any>

try {
  TheoryContentModel = mongoose.model("TheoryContent")
} catch {
  TheoryContentModel = mongoose.model("TheoryContent", TheoryContentSchema, "theory_content")
}

export { TheoryContentModel }
