import mongoose from "mongoose"

const TopicQuizSchema = new mongoose.Schema(
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

let TopicQuizModel: mongoose.Model<any>

try {
  TopicQuizModel = mongoose.model("TopicQuiz")
} catch {
  TopicQuizModel = mongoose.model("TopicQuiz", TopicQuizSchema, "topic_quizzes")
}

export { TopicQuizModel }
