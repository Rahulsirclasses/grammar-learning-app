"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, ArrowRight, Sparkles } from "lucide-react"
import { toast } from "sonner"

export default function OnboardingPage() {
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/auth/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      })

      if (res.ok) {
        toast.success("Profile updated successfully!")
        router.push("/dashboard")
      } else {
        const data = await res.json()
        toast.error(data.error || "Failed to update profile")
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />

      <Card className="w-full max-w-md bg-slate-900/50 border-slate-800 backdrop-blur-xl shadow-2xl relative z-10">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Phone className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
            One Last Step <Sparkles className="h-5 w-5 text-yellow-400" />
          </CardTitle>
          <CardDescription className="text-slate-400">
            Please provide your phone number to complete your registration.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="relative">
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 10)
                    setPhone(val)
                  }}
                  className="bg-slate-950/50 border-slate-800 text-white placeholder:text-slate-500 pl-10 h-12"
                  disabled={loading}
                  required
                />
                <Phone className="absolute left-3 top-3.5 h-5 w-5 text-slate-500" />
              </div>
            </div>
            <Button 
                type="submit" 
                className="w-full h-12 text-lg font-semibold group transition-all"
                disabled={loading}
            >
              {loading ? "Updating..." : "Complete Setup"}
              {!loading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
