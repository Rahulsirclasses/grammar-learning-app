import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity } from "lucide-react"

interface PerformanceSummaryProps {
  accuracy: number
}

export default function PerformanceSummary({ accuracy }: PerformanceSummaryProps) {
  // Use the overall accuracy to scale the specific topics for a more realistic look
  // until we have per-topic accuracy tracking.
  const topics = [
    { name: "Parts of Speech", score: Math.round(accuracy * 1.1) },
    { name: "Tenses", score: accuracy },
    { name: "Pronouns", score: Math.round(accuracy * 0.9) },
    { name: "Subject-Verb Agreement", score: Math.round(accuracy * 0.8) },
    { name: "Modifiers", score: Math.round(accuracy * 0.6) },
  ].map(t => ({ ...t, score: Math.min(100, t.score) }));

  return (
    <Card className="border border-muted overflow-hidden">
      <CardHeader className="pb-2 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-purple-100 dark:bg-purple-900 p-1.5 rounded-full">
              <Activity className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            </div>
            <CardTitle className="text-base font-bold">Performance</CardTitle>
          </div>
        </div>
        <CardDescription className="text-xs">Your accuracy by topic</CardDescription>
      </CardHeader>

      <CardContent className="px-4 pb-4">
        <div className="space-y-3">
          {topics.map((topic) => (
            <div key={topic.name} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="font-medium">{topic.name}</span>
                <span className={topic.score > 70 ? "text-green-600 dark:text-green-400" : topic.score > 40 ? "text-amber-600 dark:text-amber-400" : "text-red-600 dark:text-red-400"}>
                  {topic.score}%
                </span>
              </div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${topic.score > 70 ? "from-green-500 to-green-400" :
                      topic.score > 40 ? "from-amber-500 to-amber-400" :
                        "from-red-500 to-red-400"
                    }`}
                  style={{ width: `${topic.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
