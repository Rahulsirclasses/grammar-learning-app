import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ClipboardList, PenTool, Trophy, Clock } from "lucide-react"
import Link from "next/link"

export default function QuickAccess() {
  const quickLinks = [
    {
      title: "Sentence Correction",
      description: "Practice fixing grammatical errors",
      icon: PenTool,
      href: "/practice/sentence-correction",
      color: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-600 dark:text-blue-300",
      badge: null,
    },
    {
      title: "Mock Test",
      description: "Take a 20-minute assessment",
      icon: ClipboardList,
      href: "/mock-tests",
      color: "bg-purple-100 dark:bg-purple-900",
      textColor: "text-purple-600 dark:text-purple-300",
      badge: { text: "NEW", color: "text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-300" },
    },
    {
      title: "Theory",
      description: "Review grammar concepts",
      icon: BookOpen,
      href: "/theory",
      color: "bg-green-100 dark:bg-green-900",
      textColor: "text-green-600 dark:text-green-300",
      badge: null,
    },
    {
      title: "Leaderboard",
      description: "See your ranking",
      icon: Trophy,
      href: "/leaderboard",
      color: "bg-amber-100 dark:bg-amber-900",
      textColor: "text-amber-600 dark:text-amber-300",
      badge: null,
    },
  ]

  return (
    <Card className="border border-muted overflow-hidden">
      <CardHeader className="pb-2 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-100 dark:bg-indigo-900 p-1.5 rounded-full">
              <Clock className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <CardTitle className="text-base font-bold">Quick Access</CardTitle>
          </div>
        </div>
        <CardDescription className="text-xs">Frequently used sections</CardDescription>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-2">
          {quickLinks.map((link) => (
            <Link href={link.href} key={link.title} className="block group">
              <div className="relative h-full border rounded-md p-3 hover:bg-muted/50 transition-colors hover:border-primary/20">
                <div className="flex flex-col gap-1.5">
                  <div className={`rounded-full p-1.5 w-fit ${link.color}`}>
                    <link.icon className={`h-3.5 w-3.5 ${link.textColor}`} />
                  </div>
                  <div className="font-medium text-xs">{link.title}</div>
                  <div className="text-[10px] text-muted-foreground break-words">{link.description}</div>
                </div>
                {link.badge && (
                  <div
                    className={`absolute top-1.5 right-1.5 rounded-full px-1 py-0.5 text-[8px] font-medium ${link.badge.color}`}
                  >
                    {link.badge.text}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
