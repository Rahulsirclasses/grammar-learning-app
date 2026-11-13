import mongoose from "mongoose"

const MockTestSectionSchema = new mongoose.Schema(
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

let MockTestSectionModel: mongoose.Model<any>

try {
  MockTestSectionModel = mongoose.model("MockTestSection")
} catch {
  MockTestSectionModel = mongoose.model("MockTestSection", MockTestSectionSchema, "mock_test_sections")
}

export { MockTestSectionModel }
