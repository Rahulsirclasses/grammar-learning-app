import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BarChartIcon as ChartBar, ChevronUp, ChevronDown } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

export default function ProgressStats() {
  const stats = [
    {
      name: "Questions Attempted",
      value: 145,
      total: 200,
      percentage: 72,
      trend: { value: 8, increase: true },
    },
    {
      name: "Correct Answers",
      value: 98,
      total: 145,
      percentage: 68,
      trend: { value: 3, increase: true },
    },
    {
      name: "Topics Covered",
      value: 6,
      total: 8,
      percentage: 75,
      trend: { value: 0, increase: true },
    },
    {
      name: "Mock Tests Completed",
      value: 3,
      total: 5,
      percentage: 60,
      trend: { value: 2, increase: true },
    },
  ]

  return (
    <Card className="col-span-2 md:col-span-1 border border-muted">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
              <ChartBar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="text-lg font-bold">Progress Statistics</CardTitle>
          </div>
          <Badge variant="outline">Last 30 days</Badge>
        </div>
        <CardDescription>Your learning journey in numbers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stats.map((stat) => (
            <div key={stat.name} className="space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium flex items-center gap-1.5">
                  {stat.name}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge
                          variant={stat.trend.increase ? "success" : "destructive"}
                          className="h-5 flex items-center gap-0.5"
                        >
                          {stat.trend.increase ? (
                            <ChevronUp className="h-3 w-3" />
                          ) : (
                            <ChevronDown className="h-3 w-3" />
                          )}
                          <span>{stat.trend.value}%</span>
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {stat.trend.increase ? "Increased" : "Decreased"} by {stat.trend.value}% since last month
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.value}/{stat.total} ({stat.percentage}%)
                </span>
              </div>
              <div className="relative">
                <Progress value={stat.percentage} className="h-2" />
                {stat.percentage >= 50 && (
                  <div
                    className="absolute top-1/2 left-[50%] h-4 w-0.5 -translate-y-1/2 bg-muted-foreground/30"
                    style={{ left: "50%" }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
