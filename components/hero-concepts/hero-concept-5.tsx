"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, Star, BookOpen, CheckCircle, BarChart3, Trophy, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Concept 5: Morphing 3D Cards with Framer Motion
export default function HeroConcept5() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "Theory Lessons",
      description: "Comprehensive grammar lessons with clear explanations and examples",
      icon: <BookOpen className="h-8 w-8 text-white" />,
      color: "from-blue-500 to-blue-600",
      image: "/grammar-theory.jpg",
    },
    {
      title: "Practice Exercises",
      description: "Thousands of practice questions to reinforce your learning",
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      color: "from-purple-500 to-purple-600",
      image: "/grammar-practice.jpg",
    },
    {
      title: "Performance Analytics",
      description: "Track your progress and identify areas for improvement",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      color: "from-pink-500 to-pink-600",
      image: "/grammar-analytics.jpg",
    },
    {
      title: "Mock Tests",
      description: "Full-length mock tests that simulate the actual exam environment",
      icon: <Trophy className="h-8 w-8 text-white" />,
      color: "from-amber-500 to-amber-600",
      image: "/grammar-tests.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [features.length])

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge
                variant="outline"
                className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 bg-primary/5 backdrop-blur-sm text-primary rounded-full inline-flex items-center"
              >
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                Trusted by 10,000+ students
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                <span className="block">Master</span>
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-400 block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  English Grammar
                </motion.span>
                <span className="block mt-2">for Competitive Exams</span>
              </h1>

              <motion.p
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Comprehensive preparation with personalized learning paths and expert-crafted content for competitive
                exams.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
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
              </motion.div>

              <motion.div
                className="flex items-center gap-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm font-medium ml-1">4.9/5 rating</span>
              </motion.div>

              {/* Feature Tabs */}
              <motion.div
                className="mt-12 hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <h3 className="text-lg font-medium mb-4">Explore Our Features:</h3>
                <div className="flex space-x-3 mb-6">
                  {features.map((feature, idx) => (
                    <button
                      key={idx}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeFeature === idx
                          ? "bg-primary text-white"
                          : "bg-gray-100 dark:bg-gray-800 text-muted-foreground hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                      onClick={() => setActiveFeature(idx)}
                    >
                      {feature.title}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - 3D Card */}
          <div className="relative h-[450px] md:h-[500px] perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="absolute inset-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  {/* Card Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={features[activeFeature].image || "/placeholder.svg"}
                      alt={features[activeFeature].title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-80`}
                    ></div>
                  </div>

                  {/* Card Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="bg-white/20 backdrop-blur-lg p-5 rounded-xl inline-block">
                      <div
                        className={`h-16 w-16 rounded-lg bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center`}
                      >
                        {features[activeFeature].icon}
                      </div>
                    </div>

                    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                        {features[activeFeature].title}
                      </h3>
                      <p className="text-white/80 text-lg">{features[activeFeature].description}</p>

                      <div className="mt-6 flex items-center">
                        <div className="flex -space-x-3 mr-4">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="h-10 w-10 rounded-full border-2 border-white overflow-hidden relative"
                            >
                              <Image src={`/student${i + 4}-artwork.png`} alt="Student" fill className="object-cover" />
                            </div>
                          ))}
                        </div>
                        <div className="text-white/90 text-sm">
                          {Math.floor(Math.random() * 200) + 300} students learning this now
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3D effect elements */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
                  >
                    <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md p-3 rounded-full">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>

                    <div className="absolute bottom-28 right-8 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-medium">
                      Popular Choice
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Card reflections */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-200/50 to-transparent dark:from-gray-800/30 blur-sm transform -skew-y-3 -translate-y-5 opacity-40"></div>
          </div>
        </div>

        {/* Feature Selection (Mobile) */}
        <div className="mt-12 md:hidden">
          <h3 className="text-lg font-medium mb-4 text-center">Explore Our Features:</h3>
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, idx) => (
              <button
                key={idx}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFeature === idx
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-muted-foreground hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveFeature(idx)}
              >
                {feature.title}
              </button>
            ))}
          </div>
        </div>

        {/* Exam logos */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16">
          {["CAT", "GMAT", "GRE", "IELTS"].map((exam) => (
            <div key={exam} className="text-gray-400 dark:text-gray-500 text-xl font-bold tracking-wider">
              {exam}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
