import DashboardLayout from "@/components/layouts/dashboard-layout"
import LeaderboardTable from "@/components/leaderboard/leaderboard-table"
import LeaderboardFilter from "@/components/leaderboard/leaderboard-filter"

export default function LeaderboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Leaderboard</h1>
          <p className="text-muted-foreground">See how you rank among other learners</p>
        </div>
        <LeaderboardFilter />
        <LeaderboardTable />
      </div>
    </DashboardLayout>
  )
}
