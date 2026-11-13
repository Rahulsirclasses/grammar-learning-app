import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookText } from "lucide-react"
import Link from "next/link"

interface PracticeTopicsProps {
  className?: string
}

export default function PracticeTopics({ className = "" }: PracticeTopicsProps) {
  const topics = [
    {
      name: "Tenses",
      progress: 75,
      href: "/practice/topic-quizzes/tenses",
      status: "In Progress",
      color: "bg-blue-500",
      lessons: 8,
      completed: 6,
    },
    {
      name: "Articles & Determiners",
      progress: 100,
      href: "/practice/topic-quizzes/articles-determiners",
      status: "Completed",
      color: "bg-green-500",
      lessons: 5,
      completed: 5,
    },
    {
      name: "Pronouns",
      progress: 40,
      href: "/practice/topic-quizzes/pronouns",
      status: "In Progress",
      color: "bg-blue-500",
      lessons: 6,
      completed: 2,
    },
    {
      name: "Subject-Verb Agreement",
      progress: 60,
      href: "/practice/topic-quizzes/subject-verb-agreement",
      status: "In Progress",
      color: "bg-blue-500",
      lessons: 7,
      completed: 4,
    },
  ]

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-100 dark:bg-emerald-900 p-2 rounded-full">
              <BookText className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <CardTitle className="text-lg font-bold">Practice Topics</CardTitle>
          </div>
          <Link href="/practice/topic-quizzes">
            <Button variant="ghost" size="sm" className="gap-1 text-xs h-8">
              View All
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
        <CardDescription>Track your progress across grammar topics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {topics.map((topic) => (
            <Link href={topic.href} key={topic.name} className="block group">
              <div className="rounded-lg border bg-card p-4 transition-all hover:shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{topic.name}</h3>
                  <Badge
                    variant={
                      topic.status === "Completed" ? "success" : topic.status === "In Progress" ? "default" : "outline"
                    }
                    className="text-xs"
                  >
                    {topic.status}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      {topic.completed} of {topic.lessons} lessons completed
                    </span>
                    <span className="font-medium">{topic.progress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div className={`h-full rounded-full ${topic.color}`} style={{ width: `${topic.progress}%` }}></div>
                  </div>
                </div>

                <div className="mt-3 flex justify-end">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 px-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {topic.status === "Completed" ? "Review" : "Continue"}
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
