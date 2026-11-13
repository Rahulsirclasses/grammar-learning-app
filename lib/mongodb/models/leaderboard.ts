import mongoose from "mongoose"

const LeaderboardSchema = new mongoose.Schema(
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

let LeaderboardModel: mongoose.Model<any>

try {
  LeaderboardModel = mongoose.model("Leaderboard")
} catch {
  LeaderboardModel = mongoose.model("Leaderboard", LeaderboardSchema, "leaderboard")
}

export { LeaderboardModel }
