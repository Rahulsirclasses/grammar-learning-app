import DashboardLayout from "@/components/layouts/dashboard-layout"
import FillBlanksComponent from "@/components/practice/fill-blanks-practice"

export default function FillBlanksPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Fill in the Blanks Practice</h1>
          <p className="text-muted-foreground">
            Complete sentences by filling in the missing words to improve your vocabulary and grammar
          </p>
        </div>
        <FillBlanksComponent />
      </div>
    </DashboardLayout>
  )
}
