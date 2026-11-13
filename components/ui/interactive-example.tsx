"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Eye, EyeOff, Lightbulb, RotateCcw } from "lucide-react"

interface ExamplePart {
  text: string
  type:
    | "subject"
    | "verb"
    | "object"
    | "adjective"
    | "adverb"
    | "preposition"
    | "article"
    | "conjunction"
    | "pronoun"
    | "modifier"
    | "normal"
  explanation?: string
}

interface InteractiveExampleProps {
  title: string
  description: string
  parts: ExamplePart[]
  rule: string
  correctAnswer?: string
  incorrectExample?: {
    parts: ExamplePart[]
    explanation: string
  }
}

const typeColors = {
  subject: "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-200",
  verb: "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200",
  object: "bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900 dark:text-purple-200",
  adjective: "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900 dark:text-yellow-200",
  adverb: "bg-pink-100 text-pink-800 border-pink-300 dark:bg-pink-900 dark:text-pink-200",
  preposition: "bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900 dark:text-orange-200",
  article: "bg-red-100 text-red-800 border-red-300 dark:bg-red-900 dark:text-red-200",
  conjunction: "bg-teal-100 text-teal-800 border-teal-300 dark:bg-teal-900 dark:text-teal-200",
  pronoun: "bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-900 dark:text-indigo-200",
  modifier: "bg-cyan-100 text-cyan-800 border-cyan-300 dark:bg-cyan-900 dark:text-cyan-200",
  normal: "bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-800 dark:text-gray-200",
}

export function InteractiveExample({
  title,
  description,
  parts,
  rule,
  correctAnswer,
  incorrectExample,
}: InteractiveExampleProps) {
  const [showLabels, setShowLabels] = useState(false)
  const [selectedPart, setSelectedPart] = useState<number | null>(null)
  const [showIncorrect, setShowIncorrect] = useState(false)
  const [showRule, setShowRule] = useState(false)

  const resetExample = () => {
    setShowLabels(false)
    setSelectedPart(null)
    setShowIncorrect(false)
    setShowRule(false)
  }

  return (
    <Card className="p-4 space-y-4 border-2 border-dashed border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-950/30">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-blue-900 dark:text-blue-100">{title}</h4>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowLabels(!showLabels)} className="text-xs">
            {showLabels ? <EyeOff className="h-3 w-3 mr-1" /> : <Eye className="h-3 w-3 mr-1" />}
            {showLabels ? "Hide" : "Show"} Labels
          </Button>
          <Button variant="outline" size="sm" onClick={resetExample} className="text-xs">
            <RotateCcw className="h-3 w-3 mr-1" />
            Reset
          </Button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">{description}</p>

      {/* Correct Example */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <span className="text-sm font-medium text-green-700 dark:text-green-300">Correct Example:</span>
        </div>
        <div className="flex flex-wrap gap-1 p-3 bg-white dark:bg-gray-900 rounded-lg border">
          {parts.map((part, index) => (
            <span
              key={index}
              className={`
                px-2 py-1 rounded cursor-pointer transition-all duration-200 border
                ${showLabels && part.type !== "normal" ? typeColors[part.type] : "hover:bg-gray-100 dark:hover:bg-gray-800"}
                ${selectedPart === index ? "ring-2 ring-blue-500 scale-105" : ""}
              `}
              onClick={() => setSelectedPart(selectedPart === index ? null : index)}
            >
              {part.text}
              {showLabels && part.type !== "normal" && (
                <Badge variant="secondary" className="ml-1 text-xs">
                  {part.type}
                </Badge>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Selected Part Explanation */}
      {selectedPart !== null && parts[selectedPart].explanation && (
        <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-2">
            <Lightbulb className="h-4 w-4 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                "{parts[selectedPart].text}" ({parts[selectedPart].type})
              </p>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">{parts[selectedPart].explanation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Incorrect Example */}
      {incorrectExample && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium text-red-700 dark:text-red-300">Incorrect Example:</span>
            </div>
            <Button variant="outline" size="sm" onClick={() => setShowIncorrect(!showIncorrect)} className="text-xs">
              {showIncorrect ? "Hide" : "Show"} Mistake
            </Button>
          </div>

          {showIncorrect && (
            <>
              <div className="flex flex-wrap gap-1 p-3 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                {incorrectExample.parts.map((part, index) => (
                  <span
                    key={index}
                    className={`
                      px-2 py-1 rounded border
                      ${part.type === "normal" ? "bg-gray-100 dark:bg-gray-800" : typeColors[part.type]}
                    `}
                  >
                    {part.text}
                    {part.type !== "normal" && (
                      <Badge variant="secondary" className="ml-1 text-xs">
                        {part.type}
                      </Badge>
                    )}
                  </span>
                ))}
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-700 dark:text-red-300">
                  <strong>Why this is wrong:</strong> {incorrectExample.explanation}
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {/* Grammar Rule */}
      <div className="space-y-2">
        <Button variant="outline" size="sm" onClick={() => setShowRule(!showRule)} className="text-xs">
          <Lightbulb className="h-3 w-3 mr-1" />
          {showRule ? "Hide" : "Show"} Grammar Rule
        </Button>

        {showRule && (
          <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Rule:</strong> {rule}
            </p>
            {correctAnswer && (
              <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
                <strong>Answer:</strong> {correctAnswer}
              </p>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}
