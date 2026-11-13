import DashboardLayout from "@/components/layouts/dashboard-layout"
import MockTestList from "@/components/mock-tests/mock-test-list"

export default function MockTestsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Mock Tests</h1>
          <p className="text-muted-foreground">Test your knowledge with timed assessments</p>
        </div>
        <MockTestList />
      </div>
    </DashboardLayout>
  )
}
