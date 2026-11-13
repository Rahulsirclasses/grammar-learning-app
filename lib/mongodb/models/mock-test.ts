import mongoose from "mongoose"

const MockTestSchema = new mongoose.Schema(
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

let MockTestModel: mongoose.Model<any>

try {
  MockTestModel = mongoose.model("MockTest")
} catch {
  MockTestModel = mongoose.model("MockTest", MockTestSchema, "mock_tests")
}

export { MockTestModel }
