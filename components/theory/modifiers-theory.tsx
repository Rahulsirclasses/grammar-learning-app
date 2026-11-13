import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, AlertTriangle, Lightbulb, BookOpen, FileText } from "lucide-react"

export function ModifiersTheory() {
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600">Modifiers</CardTitle>
        <CardDescription>
          Master the art of using modifiers to enhance clarity, precision, and effectiveness in your writing
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="explanation">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="explanation" className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Explanation</span>
            </TabsTrigger>
            <TabsTrigger value="examples" className="flex items-center gap-1">
              <FileText className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Examples</span>
            </TabsTrigger>
            <TabsTrigger value="shortcuts" className="flex items-center gap-1">
              <Lightbulb className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Shortcuts</span>
            </TabsTrigger>
            <TabsTrigger value="mistakes" className="flex items-center gap-1">
              <AlertTriangle className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Common Mistakes</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="explanation" className="space-y-4 mt-4">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600">Understanding Modifiers</h3>
              <p className="text-base leading-relaxed">
                Modifiers are words, phrases, or clauses that provide additional information about other elements in a
                sentence. They describe, clarify, limit, or qualify nouns, verbs, adjectives, adverbs, or entire
                sentences. Proper use of modifiers is essential for clear, precise, and effective communication.
              </p>

              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold mb-3">Core Functions of Modifiers</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Descriptive Function</h5>
                    <p className="text-sm">Add vivid details and characteristics</p>
                    <p className="text-sm italic">
                      The <span className="text-blue-600 font-semibold">ancient oak</span> tree stood majestically.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Limiting Function</h5>
                    <p className="text-sm">Restrict or specify meaning</p>
                    <p className="text-sm italic">
                      <span className="text-blue-600 font-semibold">Only three</span> students passed the exam.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Clarifying Function</h5>
                    <p className="text-sm">Remove ambiguity and add precision</p>
                    <p className="text-sm italic">
                      The meeting <span className="text-blue-600 font-semibold">scheduled for tomorrow</span> is
                      crucial.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Intensifying Function</h5>
                    <p className="text-sm">Strengthen or weaken the meaning</p>
                    <p className="text-sm italic">
                      She was <span className="text-blue-600 font-semibold">extremely</span> pleased with the results.
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-6">Comprehensive Types of Modifiers</h4>

              <div className="space-y-4">
                <div className="pl-6 border-l-4 border-blue-200 dark:border-blue-800">
                  <h5 className="font-semibold text-lg">1. Single-Word Modifiers</h5>

                  <div className="mt-3 space-y-3">
                    <div>
                      <h6 className="font-medium">Adjectives (Modify Nouns and Pronouns)</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Answer questions: Which one? What kind? How many? Whose?
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Descriptive:</span> beautiful, tall,
                          intelligent, ancient
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Limiting:</span> this, that, three, several,
                          my, your
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Proper:</span> American, Shakespearean,
                          Victorian
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Compound:</span> well-known, state-of-the-art,
                          twenty-year-old
                        </p>
                      </div>
                    </div>

                    <div>
                      <h6 className="font-medium">Adverbs (Modify Verbs, Adjectives, Other Adverbs)</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Answer questions: How? When? Where? To what extent? How often?
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Manner:</span> quickly, carefully,
                          beautifully, efficiently
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Time:</span> yesterday, soon, always,
                          frequently, never
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Place:</span> here, there, everywhere,
                          upstairs, nearby
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Degree:</span> very, extremely, quite, rather,
                          too, enough
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-green-200 dark:border-green-800">
                  <h5 className="font-semibold text-lg">2. Phrase Modifiers</h5>

                  <div className="mt-3 space-y-3">
                    <div>
                      <h6 className="font-medium">Prepositional Phrases</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Begin with prepositions and function as adjectives or adverbs
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">As adjectives:</span> The book{" "}
                          <span className="underline">on the shelf</span> is mine.
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">As adverbs:</span> She arrived{" "}
                          <span className="underline">at midnight</span>.
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Multiple functions:</span> The student{" "}
                          <span className="underline">in the front row</span> raised her hand{" "}
                          <span className="underline">with enthusiasm</span>.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h6 className="font-medium">Participial Phrases</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Begin with present (-ing) or past (-ed) participles, function as adjectives
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Present participle:</span>{" "}
                          <span className="underline">Running through the park</span>, she felt energized.
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Past participle:</span>{" "}
                          <span className="underline">Exhausted by the journey</span>, he fell asleep immediately.
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Perfect participle:</span>{" "}
                          <span className="underline">Having completed the project</span>, they celebrated.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h6 className="font-medium">Infinitive Phrases</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Begin with "to" + base verb, can function as adjectives or adverbs
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">As adjectives:</span> She has a desire{" "}
                          <span className="underline">to succeed</span>.
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">As adverbs:</span> He studied hard{" "}
                          <span className="underline">to pass the exam</span>.
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Purpose/reason:</span> They arrived early{" "}
                          <span className="underline">to get good seats</span>.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h6 className="font-medium">Gerund Phrases (as Modifiers)</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        When gerund phrases function as adjectives (less common)
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Descriptive:</span> His hobby of{" "}
                          <span className="underline">collecting stamps</span> is expensive.
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Identifying:</span> The art of{" "}
                          <span className="underline">public speaking</span> requires practice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-purple-200 dark:border-purple-800">
                  <h5 className="font-semibold text-lg">3. Clause Modifiers</h5>

                  <div className="mt-3 space-y-3">
                    <div>
                      <h6 className="font-medium">Adjective Clauses (Relative Clauses)</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Begin with relative pronouns (who, whom, whose, which, that) or relative adverbs (when, where,
                        why)
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Restrictive:</span> The student{" "}
                          <span className="underline">who studies hard</span> will succeed.
                        </p>
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Non-restrictive:</span> My brother,{" "}
                          <span className="underline">who lives in Paris</span>, is visiting.
                        </p>
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">With relative adverbs:</span> This is the
                          place <span className="underline">where we met</span>.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h6 className="font-medium">Adverb Clauses</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Begin with subordinating conjunctions, modify verbs, adjectives, or adverbs
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Time:</span>{" "}
                          <span className="underline">When the bell rings</span>, class begins.
                        </p>
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Condition:</span>{" "}
                          <span className="underline">If it rains</span>, we'll stay inside.
                        </p>
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Cause:</span>{" "}
                          <span className="underline">Because she studied</span>, she passed the test.
                        </p>
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Contrast:</span>{" "}
                          <span className="underline">Although it was late</span>, they continued working.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-6">Critical Placement Principles</h4>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h5 className="font-semibold mb-3">The Proximity Principle</h5>
                <p className="text-sm mb-3">
                  Place modifiers as close as possible to the words they modify to ensure clarity and prevent ambiguity.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h6 className="font-medium text-red-600">Problematic Placement</h6>
                    <p className="text-sm">
                      The professor discussed the problem with the students that was bothering him.
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      (Were the students bothering him, or was the problem bothering him?)
                    </p>
                  </div>
                  <div>
                    <h6 className="font-medium text-green-600">Clear Placement</h6>
                    <p className="text-sm">
                      The professor discussed with the students the problem that was bothering him.
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      (Now it's clear that the problem was bothering him)
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-6">Advanced Modifier Concepts</h4>

              <div className="space-y-4">
                <div className="pl-6 border-l-4 border-orange-200 dark:border-orange-800">
                  <h5 className="font-semibold">Restrictive vs. Non-Restrictive Modifiers</h5>
                  <div className="mt-3 space-y-2">
                    <div>
                      <h6 className="font-medium">Restrictive (Essential) Modifiers</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Essential to the meaning; no commas used
                      </p>
                      <p className="text-sm italic">
                        Students <span className="text-orange-600 font-semibold">who study regularly</span> perform
                        better.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        (Only students who study regularly, not all students)
                      </p>
                    </div>
                    <div>
                      <h6 className="font-medium">Non-Restrictive (Non-Essential) Modifiers</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Additional information; set off by commas
                      </p>
                      <p className="text-sm italic">
                        The students, <span className="text-orange-600 font-semibold">who are very dedicated</span>,
                        study regularly.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        (All students are dedicated and study regularly)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-teal-200 dark:border-teal-800">
                  <h5 className="font-semibold">Coordinate vs. Cumulative Adjectives</h5>
                  <div className="mt-3 space-y-2">
                    <div>
                      <h6 className="font-medium">Coordinate Adjectives</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Equal in rank; can be separated by "and" or rearranged
                      </p>
                      <p className="text-sm italic">
                        She wore a <span className="text-teal-600 font-semibold">beautiful, elegant</span> dress.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        (Test: "beautiful and elegant" or "elegant, beautiful" both work)
                      </p>
                    </div>
                    <div>
                      <h6 className="font-medium">Cumulative Adjectives</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Build upon each other; cannot be rearranged or separated by "and"
                      </p>
                      <p className="text-sm italic">
                        He bought a <span className="text-teal-600 font-semibold">small red sports</span> car.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        (Test: "small and red and sports" doesn't work naturally)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 mt-6">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Mastery Principle</AlertTitle>
                <AlertDescription>
                  Effective use of modifiers requires understanding not just what they are, but how their placement
                  affects meaning, emphasis, and clarity. The key is to ensure that every modifier clearly and
                  unambiguously relates to its intended target, creating precise and elegant communication.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-4 mt-4">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600">Comprehensive Modifier Examples</h3>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Single-Word Modifiers in Context</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-blue-600">Adjectives Modifying Nouns</h5>
                    <div className="grid gap-3 md:grid-cols-2 mt-2">
                      <div className="space-y-1">
                        <p className="text-sm">
                          • The <span className="text-blue-600 font-semibold">brilliant</span> scientist made a
                          breakthrough.
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Several</span> students submitted their
                          projects early.
                        </p>
                        <p className="text-sm">
                          • The <span className="text-blue-600 font-semibold">first three</span> candidates were
                          interviewed.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm">
                          • Her <span className="text-blue-600 font-semibold">innovative</span> approach impressed
                          everyone.
                        </p>
                        <p className="text-sm">
                          • The <span className="text-blue-600 font-semibold">ancient, weathered</span> building stood
                          majestically.
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">This particular</span> method works best.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-green-600">Adverbs Modifying Verbs</h5>
                    <div className="grid gap-3 md:grid-cols-2 mt-2">
                      <div className="space-y-1">
                        <p className="text-sm">
                          • She spoke <span className="text-green-600 font-semibold">eloquently</span> about the issue.
                        </p>
                        <p className="text-sm">
                          • The team worked <span className="text-green-600 font-semibold">tirelessly</span> on the
                          project.
                        </p>
                        <p className="text-sm">
                          • He <span className="text-green-600 font-semibold">carefully</span> examined the evidence.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm">
                          • They <span className="text-green-600 font-semibold">frequently</span> meet for discussions.
                        </p>
                        <p className="text-sm">
                          • The plan was <span className="text-green-600 font-semibold">successfully</span> implemented.
                        </p>
                        <p className="text-sm">
                          • She <span className="text-green-600 font-semibold">never</span> misses a deadline.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-purple-600">Adverbs Modifying Adjectives and Other Adverbs</h5>
                    <div className="grid gap-3 md:grid-cols-2 mt-2">
                      <div className="space-y-1">
                        <p className="text-sm">
                          • The test was <span className="text-purple-600 font-semibold">extremely</span> challenging.
                        </p>
                        <p className="text-sm">
                          • She is <span className="text-purple-600 font-semibold">remarkably</span> talented.
                        </p>
                        <p className="text-sm">
                          • The solution is <span className="text-purple-600 font-semibold">quite</span> simple.
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm">
                          • He spoke <span className="text-purple-600 font-semibold">very</span> clearly.
                        </p>
                        <p className="text-sm">
                          • They arrived <span className="text-purple-600 font-semibold">surprisingly</span> early.
                        </p>
                        <p className="text-sm">
                          • The project was <span className="text-purple-600 font-semibold">almost</span> complete.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold mb-4">Phrase Modifiers in Professional Writing</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-blue-600">Prepositional Phrases</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • The report <span className="text-blue-600 font-semibold">on market trends</span> was
                        comprehensive.
                      </p>
                      <p className="text-sm">
                        • She presented her findings{" "}
                        <span className="text-blue-600 font-semibold">with great confidence</span>.
                      </p>
                      <p className="text-sm">
                        • The meeting <span className="text-blue-600 font-semibold">in the conference room</span> lasted
                        three hours.
                      </p>
                      <p className="text-sm">
                        • They discussed the proposal <span className="text-blue-600 font-semibold">during lunch</span>.
                      </p>
                      <p className="text-sm">
                        • The company <span className="text-blue-600 font-semibold">with the best offer</span> won the
                        contract.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-green-600">Participial Phrases</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • <span className="text-green-600 font-semibold">Impressed by the presentation</span>, the board
                        approved the budget.
                      </p>
                      <p className="text-sm">
                        • The CEO, <span className="text-green-600 font-semibold">speaking at the conference</span>,
                        outlined the company's vision.
                      </p>
                      <p className="text-sm">
                        • <span className="text-green-600 font-semibold">Having completed the analysis</span>, the team
                        submitted their recommendations.
                      </p>
                      <p className="text-sm">
                        • The document, <span className="text-green-600 font-semibold">revised multiple times</span>,
                        was finally approved.
                      </p>
                      <p className="text-sm">
                        • <span className="text-green-600 font-semibold">Working late into the night</span>, they
                        finished the project on time.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-purple-600">Infinitive Phrases</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • She has the ability <span className="text-purple-600 font-semibold">to lead effectively</span>
                        .
                      </p>
                      <p className="text-sm">
                        • The team worked overtime{" "}
                        <span className="text-purple-600 font-semibold">to meet the deadline</span>.
                      </p>
                      <p className="text-sm">
                        • His decision <span className="text-purple-600 font-semibold">to resign</span> surprised
                        everyone.
                      </p>
                      <p className="text-sm">
                        • They arrived early{" "}
                        <span className="text-purple-600 font-semibold">to prepare for the presentation</span>.
                      </p>
                      <p className="text-sm">
                        • The plan <span className="text-purple-600 font-semibold">to expand internationally</span> was
                        ambitious.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="text-lg font-semibold mb-4">Clause Modifiers in Complex Sentences</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-green-600">Adjective Clauses (Relative Clauses)</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • The employee{" "}
                        <span className="text-green-600 font-semibold">who submitted the best proposal</span> received a
                        promotion.
                      </p>
                      <p className="text-sm">
                        • The project,{" "}
                        <span className="text-green-600 font-semibold">which took six months to complete</span>,
                        exceeded expectations.
                      </p>
                      <p className="text-sm">
                        • This is the strategy{" "}
                        <span className="text-green-600 font-semibold">that will ensure our success</span>.
                      </p>
                      <p className="text-sm">
                        • The manager,{" "}
                        <span className="text-green-600 font-semibold">whose experience spans two decades</span>,
                        provided valuable insights.
                      </p>
                      <p className="text-sm">
                        • The conference room{" "}
                        <span className="text-green-600 font-semibold">where we held the meeting</span> was
                        well-equipped.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-blue-600">Adverb Clauses</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • <span className="text-blue-600 font-semibold">When the market opened</span>, stock prices
                        surged.
                      </p>
                      <p className="text-sm">
                        • The team will proceed{" "}
                        <span className="text-blue-600 font-semibold">as soon as they receive approval</span>.
                      </p>
                      <p className="text-sm">
                        • <span className="text-blue-600 font-semibold">Because the data was incomplete</span>, they
                        postponed the decision.
                      </p>
                      <p className="text-sm">
                        • <span className="text-blue-600 font-semibold">Although the budget was tight</span>, they
                        managed to complete the project.
                      </p>
                      <p className="text-sm">
                        • The company will expand{" "}
                        <span className="text-blue-600 font-semibold">provided that the funding is secured</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h4 className="text-lg font-semibold mb-4">Modifier Placement: Before and After Corrections</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-red-600">Dangling Modifiers - Corrected</h5>
                    <div className="grid gap-4 md:grid-cols-2 mt-2">
                      <div>
                        <p className="text-sm font-medium">Incorrect:</p>
                        <p className="text-sm text-red-600">Walking through the park, the flowers were beautiful.</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Correct:</p>
                        <p className="text-sm text-green-600">
                          Walking through the park, I admired the beautiful flowers.
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 mt-3">
                      <div>
                        <p className="text-sm font-medium">Incorrect:</p>
                        <p className="text-sm text-red-600">Having finished the report, the printer malfunctioned.</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Correct:</p>
                        <p className="text-sm text-green-600">
                          Having finished the report, she discovered the printer had malfunctioned.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-orange-600">Misplaced Modifiers - Corrected</h5>
                    <div className="grid gap-4 md:grid-cols-2 mt-2">
                      <div>
                        <p className="text-sm font-medium">Incorrect:</p>
                        <p className="text-sm text-red-600">She served cookies to the children on paper plates.</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Correct:</p>
                        <p className="text-sm text-green-600">She served cookies on paper plates to the children.</p>
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 mt-3">
                      <div>
                        <p className="text-sm font-medium">Incorrect:</p>
                        <p className="text-sm text-red-600">
                          The professor discussed the problem with the students that was bothering him.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Correct:</p>
                        <p className="text-sm text-green-600">
                          The professor discussed with the students the problem that was bothering him.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-purple-600">Squinting Modifiers - Clarified</h5>
                    <div className="grid gap-4 md:grid-cols-2 mt-2">
                      <div>
                        <p className="text-sm font-medium">Ambiguous:</p>
                        <p className="text-sm text-red-600">Students who study diligently often get good grades.</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Clear:</p>
                        <p className="text-sm text-green-600">Students who often study diligently get good grades.</p>
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 mt-3">
                      <div>
                        <p className="text-sm font-medium">Ambiguous:</p>
                        <p className="text-sm text-red-600">The manager said yesterday he would review the proposal.</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Clear:</p>
                        <p className="text-sm text-green-600">
                          Yesterday, the manager said he would review the proposal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 className="text-lg font-semibold mb-4">Advanced Modifier Combinations</h4>

                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-purple-600">Multiple Modifiers Working Together</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • The{" "}
                        <span className="text-purple-600 font-semibold">
                          highly experienced, internationally recognized
                        </span>{" "}
                        consultant provided <span className="text-purple-600 font-semibold">extremely valuable</span>{" "}
                        insights{" "}
                        <span className="text-purple-600 font-semibold">during the strategic planning session</span>.
                      </p>
                      <p className="text-sm">
                        • <span className="text-purple-600 font-semibold">Working tirelessly through the night</span>,
                        the dedicated team <span className="text-purple-600 font-semibold">successfully</span> completed
                        the <span className="text-purple-600 font-semibold">critically important</span> project{" "}
                        <span className="text-purple-600 font-semibold">that would determine the company's future</span>
                        .
                      </p>
                      <p className="text-sm">
                        • The <span className="text-purple-600 font-semibold">newly appointed</span> CEO,{" "}
                        <span className="text-purple-600 font-semibold">
                          who had previously led several successful startups
                        </span>
                        , <span className="text-purple-600 font-semibold">confidently</span> presented the{" "}
                        <span className="text-purple-600 font-semibold">ambitious five-year expansion plan</span>.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-blue-600">Layered Modification for Precision</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • The <span className="text-blue-600 font-semibold">meticulously researched</span> report,{" "}
                        <span className="text-blue-600 font-semibold">
                          which analyzed market trends over the past decade
                        </span>
                        , <span className="text-blue-600 font-semibold">clearly</span> demonstrated the need{" "}
                        <span className="text-blue-600 font-semibold">for immediate strategic adjustments</span>.
                      </p>
                      <p className="text-sm">
                        • <span className="text-blue-600 font-semibold">Despite facing numerous challenges</span>, the{" "}
                        <span className="text-blue-600 font-semibold">remarkably resilient</span> team{" "}
                        <span className="text-blue-600 font-semibold">consistently</span> delivered{" "}
                        <span className="text-blue-600 font-semibold">high-quality results</span>{" "}
                        <span className="text-blue-600 font-semibold">that exceeded client expectations</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="shortcuts" className="space-y-4 mt-4">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600">Strategic Approaches to Modifier Mastery</h3>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h4 className="flex items-center text-lg font-semibold mb-4">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                  The CLEAR Method for Modifier Analysis
                </h4>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                  <div className="text-center">
                    <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold text-yellow-800 dark:text-yellow-200">C</span>
                    </div>
                    <h5 className="font-semibold">Clarify</h5>
                    <p className="text-sm">What does the modifier describe?</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold text-yellow-800 dark:text-yellow-200">L</span>
                    </div>
                    <h5 className="font-semibold">Locate</h5>
                    <p className="text-sm">Where is the target word?</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold text-yellow-800 dark:text-yellow-200">E</span>
                    </div>
                    <h5 className="font-semibold">Evaluate</h5>
                    <p className="text-sm">Is the placement logical?</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold text-yellow-800 dark:text-yellow-200">A</span>
                    </div>
                    <h5 className="font-semibold">Adjust</h5>
                    <p className="text-sm">Move if necessary for clarity</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold text-yellow-800 dark:text-yellow-200">R</span>
                    </div>
                    <h5 className="font-semibold">Review</h5>
                    <p className="text-sm">Check for ambiguity</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Quick Identification Strategies</h4>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="pl-6 border-l-4 border-blue-200 dark:border-blue-800">
                    <h5 className="font-semibold text-blue-600">The Question Method</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Ask specific questions to identify modifier types and functions:
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • <span className="font-medium">Which one?</span> → Adjective modifier
                      </li>
                      <li>
                        • <span className="font-medium">What kind?</span> → Descriptive adjective
                      </li>
                      <li>
                        • <span className="font-medium">How many?</span> → Quantifying adjective
                      </li>
                      <li>
                        • <span className="font-medium">How?</span> → Adverb of manner
                      </li>
                      <li>
                        • <span className="font-medium">When?</span> → Adverb of time
                      </li>
                      <li>
                        • <span className="font-medium">Where?</span> → Adverb of place
                      </li>
                      <li>
                        • <span className="font-medium">To what extent?</span> → Adverb of degree
                      </li>
                    </ul>
                  </div>

                  <div className="pl-6 border-l-4 border-green-200 dark:border-green-800">
                    <h5 className="font-semibold text-green-600">The Substitution Test</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Replace modifiers to test their function and placement:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="font-medium">Original:</p>
                        <p>
                          The student <span className="text-green-600">who studies hard</span> will succeed.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Test:</p>
                        <p>
                          The student <span className="text-green-600">[that works diligently]</span> will succeed.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Result:</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          If substitution works, placement is correct.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-purple-200 dark:border-purple-800">
                  <h5 className="font-semibold text-purple-600">The Proximity Check</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Use visual and logical proximity to verify modifier placement:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mt-2">
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Step 1:</span> Identify the modifier
                      </p>
                      <p>
                        <span className="font-medium">Step 2:</span> Draw an arrow to what it modifies
                      </p>
                      <p>
                        <span className="font-medium">Step 3:</span> Check if the arrow crosses other sentence elements
                      </p>
                      <p>
                        <span className="font-medium">Step 4:</span> If yes, consider repositioning
                      </p>
                    </div>
                    <div className="mt-3 p-3 bg-white dark:bg-gray-700 rounded">
                      <p className="text-sm font-medium">Example:</p>
                      <p className="text-sm">
                        The professor discussed the problem with the students{" "}
                        <span className="text-purple-600 underline">that was bothering him</span>.
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Arrow from "that was bothering him" crosses "students" to reach "problem" → Needs repositioning
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold mb-4">Competitive Exam Strategies</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-blue-600">Error Spotting Approach</h5>
                    <div className="grid gap-4 md:grid-cols-2 mt-2">
                      <div>
                        <h6 className="font-medium">High-Priority Checks</h6>
                        <ul className="space-y-1 text-sm">
                          <li>• Introductory participial phrases</li>
                          <li>• Limiting modifiers (only, just, nearly)</li>
                          <li>• Relative clause placement</li>
                          <li>• Prepositional phrase ambiguity</li>
                          <li>• Comparative modifier errors</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium">Quick Elimination Technique</h6>
                        <ul className="space-y-1 text-sm">
                          <li>• Scan for -ing and -ed phrases first</li>
                          <li>• Check subject-modifier agreement</li>
                          <li>• Look for "which" vs. "that" errors</li>
                          <li>• Identify squinting modifiers</li>
                          <li>• Verify logical modification</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-green-600">Sentence Correction Strategy</h5>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">1. Identify the core sentence:</span> Subject + Verb + Object
                      </p>
                      <p>
                        <span className="font-medium">2. Map all modifiers:</span> What does each one modify?
                      </p>
                      <p>
                        <span className="font-medium">3. Check logical relationships:</span> Do the connections make
                        sense?
                      </p>
                      <p>
                        <span className="font-medium">4. Test alternative placements:</span> Would moving improve
                        clarity?
                      </p>
                      <p>
                        <span className="font-medium">5. Verify no new errors:</span> Does the correction create other
                        problems?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="text-lg font-semibold mb-4">Advanced Decision-Making Framework</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-green-600">The Hierarchy of Modifier Placement</h5>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Priority 1:</span> Avoid dangling modifiers (ensure logical
                        subject)
                      </p>
                      <p>
                        <span className="font-medium">Priority 2:</span> Minimize distance between modifier and target
                      </p>
                      <p>
                        <span className="font-medium">Priority 3:</span> Eliminate ambiguity (squinting modifiers)
                      </p>
                      <p>
                        <span className="font-medium">Priority 4:</span> Maintain natural sentence flow
                      </p>
                      <p>
                        <span className="font-medium">Priority 5:</span> Consider emphasis and style
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-blue-600">Context-Dependent Decisions</h5>
                    <div className="grid gap-4 md:grid-cols-2 mt-2">
                      <div>
                        <h6 className="font-medium">Formal Writing</h6>
                        <ul className="space-y-1 text-sm">
                          <li>• Strict adherence to placement rules</li>
                          <li>• Avoid all ambiguity</li>
                          <li>• Use restrictive clauses precisely</li>
                          <li>• Maintain parallel structure</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium">Conversational Style</h6>
                        <ul className="space-y-1 text-sm">
                          <li>• Some flexibility allowed</li>
                          <li>• Context can clarify meaning</li>
                          <li>• Emphasis may override strict rules</li>
                          <li>• Natural flow prioritized</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Master Strategy</AlertTitle>
                <AlertDescription>
                  The key to modifier mastery is developing an automatic mental checklist: What does this modify? Where
                  is the target? Is the relationship clear? Could this be interpreted differently? This systematic
                  approach will help you identify and correct modifier errors quickly and accurately in any context.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="mistakes" className="space-y-4 mt-4">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600">Comprehensive Modifier Error Analysis</h3>

              <div className="bg-red-50 dark:bg-red-950 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="flex items-center text-lg font-semibold mb-4">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                  Critical Modifier Errors in Competitive Exams
                </h4>
                <p className="text-sm">
                  These modifier errors appear frequently in standardized tests and can significantly impact sentence
                  meaning and clarity.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold">1. Dangling Modifiers - The Most Common Error</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Dangling modifiers occur when the word being modified is missing from the sentence or when the
                    modifier doesn't logically relate to the subject of the main clause.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-red-600">Dangling Participial Phrases</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Incorrect Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • <span className="text-red-600">Walking through the forest</span>, the trees were
                              magnificent.
                            </li>
                            <li>
                              • <span className="text-red-600">Having finished the exam</span>, the celebration began.
                            </li>
                            <li>
                              • <span className="text-red-600">Driving to work</span>, the radio announced breaking
                              news.
                            </li>
                            <li>
                              • <span className="text-red-600">After studying for hours</span>, the test was still
                              difficult.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: The subjects (trees, celebration, radio, test) cannot logically perform the actions
                            in the modifying phrases.
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Corrected Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • <span className="text-green-600">Walking through the forest</span>, I thought the trees
                              were magnificent.
                            </li>
                            <li>
                              • <span className="text-green-600">Having finished the exam</span>, the students began to
                              celebrate.
                            </li>
                            <li>
                              • <span className="text-green-600">Driving to work</span>, I heard the radio announce
                              breaking news.
                            </li>
                            <li>
                              • <span className="text-green-600">After studying for hours</span>, I still found the test
                              difficult.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: The subjects now logically perform the actions in the modifying phrases.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-red-600">Dangling Infinitive Phrases</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Incorrect Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • <span className="text-red-600">To succeed in business</span>, careful planning is
                              essential.
                            </li>
                            <li>
                              • <span className="text-red-600">To understand the concept</span>, multiple examples are
                              needed.
                            </li>
                            <li>
                              • <span className="text-red-600">To improve performance</span>, regular practice is
                              recommended.
                            </li>
                          </ul>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Corrected Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • <span className="text-green-600">To succeed in business</span>, entrepreneurs must plan
                              carefully.
                            </li>
                            <li>
                              • <span className="text-green-600">To understand the concept</span>, students need
                              multiple examples.
                            </li>
                            <li>
                              • <span className="text-green-600">To improve performance</span>, athletes should practice
                              regularly.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">2. Misplaced Modifiers - Proximity Problems</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Misplaced modifiers are positioned too far from the words they modify, creating confusion or
                    unintended meanings.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-orange-600">Misplaced Adjective Clauses</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Problematic Placement:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • The professor discussed the problem with the students{" "}
                              <span className="text-red-600">that was bothering him</span>.
                            </li>
                            <li>
                              • She bought a gift for her sister{" "}
                              <span className="text-red-600">that cost fifty dollars</span>.
                            </li>
                            <li>
                              • The company hired an employee from Boston{" "}
                              <span className="text-red-600">who speaks three languages</span>.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: The relative clauses seem to modify the wrong nouns due to proximity.
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Clear Placement:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • The professor discussed with the students the problem{" "}
                              <span className="text-green-600">that was bothering him</span>.
                            </li>
                            <li>
                              • She bought a gift <span className="text-green-600">that cost fifty dollars</span> for
                              her sister.
                            </li>
                            <li>
                              • The company hired an employee{" "}
                              <span className="text-green-600">who speaks three languages</span> from Boston.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: Modifiers are now positioned next to their intended targets.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-orange-600">Misplaced Prepositional Phrases</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Confusing Placement:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • I saw a dog walking in the park <span className="text-red-600">with a red collar</span>.
                            </li>
                            <li>
                              • She served cookies to the children <span className="text-red-600">on paper plates</span>
                              .
                            </li>
                            <li>
                              • The man was arrested by the police <span className="text-red-600">in his pajamas</span>.
                            </li>
                          </ul>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Clear Placement:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • I saw a dog <span className="text-green-600">with a red collar</span> walking in the
                              park.
                            </li>
                            <li>
                              • She served cookies <span className="text-green-600">on paper plates</span> to the
                              children.
                            </li>
                            <li>
                              • The man <span className="text-green-600">in his pajamas</span> was arrested by the
                              police.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">3. Squinting Modifiers - Ambiguity Zone</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Squinting modifiers are ambiguous because they could modify either the words preceding them or the
                    words following them, leading to multiple interpretations.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-purple-600">Squinting Adverbs</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Ambiguous Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • Students who study diligently <span className="text-red-600">often</span> get good
                              grades.
                            </li>
                            <li>
                              • Talking rapidly <span className="text-red-600">irritates</span> some people.
                            </li>
                            <li>
                              • The manager said yesterday{" "}
                              <span className="text-red-600">he would review the proposal</span>.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: "Often" could modify "study diligently" or "get good grades." "Rapidly" could
                            modify "talking" or "irritates." "Yesterday" could modify "said" or "he would review".
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Clarified Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • Students who <span className="text-green-600">often</span> study diligently get good
                              grades.
                            </li>
                            <li>
                              • <span className="text-green-600">Rapid</span> talking irritates some people.
                            </li>
                            <li>
                              • <span className="text-green-600">Yesterday</span>, the manager said he would review the
                              proposal.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: Repositioning the modifier removes the ambiguity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">4. Limiting Modifiers - Precision Placement</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Limiting modifiers (e.g., only, just, nearly, almost, even) significantly alter sentence meaning
                    based on their placement.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-yellow-600">Impact of Placement</h5>
                      <div className="grid gap-4 md:grid-cols-1 mt-2">
                        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded">
                          <p className="font-semibold mb-2">Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • <span className="text-blue-600">Only I</span> gave him the book. (No one else gave him
                              the book)
                            </li>
                            <li>
                              • I <span className="text-blue-600">only gave</span> him the book. (I didn't do anything
                              else for him)
                            </li>
                            <li>
                              • I gave <span className="text-blue-600">only him</span> the book. (I didn't give it to
                              anyone else)
                            </li>
                            <li>
                              • I gave him <span className="text-blue-600">only the book</span>. (I didn't give him
                              anything else)
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Key: The meaning changes dramatically depending on which word "only" modifies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">5. Comparative and Superlative Modifier Errors</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Errors in using comparative (more, less, better) and superlative (most, least, best) modifiers,
                    including redundancy and incorrect forms.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-red-600">Redundant Comparisons</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Incorrect Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • This book is <span className="text-red-600">more preferable</span> than that one.
                            </li>
                            <li>
                              • She is <span className="text-red-600">more taller</span> than her sister.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: "Preferable" and "taller" already imply comparison; "more" is redundant.
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Corrected Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • This book is <span className="text-green-600">preferable</span> to that one.
                            </li>
                            <li>
                              • She is <span className="text-green-600">taller</span> than her sister.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: Remove the redundant "more."
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-red-600">Incorrect Superlative Use</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Incorrect Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • This is the <span className="text-red-600">most unique</span> solution I've seen.
                            </li>
                            <li>
                              • He is the <span className="text-red-600">most perfect</span> candidate for the job.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: "Unique" and "perfect" are absolute adjectives and cannot be compared.
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Corrected Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • This is a <span className="text-green-600">unique</span> solution.
                            </li>
                            <li>
                              • He is a <span className="text-green-600">perfect</span> candidate for the job.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: Use the absolute adjective without a superlative modifier.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">6. Double Negatives - Unintended Affirmations</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Using two negative words in the same clause creates a positive meaning, often unintentionally.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-red-600">Negative Contradictions</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Incorrect Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • I <span className="text-red-600">don't</span> have{" "}
                              <span className="text-red-600">no</span> money.
                            </li>
                            <li>
                              • She <span className="text-red-600">can't</span> find{" "}
                              <span className="text-red-600">nobody</span> to help her.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: The two negative words cancel each other out, creating a positive meaning.
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Corrected Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • I <span className="text-green-600">don't</span> have{" "}
                              <span className="text-green-600">any</span> money.
                            </li>
                            <li>
                              • She <span className="text-green-600">can't</span> find{" "}
                              <span className="text-green-600">anybody</span> to help her.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: Replace one of the negative words with a positive counterpart.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">7. Adjective Order Errors - Natural Flow</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    In English, multiple adjectives typically follow a specific order: opinion, size, age, shape, color,
                    origin, material, and purpose.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-red-600">Unnatural Adjective Sequences</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Incorrect Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • A <span className="text-red-600">Chinese old big wooden</span> table
                            </li>
                            <li>
                              • She wore a <span className="text-red-600">red beautiful silk</span> dress
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: The adjectives are in the wrong order, sounding unnatural.
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Corrected Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • A <span className="text-green-600">big old Chinese wooden</span> table
                            </li>
                            <li>
                              • She wore a <span className="text-green-600">beautiful red silk</span> dress
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: The adjectives now follow a more natural order.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold mb-4">Key Takeaways for Competitive Exams</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <span className="font-semibold">Master dangling modifiers:</span> They are the most frequently
                    tested error.
                  </li>
                  <li>
                    <span className="font-semibold">Prioritize proximity:</span> Ensure modifiers are as close as
                    possible to their targets.
                  </li>
                  <li>
                    <span className="font-semibold">Eliminate ambiguity:</span> Watch out for squinting modifiers and
                    unclear pronoun references.
                  </li>
                  <li>
                    <span className="font-semibold">Know limiting modifiers:</span> Understand how "only," "just," etc.,
                    affect meaning.
                  </li>
                  <li>
                    <span className="font-semibold">Avoid redundancy:</span> Don't use redundant comparative or
                    superlative forms.
                  </li>
                  <li>
                    <span className="font-semibold">Check adjective order:</span> Be aware of the typical sequence for
                    multiple adjectives.
                  </li>
                </ul>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Exam Strategy</AlertTitle>
                <AlertDescription>
                  When tackling sentence correction questions, always start by identifying the modifiers and their
                  intended targets. Pay close attention to introductory phrases, relative clauses, and limiting
                  modifiers. If a sentence sounds awkward, it's often due to a modifier error.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
