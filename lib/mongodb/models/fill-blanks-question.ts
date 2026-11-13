import mongoose from "mongoose"

const FillBlanksQuestionSchema = new mongoose.Schema(
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

let FillBlanksQuestionModel: mongoose.Model<any>

try {
  FillBlanksQuestionModel = mongoose.model("FillBlanksQuestion")
} catch {
  FillBlanksQuestionModel = mongoose.model("FillBlanksQuestion", FillBlanksQuestionSchema, "fill_blanks_questions")
}

export { FillBlanksQuestionModel }
