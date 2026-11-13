"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, AlertTriangle, Lightbulb, BookOpen, FileText } from "lucide-react"
import { PartsOfSpeechExamples } from "./interactive-examples/parts-of-speech-examples"

export const PartsOfSpeechTheory = () => {
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600">Parts of Speech</CardTitle>
        <CardDescription>
          Master the eight fundamental parts of speech that form the building blocks of English grammar
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
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600">What Are Parts of Speech?</h3>
              <p>
                Parts of speech are categories that describe how words function in sentences. Every word in English
                belongs to one of eight main categories, and understanding these categories helps you construct
                grammatically correct and meaningful sentences. The classification depends on the word's function,
                meaning, and position in the sentence.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg text-center">
                  <div className="text-2xl mb-1">📝</div>
                  <h3 className="font-medium text-red-800 dark:text-red-200 text-sm">Nouns</h3>
                  <p className="text-xs text-red-600 dark:text-red-400">People, places, things</p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg text-center">
                  <div className="text-2xl mb-1">🔄</div>
                  <h3 className="font-medium text-blue-800 dark:text-blue-200 text-sm">Pronouns</h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400">Replace nouns</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg text-center">
                  <div className="text-2xl mb-1">⚡</div>
                  <h3 className="font-medium text-green-800 dark:text-green-200 text-sm">Verbs</h3>
                  <p className="text-xs text-green-600 dark:text-green-400">Action words</p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg text-center">
                  <div className="text-2xl mb-1">🎨</div>
                  <h3 className="font-medium text-yellow-800 dark:text-yellow-200 text-sm">Adjectives</h3>
                  <p className="text-xs text-yellow-600 dark:text-yellow-400">Describe nouns</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg text-center">
                  <div className="text-2xl mb-1">🚀</div>
                  <h3 className="font-medium text-purple-800 dark:text-purple-200 text-sm">Adverbs</h3>
                  <p className="text-xs text-purple-600 dark:text-purple-400">Modify verbs</p>
                </div>
                <div className="p-3 bg-pink-50 dark:bg-pink-950 rounded-lg text-center">
                  <div className="text-2xl mb-1">📍</div>
                  <h3 className="font-medium text-pink-800 dark:text-pink-200 text-sm">Prepositions</h3>
                  <p className="text-xs text-pink-600 dark:text-pink-400">Show relationships</p>
                </div>
                <div className="p-3 bg-teal-50 dark:bg-teal-950 rounded-lg text-center">
                  <div className="text-2xl mb-1">🔗</div>
                  <h3 className="font-medium text-teal-800 dark:text-teal-200 text-sm">Conjunctions</h3>
                  <p className="text-xs text-teal-600 dark:text-teal-400">Connect words</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded-lg text-center">
                  <div className="text-2xl mb-1">❗</div>
                  <h3 className="font-medium text-orange-800 dark:text-orange-200 text-sm">Interjections</h3>
                  <p className="text-xs text-orange-600 dark:text-orange-400">Express emotion</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">Comprehensive Analysis of Each Part of Speech</h4>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">1. Nouns - The Foundation of Language</h5>
                <p>Words that name people, places, things, ideas, qualities, or actions.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Types of Nouns:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Common Nouns:</strong> General names (dog, city, book, happiness)
                      </li>
                      <li>
                        <strong>Proper Nouns:</strong> Specific names (John, London, Bible, Christmas)
                      </li>
                      <li>
                        <strong>Abstract Nouns:</strong> Ideas, emotions, qualities (love, freedom, courage,
                        intelligence)
                      </li>
                      <li>
                        <strong>Concrete Nouns:</strong> Physical objects (table, apple, mountain, computer)
                      </li>
                      <li>
                        <strong>Collective Nouns:</strong> Groups (team, family, flock, committee)
                      </li>
                      <li>
                        <strong>Countable Nouns:</strong> Can be counted (books, cars, students)
                      </li>
                      <li>
                        <strong>Uncountable Nouns:</strong> Cannot be counted (water, music, advice)
                      </li>
                      <li>
                        <strong>Compound Nouns:</strong> Two or more words (toothbrush, mother-in-law, swimming pool)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md">
                    <h6 className="font-medium">Noun Functions:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Subject:</strong> The cat sleeps on the mat.
                      </li>
                      <li>
                        <strong>Direct Object:</strong> I bought a book.
                      </li>
                      <li>
                        <strong>Indirect Object:</strong> She gave him a gift.
                      </li>
                      <li>
                        <strong>Object of Preposition:</strong> The book is on the table.
                      </li>
                      <li>
                        <strong>Subject Complement:</strong> She is a teacher.
                      </li>
                      <li>
                        <strong>Object Complement:</strong> They elected him president.
                      </li>
                      <li>
                        <strong>Appositive:</strong> My friend, the doctor, arrived.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">2. Pronouns - Noun Substitutes</h5>
                <p>Words that replace nouns to avoid repetition and create smoother sentences.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Types of Pronouns:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Personal:</strong> I, you, he, she, it, we, they (and their object forms)
                      </li>
                      <li>
                        <strong>Possessive:</strong> mine, yours, his, hers, its, ours, theirs
                      </li>
                      <li>
                        <strong>Reflexive:</strong> myself, yourself, himself, herself, itself, ourselves, yourselves,
                        themselves
                      </li>
                      <li>
                        <strong>Demonstrative:</strong> this, that, these, those
                      </li>
                      <li>
                        <strong>Interrogative:</strong> who, whom, whose, which, what
                      </li>
                      <li>
                        <strong>Relative:</strong> who, whom, whose, which, that
                      </li>
                      <li>
                        <strong>Indefinite:</strong> someone, anyone, everyone, no one, something, anything, everything,
                        nothing
                      </li>
                      <li>
                        <strong>Reciprocal:</strong> each other, one another
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                    <h6 className="font-medium">Pronoun Cases:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Subjective (Nominative):</strong> Used as subjects (I, you, he, she, it, we, they)
                      </li>
                      <li>
                        <strong>Objective (Accusative):</strong> Used as objects (me, you, him, her, it, us, them)
                      </li>
                      <li>
                        <strong>Possessive:</strong> Show ownership (my, your, his, her, its, our, their)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">3. Verbs - The Action Center</h5>
                <p>Words that express actions, states, or occurrences. They are the heart of every sentence.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Types of Verbs:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Action Verbs:</strong> Express physical or mental actions (run, think, write, believe)
                      </li>
                      <li>
                        <strong>Linking Verbs:</strong> Connect subject to complement (be, seem, appear, become, feel,
                        look, sound, taste, smell)
                      </li>
                      <li>
                        <strong>Helping (Auxiliary) Verbs:</strong> Assist main verbs (have, has, had, will, would, can,
                        could, may, might, must, should, ought)
                      </li>
                      <li>
                        <strong>Modal Verbs:</strong> Express possibility, necessity, permission (can, could, may,
                        might, will, would, shall, should, must, ought to)
                      </li>
                      <li>
                        <strong>Transitive Verbs:</strong> Require a direct object (She reads books)
                      </li>
                      <li>
                        <strong>Intransitive Verbs:</strong> Do not require an object (He sleeps soundly)
                      </li>
                      <li>
                        <strong>Phrasal Verbs:</strong> Verb + particle (give up, look after, put off)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded-md">
                    <h6 className="font-medium">Verb Forms and Tenses:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Base Form:</strong> walk, eat, go
                      </li>
                      <li>
                        <strong>Past Form:</strong> walked, ate, went
                      </li>
                      <li>
                        <strong>Past Participle:</strong> walked, eaten, gone
                      </li>
                      <li>
                        <strong>Present Participle:</strong> walking, eating, going
                      </li>
                      <li>
                        <strong>Third Person Singular:</strong> walks, eats, goes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">4. Adjectives - The Descriptors</h5>
                <p>
                  Words that describe or modify nouns and pronouns, providing more information about their qualities.
                </p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Types of Adjectives:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Descriptive:</strong> Describe qualities (beautiful, tall, intelligent, red)
                      </li>
                      <li>
                        <strong>Demonstrative:</strong> Point out specific items (this, that, these, those)
                      </li>
                      <li>
                        <strong>Possessive:</strong> Show ownership (my, your, his, her, its, our, their)
                      </li>
                      <li>
                        <strong>Quantitative:</strong> Express quantity (many, few, several, some, all, no)
                      </li>
                      <li>
                        <strong>Interrogative:</strong> Ask questions (which, what, whose)
                      </li>
                      <li>
                        <strong>Articles:</strong> Specify nouns (a, an, the)
                      </li>
                      <li>
                        <strong>Comparative:</strong> Compare two items (bigger, more beautiful, better)
                      </li>
                      <li>
                        <strong>Superlative:</strong> Compare three or more (biggest, most beautiful, best)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded-md">
                    <h6 className="font-medium">Adjective Order (when using multiple adjectives):</h6>
                    <p className="text-sm mt-2">Opinion → Size → Age → Shape → Color → Origin → Material → Purpose</p>
                    <p className="text-sm italic">
                      Example: A beautiful small old round red Chinese wooden dining table
                    </p>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">5. Adverbs - The Modifiers</h5>
                <p>
                  Words that modify verbs, adjectives, other adverbs, or entire sentences, providing information about
                  how, when, where, why, or to what extent.
                </p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Types of Adverbs:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Manner:</strong> How something is done (quickly, carefully, beautifully, well)
                      </li>
                      <li>
                        <strong>Time:</strong> When something happens (now, yesterday, soon, always, never)
                      </li>
                      <li>
                        <strong>Place:</strong> Where something happens (here, there, everywhere, upstairs)
                      </li>
                      <li>
                        <strong>Frequency:</strong> How often (always, usually, often, sometimes, rarely, never)
                      </li>
                      <li>
                        <strong>Degree:</strong> To what extent (very, extremely, quite, rather, too, enough)
                      </li>
                      <li>
                        <strong>Affirmation/Negation:</strong> Yes/no responses (certainly, definitely, not, never)
                      </li>
                      <li>
                        <strong>Interrogative:</strong> Question words (when, where, why, how)
                      </li>
                      <li>
                        <strong>Conjunctive:</strong> Connect clauses (however, therefore, moreover, consequently)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-950 p-3 rounded-md">
                    <h6 className="font-medium">Adverb Formation:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Add -ly to adjectives:</strong> quick → quickly, careful → carefully
                      </li>
                      <li>
                        <strong>Spelling changes:</strong> happy → happily, gentle → gently, basic → basically
                      </li>
                      <li>
                        <strong>Irregular forms:</strong> good → well, fast → fast, hard → hard
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">6. Prepositions - The Relationship Builders</h5>
                <p>Words that show relationships between nouns/pronouns and other words in the sentence.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Types of Prepositions:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Simple:</strong> Single words (in, on, at, by, for, with, from, to, of, about)
                      </li>
                      <li>
                        <strong>Compound:</strong> Two words (into, onto, upon, within, without, throughout)
                      </li>
                      <li>
                        <strong>Complex:</strong> Multiple words (in front of, on top of, in spite of, because of)
                      </li>
                      <li>
                        <strong>Time:</strong> at 3 PM, on Monday, in January, during the meeting
                      </li>
                      <li>
                        <strong>Place:</strong> at home, on the table, in the box, under the bridge
                      </li>
                      <li>
                        <strong>Direction:</strong> to school, from work, toward the door, through the tunnel
                      </li>
                      <li>
                        <strong>Manner:</strong> by car, with care, in haste, without difficulty
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">7. Conjunctions - The Connectors</h5>
                <p>Words that join words, phrases, clauses, or sentences together.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Types of Conjunctions:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Coordinating:</strong> Join equal elements (FANBOYS: for, and, nor, but, or, yet, so)
                      </li>
                      <li>
                        <strong>Subordinating:</strong> Join dependent clauses (because, although, since, while, if,
                        when, where, unless)
                      </li>
                      <li>
                        <strong>Correlative:</strong> Work in pairs (either...or, neither...nor, both...and, not
                        only...but also)
                      </li>
                      <li>
                        <strong>Conjunctive Adverbs:</strong> Connect independent clauses (however, therefore, moreover,
                        furthermore, consequently)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">8. Interjections - The Emotion Expressers</h5>
                <p>
                  Words or phrases that express strong emotion or sudden feeling, usually followed by an exclamation
                  mark.
                </p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Types of Interjections:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Joy/Excitement:</strong> Hooray! Wow! Yay! Fantastic!
                      </li>
                      <li>
                        <strong>Surprise:</strong> Oh! Ah! What! Really!
                      </li>
                      <li>
                        <strong>Pain/Distress:</strong> Ouch! Ow! Help! Alas!
                      </li>
                      <li>
                        <strong>Approval:</strong> Bravo! Well done! Excellent!
                      </li>
                      <li>
                        <strong>Disapproval:</strong> Boo! Shame! Tsk tsk!
                      </li>
                      <li>
                        <strong>Greeting:</strong> Hello! Hi! Hey!
                      </li>
                      <li>
                        <strong>Farewell:</strong> Goodbye! Bye! See you!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Key Concept</AlertTitle>
                <AlertDescription>
                  Understanding parts of speech helps you analyze sentence structure, choose the right words, and avoid
                  grammatical errors. Many words can function as different parts of speech depending on their use in a
                  sentence. Context and function determine classification, not just the word itself.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Parts of Speech in Comprehensive Context</h3>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Nouns in Various Functions</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Subject:</strong> The <span className="text-blue-600 font-semibold">teacher</span> explained
                  the lesson clearly.
                </li>
                <li>
                  <strong>Direct Object:</strong> Students read{" "}
                  <span className="text-blue-600 font-semibold">books</span> every day.
                </li>
                <li>
                  <strong>Indirect Object:</strong> She gave the{" "}
                  <span className="text-blue-600 font-semibold">students</span> homework.
                </li>
                <li>
                  <strong>Object of Preposition:</strong> The book is on the{" "}
                  <span className="text-blue-600 font-semibold">table</span>.
                </li>
                <li>
                  <strong>Subject Complement:</strong> He became a{" "}
                  <span className="text-blue-600 font-semibold">doctor</span>.
                </li>
                <li>
                  <strong>Appositive:</strong> My friend, the{" "}
                  <span className="text-blue-600 font-semibold">engineer</span>, designed the bridge.
                </li>
                <li>
                  <strong>Possessive:</strong> The <span className="text-blue-600 font-semibold">student's</span>{" "}
                  project was excellent.
                </li>
                <li>
                  <strong>Compound:</strong> The <span className="text-blue-600 font-semibold">swimming pool</span>{" "}
                  needs cleaning.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Pronouns in Different Cases and Types</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Personal (Subject):</strong> <span className="text-blue-600 font-semibold">She</span> and{" "}
                  <span className="text-blue-600 font-semibold">I</span> went to the concert.
                </li>
                <li>
                  <strong>Personal (Object):</strong> The teacher called{" "}
                  <span className="text-blue-600 font-semibold">him</span> and{" "}
                  <span className="text-blue-600 font-semibold">me</span>.
                </li>
                <li>
                  <strong>Possessive:</strong> <span className="text-blue-600 font-semibold">Their</span> house is
                  bigger than <span className="text-blue-600 font-semibold">ours</span>.
                </li>
                <li>
                  <strong>Reflexive:</strong> He taught <span className="text-blue-600 font-semibold">himself</span> to
                  play guitar.
                </li>
                <li>
                  <strong>Demonstrative:</strong> <span className="text-blue-600 font-semibold">This</span> is better
                  than <span className="text-blue-600 font-semibold">that</span>.
                </li>
                <li>
                  <strong>Interrogative:</strong> <span className="text-blue-600 font-semibold">Who</span> called?{" "}
                  <span className="text-blue-600 font-semibold">What</span> happened?
                </li>
                <li>
                  <strong>Relative:</strong> The person <span className="text-blue-600 font-semibold">who</span> called
                  left a message.
                </li>
                <li>
                  <strong>Indefinite:</strong> <span className="text-blue-600 font-semibold">Everyone</span> should
                  bring <span className="text-blue-600 font-semibold">something</span> to share.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Verbs in Various Forms and Functions</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Action Verb:</strong> The children <span className="text-blue-600 font-semibold">play</span>{" "}
                  in the park every afternoon.
                </li>
                <li>
                  <strong>Linking Verb:</strong> The soup <span className="text-blue-600 font-semibold">tastes</span>{" "}
                  delicious.
                </li>
                <li>
                  <strong>Helping Verb:</strong> She{" "}
                  <span className="text-blue-600 font-semibold">has been studying</span> for three hours.
                </li>
                <li>
                  <strong>Modal Verb:</strong> You <span className="text-blue-600 font-semibold">should</span> finish
                  your homework first.
                </li>
                <li>
                  <strong>Transitive:</strong> The chef <span className="text-blue-600 font-semibold">prepared</span> a
                  delicious meal.
                </li>
                <li>
                  <strong>Intransitive:</strong> The baby <span className="text-blue-600 font-semibold">sleeps</span>{" "}
                  peacefully.
                </li>
                <li>
                  <strong>Phrasal Verb:</strong> Please <span className="text-blue-600 font-semibold">turn off</span>{" "}
                  the lights.
                </li>
                <li>
                  <strong>Passive Voice:</strong> The book{" "}
                  <span className="text-blue-600 font-semibold">was written</span> by a famous author.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Adjectives in Different Positions and Types</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Attributive:</strong> The <span className="text-blue-600 font-semibold">beautiful</span>{" "}
                  flowers bloom in spring.
                </li>
                <li>
                  <strong>Predicative:</strong> The flowers are{" "}
                  <span className="text-blue-600 font-semibold">beautiful</span>.
                </li>
                <li>
                  <strong>Comparative:</strong> This book is{" "}
                  <span className="text-blue-600 font-semibold">more interesting</span> than that one.
                </li>
                <li>
                  <strong>Superlative:</strong> She is the{" "}
                  <span className="text-blue-600 font-semibold">most talented</span> student in class.
                </li>
                <li>
                  <strong>Demonstrative:</strong> <span className="text-blue-600 font-semibold">These</span> apples are
                  fresh.
                </li>
                <li>
                  <strong>Possessive:</strong> <span className="text-blue-600 font-semibold">My</span> sister lives in
                  Canada.
                </li>
                <li>
                  <strong>Quantitative:</strong> <span className="text-blue-600 font-semibold">Several</span> students
                  arrived late.
                </li>
                <li>
                  <strong>Multiple Adjectives:</strong> A{" "}
                  <span className="text-blue-600 font-semibold">beautiful small old round red Chinese wooden</span>{" "}
                  table.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Adverbs Modifying Different Elements</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Modifying Verb:</strong> She sings{" "}
                  <span className="text-blue-600 font-semibold">beautifully</span>.
                </li>
                <li>
                  <strong>Modifying Adjective:</strong> The test was{" "}
                  <span className="text-blue-600 font-semibold">extremely</span> difficult.
                </li>
                <li>
                  <strong>Modifying Adverb:</strong> He runs <span className="text-blue-600 font-semibold">very</span>{" "}
                  quickly.
                </li>
                <li>
                  <strong>Modifying Sentence:</strong> <span className="text-blue-600 font-semibold">Fortunately</span>,
                  we arrived on time.
                </li>
                <li>
                  <strong>Time:</strong> I will call you <span className="text-blue-600 font-semibold">tomorrow</span>.
                </li>
                <li>
                  <strong>Place:</strong> The children are playing{" "}
                  <span className="text-blue-600 font-semibold">outside</span>.
                </li>
                <li>
                  <strong>Frequency:</strong> She <span className="text-blue-600 font-semibold">always</span> arrives
                  early.
                </li>
                <li>
                  <strong>Degree:</strong> The movie was <span className="text-blue-600 font-semibold">quite</span>{" "}
                  entertaining.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Prepositions Showing Various Relationships</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Time:</strong> The meeting is <span className="text-blue-600 font-semibold">at</span> 3 PM{" "}
                  <span className="text-blue-600 font-semibold">on</span> Monday.
                </li>
                <li>
                  <strong>Place:</strong> The book is <span className="text-blue-600 font-semibold">on</span> the table{" "}
                  <span className="text-blue-600 font-semibold">in</span> the library.
                </li>
                <li>
                  <strong>Direction:</strong> We walked <span className="text-blue-600 font-semibold">to</span> the park{" "}
                  <span className="text-blue-600 font-semibold">through</span> the forest.
                </li>
                <li>
                  <strong>Manner:</strong> She completed the task{" "}
                  <span className="text-blue-600 font-semibold">with</span> great care.
                </li>
                <li>
                  <strong>Cause:</strong> The game was canceled{" "}
                  <span className="text-blue-600 font-semibold">because of</span> rain.
                </li>
                <li>
                  <strong>Purpose:</strong> He studied hard <span className="text-blue-600 font-semibold">for</span> the
                  exam.
                </li>
                <li>
                  <strong>Agent:</strong> The book was written <span className="text-blue-600 font-semibold">by</span>{" "}
                  Shakespeare.
                </li>
                <li>
                  <strong>Complex:</strong> The cat is hiding{" "}
                  <span className="text-blue-600 font-semibold">in front of</span> the sofa.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Conjunctions Connecting Elements</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Coordinating:</strong> I like tea <span className="text-blue-600 font-semibold">and</span>{" "}
                  coffee, <span className="text-blue-600 font-semibold">but</span> not juice.
                </li>
                <li>
                  <strong>Subordinating:</strong> <span className="text-blue-600 font-semibold">Although</span> it was
                  raining, we went for a walk.
                </li>
                <li>
                  <strong>Correlative:</strong> <span className="text-blue-600 font-semibold">Either</span> you come
                  with us <span className="text-blue-600 font-semibold">or</span> stay home.
                </li>
                <li>
                  <strong>Conjunctive Adverb:</strong> It was raining;{" "}
                  <span className="text-blue-600 font-semibold">however</span>, we still went out.
                </li>
                <li>
                  <strong>Time:</strong> Call me <span className="text-blue-600 font-semibold">when</span> you arrive.
                </li>
                <li>
                  <strong>Condition:</strong> <span className="text-blue-600 font-semibold">If</span> you study hard,
                  you will pass.
                </li>
                <li>
                  <strong>Contrast:</strong> <span className="text-blue-600 font-semibold">While</span> she likes
                  movies, he prefers books.
                </li>
                <li>
                  <strong>Cause:</strong> We stayed inside <span className="text-blue-600 font-semibold">because</span>{" "}
                  it was cold.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Words with Multiple Functions</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Fast:</strong> He runs <span className="text-blue-600 font-semibold">fast</span> (adverb) / A{" "}
                  <span className="text-blue-600 font-semibold">fast</span> car (adjective)
                </li>
                <li>
                  <strong>Work:</strong> I <span className="text-blue-600 font-semibold">work</span> hard (verb) / My{" "}
                  <span className="text-blue-600 font-semibold">work</span> is done (noun)
                </li>
                <li>
                  <strong>Round:</strong> A <span className="text-blue-600 font-semibold">round</span> table (adjective)
                  / <span className="text-blue-600 font-semibold">Round</span> the corner (preposition) / They{" "}
                  <span className="text-blue-600 font-semibold">round</span> the numbers (verb)
                </li>
                <li>
                  <strong>Light:</strong> Turn on the <span className="text-blue-600 font-semibold">light</span> (noun)
                  / The bag is <span className="text-blue-600 font-semibold">light</span> (adjective) / Please{" "}
                  <span className="text-blue-600 font-semibold">light</span> the candle (verb)
                </li>
                <li>
                  <strong>Well:</strong> She sings <span className="text-blue-600 font-semibold">well</span> (adverb) /
                  The <span className="text-blue-600 font-semibold">well</span> is deep (noun) / I feel{" "}
                  <span className="text-blue-600 font-semibold">well</span> (adjective)
                </li>
                <li>
                  <strong>Up:</strong> Go <span className="text-blue-600 font-semibold">up</span> the stairs
                  (preposition) / Look <span className="text-blue-600 font-semibold">up</span>! (adverb) / The{" "}
                  <span className="text-blue-600 font-semibold">up</span> escalator (adjective)
                </li>
                <li>
                  <strong>Since:</strong> I haven't seen him <span className="text-blue-600 font-semibold">since</span>{" "}
                  Monday (preposition) / <span className="text-blue-600 font-semibold">Since</span> you're here, let's
                  start (conjunction)
                </li>
                <li>
                  <strong>That:</strong> <span className="text-blue-600 font-semibold">That</span> book is mine
                  (demonstrative) / I know <span className="text-blue-600 font-semibold">that</span> you're right
                  (conjunction) / The book <span className="text-blue-600 font-semibold">that</span> I read (relative
                  pronoun)
                </li>
              </ul>
            </div>

            {/* Interactive Examples */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">🎯 Interactive Examples</h3>
              <PartsOfSpeechExamples />
            </div>
          </TabsContent>

          <TabsContent value="shortcuts" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Advanced Parts of Speech Identification Strategies</h3>

            <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-md border border-yellow-200 dark:border-yellow-800">
              <h4 className="flex items-center text-lg font-semibold">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                Comprehensive Identification System
              </h4>
              <p className="mt-2">
                Use these advanced strategies to quickly and accurately identify parts of speech in any context.
              </p>
            </div>

            <div className="space-y-4 mt-4">
              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">1. The Function-First Approach</h5>
                <p>Always determine what job the word is doing in the sentence before classifying it.</p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Quick Function Check:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Subject/Object:</strong> Likely a noun or pronoun
                    </li>
                    <li>
                      <strong>Action/State:</strong> Likely a verb
                    </li>
                    <li>
                      <strong>Describing a noun:</strong> Likely an adjective
                    </li>
                    <li>
                      <strong>Describing a verb/adjective/adverb:</strong> Likely an adverb
                    </li>
                    <li>
                      <strong>Showing relationship:</strong> Likely a preposition
                    </li>
                    <li>
                      <strong>Connecting elements:</strong> Likely a conjunction
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">2. The Substitution Test System</h5>
                <p>Replace the unknown word with a word you know to test its part of speech.</p>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Substitution Tests:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Noun Test:</strong> Can you substitute "thing," "person," or "idea"?
                    </li>
                    <li>
                      <strong>Verb Test:</strong> Can you substitute "do," "be," or "have"?
                    </li>
                    <li>
                      <strong>Adjective Test:</strong> Can you substitute "good," "big," or "red"?
                    </li>
                    <li>
                      <strong>Adverb Test:</strong> Can you substitute "quickly," "very," or "here"?
                    </li>
                    <li>
                      <strong>Pronoun Test:</strong> Can you substitute "he," "she," or "it"?
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">3. The Position Analysis Method</h5>
                <p>Use the word's position in the sentence to help determine its part of speech.</p>
                <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Position Clues:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Beginning of sentence:</strong> Often subject (noun/pronoun) or adverb
                    </li>
                    <li>
                      <strong>After "the," "a," "an":</strong> Usually a noun
                    </li>
                    <li>
                      <strong>Between article and noun:</strong> Usually an adjective
                    </li>
                    <li>
                      <strong>After subject:</strong> Usually a verb
                    </li>
                    <li>
                      <strong>End of sentence:</strong> Often object (noun/pronoun) or adverb
                    </li>
                    <li>
                      <strong>After preposition:</strong> Usually a noun or pronoun
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">4. The Morphological Analysis</h5>
                <p>Look at word endings and prefixes for clues about parts of speech.</p>
                <div className="bg-orange-50 dark:bg-orange-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Common Endings:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Noun endings:</strong> -tion, -sion, -ness, -ment, -ity, -er, -or, -ist
                    </li>
                    <li>
                      <strong>Adjective endings:</strong> -ful, -less, -ous, -ive, -able, -ible, -al, -ic
                    </li>
                    <li>
                      <strong>Adverb endings:</strong> -ly, -ward, -wise
                    </li>
                    <li>
                      <strong>Verb endings:</strong> -ize, -ify, -ate, -en
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">5. The Context Dependency Rule</h5>
                <p>Remember that the same word can be different parts of speech in different contexts.</p>
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Context Analysis Steps:</h6>
                  <ol className="list-decimal pl-5 text-sm space-y-1 mt-2">
                    <li>Identify what the word is doing in THIS specific sentence</li>
                    <li>Look at the words immediately before and after</li>
                    <li>Consider the overall meaning of the sentence</li>
                    <li>Apply the appropriate test for the suspected part of speech</li>
                    <li>Verify by checking if the sentence makes sense</li>
                  </ol>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">6. The Question Method</h5>
                <p>Ask specific questions to determine the part of speech.</p>
                <div className="bg-teal-50 dark:bg-teal-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Diagnostic Questions:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Who or what?</strong> → Noun or pronoun
                    </li>
                    <li>
                      <strong>What is happening?</strong> → Verb
                    </li>
                    <li>
                      <strong>What kind? Which one? How many?</strong> → Adjective
                    </li>
                    <li>
                      <strong>How? When? Where? To what extent?</strong> → Adverb
                    </li>
                    <li>
                      <strong>What is the relationship?</strong> → Preposition
                    </li>
                    <li>
                      <strong>What connects these elements?</strong> → Conjunction
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">7. The Elimination Strategy</h5>
                <p>When unsure, eliminate what the word definitely is NOT.</p>
                <div className="bg-pink-50 dark:bg-pink-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Elimination Process:</h6>
                  <ol className="list-decimal pl-5 text-sm space-y-1 mt-2">
                    <li>Can it be a noun? (Does it name something?)</li>
                    <li>Can it be a verb? (Does it show action or state?)</li>
                    <li>Can it be an adjective? (Does it describe a noun?)</li>
                    <li>Can it be an adverb? (Does it modify a verb, adjective, or adverb?)</li>
                    <li>Continue until only one possibility remains</li>
                  </ol>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">8. The Transformation Test</h5>
                <p>Change the word's form to see what other parts of speech it can become.</p>
                <div className="bg-indigo-50 dark:bg-indigo-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Transformation Examples:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>beauty (noun) → beautiful (adjective) → beautifully (adverb)</strong>
                    </li>
                    <li>
                      <strong>quick (adjective) → quickly (adverb) → quickness (noun)</strong>
                    </li>
                    <li>
                      <strong>act (verb) → action (noun) → active (adjective) → actively (adverb)</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800 mt-4">
              <h4 className="text-lg font-semibold">Comprehensive Exam Strategy</h4>
              <ol className="list-decimal pl-5 space-y-2 mt-2">
                <li>
                  <span className="font-semibold">Read the entire sentence:</span> Understand the complete context
                  before analyzing individual words
                </li>
                <li>
                  <span className="font-semibold">Identify the function:</span> Determine what job the word is
                  performing in this specific sentence
                </li>
                <li>
                  <span className="font-semibold">Apply position analysis:</span> Use the word's location as a clue to
                  its part of speech
                </li>
                <li>
                  <span className="font-semibold">Use substitution tests:</span> Replace with known words of different
                  parts of speech
                </li>
                <li>
                  <span className="font-semibold">Check morphological clues:</span> Look at prefixes, suffixes, and word
                  endings
                </li>
                <li>
                  <span className="font-semibold">Apply elimination:</span> Rule out impossible options systematically
                </li>
                <li>
                  <span className="font-semibold">Verify your answer:</span> Ensure the sentence makes sense with your
                  classification
                </li>
                <li>
                  <span className="font-semibold">Consider multiple functions:</span> Remember that some words can be
                  multiple parts of speech
                </li>
              </ol>
            </div>

            <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-md border border-purple-200 dark:border-purple-800 mt-4">
              <h4 className="text-lg font-semibold">Memory Devices for Parts of Speech</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <span className="font-semibold">NPAVICP:</span> Noun, Pronoun, Adjective, Verb, Interjection,
                  Conjunction, Preposition (Never Put A Verb In Crazy Places)
                </li>
                <li>
                  <span className="font-semibold">Noun = Name:</span> If it names something, it's probably a noun
                </li>
                <li>
                  <span className="font-semibold">Verb = Action/Being:</span> If it shows action or state of being, it's
                  a verb
                </li>
                <li>
                  <span className="font-semibold">Adjective = Appearance:</span> If it describes appearance or quality,
                  it's an adjective
                </li>
                <li>
                  <span className="font-semibold">Adverb = -ly ending:</span> Many (but not all) adverbs end in -ly
                </li>
                <li>
                  <span className="font-semibold">Preposition = Position:</span> Often shows position or relationship
                </li>
                <li>
                  <span className="font-semibold">Conjunction = Connection:</span> Connects words, phrases, or clauses
                </li>
                <li>
                  <span className="font-semibold">Interjection = Interruption:</span> Interrupts with emotion (usually
                  with !)
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="mistakes" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Comprehensive Parts of Speech Error Analysis</h3>

            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-md border border-red-200 dark:border-red-800">
              <h4 className="flex items-center text-lg font-semibold">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                Critical Identification Errors and Solutions
              </h4>
              <p className="mt-2">
                These are the most common and costly mistakes when identifying parts of speech in competitive exams.
              </p>
            </div>

            <div className="space-y-4 mt-4">
              <h4 className="text-lg font-semibold">1. Confusing Adjectives and Adverbs</h4>
              <p>
                The most frequent error: mixing up words that describe nouns vs. words that describe verbs, adjectives,
                or other adverbs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect Analysis:</p>
                  <p>
                    "She sings <span className="text-red-600 font-semibold">beautiful</span>."
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Mistake: Identifying "beautiful" as correct when it should modify the verb "sings"
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct Analysis:</p>
                  <p>
                    "She sings <span className="text-green-600 font-semibold">beautifully</span>."
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Correct: "Beautifully" is an adverb modifying the verb "sings"
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded-md mt-2">
                <h6 className="font-medium">Prevention Strategy:</h6>
                <p className="text-sm mt-1">
                  Ask: "What is this word describing?" If it describes a noun/pronoun → adjective. If it describes a
                  verb/adjective/adverb → adverb.
                </p>
              </div>

              <h4 className="text-lg font-semibold mt-4">2. Misidentifying Gerunds and Present Participles</h4>
              <p>
                Confusing -ing words that function as nouns (gerunds) vs. those that function as adjectives or parts of
                verbs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Common Mistake:</p>
                  <p>Thinking "swimming" is always a verb</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    In "Swimming is fun," "swimming" is actually a noun (gerund), not a verb
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct Analysis:</p>
                  <p>Context determines the function</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Gerund (noun): "Swimming is fun" / Verb: "I am swimming" / Adjective: "the swimming pool"
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded-md mt-2">
                <h6 className="font-medium">Prevention Strategy:</h6>
                <p className="text-sm mt-1">
                  Test if you can replace the -ing word with "it" or another noun. If yes, it's a gerund (noun). If no,
                  check its other functions.
                </p>
              </div>

              <h4 className="text-lg font-semibold mt-4">3. Words with Multiple Functions</h4>
              <p>Failing to recognize that the same word can be different parts of speech in different contexts.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Rigid Thinking:</p>
                  <p>Assuming "fast" is always an adjective</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Missing that it can also be an adverb: "He runs fast"
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Flexible Analysis:</p>
                  <p>"Fast" changes based on usage</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Adjective: "fast car" / Adverb: "runs fast" / Verb: "fast for health" / Noun: "a religious fast"
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded-md mt-2">
                <h6 className="font-medium">Prevention Strategy:</h6>
                <p className="text-sm mt-1">
                  Always analyze the word's function in the specific sentence, not its general classification. Context
                  is king!
                </p>
              </div>

              <h4 className="text-lg font-semibold mt-4">4. Preposition vs. Adverb Confusion</h4>
              <p>Confusing prepositions with adverbs when they have the same form but different functions.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Confusion:</p>
                  <p>Not distinguishing "up" in different contexts</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Assuming "up" is always a preposition</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Clear Analysis:</p>
                  <p>"Up" depends on usage</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Preposition: "up the stairs" (has object) / Adverb: "look up" (no object) / Adjective: "the up
                    escalator"
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded-md mt-2">
                <h6 className="font-medium">Prevention Strategy:</h6>
                <p className="text-sm mt-1">
                  Check if the word has an object. If yes, it's likely a preposition. If no, it's likely an adverb.
                </p>
              </div>

              <h4 className="text-lg font-semibold mt-4">5. Linking Verb vs. Action Verb Confusion</h4>
              <p>Misidentifying linking verbs as action verbs, affecting complement analysis.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>Treating "seems" as an action verb</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    In "She seems happy," incorrectly analyzing "happy" as an adverb
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>"Seems" is a linking verb</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    "Happy" is an adjective (predicate adjective) describing the subject "she"
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded-md mt-2">
                <h6 className="font-medium">Prevention Strategy:</h6>
                <p className="text-sm mt-1">
                  Test if you can replace the verb with "is/are/was/were." If the sentence still makes sense, it's
                  likely a linking verb.
                </p>
              </div>

              <h4 className="text-lg font-semibold mt-4">6. Pronoun vs. Adjective Misidentification</h4>
              <p>
                Confusing possessive pronouns with possessive adjectives, and demonstrative pronouns with demonstrative
                adjectives.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>Calling "my" in "my book" a pronoun</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    "My" is modifying the noun "book," so it's functioning as an adjective
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>"My" is a possessive adjective</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Compare: "my book" (adjective) vs. "the book is mine" (pronoun)
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded-md mt-2">
                <h6 className="font-medium">Prevention Strategy:</h6>
                <p className="text-sm mt-1">
                  If the word is followed by a noun it modifies, it's likely an adjective. If it stands alone replacing
                  a noun, it's a pronoun.
                </p>
              </div>

              <h4 className="text-lg font-semibold mt-4">7. Compound Word Analysis Errors</h4>
              <p>Incorrectly analyzing parts of compound words instead of treating them as single units.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>Analyzing "swimming" and "pool" separately</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    In "swimming pool," treating them as separate words instead of one compound noun
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>"Swimming pool" is one compound noun</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    The entire phrase functions as a single noun in the sentence
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded-md mt-2">
                <h6 className="font-medium">Prevention Strategy:</h6>
                <p className="text-sm mt-1">
                  Look for compound words that function as single units. Common patterns: noun + noun, adjective + noun,
                  verb + preposition.
                </p>
              </div>

              <h4 className="text-lg font-semibold mt-4">8. Infinitive and Participle Confusion</h4>
              <p>Misidentifying infinitives (to + verb) and participles in their various functions.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>Calling "to read" in "I like to read" a verb</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    The infinitive "to read" is functioning as a noun (direct object of "like")
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>"To read" is an infinitive functioning as a noun</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Infinitives can function as nouns, adjectives, or adverbs depending on context
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded-md mt-2">
                <h6 className="font-medium">Prevention Strategy:</h6>
                <p className="text-sm mt-1">
                  Identify what function the infinitive or participle serves in the sentence. Don't just label it as a
                  "verb form."
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800 mt-4">
              <h4 className="text-lg font-semibold">Common Parts of Speech Errors in Competitive Exams</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <span className="font-semibold">Context-dependent classification:</span> Not recognizing that the same
                  word can be different parts of speech
                </li>
                <li>
                  <span className="font-semibold">Function vs. form confusion:</span> Focusing on word endings rather
                  than sentence function
                </li>
                <li>
                  <span className="font-semibold">Linking verb complements:</span> Using adverbs instead of adjectives
                  after linking verbs
                </li>
                <li>
                  <span className="font-semibold">Gerund identification:</span> Confusing gerunds (nouns) with present
                  participles (adjectives/verbs)
                </li>
                <li>
                  <span className="font-semibold">Preposition vs. adverb:</span> Not checking for objects to distinguish
                  between these
                </li>
                <li>
                  <span className="font-semibold">Compound analysis:</span> Breaking down compound words instead of
                  treating them as units
                </li>
                <li>
                  <span className="font-semibold">Pronoun vs. adjective:</span> Misclassifying possessive and
                  demonstrative words
                </li>
                <li>
                  <span className="font-semibold">Infinitive functions:</span> Not recognizing that infinitives can
                  function as nouns, adjectives, or adverbs
                </li>
              </ul>
            </div>

            <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 mt-4">
              <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertTitle>Exam Success Strategy</AlertTitle>
              <AlertDescription>
                In competitive exams, focus on the function of the word in the specific sentence rather than memorizing
                what part of speech a word "usually" is. Context and function determine the correct classification.
                Always ask: "What job is this word doing in THIS sentence?"
              </AlertDescription>
            </Alert>

            <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-md border border-purple-200 dark:border-purple-800 mt-4">
              <h4 className="text-lg font-semibold">Error Prevention Checklist</h4>
              <ol className="list-decimal pl-5 space-y-2 mt-2">
                <li>
                  <span className="font-semibold">Read the complete sentence</span> for full context understanding
                </li>
                <li>
                  <span className="font-semibold">Identify the word's specific function</span> in this particular
                  sentence
                </li>
                <li>
                  <span className="font-semibold">Check for objects or complements</span> that might indicate the word's
                  role
                </li>
                <li>
                  <span className="font-semibold">Apply substitution tests</span> with known words of each part of
                  speech
                </li>
                <li>
                  <span className="font-semibold">Consider multiple possibilities</span> for words that can be different
                  parts of speech
                </li>
                <li>
                  <span className="font-semibold">Verify with position analysis</span> and morphological clues
                </li>
                <li>
                  <span className="font-semibold">Double-check linking verbs</span> and their complements
                </li>
                <li>
                  <span className="font-semibold">Confirm your answer</span> by ensuring the sentence makes complete
                  sense
                </li>
              </ol>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
