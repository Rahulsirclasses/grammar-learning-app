import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle2, Clock, Trophy } from "lucide-react"

export default function RecentActivity() {
  const activities = [
    {
      type: "lesson",
      title: "Completed 'Tenses' lesson",
      time: "Today, 10:30 AM",
      icon: CheckCircle2,
      iconColor: "text-green-500",
      iconBg: "bg-green-100 dark:bg-green-900/30",
    },
    {
      type: "test",
      title: "Scored 85% on Subject-Verb Agreement Quiz",
      time: "Yesterday, 3:15 PM",
      icon: Trophy,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-100 dark:bg-amber-900/30",
    },
    {
      type: "practice",
      title: "Practiced 'Pronouns' exercises",
      time: "Yesterday, 11:45 AM",
      icon: BookOpen,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      type: "streak",
      title: "Reached a 7-day streak",
      time: "2 days ago, 9:20 PM",
      icon: Flame,
      iconColor: "text-orange-500",
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">Recent Activity</CardTitle>
          <Badge variant="outline" className="font-normal">
            <Clock className="mr-1 h-3 w-3" />
            Last 7 days
          </Badge>
        </div>
        <CardDescription>Your latest learning activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex gap-3">
              <div className={`${activity.iconBg} p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0`}>
                <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
              </div>
              <div className="space-y-1">
                <div className="font-medium text-sm">{activity.title}</div>
                <div className="text-xs text-muted-foreground">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function Flame(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}
