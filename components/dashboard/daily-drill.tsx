"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle, ArrowRight, Clock, Sparkles } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function DailyDrill() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const correctAnswer = "b"

  const handleSubmit = () => {
    if (selectedOption) {
      setIsSubmitted(true)
    }
  }

  return (
    <Card className="overflow-hidden border border-muted">
      <CardHeader className="pb-3 bg-muted/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="text-base sm:text-lg font-bold">Daily Grammar Drill</CardTitle>
          </div>
          <Badge variant="outline" className="flex items-center gap-1 text-xs">
            <Clock className="h-3 w-3" />
            <span>Daily</span>
          </Badge>
        </div>
        <CardDescription className="text-xs sm:text-sm">
          Complete your daily challenge to maintain your streak
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4 sm:pt-5 px-3 sm:px-6">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className="text-xs sm:text-sm font-medium">Identify the error in the following sentence:</div>
            <Badge variant="secondary" className="text-xs">
              Subject-Verb Agreement
            </Badge>
          </div>

          <div className="text-xs sm:text-sm italic bg-muted/40 p-2 sm:p-3 rounded-md border border-dashed">
            Neither the students nor the teacher <span className="underline font-medium text-foreground">were</span>{" "}
            aware of the change in schedule.
          </div>

          <RadioGroup
            value={selectedOption || ""}
            onValueChange={setSelectedOption}
            disabled={isSubmitted}
            className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2"
          >
            {[
              { value: "a", label: "Neither the students" },
              { value: "b", label: "were aware" },
              { value: "c", label: "of the change" },
              { value: "d", label: "in schedule" },
              { value: "e", label: "No error" },
            ].map((option) => (
              <div
                key={option.value}
                className={`flex items-center space-x-2 p-1.5 sm:p-2 rounded-md transition-colors ${
                  selectedOption === option.value ? "bg-muted/70" : "hover:bg-muted/30"
                }`}
              >
                <RadioGroupItem value={option.value} id={`option-${option.value}`} />
                <Label htmlFor={`option-${option.value}`} className="flex-1 cursor-pointer text-xs sm:text-sm">
                  {option.label}
                </Label>
                {isSubmitted && correctAnswer === option.value && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 10 }}
                  >
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                  </motion.div>
                )}
                {isSubmitted && selectedOption === option.value && correctAnswer !== option.value && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 10 }}
                  >
                    <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                  </motion.div>
                )}
              </div>
            ))}
          </RadioGroup>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 sm:mt-4 rounded-md bg-blue-50 dark:bg-blue-950/50 p-3 sm:p-4 text-xs sm:text-sm border border-blue-200 dark:border-blue-900"
            >
              <p className="font-medium text-blue-800 dark:text-blue-300 mb-1">Explanation:</p>
              <p className="text-blue-700 dark:text-blue-400">
                The verb should be "was" not "were." When using "neither/nor," the verb agrees with the noun closest to
                it (teacher), which is singular.
              </p>
            </motion.div>
          )}
        </div>
      </CardContent>

      <CardFooter className="bg-muted/30 border-t p-3 sm:p-6">
        <div className="w-full flex flex-col gap-2 sm:gap-3">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span>Progress:</span>
              <span className="font-medium">1/5</span>
              <span>questions</span>
            </div>
            <Progress value={20} className="h-1.5 w-16 sm:w-24" />
          </div>
          {!isSubmitted ? (
            <Button onClick={handleSubmit} disabled={!selectedOption} className="w-full text-xs sm:text-sm h-8 sm:h-10">
              Submit Answer
            </Button>
          ) : (
            <Button variant="default" className="w-full text-xs sm:text-sm h-8 sm:h-10">
              Next Question
              <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
