import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Clock, Flame, Zap } from "lucide-react"

export default function Achievements() {
  const badges = [
    {
      name: "Grammar Guru",
      description: "Completed all Parts of Speech lessons",
      icon: BookOpen,
      color: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-600 dark:text-blue-300",
      earned: true,
    },
    {
      name: "Perfect Score",
      description: "Scored 100% on a practice quiz",
      icon: Award,
      color: "bg-amber-100 dark:bg-amber-900",
      textColor: "text-amber-600 dark:text-amber-300",
      earned: true,
    },
    {
      name: "Speed Demon",
      description: "Completed a mock test in record time",
      icon: Clock,
      color: "bg-purple-100 dark:bg-purple-900",
      textColor: "text-purple-600 dark:text-purple-300",
      earned: false,
    },
    {
      name: "7-Day Streak",
      description: "Practiced for 7 consecutive days",
      icon: Flame,
      color: "bg-red-100 dark:bg-red-900",
      textColor: "text-red-600 dark:text-red-300",
      earned: true,
    },
    {
      name: "500 XP",
      description: "Earned 500 experience points",
      icon: Zap,
      color: "bg-green-100 dark:bg-green-900",
      textColor: "text-green-600 dark:text-green-300",
      earned: true,
    },
  ]

  return (
    <Card className="col-span-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold">Achievements & Badges</CardTitle>
        <CardDescription>Rewards for your progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className={`flex flex-col items-center justify-center rounded-lg p-3 text-center ${
                badge.earned ? badge.color : "bg-muted"
              }`}
            >
              <div className={`rounded-full p-2 ${badge.earned ? "bg-white/20" : "bg-muted-foreground/10"}`}>
                <badge.icon className={`h-5 w-5 ${badge.earned ? badge.textColor : "text-muted-foreground"}`} />
              </div>
              <div className="mt-2 text-sm font-medium">{badge.name}</div>
              <div className="mt-1 text-xs text-muted-foreground line-clamp-2">{badge.description}</div>
              {!badge.earned && (
                <Badge variant="outline" className="mt-2 text-xs">
                  Locked
                </Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
