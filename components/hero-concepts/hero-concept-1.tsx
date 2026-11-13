"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Sparkles, Star, ChevronDown, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Concept 1: Immersive Video Background with Floating Elements
export default function HeroConcept1() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900 text-white">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/grammar-hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full blur-sm"
            style={{
              width: `${Math.random() * 10 + 3}px`,
              height: `${Math.random() * 10 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px)`,
              transition: "transform 0.2s ease-out",
              opacity: Math.random() * 0.5 + 0.3,
              animationDuration: `${Math.random() * 10 + 15}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
            className="animate-float"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div
          className={`transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1.5 text-sm font-medium bg-white/10 backdrop-blur-sm text-white border-white/20 rounded-full inline-flex items-center"
          >
            <Sparkles className="h-3.5 w-3.5 mr-2" />
            Trusted by 10,000+ students
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Master</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              English Grammar
            </span>
            <span className="block mt-2">for Competitive Exams</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive preparation with personalized learning paths and expert-crafted content for competitive exams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center items-center">
            <Button
              size="lg"
              className="group relative overflow-hidden w-full sm:w-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25 border-0"
            >
              <span className="flex items-center relative z-10">
                Start Learning Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30"
            >
              Watch Demo
              <Play className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-1.5 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm font-medium ml-1 text-white/80">4.9/5 rating from 2,500+ reviews</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </div>

      {/* Exam logos */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-6 md:gap-12">
        {["CAT", "GMAT", "GRE", "IELTS"].map((exam) => (
          <div key={exam} className="text-white/50 text-sm font-semibold tracking-wider">
            {exam}
          </div>
        ))}
      </div>
    </section>
  )
}
