"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldX, LogOut, MessageSquare, ArrowLeft, RefreshCw } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AccountDisabledPage() {
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(false)

  const checkStatus = async () => {
    setIsChecking(true)
    try {
      const res = await fetch("/api/auth/me")
      const data = await res.json()
      
      // If the admin has enabled the user, they will now be "active" or "pending" (if not yet approved)
      // Either way, if they are NOT "disabled" anymore, we move them
      if (data && data.status !== "disabled") {
        router.push("/dashboard")
        router.refresh()
      }
    } catch (err) {
      console.error("Failed to check status:", err)
    } finally {
      // Small delay for UX
      setTimeout(() => setIsChecking(false), 800)
    }
  }

  // Auto-check in background every 30 seconds
  useEffect(() => {
    const interval = setInterval(checkStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/login")
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/10 rounded-full blur-[120px]" />

      <Card className="w-full max-w-lg bg-slate-900/50 border-slate-800 backdrop-blur-xl shadow-2xl relative z-10 border-t-red-500/50">
        <CardHeader className="space-y-1 text-center pb-2">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 bg-red-500/10 rounded-full flex items-center justify-center relative">
              <ShieldX className={`h-10 w-10 text-red-500 ${isChecking ? 'animate-pulse' : ''}`} />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-white">
            Account Disabled
          </CardTitle>
          <CardDescription className="text-slate-400 text-lg">
            Your access to this system has been restricted.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-6 space-y-4">
            <p className="text-slate-300 leading-relaxed text-center">
              This account has been disabled by an administrator. This could be due to a violation of our terms of service or a security concern. 
            </p>
            <p className="text-slate-400 text-sm text-center italic">
              If you believe this is a mistake, please contact support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button 
                variant="outline" 
                className="h-12 border-slate-700 hover:bg-slate-800 text-white gap-2 transition-all hover:border-slate-600 rounded-xl"
                onClick={checkStatus}
                disabled={isChecking}
            >
              <RefreshCw className={`h-4 w-4 ${isChecking ? 'animate-spin' : ''}`} />
              {isChecking ? "Checking..." : "Check Status"}
            </Button>
            
            <Button 
                variant="outline" 
                className="h-12 border-slate-700 hover:bg-slate-800 text-white gap-2 transition-all hover:border-slate-600 rounded-xl"
                asChild
            >
              <Link href="mailto:support@rahulsirclasses.com">
                <MessageSquare className="h-4 w-4" />
                Contact Support
              </Link>
            </Button>
            
            <Button 
                variant="ghost" 
                className="sm:col-span-2 h-12 text-slate-400 hover:text-white hover:bg-white/5 gap-2 rounded-xl"
                onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Log Out and Exit
            </Button>
          </div>

          <div className="text-center">
            <Link href="/" className="text-slate-500 hover:text-red-400 text-sm inline-flex items-center gap-1 transition-colors group">
              <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
