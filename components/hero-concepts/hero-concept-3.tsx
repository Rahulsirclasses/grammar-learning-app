"use client"

import { useState } from "react"
import { ArrowRight, Sparkles, CheckCircle, MessageCircle, PenTool, Zap, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Concept 3: Interactive Grammar Quiz with Animated Illustrations
export default function HeroConcept3() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const questions = [
    {
      text: "Which of the following sentences uses the correct article?",
      options: [
        "He is an university student.",
        "She bought a umbrella yesterday.",
        "I saw an elephant at the zoo.",
        "They visited a hour ago.",
      ],
      correctIndex: 2,
    },
    {
      text: "Which sentence demonstrates correct subject-verb agreement?",
      options: [
        "The team are playing well.",
        "The committee have decided.",
        "Politics are my favorite subject.",
        "The data shows interesting patterns.",
      ],
      correctIndex: 3,
    },
    {
      text: "Identify the sentence with the correct use of tenses:",
      options: [
        "I am working here since 2010.",
        "I have been working here since 2010.",
        "I work here since 2010.",
        "I had worked here since 2010.",
      ],
      correctIndex: 1,
    },
  ]

  const handleOptionClick = (index: number) => {
    setSelectedOption(index)
    setIsCorrect(index === questions[activeQuestion].correctIndex)
  }

  const handleNextQuestion = () => {
    setSelectedOption(null)
    setIsCorrect(null)
    setActiveQuestion((prev) => (prev + 1) % questions.length)
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-blue-950">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grammar elements and symbols */}
        <div className="absolute top-[10%] left-[5%] text-6xl text-blue-200/30 font-serif">"</div>
        <div className="absolute top-[15%] right-[8%] text-8xl text-purple-200/30 font-serif">.</div>
        <div className="absolute bottom-[30%] left-[12%] text-7xl text-pink-200/20 font-serif">;</div>
        <div className="absolute top-[50%] right-[15%] text-9xl text-green-200/20 font-serif">,</div>
        <div className="absolute bottom-[10%] right-[10%] text-6xl text-yellow-200/25 font-serif">!</div>
        <div className="absolute top-[30%] left-[25%] text-5xl text-cyan-200/20 font-serif">?</div>

        {/* Animated word stream */}
        <div className="absolute top-0 left-0 right-0 h-full flex flex-col justify-between opacity-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="whitespace-nowrap text-xs md:text-sm font-mono"
              style={{
                animation: `scrollText ${20 + Math.random() * 10}s linear infinite`,
                animationDirection: i % 2 === 0 ? "normal" : "reverse",
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              The quick brown fox jumps over the lazy dog. Grammar is the study of words, how they are used in
              sentences, and how they change in different situations. The syntax of a language is the set of rules that
              language uses to combine words to form phrases, clauses, and sentences.
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10 flex flex-col min-h-screen">
        <div className="text-center mb-10 md:mb-16">
          <Badge
            variant="outline"
            className="mb-6 px-4 py-2 text-sm font-medium border-primary/30 bg-primary/5 backdrop-blur-sm text-primary rounded-full inline-flex items-center"
          >
            <Sparkles className="h-3.5 w-3.5 mr-2" />
            Interactive Grammar Learning
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight max-w-4xl mx-auto">
            Master English Grammar
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 block mt-2">
              Through Interactive Practice
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Try our interactive approach to mastering grammar for competitive exams. Test your knowledge with a sample
            question below:
          </p>
        </div>

        {/* Interactive Quiz Section */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full">
          <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 mb-10 transform transition-all duration-500">
            {/* Question */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="px-3 py-1 bg-primary/5 text-primary">
                  Question {activeQuestion + 1}/{questions.length}
                </Badge>

                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="text-sm text-muted-foreground">Grammar Quiz</span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-2">{questions[activeQuestion].text}</h3>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {questions[activeQuestion].options.map((option, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                    selectedOption === idx
                      ? isCorrect
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : "border-red-500 bg-red-50 dark:bg-red-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:bg-primary/5"
                  }`}
                  onClick={() => selectedOption === null && handleOptionClick(idx)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        selectedOption === idx
                          ? isCorrect
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600"
                      }`}
                    >
                      {selectedOption === idx ? (
                        isCorrect ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <X className="h-4 w-4" />
                        )
                      ) : (
                        <span className="text-sm">{String.fromCharCode(65 + idx)}</span>
                      )}
                    </div>
                    <p
                      className={`text-base ${
                        selectedOption === idx
                          ? isCorrect
                            ? "text-green-700 dark:text-green-300 font-medium"
                            : "text-red-700 dark:text-red-300 font-medium"
                          : "text-foreground"
                      }`}
                    >
                      {option}
                    </p>
                  </div>

                  {selectedOption === idx && (
                    <div
                      className={`mt-3 ml-9 text-sm ${
                        isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {isCorrect
                        ? "Correct! This is the right answer."
                        : `Incorrect. The correct answer is: "${questions[activeQuestion].options[questions[activeQuestion].correctIndex]}"`}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Next button */}
            {selectedOption !== null && (
              <div className="flex justify-end">
                <Button onClick={handleNextQuestion} className="group">
                  Next Question
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Start Full Learning Path
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:border-primary/50 hover:bg-primary/5"
            >
              Explore Lessons
            </Button>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon={<Zap className="h-5 w-5 text-blue-500" />}
            title="Interactive Learning"
            description="Practice with interactive quizzes that adapt to your skill level"
          />
          <FeatureCard
            icon={<MessageCircle className="h-5 w-5 text-purple-500" />}
            title="Expert Feedback"
            description="Receive detailed explanations and feedback on your answers"
          />
          <FeatureCard
            icon={<PenTool className="h-5 w-5 text-pink-500" />}
            title="Practical Examples"
            description="Learn with real examples from actual competitive exams"
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function X({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  )
}
