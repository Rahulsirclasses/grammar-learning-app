import { redirect } from "next/navigation"
import { getUser } from "@/lib/mongodb/server"
import DashboardLayout from "@/components/layouts/dashboard-layout"
import PracticeTopics from "@/components/dashboard/practice-topics"
import PerformanceSummary from "@/components/dashboard/performance-summary"
import QuickAccess from "@/components/dashboard/quick-access"
import StreakCard from "@/components/dashboard/streak-card"
import RecentActivity from "@/components/dashboard/recent-activity"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowRight, Trophy, Zap } from "lucide-react"
import Link from "next/link"
import { cookies } from "next/headers"
import { AUTH_COOKIE_NAME } from "@/lib/auth/jwt"
import { getUserStats } from "@/lib/mongodb/repositories/progress-repository"

export default async function Dashboard() {
  const user = await getUser()

  if (!user) {
    redirect("/api/auth/logout")
  }

  if (!user.phone) {
    redirect("/onboarding")
  }

  if (user.status === "pending") {
    redirect("/pending-approval")
  }

  if (user.status === "disabled") {
    redirect("/account-disabled")
  }

  const stats = await getUserStats(user.id)
  const userName = user.user_metadata?.name || user.email?.split("@")[0] || "Student"

  return (
    <DashboardLayout user={user}>
      <div className="space-y-6">
        {/* Welcome Section with Background */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 md:p-8">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Welcome back, {userName}!</h1>
                <p className="text-blue-100 max-w-xl">
                  {stats.totalXp > 0
                    ? `You've earned ${stats.totalXp} XP so far. Keep up the great work!`
                    : "Ready to start your grammar journey? Pick a topic and let's go!"}
                  {stats.streak > 0 && ` You're on a ${stats.streak}-day streak!`}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-2 md:mt-0">
                <Link href="/practice/topic-quizzes">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Continue Learning
                  </Button>
                </Link>
                <Link href="/mock-tests">
                  <Button
                    variant="outline"
                    className="bg-blue-500/20 text-white border-white/20 hover:bg-blue-500/30 hover:border-white/30"
                  >
                    Take Practice Test
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500 rounded-full opacity-20 translate-y-1/2 -translate-x-1/4"></div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <div className="bg-background sticky top-16 z-10 -mx-4 px-4 py-2 border-b sm:mx-0 sm:px-0 sm:border-0">
            <TabsList className="w-full justify-start bg-transparent p-0 h-auto">
              <TabsTrigger
                value="dashboard"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-1.5 h-auto"
              >
                Dashboard
              </TabsTrigger>
              <TabsTrigger
                value="insights"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-1.5 h-auto"
              >
                Learning Insights
              </TabsTrigger>
              <TabsTrigger
                value="recommendations"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-1.5 h-auto"
              >
                Recommendations
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="dashboard" className="space-y-6 mt-0 animate-in fade-in-50 duration-300">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950/50 rounded-xl p-4 border border-blue-100 dark:border-blue-900/50 flex flex-col">
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">Total XP</div>
                <div className="text-2xl font-bold">{stats.totalXp.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground mt-1">Level 1 Student</div>
                <div className="mt-auto pt-2">
                  <Zap className="h-4 w-4 text-blue-500" />
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/50 rounded-xl p-4 border border-green-100 dark:border-green-900/50 flex flex-col">
                <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">Accuracy</div>
                <div className="text-2xl font-bold">{stats.accuracy}%</div>
                <div className="text-xs text-muted-foreground mt-1">Overall performance</div>
                <div className="mt-auto pt-2">
                  <Trophy className="h-4 w-4 text-green-500" />
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/50 rounded-xl p-4 border border-purple-100 dark:border-purple-900/50 flex flex-col">
                <div className="text-xs text-purple-600 dark:text-purple-400 font-medium mb-1">Topics Mastered</div>
                <div className="text-2xl font-bold">{stats.topicsMastered}/{stats.totalTopics}</div>
                <div className="text-xs text-muted-foreground mt-1">{stats.totalTopics - stats.topicsMastered} remaining</div>
                <div className="mt-auto pt-2">
                  <BookOpen className="h-4 w-4 text-purple-500" />
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/50 rounded-xl p-4 border border-amber-100 dark:border-amber-900/50 flex flex-col">
                <div className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-1">Tests Completed</div>
                <div className="text-2xl font-bold">{stats.testsCompleted}</div>
                <div className="text-xs text-muted-foreground mt-1">Full-length assessments</div>
                <div className="mt-auto pt-2">
                  <Trophy className="h-4 w-4 text-amber-500" />
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2 space-y-6">
                <PracticeTopics />
                <RecentActivity />
              </div>

              <div className="space-y-6">
                <StreakCard streak={stats.streak} />
                <QuickAccess />
                <PerformanceSummary accuracy={stats.accuracy} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="insights">
            <div className="rounded-xl border p-8 text-center bg-gradient-to-b from-muted/50 to-muted">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Learning Insights Coming Soon</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                We're building advanced analytics to help you better understand your learning patterns and improve your
                study habits.
              </p>
              <Button variant="outline" className="mt-6 bg-transparent">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="recommendations">
            <div className="rounded-xl border p-8 text-center bg-gradient-to-b from-muted/50 to-muted">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Personalized Recommendations Coming Soon</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                We'll provide custom learning recommendations based on your performance to help you focus on areas that
                need improvement.
              </p>
              <Button variant="outline" className="mt-6 bg-transparent">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
