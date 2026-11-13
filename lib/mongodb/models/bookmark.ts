import mongoose from "mongoose"

const BookmarkSchema = new mongoose.Schema(
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

let BookmarkModel: mongoose.Model<any>

try {
  BookmarkModel = mongoose.model("Bookmark")
} catch {
  BookmarkModel = mongoose.model("Bookmark", BookmarkSchema, "bookmarks")
}

export { BookmarkModel }
