import DashboardLayout from "@/components/layouts/dashboard-layout"
import PracticeCategories from "@/components/practice/practice-categories"

export default function PracticePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Practice</h1>
          <p className="text-muted-foreground">Improve your grammar skills with various practice exercises</p>
        </div>
        <PracticeCategories />
      </div>
    </DashboardLayout>
  )
}
