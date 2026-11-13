"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Sparkles, Star, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Concept 4: Parallax Scrolling with Animated Illustrations
export default function HeroConcept4() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const { top, height } = heroRef.current.getBoundingClientRect()
        const scrollPosition = Math.max(0, -top)
        const scrollProgress = Math.min(1, scrollPosition / (height / 2))
        setScrollY(scrollProgress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-white dark:bg-gray-900">
        {/* Scrolling Parallax Background */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${scrollY * 20}%)`,
            opacity: 1 - scrollY * 1.5,
            transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-purple-50/80 dark:from-blue-950 dark:to-purple-950"></div>

          {/* Grammar illustrations */}
          <div
            className="absolute top-[10%] left-[15%] w-80 h-80"
            style={{ transform: `translateY(${scrollY * -50}px) scale(${1 - scrollY * 0.2})` }}
          >
            <Image
              src="/grammar-illustration-1.svg"
              alt="Grammar Illustration"
              width={320}
              height={320}
              className="object-contain opacity-40 dark:opacity-20"
            />
          </div>

          <div
            className="absolute bottom-[20%] right-[10%] w-64 h-64"
            style={{ transform: `translateY(${scrollY * -80}px) scale(${1 - scrollY * 0.3})` }}
          >
            <Image
              src="/grammar-illustration-2.svg"
              alt="Grammar Illustration"
              width={250}
              height={250}
              className="object-contain opacity-30 dark:opacity-15"
            />
          </div>

          {/* Floating elements */}
          <div
            className="absolute top-[30%] right-[25%] w-20 h-20 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-2xl"
            style={{ transform: `translateY(${scrollY * -100}px) translateX(${scrollY * 50}px)` }}
          ></div>

          <div
            className="absolute bottom-[40%] left-[20%] w-32 h-32 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * -120}px) translateX(${scrollY * -70}px)` }}
          ></div>

          <div
            className="absolute top-[60%] left-[30%] w-24 h-24 bg-pink-500/15 dark:bg-pink-500/5 rounded-full blur-xl"
            style={{ transform: `translateY(${scrollY * -80}px) translateX(${scrollY * 30}px)` }}
          ></div>
        </div>

        {/* Content */}
        <div
          className="relative container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center z-10"
          style={{
            transform: `translateY(${scrollY * -15}%) scale(${1 - scrollY * 0.1})`,
            opacity: 1 - scrollY * 1.2,
          }}
        >
          <Badge
            variant="outline"
            className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 bg-primary/5 backdrop-blur-sm text-primary rounded-full inline-flex items-center"
          >
            <Sparkles className="h-3.5 w-3.5 mr-2" />
            Trusted by 10,000+ students
          </Badge>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="block">Master</span>
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-400">
                English Grammar
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 blur-3xl opacity-20 -z-10"></span>
            </span>
            <span className="block mt-2">for Competitive Exams</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive preparation with personalized learning paths and expert-crafted content for competitive exams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
            <Button size="lg" className="group relative overflow-hidden w-full sm:w-auto">
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

          <div className="flex items-center gap-1.5 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm font-medium ml-1">4.9/5 rating</span>
          </div>

          <div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
            style={{ opacity: Math.max(0, 1 - scrollY * 3) }}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
            <span className="sr-only">Scroll down</span>
          </div>
        </div>
      </section>

      {/* Content that appears as you scroll */}
      <section className="relative py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* First Content Block */}
          <div
            className="mb-24 opacity-0 transform translate-y-12 transition-all duration-700 ease-out"
            style={{
              opacity: Math.min(1, Math.max(0, (scrollY - 0.2) * 3)),
              transform: `translateY(${Math.max(0, (1 - scrollY * 2.5) * 50)}px)`,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Why Choose Our Platform?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureBlock
                title="Comprehensive Coverage"
                description="Master all grammar concepts required for competitive exams"
                color="blue"
                delay={0.2}
                scrollY={scrollY}
              />
              <FeatureBlock
                title="Interactive Learning"
                description="Learn through practice with instant feedback and explanations"
                color="purple"
                delay={0.4}
                scrollY={scrollY}
              />
              <FeatureBlock
                title="Expert Guidance"
                description="Content created by experienced educators and exam toppers"
                color="pink"
                delay={0.6}
                scrollY={scrollY}
              />
            </div>
          </div>

          {/* Second Content Block */}
          <div
            className="flex flex-col md:flex-row items-center gap-12 opacity-0 transform translate-y-12 transition-all duration-700 ease-out"
            style={{
              opacity: Math.min(1, Math.max(0, (scrollY - 0.5) * 2)),
              transform: `translateY(${Math.max(0, (1 - (scrollY - 0.3) * 2) * 50)}px)`,
            }}
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Excel in Your Exams?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join thousands of students who have improved their grammar skills and achieved success in competitive
                exams like CAT, GMAT, GRE, and IELTS.
              </p>
              <Button size="lg" className="group">
                <span className="flex items-center">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>

            <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-100/50 dark:border-blue-700/30">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="/sample-dashboard.jpg" alt="Platform Dashboard" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureBlock({ title, description, color, delay, scrollY }) {
  const getColor = (color) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-50 dark:bg-blue-900/20",
          border: "border-blue-100 dark:border-blue-800/30",
          text: "text-blue-600 dark:text-blue-400",
        }
      case "purple":
        return {
          bg: "bg-purple-50 dark:bg-purple-900/20",
          border: "border-purple-100 dark:border-purple-800/30",
          text: "text-purple-600 dark:text-purple-400",
        }
      case "pink":
        return {
          bg: "bg-pink-50 dark:bg-pink-900/20",
          border: "border-pink-100 dark:border-pink-800/30",
          text: "text-pink-600 dark:text-pink-400",
        }
      default:
        return {
          bg: "bg-blue-50 dark:bg-blue-900/20",
          border: "border-blue-100 dark:border-blue-800/30",
          text: "text-blue-600 dark:text-blue-400",
        }
    }
  }

  const colors = getColor(color)
  const threshold = 0.3 + delay
  const opacity = Math.min(1, Math.max(0, (scrollY - threshold) * 4))
  const translateY = Math.max(0, (1 - (scrollY - threshold) * 3) * 30)

  return (
    <div
      className={`p-6 rounded-xl border ${colors.bg} ${colors.border} transform transition-all duration-700 ease-out`}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <h3 className={`text-xl font-semibold mb-2 ${colors.text}`}>{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
