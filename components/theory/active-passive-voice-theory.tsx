"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const ActivePassiveVoiceTheory = () => {
  const [activeTab, setActiveTab] = useState("essential")

  return (
    <div className="w-full">
      <div className="flex w-full items-center space-x-2">
        <Button
          variant={activeTab === "essential" ? "default" : "outline"}
          onClick={() => setActiveTab("essential")}
          className="flex-1 transition-all duration-200"
        >
          Essential
        </Button>
        <Button
          variant={activeTab === "tips" ? "default" : "outline"}
          onClick={() => setActiveTab("tips")}
          className="flex-1 transition-all duration-200"
        >
          Tips & Tricks
        </Button>
      </div>

      <div className="relative mt-4 min-h-[300px]">
        {activeTab === "essential" && (
          <div className="animate-in fade-in-0 duration-300 slide-in-from-bottom-2">
            <div className="p-6 rounded-lg border bg-card">
              <h2 className="text-xl font-semibold mb-4 text-violet-600">Essential Active and Passive Voice</h2>
              <p className="text-muted-foreground mb-4">
                Understand when and how to use active and passive voice effectively in your writing.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-medium text-green-800 dark:text-green-200 mb-2">Active Voice</h3>
                  <p className="text-sm text-green-700 dark:text-green-300 mb-2">Subject performs the action</p>
                  <p className="text-sm font-mono bg-white dark:bg-gray-800 p-2 rounded">
                    <span className="text-blue-600">The chef</span> <span className="text-red-600">cooked</span>{" "}
                    <span className="text-green-600">the meal</span>
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">Subject + Verb + Object</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Passive Voice</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">Subject receives the action</p>
                  <p className="text-sm font-mono bg-white dark:bg-gray-800 p-2 rounded">
                    <span className="text-green-600">The meal</span> <span className="text-red-600">was cooked</span>{" "}
                    <span className="text-blue-600">by the chef</span>
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                    Object + be + Past Participle + by + Subject
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "tips" && (
          <div className="animate-in fade-in-0 duration-300 slide-in-from-bottom-2">
            <div className="p-6 rounded-lg border bg-card">
              <h2 className="text-xl font-semibold mb-4 text-amber-600">Tips & Tricks for Voice Conversion</h2>
              <p className="text-muted-foreground mb-4">
                Master these techniques to quickly convert between active and passive voice.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                  <h3 className="font-medium text-amber-800 dark:text-amber-200 mb-2">🔄 Quick Conversion Steps</h3>
                  <ol className="text-sm text-amber-700 dark:text-amber-300 space-y-1 list-decimal list-inside">
                    <li>Identify the object in active voice (becomes subject in passive)</li>
                    <li>Use appropriate form of "be" + past participle</li>
                    <li>Add "by" + original subject (optional)</li>
                  </ol>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-2">📝 When to Use Passive</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
                    <li>When the doer is unknown or unimportant</li>
                    <li>In scientific writing for objectivity</li>
                    <li>To emphasize the action or result</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                  <h3 className="font-medium text-red-800 dark:text-red-200 mb-2">⚠️ Common Mistakes</h3>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
                    <li>Overusing passive voice (makes writing weak)</li>
                    <li>Forgetting to change verb tense correctly</li>
                    <li>Using passive with intransitive verbs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ActivePassiveVoiceTheory
