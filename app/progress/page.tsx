import DashboardLayout from "@/components/layouts/dashboard-layout"
import ProgressStats from "@/components/progress/progress-stats"
import StrengthWeakness from "@/components/progress/strength-weakness"
import Achievements from "@/components/progress/achievements"

export default function ProgressPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Your Progress</h1>
          <p className="text-muted-foreground">Track your learning journey and achievements</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <ProgressStats />
          <StrengthWeakness />
          <Achievements />
        </div>
      </div>
    </DashboardLayout>
  )
}
