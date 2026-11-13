"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, ShieldAlert, LogOut, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function PendingApprovalPage() {
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(false)

  const checkStatus = async () => {
    setIsChecking(true)
    try {
      // Direct call to see if they're still pending
      const res = await fetch("/api/auth/me")
      const data = await res.json()
      
      if (data.status === "active") {
        router.push("/dashboard")
        router.refresh()
      } else if (data.status === "disabled") {
        router.push("/account-disabled")
        router.refresh()
      } else {
        // Still pending - refresh the server components to be sure
        router.refresh()
      }
    } catch (err) {
      console.error("Check status error:", err)
    } finally {
      // Slight delay for visual feedback
      setTimeout(() => setIsChecking(false), 800)
    }
  }

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/login")
    router.refresh()
  }

  // Optional: Auto-check every 30 seconds
  useEffect(() => {
    const interval = setInterval(checkStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />

      <Card className="w-full max-w-lg bg-slate-900/50 border-slate-800 backdrop-blur-xl shadow-2xl relative z-10 border-t-blue-500/50">
        <CardHeader className="space-y-1 text-center pb-2">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 bg-blue-500/10 rounded-full flex items-center justify-center relative">
              <Clock className={`h-10 w-10 text-blue-400 ${isChecking ? 'animate-spin' : 'animate-pulse'}`} />
              <div className="absolute -top-1 -right-1">
                <ShieldAlert className="h-6 w-6 text-yellow-500 fill-yellow-500/20" />
              </div>
            </div>
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-white">
            Approval Pending
          </CardTitle>
          <CardDescription className="text-slate-400 text-lg">
            Your account is being reviewed by our team.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 space-y-4">
            <p className="text-slate-300 leading-relaxed text-center">
              To ensure the best experience for everyone, we manually review and approve each new account. This process usually takes less than 24 hours.
            </p>
            <div className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              <span className="w-8 h-px bg-slate-800"></span>
              Expect an update soon
              <span className="w-8 h-px bg-slate-800"></span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
                variant="outline" 
                className="flex-1 h-12 border-slate-700 hover:bg-slate-800 text-white gap-2 transition-all hover:border-slate-600 rounded-xl"
                onClick={checkStatus}
                disabled={isChecking}
            >
              {isChecking ? "Checking..." : "Check Status"}
            </Button>
            <Button 
                variant="ghost" 
                className="flex-1 h-12 text-slate-400 hover:text-white hover:bg-white/5 gap-2 rounded-xl"
                onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Log Out
            </Button>
          </div>

          <div className="text-center">
            <Link href="/" className="text-slate-500 hover:text-blue-400 text-sm inline-flex items-center gap-1 transition-colors group">
              <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
