import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

export default function StrengthWeakness() {
  const strengths = [
    { topic: "Parts of Speech", accuracy: 92 },
    { topic: "Tenses", accuracy: 85 },
    { topic: "Punctuation", accuracy: 80 },
  ]

  const weaknesses = [
    { topic: "Subject-Verb Agreement", accuracy: 45 },
    { topic: "Modifiers", accuracy: 52 },
    { topic: "Parallelism", accuracy: 60 },
  ]

  return (
    <Card className="col-span-2 md:col-span-1">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold">Strengths & Weaknesses</CardTitle>
        <CardDescription>Areas to focus on for improvement</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="flex items-center text-sm font-medium text-green-600 dark:text-green-400">
              <ArrowUpIcon className="mr-1 h-4 w-4" />
              Strengths
            </h3>
            <div className="mt-2 space-y-2">
              {strengths.map((item) => (
                <div
                  key={item.topic}
                  className="flex items-center justify-between rounded-md bg-green-50 p-2 dark:bg-green-950"
                >
                  <span className="text-sm">{item.topic}</span>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">{item.accuracy}%</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center text-sm font-medium text-red-600 dark:text-red-400">
              <ArrowDownIcon className="mr-1 h-4 w-4" />
              Areas for Improvement
            </h3>
            <div className="mt-2 space-y-2">
              {weaknesses.map((item) => (
                <div
                  key={item.topic}
                  className="flex items-center justify-between rounded-md bg-red-50 p-2 dark:bg-red-950"
                >
                  <span className="text-sm">{item.topic}</span>
                  <span className="text-sm font-medium text-red-600 dark:text-red-400">{item.accuracy}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
