import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, AlertTriangle, Lightbulb, BookOpen, FileText } from "lucide-react"

export function IdiomsPhraseTheory() {
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600">Idioms & Phrases</CardTitle>
        <CardDescription>
          Master the art of idiomatic expressions to enhance your language fluency and comprehension
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
              <h3 className="text-xl font-semibold text-blue-600">Understanding Idioms & Phrases</h3>
              <p className="text-base leading-relaxed">
                Idioms and phrases are expressions whose meanings cannot be understood from the individual words that
                make them up. They are essential components of natural, fluent English and appear frequently in both
                spoken and written communication, including competitive exams.
              </p>

              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold mb-3">Core Characteristics of Idioms</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Non-literal Meaning</h5>
                    <p className="text-sm">The meaning differs from the literal interpretation</p>
                    <p className="text-sm italic">
                      "Break a leg" means <span className="text-blue-600 font-semibold">"good luck"</span>, not
                      literally breaking a leg.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Fixed Structure</h5>
                    <p className="text-sm">Words cannot be changed or rearranged</p>
                    <p className="text-sm italic">
                      "Spill the beans" cannot become <span className="text-red-600">"spill the peas"</span>.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Cultural Context</h5>
                    <p className="text-sm">Often rooted in cultural or historical references</p>
                    <p className="text-sm italic">
                      "Don't count your chickens before they hatch" comes from farming wisdom.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Memorization Required</h5>
                    <p className="text-sm">Must be learned as complete units</p>
                    <p className="text-sm italic">Cannot be translated word-for-word from other languages.</p>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-6">Comprehensive Types of Idioms & Phrases</h4>

              <div className="space-y-4">
                <div className="pl-6 border-l-4 border-blue-200 dark:border-blue-800">
                  <h5 className="font-semibold text-lg">1. Body Part Idioms</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Expressions using parts of the human body to convey abstract meanings
                  </p>

                  <div className="grid gap-4 md:grid-cols-2 mt-3">
                    <div>
                      <h6 className="font-medium text-blue-600">Head & Face</h6>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Keep your head above water</span> - Stay out
                          of trouble
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Face the music</span> - Accept consequences
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Head over heels</span> - Completely in love
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Save face</span> - Avoid embarrassment
                        </p>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-medium text-blue-600">Hands & Arms</h6>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Lend a hand</span> - Help someone
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Cost an arm and a leg</span> - Very expensive
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Give someone a hand</span> - Applaud or help
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Twist someone's arm</span> - Persuade
                          forcefully
                        </p>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-medium text-blue-600">Eyes & Ears</h6>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Turn a blind eye</span> - Ignore deliberately
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">All ears</span> - Listening attentively
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Eye to eye</span> - In agreement
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">In one ear and out the other</span> - Not
                          paying attention
                        </p>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-medium text-blue-600">Heart & Soul</h6>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Heart of gold</span> - Very kind person
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Pour your heart out</span> - Express feelings
                          openly
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Heart and soul</span> - Completely, with full
                          effort
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Break someone's heart</span> - Cause emotional
                          pain
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-green-200 dark:border-green-800">
                  <h5 className="font-semibold text-lg">2. Animal Idioms</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Expressions using animal characteristics to describe human behavior or situations
                  </p>

                  <div className="grid gap-4 md:grid-cols-2 mt-3">
                    <div>
                      <h6 className="font-medium text-green-600">Common Animals</h6>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Kill two birds with one stone</span> -
                          Accomplish two things at once
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Let the cat out of the bag</span> - Reveal a
                          secret
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Hold your horses</span> - Wait, be patient
                        </p>
                        <p className="text-sm">
                          •{" "}
                          <span className="text-green-600 font-semibold">
                            Don't count your chickens before they hatch
                          </span>{" "}
                          - Don't assume success
                        </p>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-medium text-green-600">Wild Animals</h6>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">The elephant in the room</span> - Obvious
                          problem ignored
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">A wolf in sheep's clothing</span> - Dangerous
                          person appearing harmless
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Don't look a gift horse in the mouth</span> -
                          Don't criticize a gift
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Like a fish out of water</span> -
                          Uncomfortable in unfamiliar situation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-purple-200 dark:border-purple-800">
                  <h5 className="font-semibold text-lg">3. Color Idioms</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Expressions using colors to convey emotions, states, or characteristics
                  </p>

                  <div className="grid gap-4 md:grid-cols-2 mt-3">
                    <div>
                      <h6 className="font-medium text-purple-600">Primary Colors</h6>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">See red</span> - Become very angry
                        </p>
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Out of the blue</span> - Unexpectedly
                        </p>
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Green with envy</span> - Very jealous
                        </p>
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Red tape</span> - Bureaucratic procedures
                        </p>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-medium text-purple-600">Other Colors</h6>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Black sheep</span> - Family outcast
                        </p>
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">White lie</span> - Harmless untruth
                        </p>
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Golden opportunity</span> - Excellent chance
                        </p>
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Silver lining</span> - Positive aspect of
                          bad situation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-orange-200 dark:border-orange-800">
                  <h5 className="font-semibold text-lg">4. Food & Cooking Idioms</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Expressions using food and cooking processes to describe various situations
                  </p>

                  <div className="grid gap-4 md:grid-cols-2 mt-3">
                    <div>
                      <h6 className="font-medium text-orange-600">Food Items</h6>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-orange-600 font-semibold">Spill the beans</span> - Reveal a secret
                        </p>
                        <p className="text-sm">
                          • <span className="text-orange-600 font-semibold">Piece of cake</span> - Very easy
                        </p>
                        <p className="text-sm">
                          • <span className="text-orange-600 font-semibold">Sour grapes</span> - Pretending not to want
                          something
                        </p>
                        <p className="text-sm">
                          • <span className="text-orange-600 font-semibold">The apple of my eye</span> - Someone very
                          dear
                        </p>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-medium text-orange-600">Cooking Processes</h6>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-orange-600 font-semibold">In hot water</span> - In trouble
                        </p>
                        <p className="text-sm">
                          • <span className="text-orange-600 font-semibold">Stir up trouble</span> - Cause problems
                        </p>
                        <p className="text-sm">
                          • <span className="text-orange-600 font-semibold">Half-baked idea</span> - Poorly thought out
                          plan
                        </p>
                        <p className="text-sm">
                          • <span className="text-orange-600 font-semibold">Cook up a storm</span> - Prepare food
                          enthusiastically
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-teal-200 dark:border-teal-800">
                  <h5 className="font-semibold text-lg">5. Weather & Nature Idioms</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Expressions using weather phenomena and natural elements
                  </p>

                  <div className="grid gap-4 md:grid-cols-2 mt-3">
                    <div>
                      <h6 className="font-medium text-teal-600">Weather Conditions</h6>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-teal-600 font-semibold">Break the ice</span> - Start a conversation
                        </p>
                        <p className="text-sm">
                          • <span className="text-teal-600 font-semibold">Storm in a teacup</span> - Big fuss over small
                          matter
                        </p>
                        <p className="text-sm">
                          • <span className="text-teal-600 font-semibold">Rain on someone's parade</span> - Spoil
                          someone's plans
                        </p>
                        <p className="text-sm">
                          • <span className="text-teal-600 font-semibold">Under the weather</span> - Feeling unwell
                        </p>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-medium text-teal-600">Natural Elements</h6>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-teal-600 font-semibold">Between a rock and a hard place</span> -
                          Difficult choice
                        </p>
                        <p className="text-sm">
                          • <span className="text-teal-600 font-semibold">Go with the flow</span> - Accept the situation
                        </p>
                        <p className="text-sm">
                          • <span className="text-teal-600 font-semibold">Move mountains</span> - Achieve the impossible
                        </p>
                        <p className="text-sm">
                          • <span className="text-teal-600 font-semibold">Tip of the iceberg</span> - Small visible part
                          of larger problem
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-indigo-200 dark:border-indigo-800">
                  <h5 className="font-semibold text-lg">6. Money & Business Idioms</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Expressions related to financial and business contexts
                  </p>

                  <div className="grid gap-4 md:grid-cols-2 mt-3">
                    <div>
                      <h6 className="font-medium text-indigo-600">Money Expressions</h6>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-indigo-600 font-semibold">Time is money</span> - Time is valuable
                        </p>
                        <p className="text-sm">
                          • <span className="text-indigo-600 font-semibold">Money talks</span> - Wealth has influence
                        </p>
                        <p className="text-sm">
                          • <span className="text-indigo-600 font-semibold">Break the bank</span> - Cost too much
                        </p>
                        <p className="text-sm">
                          • <span className="text-indigo-600 font-semibold">Penny for your thoughts</span> - What are
                          you thinking?
                        </p>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-medium text-indigo-600">Business Context</h6>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-indigo-600 font-semibold">Cut corners</span> - Do something cheaply
                        </p>
                        <p className="text-sm">
                          • <span className="text-indigo-600 font-semibold">Bottom line</span> - Most important point
                        </p>
                        <p className="text-sm">
                          • <span className="text-indigo-600 font-semibold">Get down to business</span> - Start working
                          seriously
                        </p>
                        <p className="text-sm">
                          • <span className="text-indigo-600 font-semibold">Close the deal</span> - Complete an
                          agreement
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-6">Advanced Idiomatic Concepts</h4>

              <div className="space-y-4">
                <div className="pl-6 border-l-4 border-pink-200 dark:border-pink-800">
                  <h5 className="font-semibold">Phrasal Verbs vs. Idioms</h5>
                  <div className="mt-3 space-y-2">
                    <div>
                      <h6 className="font-medium">Phrasal Verbs</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Verb + preposition/adverb with specific meaning
                      </p>
                      <p className="text-sm italic">Look up (search), give up (quit), put off (postpone)</p>
                    </div>
                    <div>
                      <h6 className="font-medium">True Idioms</h6>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Complete expressions with non-literal meanings
                      </p>
                      <p className="text-sm italic">Break a leg (good luck), spill the beans (reveal secret)</p>
                    </div>
                  </div>
                </div>

                <div className="pl-6 border-l-4 border-yellow-200 dark:border-yellow-800">
                  <h5 className="font-semibold">Regional and Cultural Variations</h5>
                  <div className="mt-3 space-y-2">
                    <div>
                      <h6 className="font-medium">American vs. British Idioms</h6>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded mt-2">
                        <p className="text-sm">
                          • <span className="text-yellow-600 font-semibold">American:</span> "Piece of cake" vs.{" "}
                          <span className="text-yellow-600 font-semibold">British:</span> "Easy as pie"
                        </p>
                        <p className="text-sm">
                          • <span className="text-yellow-600 font-semibold">American:</span> "Hit a home run" vs.{" "}
                          <span className="text-yellow-600 font-semibold">British:</span> "Hit it for six"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 mt-6">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Mastery Principle</AlertTitle>
                <AlertDescription>
                  Mastering idioms requires understanding their cultural context, memorizing their fixed forms, and
                  recognizing when they're appropriate to use. Focus on learning idioms in meaningful groups and
                  practice using them in context rather than memorizing isolated definitions.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-4 mt-4">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600">Comprehensive Idioms & Phrases Examples</h3>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">High-Frequency Exam Idioms</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-blue-600">Success & Achievement</h5>
                    <div className="grid gap-3 md:grid-cols-2 mt-2">
                      <div className="space-y-2">
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Hit the nail on the head</span> - Be exactly
                          right
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Her analysis hit the nail on the head.
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Strike while the iron is hot</span> - Act at
                          the right moment
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          He struck while the iron was hot and got the promotion.
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Go the extra mile</span> - Make additional
                          effort
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          She always goes the extra mile for her clients.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Ace in the hole</span> - Secret advantage
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          His experience was his ace in the hole.
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">Hit the jackpot</span> - Achieve great success
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          The startup hit the jackpot with their new app.
                        </p>
                        <p className="text-sm">
                          • <span className="text-blue-600 font-semibold">On cloud nine</span> - Extremely happy
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          She was on cloud nine after the good news.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-green-600">Difficulty & Challenges</h5>
                    <div className="grid gap-3 md:grid-cols-2 mt-2">
                      <div className="space-y-2">
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Uphill battle</span> - Difficult struggle
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Convincing them was an uphill battle.
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Back to the drawing board</span> - Start over
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          The plan failed, so it's back to the drawing board.
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Bite off more than you can chew</span> - Take
                          on too much
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          He bit off more than he could chew with three projects.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Between a rock and a hard place</span> -
                          Difficult choice
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          She was between a rock and a hard place.
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Walking on thin ice</span> - In a risky
                          situation
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          After the mistake, he was walking on thin ice.
                        </p>
                        <p className="text-sm">
                          • <span className="text-green-600 font-semibold">Burn the midnight oil</span> - Work late into
                          the night
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Students burn the midnight oil before exams.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-purple-600">Communication & Relationships</h5>
                    <div className="grid gap-3 md:grid-cols-2 mt-2">
                      <div className="space-y-2">
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Break the ice</span> - Start a conversation
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">He told a joke to break the ice.</p>
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Bury the hatchet</span> - Make peace
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          They decided to bury the hatchet after years.
                        </p>
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Get it off your chest</span> - Express
                          feelings
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">She needed to get it off her chest.</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Speak your mind</span> - Express opinions
                          freely
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Don't hesitate to speak your mind.</p>
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">Clear the air</span> - Resolve
                          misunderstandings
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">The meeting helped clear the air.</p>
                        <p className="text-sm">
                          • <span className="text-purple-600 font-semibold">See eye to eye</span> - Agree completely
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">They don't always see eye to eye.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold mb-4">Business & Professional Context</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-blue-600">Workplace Idioms</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • <span className="text-blue-600 font-semibold">Think outside the box</span> - Be creative and
                        innovative
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        The company encourages employees to think outside the box when solving problems.
                      </p>

                      <p className="text-sm">
                        • <span className="text-blue-600 font-semibold">Get the ball rolling</span> - Start something
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        Let's get the ball rolling on this new project immediately.
                      </p>

                      <p className="text-sm">
                        • <span className="text-blue-600 font-semibold">Cut to the chase</span> - Get to the point
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        We don't have much time, so let's cut to the chase.
                      </p>

                      <p className="text-sm">
                        • <span className="text-blue-600 font-semibold">Touch base</span> - Make contact
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        I'll touch base with you next week about the proposal.
                      </p>

                      <p className="text-sm">
                        • <span className="text-blue-600 font-semibold">Move the needle</span> - Make significant
                        progress
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        This initiative should really move the needle on our sales figures.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-green-600">Meeting & Negotiation Idioms</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • <span className="text-green-600 font-semibold">Bring to the table</span> - Contribute
                        something valuable
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        What unique skills do you bring to the table?
                      </p>

                      <p className="text-sm">
                        • <span className="text-green-600 font-semibold">On the same page</span> - In agreement
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        Let's make sure we're all on the same page before proceeding.
                      </p>

                      <p className="text-sm">
                        • <span className="text-green-600 font-semibold">Seal the deal</span> - Finalize an agreement
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        The handshake sealed the deal between the two companies.
                      </p>

                      <p className="text-sm">
                        • <span className="text-green-600 font-semibold">Call the shots</span> - Be in charge
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        As the project manager, she calls the shots on all major decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="text-lg font-semibold mb-4">Academic & Educational Context</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-green-600">Learning & Study Idioms</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • <span className="text-green-600 font-semibold">Hit the books</span> - Study intensively
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        With exams approaching, it's time to hit the books.
                      </p>

                      <p className="text-sm">
                        • <span className="text-green-600 font-semibold">Learn the ropes</span> - Understand how things
                        work
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        New students need time to learn the ropes at university.
                      </p>

                      <p className="text-sm">
                        • <span className="text-green-600 font-semibold">Grasp at straws</span> - Try anything in
                        desperation
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        Without proper preparation, he was grasping at straws during the exam.
                      </p>

                      <p className="text-sm">
                        • <span className="text-green-600 font-semibold">Pass with flying colors</span> - Succeed
                        excellently
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        After months of preparation, she passed the test with flying colors.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-blue-600">Knowledge & Understanding Idioms</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • <span className="text-blue-600 font-semibold">Get to the bottom of</span> - Discover the truth
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        The researcher was determined to get to the bottom of the mystery.
                      </p>

                      <p className="text-sm">
                        • <span className="text-blue-600 font-semibold">Connect the dots</span> - See relationships
                        between things
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        Once you connect the dots, the pattern becomes clear.
                      </p>

                      <p className="text-sm">
                        • <span className="text-blue-600 font-semibold">Food for thought</span> - Something to think
                        about
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        The professor's lecture gave us plenty of food for thought.
                      </p>

                      <p className="text-sm">
                        • <span className="text-blue-600 font-semibold">Shed light on</span> - Clarify or explain
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        The new evidence shed light on the historical event.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h4 className="text-lg font-semibold mb-4">Time & Urgency Idioms</h4>

                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-yellow-600">Time-Related Expressions</h5>
                    <div className="space-y-2 mt-2">
                      <p className="text-sm">
                        • <span className="text-yellow-600 font-semibold">In the nick of time</span> - Just in time
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        The ambulance arrived in the nick of time to save the patient.
                      </p>

                      <p className="text-sm">
                        • <span className="text-yellow-600 font-semibold">Time flies</span> - Time passes quickly
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        Time flies when you're having fun at the party.
                      </p>

                      <p className="text-sm">
                        • <span className="text-yellow-600 font-semibold">Better late than never</span> - It's good to
                        do something even if delayed
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        He finally apologized - better late than never.
                      </p>

                      <p className="text-sm">
                        • <span className="text-yellow-600 font-semibold">Around the clock</span> - Continuously, 24
                        hours
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        The medical team worked around the clock to help patients.
                      </p>

                      <p className="text-sm">
                        • <span className="text-yellow-600 font-semibold">Once in a blue moon</span> - Very rarely
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                        We only see each other once in a blue moon now.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-950 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="text-lg font-semibold mb-4">Contextual Usage Examples</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-red-600">Formal Writing Context</h5>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-red-300 mt-2">
                      <p className="text-sm italic">
                        "The research findings <span className="text-red-600 font-semibold">shed light on</span>{" "}
                        previously unexplored aspects of the phenomenon. However, we must{" "}
                        <span className="text-red-600 font-semibold">take these results with a grain of salt</span>{" "}
                        until further studies can <span className="text-red-600 font-semibold">corroborate</span> our
                        conclusions."
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-red-600">Informal Conversation Context</h5>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-red-300 mt-2">
                      <p className="text-sm italic">
                        "I was <span className="text-red-600 font-semibold">over the moon</span> when I got the job
                        offer! It really was <span className="text-red-600 font-semibold">a blessing in disguise</span>{" "}
                        that my previous application didn't work out. Now I need to{" "}
                        <span className="text-red-600 font-semibold">buckle down</span> and prove myself."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="shortcuts" className="space-y-4 mt-4">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600">Strategic Approaches to Mastering Idioms</h3>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h4 className="flex items-center text-lg font-semibold mb-4">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                  Exam-Focused Learning Strategies
                </h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-yellow-700 dark:text-yellow-300">
                      1. Frequency-Based Prioritization
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Focus on idioms that appear most frequently in competitive exams and standardized tests.
                    </p>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-yellow-300">
                      <h6 className="font-medium mb-2">High-Priority Idioms for Exams:</h6>
                      <div className="grid gap-2 md:grid-cols-2">
                        <div>
                          <p className="text-sm">• Break the ice</p>
                          <p className="text-sm">• Piece of cake</p>
                          <p className="text-sm">• Hit the nail on the head</p>
                          <p className="text-sm">• Spill the beans</p>
                          <p className="text-sm">• Cost an arm and a leg</p>
                        </div>
                        <div>
                          <p className="text-sm">• Once in a blue moon</p>
                          <p className="text-sm">• Break a leg</p>
                          <p className="text-sm">• Let the cat out of the bag</p>
                          <p className="text-sm">• Bite the bullet</p>
                          <p className="text-sm">• Kill two birds with one stone</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-yellow-700 dark:text-yellow-300">
                      2. Thematic Clustering Method
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Group idioms by themes to create mental associations and improve retention.
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded">
                        <h6 className="font-medium text-blue-600">Success Theme</h6>
                        <p className="text-xs">• Hit the jackpot</p>
                        <p className="text-xs">• Strike gold</p>
                        <p className="text-xs">• Pass with flying colors</p>
                        <p className="text-xs">• Go the extra mile</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
                        <h6 className="font-medium text-green-600">Difficulty Theme</h6>
                        <p className="text-xs">• Uphill battle</p>
                        <p className="text-xs">• Between a rock and a hard place</p>
                        <p className="text-xs">• Back to the drawing board</p>
                        <p className="text-xs">• Bite off more than you can chew</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-yellow-700 dark:text-yellow-300">3. Context-Based Learning</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Learn idioms within realistic contexts rather than as isolated phrases.
                    </p>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-yellow-300">
                      <h6 className="font-medium mb-2">Contextual Learning Example:</h6>
                      <p className="text-sm italic mb-2">
                        Instead of memorizing:{" "}
                        <span className="text-red-600">"Break the ice = start conversation"</span>
                      </p>
                      <p className="text-sm italic">
                        Learn in context:{" "}
                        <span className="text-green-600">
                          "At the networking event, John told a funny story to break the ice with potential clients."
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold mb-4">Memory Enhancement Techniques</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Visual Association Method</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Create vivid mental images to remember idioms more effectively.
                    </p>
                    <div className="space-y-2">
                      <div className="bg-white dark:bg-gray-900 p-3 rounded">
                        <p className="text-sm">
                          <span className="font-semibold">Idiom:</span> "It's raining cats and dogs"
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold">Visual:</span> Imagine cats and dogs literally falling from
                          the sky
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold">Meaning:</span> Heavy rain
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-900 p-3 rounded">
                        <p className="text-sm">
                          <span className="font-semibold">Idiom:</span> "Don't count your chickens before they hatch"
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold">Visual:</span> Picture someone counting eggs that haven't
                          hatched yet
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold">Meaning:</span> Don't assume success before it happens
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300">Etymology and Origin Stories</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Understanding the historical origins of idioms helps with retention and proper usage.
                    </p>
                    <div className="space-y-2">
                      <div className="bg-white dark:bg-gray-900 p-3 rounded">
                        <p className="text-sm">
                          <span className="font-semibold">Idiom:</span> "Break a leg"
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold">Origin:</span> Theater superstition - saying "good luck" was
                          considered bad luck
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold">Usage:</span> Wish someone good luck, especially in
                          performance
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-900 p-3 rounded">
                        <p className="text-sm">
                          <span className="font-semibold">Idiom:</span> "Bite the bullet"
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold">Origin:</span> Soldiers bit bullets during surgery without
                          anesthesia
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold">Usage:</span> Face a difficult situation with courage
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="text-lg font-semibold mb-4">Exam-Specific Strategies</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-green-700 dark:text-green-300">Question Type Recognition</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Identify common ways idioms are tested in competitive exams.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-gray-900 p-3 rounded">
                        <h6 className="font-medium">Type 1: Meaning Identification</h6>
                        <p className="text-sm italic">"What does 'break the ice' mean in the given context?"</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Strategy: Focus on context clues and eliminate literal interpretations
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-900 p-3 rounded">
                        <h6 className="font-medium">Type 2: Appropriate Usage</h6>
                        <p className="text-sm italic">"Choose the sentence where 'piece of cake' is used correctly."</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Strategy: Check if the idiom fits the context and register (formal/informal)
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-900 p-3 rounded">
                        <h6 className="font-medium">Type 3: Synonym/Replacement</h6>
                        <p className="text-sm italic">"Replace the underlined idiom with its closest meaning."</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Strategy: Understand the precise meaning and emotional tone
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-green-700 dark:text-green-300">Elimination Techniques</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Use systematic elimination when unsure about idiom meanings.
                    </p>
                    <div className="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-green-300">
                      <ol className="list-decimal pl-4 space-y-1 text-sm">
                        <li>Eliminate obviously literal interpretations</li>
                        <li>Consider the emotional tone (positive/negative/neutral)</li>
                        <li>Check if the idiom fits the formality level of the context</li>
                        <li>Look for context clues that support or contradict meanings</li>
                        <li>Choose the option that makes the most logical sense</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Pro Tip</AlertTitle>
                <AlertDescription>
                  Create a personal idiom journal with three columns: the idiom, its meaning, and a memorable example
                  sentence. Review this journal for 10 minutes daily, focusing on 5-10 new idioms each week. This
                  systematic approach ensures long-term retention and proper usage understanding.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="mistakes" className="space-y-4 mt-4">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-600">Common Mistakes with Idioms & Phrases</h3>

              <div className="bg-red-50 dark:bg-red-950 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="flex items-center text-lg font-semibold mb-4">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                  Critical Errors to Avoid
                </h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-red-700 dark:text-red-300">
                      1. Mixing or Blending Different Idioms
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Combining parts of different idioms creates nonsensical expressions that confuse meaning.
                    </p>

                    <div className="space-y-3">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-red-100 dark:bg-red-900 p-3 rounded">
                          <p className="font-semibold text-red-600">❌ Incorrect</p>
                          <p className="text-sm">"We'll burn that bridge when we come to it."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            (Mixing "burn bridges" + "cross that bridge when we come to it")
                          </p>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
                          <p className="font-semibold text-green-600">✅ Correct</p>
                          <p className="text-sm">"We'll cross that bridge when we come to it."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            (Deal with problems when they arise)
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-red-100 dark:bg-red-900 p-3 rounded">
                          <p className="font-semibold text-red-600">❌ Incorrect</p>
                          <p className="text-sm">"It's not rocket surgery to understand this."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            (Mixing "rocket science" + "brain surgery")
                          </p>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
                          <p className="font-semibold text-green-600">✅ Correct</p>
                          <p className="text-sm">"It's not rocket science to understand this."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">(It's not difficult to understand)</p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-red-100 dark:bg-red-900 p-3 rounded">
                          <p className="font-semibold text-red-600">❌ Incorrect</p>
                          <p className="text-sm">"Don't look a gift horse in the eye."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            (Mixing "gift horse in the mouth" + "look in the eye")
                          </p>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
                          <p className="font-semibold text-green-600">✅ Correct</p>
                          <p className="text-sm">"Don't look a gift horse in the mouth."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            (Don't criticize something given freely)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-red-700 dark:text-red-300">2. Altering Fixed Idiom Structures</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Changing words, word order, or grammatical structure destroys the idiom's meaning.
                    </p>

                    <div className="space-y-3">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-red-100 dark:bg-red-900 p-3 rounded">
                          <p className="font-semibold text-red-600">❌ Incorrect</p>
                          <p className="text-sm">"She's as busy as a beaver."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">(Wrong animal - should be "bee")</p>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
                          <p className="font-semibold text-green-600">✅ Correct</p>
                          <p className="text-sm">"She's as busy as a bee."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">(Very busy and active)</p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-red-100 dark:bg-red-900 p-3 rounded">
                          <p className="font-semibold text-red-600">❌ Incorrect</p>
                          <p className="text-sm">"Let's not count our chickens until they're hatched."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">(Wrong preposition and verb form)</p>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
                          <p className="font-semibold text-green-600">✅ Correct</p>
                          <p className="text-sm">"Let's not count our chickens before they hatch."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">(Don't assume success prematurely)</p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-red-100 dark:bg-red-900 p-3 rounded">
                          <p className="font-semibold text-red-600">❌ Incorrect</p>
                          <p className="text-sm">"The early worm catches the bird."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">(Reversed the animals completely)</p>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
                          <p className="font-semibold text-green-600">✅ Correct</p>
                          <p className="text-sm">"The early bird catches the worm."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">(Being early leads to success)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-red-700 dark:text-red-300">3. Inappropriate Context Usage</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Using idioms in wrong contexts, especially regarding formality levels or emotional
                      appropriateness.
                    </p>

                    <div className="space-y-3">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-red-100 dark:bg-red-900 p-3 rounded">
                          <p className="font-semibold text-red-600">❌ Inappropriate</p>
                          <p className="text-sm">"The CEO kicked the bucket last week."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            (Too casual/disrespectful for formal announcement)
                          </p>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
                          <p className="font-semibold text-green-600">✅ Appropriate</p>
                          <p className="text-sm">"The CEO passed away last week."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            (Respectful and appropriate for formal context)
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-red-100 dark:bg-red-900 p-3 rounded">
                          <p className="font-semibold text-red-600">❌ Inappropriate</p>
                          <p className="text-sm">"The research methodology is totally awesome."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            (Too informal for academic writing)
                          </p>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
                          <p className="font-semibold text-green-600">✅ Appropriate</p>
                          <p className="text-sm">"The research methodology is highly effective."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            (Formal and appropriate for academic context)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-red-700 dark:text-red-300">4. Literal Translation Errors</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Directly translating idioms from other languages creates meaningless expressions in English.
                    </p>

                    <div className="space-y-3">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-red-100 dark:bg-red-900 p-3 rounded">
                          <p className="font-semibold text-red-600">❌ Incorrect Translation</p>
                          <p className="text-sm">"I have other cats to whip."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            (Direct translation from French "avoir d'autres chats à fouetter")
                          </p>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
                          <p className="font-semibold text-green-600">✅ English Equivalent</p>
                          <p className="text-sm">"I have other fish to fry."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">(I have other things to do)</p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-red-100 dark:bg-red-900 p-3 rounded">
                          <p className="font-semibold text-red-600">❌ Incorrect Translation</p>
                          <p className="text-sm">"The walls have mice."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            (Literal translation from various languages)
                          </p>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
                          <p className="font-semibold text-green-600">✅ English Equivalent</p>
                          <p className="text-sm">"The walls have ears."</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            (Someone might be listening secretly)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                <h4 className="text-lg font-semibold mb-4">Exam-Specific Error Patterns</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300">
                      Preposition Errors in Phrasal Idioms
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Using incorrect prepositions with phrasal verb idioms is a common exam trap.
                    </p>

                    <div className="space-y-2">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-red-100 dark:bg-red-900 p-3 rounded">
                          <p className="font-semibold text-red-600">❌ Wrong Preposition</p>
                          <p className="text-sm">"I look forward for your reply."</p>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
                          <p className="font-semibold text-green-600">✅ Correct Preposition</p>
                          <p className="text-sm">"I look forward to your reply."</p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-red-100 dark:bg-red-900 p-3 rounded">
                          <p className="font-semibold text-red-600">❌ Wrong Preposition</p>
                          <p className="text-sm">"She ran out from money."</p>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
                          <p className="font-semibold text-green-600">✅ Correct Preposition</p>
                          <p className="text-sm">"She ran out of money."</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300">
                      Meaning Confusion with Similar Idioms
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Confusing idioms that sound similar but have different meanings.
                    </p>

                    <div className="space-y-3">
                      <div className="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-orange-300">
                        <h6 className="font-medium mb-2">Commonly Confused Pairs:</h6>
                        <div className="space-y-2 text-sm">
                          <div>
                            <p>
                              <span className="text-orange-600 font-semibold">"Look up to"</span> (admire) vs.{" "}
                              <span className="text-orange-600 font-semibold">"Look down on"</span> (despise)
                            </p>
                          </div>
                          <div>
                            <p>
                              <span className="text-orange-600 font-semibold">"Bring up"</span> (mention/raise) vs.{" "}
                              <span className="text-orange-600 font-semibold">"Bring about"</span> (cause)
                            </p>
                          </div>
                          <div>
                            <p>
                              <span className="text-orange-600 font-semibold">"Put up with"</span> (tolerate) vs.{" "}
                              <span className="text-orange-600 font-semibold">"Put down"</span> (criticize)
                            </p>
                          </div>
                          <div>
                            <p>
                              <span className="text-orange-600 font-semibold">"Get over"</span> (recover from) vs.{" "}
                              <span className="text-orange-600 font-semibold">"Get through"</span> (complete/survive)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-orange-700 dark:text-orange-300">Register Mismatch Errors</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Using informal idioms in formal contexts or vice versa.
                    </p>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded">
                        <h6 className="font-medium text-blue-600">Formal Context Idioms</h6>
                        <p className="text-xs">• Shed light on</p>
                        <p className="text-xs">• Take into account</p>
                        <p className="text-xs">• Bring to light</p>
                        <p className="text-xs">• Call into question</p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded">
                        <h6 className="font-medium text-purple-600">Informal Context Idioms</h6>
                        <p className="text-xs">• Piece of cake</p>
                        <p className="text-xs">• Spill the beans</p>
                        <p className="text-xs">• Hit the sack</p>
                        <p className="text-xs">• Chill out</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Error Prevention Strategy</AlertTitle>
                <AlertDescription>
                  To avoid idiom errors: 1) Learn idioms as complete, unchangeable units, 2) Always consider the context
                  and formality level, 3) Practice with authentic examples rather than isolated definitions, 4) Be aware
                  of common error patterns in your native language, and 5) When in doubt, choose a simpler, more direct
                  expression rather than risk using an idiom incorrectly.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
