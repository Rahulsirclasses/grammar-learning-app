import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, AlertTriangle, Lightbulb, BookOpen, FileText } from "lucide-react"

export function ParallelismTheory() {
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600">Parallelism</CardTitle>
        <CardDescription>
          Master the art of parallel structure to create balanced, elegant, and powerful sentences
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
              <h3 className="text-xl font-semibold text-blue-600">Understanding Parallelism</h3>
              <p className="text-base leading-relaxed">
                Parallelism is the use of similar grammatical structures, patterns, or elements within a sentence or
                across sentences to create balance, rhythm, and emphasis. It's a fundamental principle of effective
                writing that enhances clarity, readability, and persuasive power.
              </p>

              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold mb-3">Core Principles of Parallelism</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Structural Balance</h5>
                    <p className="text-sm">Elements in a series should have the same grammatical form</p>
                    <p className="text-sm italic">
                      She likes <span className="text-blue-600 font-semibold">reading, writing, and painting</span>.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Rhythmic Flow</h5>
                    <p className="text-sm">Creates a pleasing cadence and natural rhythm</p>
                    <p className="text-sm italic">
                      We came, <span className="text-blue-600 font-semibold">we saw, we conquered</span>.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Emphasis Enhancement</h5>
                    <p className="text-sm">Reinforces ideas through repetition of structure</p>
                    <p className="text-sm italic">
                      Ask not what your country can do for you—
                      <span className="text-blue-600 font-semibold">ask what you can do for your country</span>.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Clarity Improvement</h5>
                    <p className="text-sm">Makes complex ideas easier to understand and remember</p>
                    <p className="text-sm italic">
                      The plan is <span className="text-blue-600 font-semibold">simple, effective, and affordable</span>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-6">Comprehensive Types of Parallelism</h4>

              <div className="space-y-4">
                <div className="pl-6 border-l-4 border-blue-200 dark:border-blue-800">
                  <h5 className="font-semibold text-lg">1. Lexical Parallelism (Word Level)</h5>

                  <div className="mt-3 space-y-3">
                    <div>
                      <h6 className="font-medium">Same Parts of Speech</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Using the same grammatical category for parallel elements
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Nouns:</span> The company values honesty,
                          integrity, and excellence.
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Adjectives:</span> The presentation was clear,
                          concise, and compelling.
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Verbs:</span> She studied, practiced, and
                          succeeded.
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Adverbs:</span> He spoke clearly, confidently,
                          and persuasively.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h6 className="font-medium">Consistent Verb Forms</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Maintaining the same verb tense and form throughout parallel structures
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Infinitives:</span> To learn, to grow, and to
                          succeed are her goals.
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Gerunds:</span> Swimming, running, and cycling
                          keep him fit.
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Past tense:</span> He arrived, checked in, and
                          went to his room.
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Present tense:</span> She reads, writes, and
                          reflects daily.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-green-200 dark:border-green-800">
                  <h5 className="font-semibold text-lg">2. Phrasal Parallelism</h5>

                  <div className="mt-3 space-y-3">
                    <div>
                      <h6 className="font-medium">Prepositional Phrases</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Using similar prepositional phrase structures
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • The book is <span className="underline">on the shelf</span>,{" "}
                          <span className="underline">in the library</span>, and{" "}
                          <span className="underline">under the fiction section</span>.
                        </p>
                        <p className="text-sm">
                          • She succeeded <span className="underline">through hard work</span>,{" "}
                          <span className="underline">with determination</span>, and{" "}
                          <span className="underline">by staying focused</span>.
                        </p>
                        <p className="text-sm">
                          • The meeting will be held <span className="underline">at the office</span>,{" "}
                          <span className="underline">during lunch</span>, and{" "}
                          <span className="underline">with all stakeholders</span>.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h6 className="font-medium">Participial Phrases</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Maintaining consistent participial structures
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="underline">Running through the park</span>,{" "}
                          <span className="underline">breathing the fresh air</span>, and{" "}
                          <span className="underline">feeling the sun</span>, she felt alive.
                        </p>
                        <p className="text-sm">
                          • <span className="underline">Exhausted by the journey</span>,{" "}
                          <span className="underline">overwhelmed by the experience</span>, and{" "}
                          <span className="underline">inspired by the possibilities</span>, he reflected on the day.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h6 className="font-medium">Infinitive Phrases</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Using parallel infinitive constructions
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • Her goals are <span className="underline">to excel in her career</span>,{" "}
                          <span className="underline">to maintain work-life balance</span>, and{" "}
                          <span className="underline">to contribute to society</span>.
                        </p>
                        <p className="text-sm">
                          • The company plans <span className="underline">to expand internationally</span>,{" "}
                          <span className="underline">to increase market share</span>, and{" "}
                          <span className="underline">to improve customer satisfaction</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-purple-200 dark:border-purple-800">
                  <h5 className="font-semibold text-lg">3. Clausal Parallelism</h5>

                  <div className="mt-3 space-y-3">
                    <div>
                      <h6 className="font-medium">Independent Clauses</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Balancing complete thoughts with similar structures
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="underline">The sun was shining</span>,{" "}
                          <span className="underline">the birds were singing</span>, and{" "}
                          <span className="underline">the day was perfect</span>.
                        </p>
                        <p className="text-sm">
                          • <span className="underline">She studied hard</span>,{" "}
                          <span className="underline">he practiced diligently</span>, and{" "}
                          <span className="underline">they both succeeded</span>.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h6 className="font-medium">Dependent Clauses</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Using similar subordinate clause structures
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • I know <span className="underline">that she is talented</span>,{" "}
                          <span className="underline">that she is dedicated</span>, and{" "}
                          <span className="underline">that she will succeed</span>.
                        </p>
                        <p className="text-sm">
                          • The project will succeed <span className="underline">if we plan carefully</span>,{" "}
                          <span className="underline">if we work together</span>, and{" "}
                          <span className="underline">if we stay focused</span>.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h6 className="font-medium">Relative Clauses</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Maintaining parallel relative clause constructions
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • She is someone <span className="underline">who works hard</span>,{" "}
                          <span className="underline">who thinks creatively</span>, and{" "}
                          <span className="underline">who leads effectively</span>.
                        </p>
                        <p className="text-sm">
                          • This is a book <span className="underline">that educates</span>,{" "}
                          <span className="underline">that inspires</span>, and{" "}
                          <span className="underline">that entertains</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-orange-200 dark:border-orange-800">
                  <h5 className="font-semibold text-lg">4. Correlative Conjunction Parallelism</h5>

                  <div className="mt-3 space-y-3">
                    <div>
                      <h6 className="font-medium">Either...or / Neither...nor</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Ensuring parallel structures after correlative conjunctions
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • Either <span className="text-orange-600 font-semibold">you study hard</span> or{" "}
                          <span className="text-orange-600 font-semibold">you fail the exam</span>.
                        </p>
                        <p className="text-sm">
                          • Neither <span className="text-orange-600 font-semibold">the rain</span> nor{" "}
                          <span className="text-orange-600 font-semibold">the cold</span> could stop them.
                        </p>
                        <p className="text-sm">
                          • She is either <span className="text-orange-600 font-semibold">extremely talented</span> or{" "}
                          <span className="text-orange-600 font-semibold">incredibly lucky</span>.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h6 className="font-medium">Both...and / Not only...but also</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Maintaining balance in additive correlative constructions
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • Both <span className="text-orange-600 font-semibold">the students</span> and{" "}
                          <span className="text-orange-600 font-semibold">the teachers</span> enjoyed the presentation.
                        </p>
                        <p className="text-sm">
                          • She is not only <span className="text-orange-600 font-semibold">intelligent</span> but also{" "}
                          <span className="text-orange-600 font-semibold">hardworking</span>.
                        </p>
                        <p className="text-sm">
                          • The solution is both <span className="text-orange-600 font-semibold">innovative</span> and{" "}
                          <span className="text-orange-600 font-semibold">practical</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-6">Advanced Parallelism Concepts</h4>

              <div className="space-y-4">
                <div className="pl-6 border-l-4 border-teal-200 dark:border-teal-800">
                  <h5 className="font-semibold">Antithetical Parallelism</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Using parallel structure to highlight contrasts and oppositions
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                    <p className="text-sm">
                      • It was the <span className="text-teal-600 font-semibold">best of times</span>, it was the{" "}
                      <span className="text-teal-600 font-semibold">worst of times</span>.
                    </p>
                    <p className="text-sm">
                      • <span className="text-teal-600 font-semibold">Many are called</span>, but{" "}
                      <span className="text-teal-600 font-semibold">few are chosen</span>.
                    </p>
                    <p className="text-sm">
                      • She was <span className="text-teal-600 font-semibold">rich in spirit</span> but{" "}
                      <span className="text-teal-600 font-semibold">poor in wealth</span>.
                    </p>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-indigo-200 dark:border-indigo-800">
                  <h5 className="font-semibold">Climactic Parallelism</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Building intensity through parallel structures of increasing importance
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                    <p className="text-sm">
                      • We must <span className="text-indigo-600 font-semibold">plan carefully</span>,{" "}
                      <span className="text-indigo-600 font-semibold">work diligently</span>, and{" "}
                      <span className="text-indigo-600 font-semibold">succeed completely</span>.
                    </p>
                    <p className="text-sm">
                      • The storm <span className="text-indigo-600 font-semibold">approached slowly</span>,{" "}
                      <span className="text-indigo-600 font-semibold">intensified rapidly</span>, and{" "}
                      <span className="text-indigo-600 font-semibold">struck devastatingly</span>.
                    </p>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-pink-200 dark:border-pink-800">
                  <h5 className="font-semibold">Chiasmus (Reverse Parallelism)</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Creating balance through reversed parallel structures (A-B-B-A pattern)
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                    <p className="text-sm">
                      • Ask not what <span className="text-pink-600 font-semibold">your country</span> can do for{" "}
                      <span className="text-pink-600 font-semibold">you</span>—ask what{" "}
                      <span className="text-pink-600 font-semibold">you</span> can do for{" "}
                      <span className="text-pink-600 font-semibold">your country</span>.
                    </p>
                    <p className="text-sm">
                      • <span className="text-pink-600 font-semibold">Fair is foul</span>, and{" "}
                      <span className="text-pink-600 font-semibold">foul is fair</span>.
                    </p>
                  </div>
                </div>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 mt-6">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Mastery Principle</AlertTitle>
                <AlertDescription>
                  Effective parallelism goes beyond mere grammatical correctness—it creates rhythm, emphasis, and
                  memorability. The key is to recognize opportunities for parallel structure and to maintain consistency
                  in form while varying content for maximum impact.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-4 mt-4">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600">Comprehensive Parallelism Examples</h3>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Simple Parallel Structures</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-blue-600">Series of Nouns</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • The company values{" "}
                        <span className="text-blue-600 font-semibold">honesty, integrity, and excellence</span>.
                      </p>
                      <p className="text-sm">
                        • Her hobbies include{" "}
                        <span className="text-blue-600 font-semibold">reading, writing, and painting</span>.
                      </p>
                      <p className="text-sm">
                        • The conference covered{" "}
                        <span className="text-blue-600 font-semibold">technology, innovation, and sustainability</span>.
                      </p>
                      <p className="text-sm">
                        • Success requires{" "}
                        <span className="text-blue-600 font-semibold">dedication, perseverance, and vision</span>.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-green-600">Series of Adjectives</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • The presentation was{" "}
                        <span className="text-green-600 font-semibold">clear, concise, and compelling</span>.
                      </p>
                      <p className="text-sm">
                        • She is{" "}
                        <span className="text-green-600 font-semibold">intelligent, creative, and ambitious</span>.
                      </p>
                      <p className="text-sm">
                        • The solution is{" "}
                        <span className="text-green-600 font-semibold">simple, effective, and affordable</span>.
                      </p>
                      <p className="text-sm">
                        • The weather was <span className="text-green-600 font-semibold">cold, wet, and miserable</span>
                        .
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-purple-600">Series of Verbs</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • She <span className="text-purple-600 font-semibold">studied, practiced, and succeeded</span>.
                      </p>
                      <p className="text-sm">
                        • The team will{" "}
                        <span className="text-purple-600 font-semibold">plan, execute, and evaluate</span> the project.
                      </p>
                      <p className="text-sm">
                        • He <span className="text-purple-600 font-semibold">arrived, checked in, and went</span> to his
                        room.
                      </p>
                      <p className="text-sm">
                        • The company{" "}
                        <span className="text-purple-600 font-semibold">researches, develops, and markets</span>{" "}
                        innovative products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold mb-4">Complex Parallel Structures</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-blue-600">Parallel Phrases</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • The book is{" "}
                        <span className="text-blue-600 font-semibold">
                          on the shelf, in the library, and under the fiction section
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • She succeeded{" "}
                        <span className="text-blue-600 font-semibold">
                          through hard work, with determination, and by staying focused
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • The meeting will address{" "}
                        <span className="text-blue-600 font-semibold">
                          current challenges, future opportunities, and strategic initiatives
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • He is known{" "}
                        <span className="text-blue-600 font-semibold">
                          for his expertise, by his colleagues, and throughout the industry
                        </span>
                        .
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-green-600">Parallel Clauses</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • I know{" "}
                        <span className="text-green-600 font-semibold">
                          that she is talented, that she is dedicated, and that she will succeed
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • The project will succeed{" "}
                        <span className="text-green-600 font-semibold">
                          if we plan carefully, if we work together, and if we stay focused
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • She is someone{" "}
                        <span className="text-green-600 font-semibold">
                          who works hard, who thinks creatively, and who leads effectively
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • The report shows{" "}
                        <span className="text-green-600 font-semibold">
                          what we accomplished, how we did it, and why it matters
                        </span>
                        .
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-purple-600">Parallel Infinitive Phrases</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • Her goals are{" "}
                        <span className="text-purple-600 font-semibold">
                          to excel in her career, to maintain work-life balance, and to contribute to society
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • The company plans{" "}
                        <span className="text-purple-600 font-semibold">
                          to expand internationally, to increase market share, and to improve customer satisfaction
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • Students need{" "}
                        <span className="text-purple-600 font-semibold">
                          to study regularly, to participate actively, and to think critically
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • The program aims{" "}
                        <span className="text-purple-600 font-semibold">
                          to educate minds, to inspire hearts, and to transform lives
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="text-lg font-semibold mb-4">Correlative Conjunction Examples</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-green-600">Either...or / Neither...nor</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • Either <span className="text-green-600 font-semibold">you study hard</span> or{" "}
                        <span className="text-green-600 font-semibold">you fail the exam</span>.
                      </p>
                      <p className="text-sm">
                        • Neither <span className="text-green-600 font-semibold">the rain</span> nor{" "}
                        <span className="text-green-600 font-semibold">the cold</span> could stop them.
                      </p>
                      <p className="text-sm">
                        • She will either <span className="text-green-600 font-semibold">accept the offer</span> or{" "}
                        <span className="text-green-600 font-semibold">negotiate better terms</span>.
                      </p>
                      <p className="text-sm">
                        • The solution is neither <span className="text-green-600 font-semibold">simple</span> nor{" "}
                        <span className="text-green-600 font-semibold">obvious</span>.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-blue-600">Both...and / Not only...but also</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • Both <span className="text-blue-600 font-semibold">the students</span> and{" "}
                        <span className="text-blue-600 font-semibold">the teachers</span> enjoyed the presentation.
                      </p>
                      <p className="text-sm">
                        • She is not only <span className="text-blue-600 font-semibold">intelligent</span> but also{" "}
                        <span className="text-blue-600 font-semibold">hardworking</span>.
                      </p>
                      <p className="text-sm">
                        • The program is both <span className="text-blue-600 font-semibold">educational</span> and{" "}
                        <span className="text-blue-600 font-semibold">entertaining</span>.
                      </p>
                      <p className="text-sm">
                        • He not only <span className="text-blue-600 font-semibold">completed the project</span> but
                        also <span className="text-blue-600 font-semibold">exceeded expectations</span>.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-purple-600">Whether...or / As...as</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • Whether <span className="text-purple-600 font-semibold">you agree</span> or{" "}
                        <span className="text-purple-600 font-semibold">disagree</span>, please share your thoughts.
                      </p>
                      <p className="text-sm">
                        • She is as <span className="text-purple-600 font-semibold">talented</span> as she is{" "}
                        <span className="text-purple-600 font-semibold">dedicated</span>.
                      </p>
                      <p className="text-sm">
                        • The task is as <span className="text-purple-600 font-semibold">challenging</span> as it is{" "}
                        <span className="text-purple-600 font-semibold">rewarding</span>.
                      </p>
                      <p className="text-sm">
                        • Whether <span className="text-purple-600 font-semibold">in success</span> or{" "}
                        <span className="text-purple-600 font-semibold">in failure</span>, she remains optimistic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h4 className="text-lg font-semibold mb-4">Advanced Parallelism Techniques</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-yellow-600">Antithetical Parallelism (Contrasts)</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • It was the <span className="text-yellow-600 font-semibold">best of times</span>, it was the{" "}
                        <span className="text-yellow-600 font-semibold">worst of times</span>.
                      </p>
                      <p className="text-sm">
                        • <span className="text-yellow-600 font-semibold">Many are called</span>, but{" "}
                        <span className="text-yellow-600 font-semibold">few are chosen</span>.
                      </p>
                      <p className="text-sm">
                        • She was <span className="text-yellow-600 font-semibold">rich in spirit</span> but{" "}
                        <span className="text-yellow-600 font-semibold">poor in wealth</span>.
                      </p>
                      <p className="text-sm">
                        • The plan is <span className="text-yellow-600 font-semibold">simple in concept</span> but{" "}
                        <span className="text-yellow-600 font-semibold">complex in execution</span>.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-orange-600">Climactic Parallelism (Building Intensity)</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • We must <span className="text-orange-600 font-semibold">plan carefully</span>,{" "}
                        <span className="text-orange-600 font-semibold">work diligently</span>, and{" "}
                        <span className="text-orange-600 font-semibold">succeed completely</span>.
                      </p>
                      <p className="text-sm">
                        • The storm <span className="text-orange-600 font-semibold">approached slowly</span>,{" "}
                        <span className="text-orange-600 font-semibold">intensified rapidly</span>, and{" "}
                        <span className="text-orange-600 font-semibold">struck devastatingly</span>.
                      </p>
                      <p className="text-sm">
                        • She <span className="text-orange-600 font-semibold">hoped quietly</span>,{" "}
                        <span className="text-orange-600 font-semibold">worked tirelessly</span>, and{" "}
                        <span className="text-orange-600 font-semibold">achieved magnificently</span>.
                      </p>
                      <p className="text-sm">
                        • The company <span className="text-orange-600 font-semibold">started small</span>,{" "}
                        <span className="text-orange-600 font-semibold">grew steadily</span>, and{" "}
                        <span className="text-orange-600 font-semibold">dominated completely</span>.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-red-600">Chiasmus (Reverse Parallelism)</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • Ask not what <span className="text-red-600 font-semibold">your country</span> can do for{" "}
                        <span className="text-red-600 font-semibold">you</span>—ask what{" "}
                        <span className="text-red-600 font-semibold">you</span> can do for{" "}
                        <span className="text-red-600 font-semibold">your country</span>.
                      </p>
                      <p className="text-sm">
                        • <span className="text-red-600 font-semibold">Fair is foul</span>, and{" "}
                        <span className="text-red-600 font-semibold">foul is fair</span>.
                      </p>
                      <p className="text-sm">
                        • <span className="text-red-600 font-semibold">When the going gets tough</span>,{" "}
                        <span className="text-red-600 font-semibold">the tough get going</span>.
                      </p>
                      <p className="text-sm">
                        • <span className="text-red-600 font-semibold">You can take the person out of the country</span>
                        , but{" "}
                        <span className="text-red-600 font-semibold">you can't take the country out of the person</span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 className="text-lg font-semibold mb-4">Professional and Academic Examples</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-purple-600">Business Communication</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • Our strategy focuses on{" "}
                        <span className="text-purple-600 font-semibold">
                          increasing revenue, reducing costs, and improving efficiency
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • The company is committed to{" "}
                        <span className="text-purple-600 font-semibold">
                          serving customers, supporting employees, and strengthening communities
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • Success requires{" "}
                        <span className="text-purple-600 font-semibold">
                          clear vision, strong leadership, and consistent execution
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • We will{" "}
                        <span className="text-purple-600 font-semibold">
                          analyze the data, identify trends, and recommend solutions
                        </span>
                        .
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-blue-600">Academic Writing</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • The research examines{" "}
                        <span className="text-blue-600 font-semibold">
                          how students learn, why they struggle, and what helps them succeed
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • The study's methodology involved{" "}
                        <span className="text-blue-600 font-semibold">
                          collecting data, analyzing results, and drawing conclusions
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • The theory explains{" "}
                        <span className="text-blue-600 font-semibold">
                          what happens, when it occurs, and why it matters
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • Education should{" "}
                        <span className="text-blue-600 font-semibold">
                          challenge minds, inspire creativity, and develop character
                        </span>
                        .
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-green-600">Persuasive Writing</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • We have the{" "}
                        <span className="text-green-600 font-semibold">
                          knowledge to understand, the wisdom to choose, and the power to act
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • The proposal is{" "}
                        <span className="text-green-600 font-semibold">
                          economically sound, environmentally responsible, and socially beneficial
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • Together, we can{" "}
                        <span className="text-green-600 font-semibold">
                          overcome challenges, seize opportunities, and create change
                        </span>
                        .
                      </p>
                      <p className="text-sm">
                        • The time has come to{" "}
                        <span className="text-green-600 font-semibold">
                          stop talking, start acting, and make a difference
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-950 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <h4 className="text-lg font-semibold mb-4">Literary and Rhetorical Examples</h4>

                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-indigo-600">Famous Parallel Structures</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">• "I came, I saw, I conquered." - Julius Caesar</p>
                      <p className="text-sm">
                        • "Government of the people, by the people, for the people." - Abraham Lincoln
                      </p>
                      <p className="text-sm">
                        • "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the
                        fields." - Winston Churchill
                      </p>
                      <p className="text-sm">
                        • "I have a dream that one day this nation will rise up, live out the true meaning of its
                        creed." - Martin Luther King Jr.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-indigo-600">Modern Applications</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">• "Think different, act different, be different." - Marketing slogan</p>
                      <p className="text-sm">• "Reduce, reuse, recycle." - Environmental motto</p>
                      <p className="text-sm">• "Ready, willing, and able." - Common expression</p>
                      <p className="text-sm">• "Location, location, location." - Real estate principle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="shortcuts" className="space-y-4 mt-4">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600">Strategic Approaches to Parallelism Mastery</h3>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h4 className="flex items-center text-lg font-semibold mb-4">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                  The BALANCE Method for Parallelism Analysis
                </h4>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <div className="text-center">
                    <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold text-yellow-800 dark:text-yellow-200">B</span>
                    </div>
                    <h5 className="font-semibold">Break Down</h5>
                    <p className="text-sm">Identify series elements</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold text-yellow-800 dark:text-yellow-200">A</span>
                    </div>
                    <h5 className="font-semibold">Analyze</h5>
                    <p className="text-sm">Check grammatical forms</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold text-yellow-800 dark:text-yellow-200">L</span>
                    </div>
                    <h5 className="font-semibold">Look</h5>
                    <p className="text-sm">For correlative conjunctions</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold text-yellow-800 dark:text-yellow-200">A</span>
                    </div>
                    <h5 className="font-semibold">Align</h5>
                    <p className="text-sm">Match structures exactly</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold text-yellow-800 dark:text-yellow-200">N</span>
                    </div>
                    <h5 className="font-semibold">Note</h5>
                    <p className="text-sm">Verb tenses and forms</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold text-yellow-800 dark:text-yellow-200">C</span>
                    </div>
                    <h5 className="font-semibold">Check</h5>
                    <p className="text-sm">For consistency</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-200 dark:bg-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold text-yellow-800 dark:text-yellow-200">E</span>
                    </div>
                    <h5 className="font-semibold">Evaluate</h5>
                    <p className="text-sm">Overall effectiveness</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Quick Identification Strategies</h4>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="pl-6 border-l-4 border-blue-200 dark:border-blue-800">
                    <h5 className="font-semibold text-blue-600">The List Test</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      When you see a series (items separated by commas or conjunctions):
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • <span className="font-medium">Step 1:</span> Isolate each element
                      </li>
                      <li>
                        • <span className="font-medium">Step 2:</span> Identify the grammatical form of the first
                        element
                      </li>
                      <li>
                        • <span className="font-medium">Step 3:</span> Check if all other elements match
                      </li>
                      <li>
                        • <span className="font-medium">Step 4:</span> If not, adjust to create consistency
                      </li>
                    </ul>
                    <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded mt-2">
                      <p className="text-sm font-medium">Example:</p>
                      <p className="text-sm">She likes reading, to write, and painting.</p>
                      <p className="text-sm text-blue-600">→ She likes reading, writing, and painting.</p>
                    </div>
                  </div>

                  <div className="pl-6 border-l-4 border-green-200 dark:border-green-800">
                    <h5 className="font-semibold text-green-600">The Correlative Conjunction Scan</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Look for these signal words that require parallel structure:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="font-medium">Common Pairs:</p>
                        <p>• either...or • neither...nor • both...and</p>
                        <p>• not only...but also • whether...or</p>
                      </div>
                      <div>
                        <p className="font-medium">Quick Check:</p>
                        <p>What follows the first part must match what follows the second part.</p>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950 p-3 rounded mt-2">
                      <p className="text-sm font-medium">Example:</p>
                      <p className="text-sm">Either you study or failing the exam.</p>
                      <p className="text-sm text-green-600">→ Either you study or you fail the exam.</p>
                    </div>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-purple-200 dark:border-purple-800">
                  <h5 className="font-semibold text-purple-600">The Substitution Strategy</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Replace elements with simpler forms to test parallelism:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded mt-2">
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Original:</span> The company plans to expand internationally,
                        increase market share, and improving customer satisfaction.
                      </p>
                      <p>
                        <span className="font-medium">Substitute:</span> The company plans to [do A], [do B], and [do
                        C].
                      </p>
                      <p>
                        <span className="font-medium">Test:</span> "to expand," "increase," "improving" → Not parallel
                      </p>
                      <p>
                        <span className="font-medium">Correct:</span> The company plans to expand internationally, to
                        increase market share, and to improve customer satisfaction.
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
                          <li>• Series of three or more items</li>
                          <li>• Correlative conjunctions</li>
                          <li>• Verb form consistency</li>
                          <li>• Preposition patterns</li>
                          <li>• Comparative structures</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium">Quick Elimination Technique</h6>
                        <ul className="space-y-1 text-sm">
                          <li>• Scan for "and," "or," "but" first</li>
                          <li>• Check what comes before and after</li>
                          <li>• Look for mixed verb forms</li>
                          <li>• Identify correlative pairs</li>
                          <li>• Test with simple substitutions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-green-600">Sentence Correction Strategy</h5>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">1. Identify parallel elements:</span> What items are being
                        compared or listed?
                      </p>
                      <p>
                        <span className="font-medium">2. Determine the required form:</span> What grammatical structure
                        should be used?
                      </p>
                      <p>
                        <span className="font-medium">3. Check all elements:</span> Do they all follow the same pattern?
                      </p>
                      <p>
                        <span className="font-medium">4. Make consistent:</span> Adjust all elements to match the
                        required form
                      </p>
                      <p>
                        <span className="font-medium">5. Verify meaning:</span> Does the correction maintain the
                        intended meaning?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="text-lg font-semibold mb-4">Advanced Decision-Making Framework</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-green-600">The Hierarchy of Parallel Forms</h5>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Priority 1:</span> Match exact grammatical forms (noun with noun,
                        verb with verb)
                      </p>
                      <p>
                        <span className="font-medium">Priority 2:</span> Maintain consistent verb tenses and voices
                      </p>
                      <p>
                        <span className="font-medium">Priority 3:</span> Keep similar phrase structures (prepositional
                        with prepositional)
                      </p>
                      <p>
                        <span className="font-medium">Priority 4:</span> Preserve logical relationships and meaning
                      </p>
                      <p>
                        <span className="font-medium">Priority 5:</span> Consider rhythm and emphasis for style
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-blue-600">Context-Dependent Decisions</h5>
                    <div className="grid gap-4 md:grid-cols-2 mt-2">
                      <div>
                        <h6 className="font-medium">Formal Writing</h6>
                        <ul className="space-y-1 text-sm">
                          <li>• Strict adherence to parallel forms</li>
                          <li>• Consistent verb tenses throughout</li>
                          <li>• Precise correlative conjunction usage</li>
                          <li>• Balanced clause structures</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium">Creative Writing</h6>
                        <ul className="space-y-1 text-sm">
                          <li>• Intentional parallelism for effect</li>
                          <li>• Varied structures for emphasis</li>
                          <li>• Rhythmic considerations</li>
                          <li>• Stylistic parallelism choices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                <h4 className="text-lg font-semibold mb-4">Memory Aids and Mnemonics</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-orange-600">The "Same Game" Rule</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Remember: In parallelism, everything must play the "same game"
                    </p>
                    <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded">
                      <ul className="space-y-1 text-sm">
                        <li>• If one element is a noun, all must be nouns</li>
                        <li>• If one element is an infinitive, all must be infinitives</li>
                        <li>• If one element is a clause, all must be clauses</li>
                        <li>• If one element is past tense, all must be past tense</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-blue-600">Correlative Conjunction Memory Device</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      "BOTH parts of correlative conjunctions need EQUAL treatment"
                    </p>
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded">
                      <p className="text-sm">
                        Whatever grammatical form follows the first part must also follow the second part.
                      </p>
                      <p className="text-sm font-medium mt-2">Example: Not only [verb] but also [verb]</p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Master Strategy</AlertTitle>
                <AlertDescription>
                  The key to parallelism mastery is developing an automatic recognition system: When you see a series or
                  correlative conjunctions, immediately check for matching grammatical forms. Practice identifying the
                  "pattern" that should be repeated, then ensure all elements follow that exact pattern.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="mistakes" className="space-y-4 mt-4">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600">Comprehensive Parallelism Error Analysis</h3>

              <div className="bg-red-50 dark:bg-red-950 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="flex items-center text-lg font-semibold mb-4">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                  Critical Parallelism Errors in Competitive Exams
                </h4>
                <p className="text-sm">
                  These parallelism errors are among the most frequently tested in standardized exams and can
                  significantly impact sentence clarity and effectiveness.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold">1. Mixed Grammatical Forms in Series</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    The most common parallelism error occurs when elements in a series don't match grammatically.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-red-600">Mixed Verb Forms</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Incorrect Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • She likes <span className="text-red-600">reading, to write, and painting</span>.
                            </li>
                            <li>
                              • The team will <span className="text-red-600">plan, execute, and be evaluating</span> the
                              project.
                            </li>
                            <li>
                              • He enjoys <span className="text-red-600">swimming, to run, and cycling</span>.
                            </li>
                            <li>
                              • The goals are{" "}
                              <span className="text-red-600">to succeed, achieving excellence, and grow</span>.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: Mixing gerunds, infinitives, and other verb forms in the same series.
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Corrected Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • She likes <span className="text-green-600">reading, writing, and painting</span>.
                            </li>
                            <li>
                              • The team will <span className="text-green-600">plan, execute, and evaluate</span> the
                              project.
                            </li>
                            <li>
                              • He enjoys <span className="text-green-600">swimming, running, and cycling</span>.
                            </li>
                            <li>
                              • The goals are{" "}
                              <span className="text-green-600">to succeed, to achieve excellence, and to grow</span>.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: All elements now use the same grammatical form.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-red-600">Mixed Parts of Speech</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Incorrect Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • The presentation was{" "}
                              <span className="text-red-600">clear, concise, and had impact</span>.
                            </li>
                            <li>
                              • She is <span className="text-red-600">intelligent, creative, and works hard</span>.
                            </li>
                            <li>
                              • The solution is <span className="text-red-600">simple, effective, and saves money</span>
                              .
                            </li>
                            <li>
                              • He is known for{" "}
                              <span className="text-red-600">his expertise, being reliable, and punctuality</span>.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: Mixing adjectives with phrases or clauses.
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Corrected Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • The presentation was{" "}
                              <span className="text-green-600">clear, concise, and impactful</span>.
                            </li>
                            <li>
                              • She is <span className="text-green-600">intelligent, creative, and hardworking</span>.
                            </li>
                            <li>
                              • The solution is{" "}
                              <span className="text-green-600">simple, effective, and economical</span>.
                            </li>
                            <li>
                              • He is known for{" "}
                              <span className="text-green-600">his expertise, reliability, and punctuality</span>.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: All elements are now the same part of speech.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">2. Correlative Conjunction Errors</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Correlative conjunctions require identical grammatical structures after each part of the pair.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-orange-600">Either...or / Neither...nor Errors</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Incorrect Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • Either <span className="text-red-600">you study hard</span> or{" "}
                              <span className="text-red-600">failing the exam</span>.
                            </li>
                            <li>
                              • Neither <span className="text-red-600">the rain</span> nor{" "}
                              <span className="text-red-600">when it's cold</span> stops them.
                            </li>
                            <li>
                              • She will either <span className="text-red-600">accept the offer</span> or{" "}
                              <span className="text-red-600">negotiation</span>.
                            </li>
                            <li>
                              • The solution is neither <span className="text-red-600">simple</span> nor{" "}
                              <span className="text-red-600">can be implemented easily</span>.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: Different grammatical structures after each part of the correlative conjunction.
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Corrected Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • Either <span className="text-green-600">you study hard</span> or{" "}
                              <span className="text-green-600">you fail the exam</span>.
                            </li>
                            <li>
                              • Neither <span className="text-green-600">the rain</span> nor{" "}
                              <span className="text-green-600">the cold</span> stops them.
                            </li>
                            <li>
                              • She will either <span className="text-green-600">accept the offer</span> or{" "}
                              <span className="text-green-600">negotiate terms</span>.
                            </li>
                            <li>
                              • The solution is neither <span className="text-green-600">simple</span> nor{" "}
                              <span className="text-green-600">easy to implement</span>.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: Matching grammatical structures after both parts.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-orange-600">Not only...but also Errors</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Incorrect Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • She is not only <span className="text-red-600">intelligent</span> but also{" "}
                              <span className="text-red-600">works hard</span>.
                            </li>
                            <li>
                              • The program not only <span className="text-red-600">educates students</span> but also{" "}
                              <span className="text-red-600">entertainment</span>.
                            </li>
                            <li>
                              • He not only <span className="text-red-600">completed the project</span> but also{" "}
                              <span className="text-red-600">exceeding expectations</span>.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: Mismatched structures after "not only" and "but also."
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Corrected Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • She is not only <span className="text-green-600">intelligent</span> but also{" "}
                              <span className="text-green-600">hardworking</span>.
                            </li>
                            <li>
                              • The program not only <span className="text-green-600">educates students</span> but also{" "}
                              <span className="text-green-600">entertains them</span>.
                            </li>
                            <li>
                              • He not only <span className="text-green-600">completed the project</span> but also{" "}
                              <span className="text-green-600">exceeded expectations</span>.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: Parallel structures after both parts of the conjunction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">3. Faulty Comparison Parallelism</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    When making comparisons, the elements being compared must be parallel in structure.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-purple-600">Unparallel Comparisons</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Incorrect Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • <span className="text-red-600">Swimming</span> is better than{" "}
                              <span className="text-red-600">to run</span>.
                            </li>
                            <li>
                              • She prefers <span className="text-red-600">reading books</span> to{" "}
                              <span className="text-red-600">watch movies</span>.
                            </li>
                            <li>
                              • <span className="text-red-600">Working hard</span> is more important than{" "}
                              <span className="text-red-600">to be lucky</span>.
                            </li>
                            <li>
                              • He likes <span className="text-red-600">playing tennis</span> more than{" "}
                              <span className="text-red-600">to swim</span>.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: Different grammatical forms in comparative structures.
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Corrected Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • <span className="text-green-600">Swimming</span> is better than{" "}
                              <span className="text-green-600">running</span>.
                            </li>
                            <li>
                              • She prefers <span className="text-green-600">reading books</span> to{" "}
                              <span className="text-green-600">watching movies</span>.
                            </li>
                            <li>
                              • <span className="text-green-600">Working hard</span> is more important than{" "}
                              <span className="text-green-600">being lucky</span>.
                            </li>
                            <li>
                              • He likes <span className="text-green-600">playing tennis</span> more than{" "}
                              <span className="text-green-600">swimming</span>.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: Matching grammatical forms in comparisons.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">4. Inconsistent Tense and Voice</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Parallel elements must maintain consistent verb tense and voice throughout the series.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-yellow-600">Tense Inconsistency</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Incorrect Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • She{" "}
                              <span className="text-red-600">studied hard, practiced regularly, and will succeed</span>.
                            </li>
                            <li>
                              • The team{" "}
                              <span className="text-red-600">
                                planned carefully, executed efficiently, and are evaluating
                              </span>{" "}
                              results.
                            </li>
                            <li>
                              • He <span className="text-red-600">arrived early, checked in, and will go</span> to his
                              room.
                            </li>
                            <li>
                              • The company{" "}
                              <span className="text-red-600">
                                researched the market, developed the product, and is launching
                              </span>{" "}
                              it.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: Mixing different verb tenses in parallel structures.
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Corrected Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • She{" "}
                              <span className="text-green-600">studied hard, practiced regularly, and succeeded</span>.
                            </li>
                            <li>
                              • The team{" "}
                              <span className="text-green-600">
                                planned carefully, executed efficiently, and evaluated
                              </span>{" "}
                              results.
                            </li>
                            <li>
                              • He <span className="text-green-600">arrived early, checked in, and went</span> to his
                              room.
                            </li>
                            <li>
                              • The company{" "}
                              <span className="text-green-600">
                                researched the market, developed the product, and launched
                              </span>{" "}
                              it.
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: Consistent verb tense throughout the series.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-yellow-600">Voice Inconsistency</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Incorrect Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • The manager{" "}
                              <span className="text-red-600">
                                reviewed the report, analyzed the data, and recommendations were made
                              </span>
                              .
                            </li>
                            <li>
                              • She{" "}
                              <span className="text-red-600">
                                completed the project, submitted the results, and praise was received
                              </span>
                              .
                            </li>
                            <li>
                              • The team{" "}
                              <span className="text-red-600">
                                identified problems, developed solutions, and implementation was begun
                              </span>
                              .
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: Mixing active and passive voice in parallel structures.
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Corrected Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • The manager{" "}
                              <span className="text-green-600">
                                reviewed the report, analyzed the data, and made recommendations
                              </span>
                              .
                            </li>
                            <li>
                              • She{" "}
                              <span className="text-green-600">
                                completed the project, submitted the results, and received praise
                              </span>
                              .
                            </li>
                            <li>
                              • The team{" "}
                              <span className="text-green-600">
                                identified problems, developed solutions, and began implementation
                              </span>
                              .
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: Consistent active voice throughout the series.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">5. Faulty Parallelism in Complex Structures</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    More complex sentences with multiple clauses or phrases require careful attention to parallel
                    structure.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-indigo-600">Unparallel Clause Structures</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Incorrect Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • I know{" "}
                              <span className="text-red-600">
                                that she is talented, she works hard, and her dedication
                              </span>
                              .
                            </li>
                            <li>
                              • The report shows{" "}
                              <span className="text-red-600">
                                what we accomplished, how we did it, and the importance
                              </span>
                              .
                            </li>
                            <li>
                              • She is someone{" "}
                              <span className="text-red-600">
                                who works hard, thinks creatively, and leadership skills
                              </span>
                              .
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: Mixing clauses with phrases or single words.
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Corrected Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • I know{" "}
                              <span className="text-green-600">
                                that she is talented, that she works hard, and that she is dedicated
                              </span>
                              .
                            </li>
                            <li>
                              • The report shows{" "}
                              <span className="text-green-600">
                                what we accomplished, how we did it, and why it matters
                              </span>
                              .
                            </li>
                            <li>
                              • She is someone{" "}
                              <span className="text-green-600">
                                who works hard, who thinks creatively, and who leads effectively
                              </span>
                              .
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: All elements are now parallel clauses.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">6. Preposition Parallelism Errors</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    When using parallel prepositional phrases, maintain consistency in preposition choice and structure.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-teal-600">Inconsistent Preposition Patterns</h5>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div className="bg-red-50 dark:bg-red-950 p-4 rounded">
                          <p className="font-semibold text-red-600 mb-2">Incorrect Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • She succeeded{" "}
                              <span className="text-red-600">
                                through hard work, with determination, and by staying focused
                              </span>
                              .
                            </li>
                            <li>
                              • The book is{" "}
                              <span className="text-red-600">on the shelf, in the library, and under fiction</span>.
                            </li>
                            <li>
                              • He is known{" "}
                              <span className="text-red-600">
                                for his expertise, by his colleagues, and throughout the industry
                              </span>
                              .
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Problem: Mixing different preposition patterns in parallel structures.
                          </p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 p-4 rounded">
                          <p className="font-semibold text-green-600 mb-2">Corrected Examples:</p>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • She succeeded{" "}
                              <span className="text-green-600">
                                through hard work, through determination, and through focus
                              </span>
                              .
                            </li>
                            <li>
                              • The book is{" "}
                              <span className="text-green-600">
                                on the shelf, in the library, and under the fiction section
                              </span>
                              .
                            </li>
                            <li>
                              • He is known{" "}
                              <span className="text-green-600">
                                for his expertise, for his reliability, and for his industry knowledge
                              </span>
                              .
                            </li>
                          </ul>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                            Solution: Consistent preposition patterns throughout.
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
                    <span className="font-semibold">Master series recognition:</span> Immediately check for parallel
                    structure when you see lists or series.
                  </li>
                  <li>
                    <span className="font-semibold">Memorize correlative pairs:</span> Know the common correlative
                    conjunctions and their requirements.
                  </li>
                  <li>
                    <span className="font-semibold">Check verb consistency:</span> Ensure tense and voice remain
                    consistent in parallel structures.
                  </li>
                  <li>
                    <span className="font-semibold">Watch for mixed forms:</span> Don't mix gerunds with infinitives, or
                    adjectives with clauses.
                  </li>
                  <li>
                    <span className="font-semibold">Test with substitution:</span> Replace complex elements with simple
                    ones to check parallelism.
                  </li>
                  <li>
                    <span className="font-semibold">Maintain preposition patterns:</span> Keep prepositional phrase
                    structures consistent.
                  </li>
                </ul>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Exam Strategy</AlertTitle>
                <AlertDescription>
                  When tackling parallelism questions, first identify what elements are meant to be parallel, then check
                  if they use the same grammatical form. Pay special attention to correlative conjunctions and series of
                  three or more items, as these are the most commonly tested parallelism structures.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
