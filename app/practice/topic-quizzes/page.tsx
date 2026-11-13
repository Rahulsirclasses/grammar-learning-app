import DashboardLayout from "@/components/layouts/dashboard-layout"
import TopicQuizzesPractice from "@/components/practice/topic-quizzes-practice"

export default function TopicQuizzesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Topic Quizzes</h1>
          <p className="text-muted-foreground">Master specific grammar concepts with focused topic quizzes</p>
        </div>
        <TopicQuizzesPractice />
      </div>
    </DashboardLayout>
  )
}
