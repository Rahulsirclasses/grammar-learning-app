"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Sparkles, CheckCircle, Layers, BookText, Users, Book, FileText, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Concept 2: Split Screen with Interactive 3D Elements
export default function HeroConcept2() {
  const [activeFeature, setActiveFeature] = useState(0)
  const features = [
    {
      icon: <Book className="h-5 w-5" />,
      title: "Learn Grammar",
      description: "Master all essential grammar concepts required for competitive exams",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Practice Tests",
      description: "Take full-length mock tests that simulate actual exam environments",
    },
    {
      icon: <PenTool className="h-5 w-5" />,
      title: "Get Feedback",
      description: "Receive personalized feedback and identify areas for improvement",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [features.length])

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-gray-900">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 relative z-10">
          <div className="max-w-lg">
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 bg-primary/5 text-primary rounded-full inline-flex items-center"
            >
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              Trusted by 10,000+ students
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="block">Master</span>
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-cyan-500 animate-gradient-x">
                  English Grammar
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-cyan-500 blur-3xl opacity-20 -z-10"></span>
              </span>
              <span className="block mt-2">for Competitive Exams</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive preparation with personalized learning paths and expert-crafted content for competitive
              exams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Learning Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-primary/20 hover:border-primary/50 hover:bg-primary/5"
              >
                Explore Lessons
              </Button>
            </div>

            {/* Feature Tabs */}
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer flex items-start gap-3 ${activeFeature === idx ? "bg-primary/10 border-l-4 border-primary" : "bg-transparent hover:bg-primary/5 border-l-4 border-transparent"}`}
                  onClick={() => setActiveFeature(idx)}
                >
                  <div
                    className={`rounded-full p-2 ${activeFeature === idx ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - 3D Visual */}
        <div className="lg:flex items-center justify-center p-8 relative hidden">
          <div className="relative w-full max-w-md aspect-square">
            {/* 3D floating elements */}
            <div className="absolute inset-0 perspective-[800px]">
              <div
                className="absolute top-[10%] left-[10%] w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-xl animate-float"
                style={{ animationDelay: "0s", transform: "rotateX(10deg) rotateY(-10deg)" }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <BookText className="h-12 w-12" />
                </div>
              </div>

              <div
                className="absolute top-[40%] right-[5%] w-28 h-28 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl shadow-xl animate-float"
                style={{ animationDelay: "0.5s", transform: "rotateX(-5deg) rotateY(15deg)" }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <Layers className="h-10 w-10" />
                </div>
              </div>

              <div
                className="absolute bottom-[15%] left-[20%] w-36 h-36 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl shadow-xl animate-float"
                style={{ animationDelay: "1s", transform: "rotateX(15deg) rotateY(5deg)" }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <CheckCircle className="h-14 w-14" />
                </div>
              </div>

              <div
                className="absolute bottom-[40%] right-[25%] w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl shadow-xl animate-float"
                style={{ animationDelay: "1.5s", transform: "rotateX(-10deg) rotateY(-5deg)" }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <Users className="h-9 w-9" />
                </div>
              </div>

              {/* Center sphere */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg animate-pulse"
                style={{ animationDuration: "6s" }}
              >
                <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <span className="text-3xl font-bold">G</span>
                </div>

                {/* Orbiting particles */}
                <div className="absolute inset-[-100%] animate-orbit" style={{ animationDuration: "12s" }}>
                  <div className="absolute top-1/2 left-0 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
                </div>
                <div
                  className="absolute inset-[-75%] animate-orbit"
                  style={{ animationDuration: "8s", animationDirection: "reverse" }}
                >
                  <div className="absolute top-1/2 left-0 w-3 h-3 bg-purple-500 rounded-full shadow-lg"></div>
                </div>
                <div className="absolute inset-[-125%] animate-orbit" style={{ animationDuration: "15s" }}>
                  <div className="absolute top-1/2 left-0 w-5 h-5 bg-pink-500 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
