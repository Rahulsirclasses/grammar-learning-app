import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Edit, FileQuestion, List, Pencil, Target } from "lucide-react"
import Link from "next/link"

export default function PracticeCategories() {
  const categories = [
    {
      title: "Multiple Choice Questions",
      description: "Test your knowledge with MCQs",
      icon: FileQuestion,
      href: "/practice/mcq",
      color: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-600 dark:text-blue-300",
    },
    {
      title: "Sentence Correction",
      description: "Fix grammatical errors in sentences",
      icon: Edit,
      href: "/practice/sentence-correction",
      color: "bg-green-100 dark:bg-green-900",
      textColor: "text-green-600 dark:text-green-300",
    },
    {
      title: "Error Spotting",
      description: "Identify errors in sentences",
      icon: CheckCircle2,
      href: "/practice/error-spotting",
      color: "bg-amber-100 dark:bg-amber-900",
      textColor: "text-amber-600 dark:text-amber-300",
    },
    {
      title: "Fill in the Blanks",
      description: "Complete sentences with correct words",
      icon: Pencil,
      href: "/practice/fill-blanks",
      color: "bg-purple-100 dark:bg-purple-900",
      textColor: "text-purple-600 dark:text-purple-300",
    },
    {
      title: "Topic-wise Quizzes",
      description: "Practice specific grammar topics",
      icon: List,
      href: "/practice/topic-quizzes",
      color: "bg-red-100 dark:bg-red-900",
      textColor: "text-red-600 dark:text-red-300",
    },
    {
      title: "Topic-wise Tests",
      description: "Take comprehensive tests on specific topics",
      icon: Target,
      href: "/practice/topic-tests",
      color: "bg-indigo-100 dark:bg-indigo-900",
      textColor: "text-indigo-600 dark:text-indigo-300",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Card key={category.title} className="overflow-hidden flex flex-col">
          <CardHeader className="pb-2 flex-1">
            <div className={`rounded-full p-2 w-fit ${category.color}`}>
              <category.icon className={`h-5 w-5 ${category.textColor}`} />
            </div>
            <CardTitle className="text-lg mt-2">{category.title}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </CardHeader>
          <CardContent className="pt-0 pb-4">
            <Link href={category.href}>
              <Button className="w-full">Start Practice</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
