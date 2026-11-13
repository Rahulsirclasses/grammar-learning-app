import type { Model } from "mongoose"
import {
  AdminUserModel,
  BookmarkModel,
  FillBlanksQuestionModel,
  LeaderboardModel,
  MockTestModel,
  MockTestSectionModel,
  PracticeQuestionModel,
  ProgressModel,
  TheoryContentModel,
  TopicQuizModel,
  UserModel,
} from "@/lib/mongodb/models"

const modelMap: Record<string, Model<any>> = {
  users: UserModel,
  admin_users: AdminUserModel,
  practice_questions: PracticeQuestionModel,
  mock_tests: MockTestModel,
  mock_test_sections: MockTestSectionModel,
  theory_content: TheoryContentModel,
  topic_quizzes: TopicQuizModel,
  fill_blanks_questions: FillBlanksQuestionModel,
  leaderboard: LeaderboardModel,
  bookmarks: BookmarkModel,
  progress: ProgressModel,
}

export function getModelForTable(table: string) {
  return modelMap[table]
}

export function getSupportedTables() {
  return Object.keys(modelMap)
}
