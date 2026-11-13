import { Card, CardContent } from "@/components/ui/card"
import { Flame } from "lucide-react"

interface StreakCardProps {
  streak: number
}

export default function StreakCard({ streak }: StreakCardProps) {
  const weekdays = ["M", "T", "W", "T", "F", "S", "S"]

  return (
    <Card className="overflow-hidden">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 text-white">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">Current Streak</h3>
          <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
            <Flame className="h-3.5 w-3.5" />
            {streak} days
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-center mt-2">
          {weekdays.map((day, index) => {
            // Logic: if streak is 3, first 3 days are active
            const isActive = streak > 0 && index < (streak % 7 || 7) && index < streak
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="text-xs text-muted-foreground mb-2">{day}</div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive
                      ? "bg-gradient-to-br from-orange-500 to-red-500 text-white"
                      : "bg-muted text-muted-foreground"
                    }`}
                >
                  {isActive && <Flame className="h-4 w-4" />}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="text-sm font-medium">
            {streak > 0 ? "You're doing great!" : "Start your streak today!"}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {streak > 0
              ? "Practice daily to keep your flame burning bright."
              : "Complete any practice session to begin your learning streak."}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
