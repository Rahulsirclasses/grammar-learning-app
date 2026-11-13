import mongoose from "mongoose"

const PracticeQuestionSchema = new mongoose.Schema(
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

let PracticeQuestionModel: mongoose.Model<any>

try {
  PracticeQuestionModel = mongoose.model("PracticeQuestion")
} catch {
  PracticeQuestionModel = mongoose.model("PracticeQuestion", PracticeQuestionSchema, "practice_questions")
}

export { PracticeQuestionModel }
