import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MCQPractice from "@/components/practice/mcq-practice"
import DashboardLayout from "@/components/layouts/dashboard-layout"

export const metadata: Metadata = {
  title: "Grammar Pro | MCQ Practice",
  description: "Practice multiple-choice questions for competitive exams",
}

export default function MCQPracticePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">MCQ Practice</h1>
        <p className="text-muted-foreground">
          Enhance your grammar skills with multiple-choice questions designed for competitive exams.
        </p>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-5 mb-4 md:w-fit">
            <TabsTrigger value="all">All Topics</TabsTrigger>
            <TabsTrigger value="tenses">Tenses</TabsTrigger>
            <TabsTrigger value="subject-verb">Subject-Verb</TabsTrigger>
            <TabsTrigger value="modifiers">Modifiers</TabsTrigger>
            <TabsTrigger value="pronouns">Pronouns</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <MCQPractice topic="all" />
          </TabsContent>

          <TabsContent value="tenses" className="mt-0">
            <MCQPractice topic="tenses" />
          </TabsContent>

          <TabsContent value="subject-verb" className="mt-0">
            <MCQPractice topic="subject-verb" />
          </TabsContent>

          <TabsContent value="modifiers" className="mt-0">
            <MCQPractice topic="modifiers" />
          </TabsContent>

          <TabsContent value="pronouns" className="mt-0">
            <MCQPractice topic="pronouns" />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
