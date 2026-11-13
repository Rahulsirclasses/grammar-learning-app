import DashboardLayout from "@/components/layouts/dashboard-layout"
import ErrorSpottingPractice from "@/components/practice/error-spotting-practice"

export default function ErrorSpottingPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Error Spotting Practice</h1>
          <p className="text-muted-foreground">
            Identify which part of a sentence contains an error. Sharpen your error detection skills for competitive
            exams.
          </p>
        </div>
        <ErrorSpottingPractice />
      </div>
    </DashboardLayout>
  )
}
