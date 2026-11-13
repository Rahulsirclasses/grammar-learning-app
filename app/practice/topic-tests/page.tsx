import DashboardLayout from "@/components/layouts/dashboard-layout"
import TopicTestsPractice from "@/components/practice/topic-tests-practice"

export default function TopicTestsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Topic-wise Tests</h1>
          <p className="text-muted-foreground">
            Take comprehensive tests on specific grammar topics to assess your mastery
          </p>
        </div>
        <TopicTestsPractice />
      </div>
    </DashboardLayout>
  )
}
