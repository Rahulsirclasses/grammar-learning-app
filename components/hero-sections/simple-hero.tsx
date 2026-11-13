"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, CheckCircle, BarChart3, Play, Sparkles, Star, Users, Trophy, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SimpleHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    { icon: BookOpen, text: "50+ Grammar Topics", color: "text-blue-500" },
    { icon: CheckCircle, text: "1000+ Practice Questions", color: "text-green-500" },
    { icon: BarChart3, text: "Detailed Analytics", color: "text-purple-500" },
    { icon: Trophy, text: "Mock Tests", color: "text-amber-500" },
  ]

  const stats = [
    { number: "10,000+", label: "Students", icon: Users },
    { number: "95%", label: "Success Rate", icon: Trophy },
    { number: "4.9/5", label: "Rating", icon: Star },
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [features.length])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 z-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500/10 rounded-full animate-float"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div
            className={`transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Trusted by 10,000+ students
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-gray-900 dark:text-white">Master</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                English Grammar
              </span>
              <span className="block text-gray-900 dark:text-white">for Success</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Transform your grammar skills with our comprehensive platform designed for
              <span className="font-semibold text-blue-600 dark:text-blue-400"> competitive exam success</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center">
                    Start Learning Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Button>
              </Link>

              <Link href="/theory">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-300 w-full sm:w-auto"
                >
                  <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Animated feature highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 p-3 rounded-lg transition-all duration-500 ${
                      activeFeature === idx
                        ? "bg-white/80 dark:bg-gray-800/80 shadow-md scale-105"
                        : "bg-white/40 dark:bg-gray-800/40 hover:bg-white/60 dark:hover:bg-gray-800/60"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${feature.color} transition-transform duration-300 ${activeFeature === idx ? "scale-110" : ""}`}
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature.text}</span>
                  </div>
                )
              })}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                      <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900 dark:text-white">{stat.number}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Visual */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {/* Main image container */}
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl transform scale-110"></div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <Image
                  src="/hero-student-image.png"
                  alt="Student learning grammar"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/20 animate-float z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Live Learning</span>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/20 animate-float z-10"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Quick Progress</span>
                </div>
              </div>

              {/* Exam badges */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {["CAT", "GMAT", "GRE", "IELTS"].map((exam) => (
                  <span
                    key={exam}
                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full shadow-md border border-white/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300"
                  >
                    {exam}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 -right-8 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 blur-xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
