import DashboardLayout from "@/components/layouts/dashboard-layout"
import SentenceCorrectionPractice from "@/components/practice/sentence-correction-practice"

export default function SentenceCorrectionPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Sentence Correction Practice</h1>
          <p className="text-muted-foreground">
            Identify and correct errors in sentences to improve your grammar skills
          </p>
        </div>
        <SentenceCorrectionPractice />
      </div>
    </DashboardLayout>
  )
}
