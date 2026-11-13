"use client"

import { SubjectVerbExamples } from "./interactive-examples/subject-verb-examples"
import { QuizSection } from "@/components/ui/quiz-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, AlertTriangle, Lightbulb, BookOpen, FileText } from "lucide-react"

export function SubjectVerbAgreementTheory() {
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600">Subject-Verb Agreement</CardTitle>
        <CardDescription>
          Understanding how subjects and verbs must agree in number and person for grammatically correct sentences
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
              <h3 className="text-xl font-semibold text-blue-600">What Is Subject-Verb Agreement?</h3>
              <p>
                Subject-verb agreement is one of the most fundamental rules in English grammar. It requires that the
                verb must agree in number (singular or plural) and person (first, second, or third) with its subject.
                This agreement ensures clarity and grammatical correctness in communication.
              </p>

              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">✓ Basic Rule</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    • Singular subject + Singular verb: The dog <strong>barks</strong> loudly.
                  </li>
                  <li>
                    • Plural subject + Plural verb: The dogs <strong>bark</strong> loudly.
                  </li>
                  <li>
                    • Third person singular adds -s/-es: He <strong>walks</strong>, She <strong>teaches</strong>
                  </li>
                </ul>
              </div>

              <h4 className="text-lg font-semibold mt-4">Fundamental Rules</h4>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">1. Simple Agreement</h5>
                <p>The most basic rule: singular subjects take singular verbs, plural subjects take plural verbs.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: The cat <span className="text-blue-600 font-semibold">sleeps</span>. The cats{" "}
                  <span className="text-blue-600 font-semibold">sleep</span>.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">2. Compound Subjects with "And"</h5>
                <p>
                  When subjects are joined by "and," they usually take a plural verb because they create a compound
                  subject.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: The dog and the cat <span className="text-blue-600 font-semibold">play</span> together.
                  <br />
                  Exception: When the compound subject refers to one person or thing: Bread and butter{" "}
                  <span className="text-blue-600 font-semibold">is</span> my favorite snack.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">3. Compound Subjects with "Or" or "Nor"</h5>
                <p>The verb agrees with the subject closer to it (proximity rule).</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: Either the boys or the girl <span className="text-blue-600 font-semibold">is</span> going.
                  <br />
                  Example: Neither the teacher nor the students{" "}
                  <span className="text-blue-600 font-semibold">were</span> present.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">4. Collective Nouns</h5>
                <p>Can be singular (as a unit) or plural (as individuals), depending on context and meaning.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: The team <span className="text-blue-600 font-semibold">is</span> winning. (as a unit)
                  <br />
                  The team <span className="text-blue-600 font-semibold">are</span> arguing among themselves. (as
                  individuals)
                  <br />
                  Common collective nouns: team, family, group, committee, jury, audience, class, crowd
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">5. Indefinite Pronouns</h5>
                <p>Some are always singular, some always plural, some depend on context.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Always singular:</strong> each, everyone, everybody, someone, somebody, anyone, anybody, no
                  one, nobody, either, neither, one
                  <br />
                  <strong>Always plural:</strong> both, few, many, several, others
                  <br />
                  <strong>Context-dependent:</strong> all, some, most, none, any (depends on the noun that follows)
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">6. Subjects with Prepositional Phrases</h5>
                <p>The verb agrees with the subject, not with the object of a preposition.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: The box of chocolates <span className="text-blue-600 font-semibold">is</span> on the table.
                  <br />
                  Example: The students in the classroom <span className="text-blue-600 font-semibold">are</span>{" "}
                  studying.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">7. Inverted Sentences</h5>
                <p>In sentences beginning with "there" or "here," the subject follows the verb.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: There <span className="text-blue-600 font-semibold">are</span> many books on the shelf.
                  <br />
                  Example: Here <span className="text-blue-600 font-semibold">comes</span> the bus.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">8. Relative Pronouns as Subjects</h5>
                <p>When "who," "which," or "that" is the subject, the verb agrees with the antecedent.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: The student who <span className="text-blue-600 font-semibold">studies</span> hard will
                  succeed.
                  <br />
                  Example: The books that <span className="text-blue-600 font-semibold">are</span> on the table belong
                  to me.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">9. Subjects Expressing Quantity, Time, or Distance</h5>
                <p>These are usually treated as singular when referring to a unit.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: Five dollars <span className="text-blue-600 font-semibold">is</span> too much for that item.
                  <br />
                  Example: Two hours <span className="text-blue-600 font-semibold">is</span> enough time for the exam.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">10. Titles and Proper Nouns</h5>
                <p>Titles of books, movies, organizations, etc., are usually treated as singular.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: "The Chronicles of Narnia" <span className="text-blue-600 font-semibold">is</span> a popular
                  series.
                  <br />
                  Example: The United Nations <span className="text-blue-600 font-semibold">has</span> many member
                  countries.
                </p>
              </div>

              {/* Mini Quiz */}
              <div className="mt-8">
                <QuizSection
                  topic="subject-verb-agreement"
                  title="Subject-Verb Agreement Quiz"
                  description="Test your understanding of basic subject-verb agreement rules"
                />
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Key Concept</AlertTitle>
                <AlertDescription>
                  The key to subject-verb agreement is identifying the true subject of the sentence and determining
                  whether it's singular or plural. Don't be distracted by words that come between the subject and verb.
                  Always look for the core subject and match the verb accordingly.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Subject-Verb Agreement Examples</h3>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Basic Agreement</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  The student <span className="text-blue-600 font-semibold">studies</span> every night.
                </li>
                <li>
                  The students <span className="text-blue-600 font-semibold">study</span> every night.
                </li>
                <li>
                  She <span className="text-blue-600 font-semibold">writes</span> beautiful poetry.
                </li>
                <li>
                  They <span className="text-blue-600 font-semibold">write</span> beautiful poetry.
                </li>
                <li>
                  The cat <span className="text-blue-600 font-semibold">sleeps</span> on the windowsill.
                </li>
                <li>
                  The cats <span className="text-blue-600 font-semibold">sleep</span> in various places.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Subjects with Prepositional Phrases</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  The box of chocolates <span className="text-blue-600 font-semibold">is</span> on the table.
                </li>
                <li>
                  The books on the shelf <span className="text-blue-600 font-semibold">are</span> dusty.
                </li>
                <li>
                  One of the students <span className="text-blue-600 font-semibold">has</span> arrived early.
                </li>
                <li>
                  The quality of the apples <span className="text-blue-600 font-semibold">has</span> improved.
                </li>
                <li>
                  The group of tourists <span className="text-blue-600 font-semibold">is</span> visiting the museum.
                </li>
                <li>
                  The members of the committee <span className="text-blue-600 font-semibold">are</span> meeting today.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Compound Subjects</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  The cat and the dog <span className="text-blue-600 font-semibold">are</span> friends.
                </li>
                <li>
                  Either the teacher or the students <span className="text-blue-600 font-semibold">are</span>{" "}
                  responsible.
                </li>
                <li>
                  Neither the manager nor the employees <span className="text-blue-600 font-semibold">were</span>{" "}
                  present.
                </li>
                <li>
                  Both the book and the movie <span className="text-blue-600 font-semibold">were</span> excellent.
                </li>
                <li>
                  Bread and butter <span className="text-blue-600 font-semibold">is</span> my favorite breakfast.
                </li>
                <li>
                  The captain and the crew <span className="text-blue-600 font-semibold">have</span> prepared for the
                  voyage.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Indefinite Pronouns</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  Everyone <span className="text-blue-600 font-semibold">has</span> arrived on time.
                </li>
                <li>
                  Nobody <span className="text-blue-600 font-semibold">knows</span> the answer.
                </li>
                <li>
                  Several of the books <span className="text-blue-600 font-semibold">are</span> missing.
                </li>
                <li>
                  All of the water <span className="text-blue-600 font-semibold">has</span> evaporated.
                </li>
                <li>
                  Some of the students <span className="text-blue-600 font-semibold">are</span> absent today.
                </li>
                <li>
                  Each of the participants <span className="text-blue-600 font-semibold">receives</span> a certificate.
                </li>
                <li>
                  None of the information <span className="text-blue-600 font-semibold">was</span> accurate.
                </li>
                <li>
                  Most of the cookies <span className="text-blue-600 font-semibold">have</span> been eaten.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Collective Nouns</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  The team <span className="text-blue-600 font-semibold">is</span> practicing for the championship.
                </li>
                <li>
                  The team <span className="text-blue-600 font-semibold">are</span> discussing their individual
                  strategies.
                </li>
                <li>
                  The family <span className="text-blue-600 font-semibold">has</span> decided to move to a new city.
                </li>
                <li>
                  The family <span className="text-blue-600 font-semibold">are</span> arguing about vacation plans.
                </li>
                <li>
                  The jury <span className="text-blue-600 font-semibold">has</span> reached a verdict.
                </li>
                <li>
                  The committee <span className="text-blue-600 font-semibold">are</span> divided in their opinions.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Inverted Sentences</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  There <span className="text-blue-600 font-semibold">are</span> many problems to solve.
                </li>
                <li>
                  Here <span className="text-blue-600 font-semibold">comes</span> the bus.
                </li>
                <li>
                  Where <span className="text-blue-600 font-semibold">are</span> your keys?
                </li>
                <li>
                  There <span className="text-blue-600 font-semibold">is</span> a book on the table.
                </li>
                <li>
                  Here <span className="text-blue-600 font-semibold">are</span> the documents you requested.
                </li>
                <li>
                  There <span className="text-blue-600 font-semibold">seems</span> to be a problem with the system.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Special Cases</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  Mathematics <span className="text-blue-600 font-semibold">is</span> my favorite subject.
                </li>
                <li>
                  The news <span className="text-blue-600 font-semibold">was</span> shocking.
                </li>
                <li>
                  The scissors <span className="text-blue-600 font-semibold">are</span> sharp.
                </li>
                <li>
                  Ten dollars <span className="text-blue-600 font-semibold">is</span> too much.
                </li>
                <li>
                  Physics <span className="text-blue-600 font-semibold">requires</span> mathematical skills.
                </li>
                <li>
                  The pants <span className="text-blue-600 font-semibold">need</span> to be hemmed.
                </li>
                <li>
                  Two weeks <span className="text-blue-600 font-semibold">is</span> enough time for the project.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Relative Pronouns</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  The student who <span className="text-blue-600 font-semibold">studies</span> hard will succeed.
                </li>
                <li>
                  The books that <span className="text-blue-600 font-semibold">are</span> on the table belong to me.
                </li>
                <li>
                  She is one of the students who <span className="text-blue-600 font-semibold">have</span> completed the
                  assignment.
                </li>
                <li>
                  The car which <span className="text-blue-600 font-semibold">was</span> parked outside has been towed.
                </li>
                <li>
                  He is the only one of the candidates who <span className="text-blue-600 font-semibold">has</span> the
                  required experience.
                </li>
              </ul>
            </div>

            {/* Interactive Examples */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">🎯 Interactive Examples</h3>
              <SubjectVerbExamples />
            </div>
          </TabsContent>

          <TabsContent value="shortcuts" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Subject-Verb Agreement Shortcuts</h3>

            <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-md border border-yellow-200 dark:border-yellow-800">
              <h4 className="flex items-center text-lg font-semibold">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                Quick Identification Strategies
              </h4>
              <p className="mt-2">
                Use these shortcuts to quickly identify correct subject-verb agreement in competitive exams.
              </p>
            </div>

            <div className="space-y-4 mt-4">
              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">1. Cross Out Distractors</h5>
                <p>Cross out prepositional phrases, relative clauses, and other modifiers to find the true subject.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: The box [of chocolates] [that I bought yesterday] IS on the table.
                  <br />
                  Cross out modifiers → "The box IS on the table"
                  <br />
                  Practice: The group [of students] [from different countries] ARE/IS studying together.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">2. Use the Substitution Test</h5>
                <p>Replace the subject with "he/she/it" (singular) or "they" (plural) to check agreement.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: "The team is winning" → "It is winning" ✓ OR "They are winning" ✓
                  <br />
                  Both work depending on whether you see the team as a unit or individuals.
                  <br />
                  Example: "Everyone are ready" → "He/She are ready" ✗ → Use "Everyone IS ready"
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">3. Memorize Tricky Words</h5>
                <p>Learn which indefinite pronouns and collective nouns are always singular or plural.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Always singular:</strong> each, everyone, everybody, someone, somebody, anyone, anybody, no
                  one, nobody, either, neither, one
                  <br />
                  <strong>Always plural:</strong> both, few, many, several, others
                  <br />
                  <strong>Collective nouns:</strong> Usually singular as a unit, plural as individuals
                  <br />
                  <strong>Memory trick:</strong> "Each ONE" - if it contains "one," it's usually singular
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">4. Either/Or and Neither/Nor Rule</h5>
                <p>The verb agrees with the subject closest to it (proximity rule).</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: Either the cats or the dog IS responsible. (singular "dog" is closer)
                  <br />
                  Example: Either the dog or the cats ARE responsible. (plural "cats" is closer)
                  <br />
                  Memory trick: "Last one wins" - the last subject determines the verb
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">5. There/Here Sentences</h5>
                <p>The subject comes after the verb in these constructions. Find the real subject first.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: There ARE many books on the shelf. (Subject: "many books" - plural)
                  <br />
                  Example: Here COMES the bus. (Subject: "the bus" - singular)
                  <br />
                  Trick: Rearrange to normal order: "Many books are there on the shelf"
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">6. Quantity, Time, and Distance</h5>
                <p>When expressing a single unit or amount, treat as singular.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: Five dollars IS enough. (one amount)
                  <br />
                  Example: Two hours IS plenty of time. (one period)
                  <br />
                  But: Five dollar bills ARE on the table. (individual items)
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">7. Relative Pronoun Agreement</h5>
                <p>When who/which/that is the subject, the verb agrees with the antecedent.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: The student who STUDIES hard... (student = singular)
                  <br />
                  Example: The students who STUDY hard... (students = plural)
                  <br />
                  Trick: Replace who/which/that with the antecedent to check
                </p>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">8. Titles and Proper Nouns</h5>
                <p>Titles of works and organization names are usually singular.</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Example: "The Lord of the Rings" IS a famous trilogy.
                  <br />
                  Example: The United Nations HAS many member countries.
                  <br />
                  Exception: When referring to individual members: The Beatles WERE a British band.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800 mt-4">
              <h4 className="text-lg font-semibold">Exam Strategy</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <span className="font-semibold">Step 1:</span> Identify the subject (ignore modifiers and distractors)
                </li>
                <li>
                  <span className="font-semibold">Step 2:</span> Determine if it's singular or plural
                </li>
                <li>
                  <span className="font-semibold">Step 3:</span> Check for special cases (collective nouns, indefinite
                  pronouns, compound subjects)
                </li>
                <li>
                  <span className="font-semibold">Step 4:</span> Apply proximity rule for either/or, neither/nor
                </li>
                <li>
                  <span className="font-semibold">Step 5:</span> Choose the verb form that matches
                </li>
                <li>
                  <span className="font-semibold">Step 6:</span> Double-check by reading aloud or using substitution
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-md border border-purple-200 dark:border-purple-800 mt-4">
              <h4 className="text-lg font-semibold">Memory Devices</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <span className="font-semibold">FANBOYS for compound subjects:</span> For, And, Nor, But, Or, Yet, So
                  - remember "and" = plural, "or/nor" = proximity rule
                </li>
                <li>
                  <span className="font-semibold">ONE rule:</span> Words containing "one" (everyone, someone, no one)
                  are singular
                </li>
                <li>
                  <span className="font-semibold">BOTH rule:</span> Words with "both" (both, few, many, several) are
                  plural
                </li>
                <li>
                  <span className="font-semibold">Context clues:</span> "All of the water" (uncountable = singular) vs.
                  "All of the students" (countable = plural)
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="mistakes" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Common Subject-Verb Agreement Mistakes</h3>

            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-md border border-red-200 dark:border-red-800">
              <h4 className="flex items-center text-lg font-semibold">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                Major Agreement Errors
              </h4>
              <p className="mt-2">
                These are the most common subject-verb agreement errors in competitive exams and formal writing.
              </p>
            </div>

            <div className="space-y-4 mt-4">
              <h4 className="text-lg font-semibold">1. Being Fooled by Intervening Phrases</h4>
              <p>Don't let words between the subject and verb distract you from the true subject.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>The box of chocolates are on the table.</p>
                  <p>The group of students are studying.</p>
                  <p>One of the books are missing.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Subject is "box," "group," "one" - all singular)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>The box of chocolates is on the table.</p>
                  <p>The group of students is studying.</p>
                  <p>One of the books is missing.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Verb agrees with the true subject)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">2. Indefinite Pronoun Confusion</h4>
              <p>Using plural verbs with singular indefinite pronouns or vice versa.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>Everyone are ready for the exam.</p>
                  <p>Each of the students have submitted their work.</p>
                  <p>Neither of the options are suitable.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(These pronouns are always singular)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>Everyone is ready for the exam.</p>
                  <p>Each of the students has submitted their work.</p>
                  <p>Neither of the options is suitable.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Singular pronoun takes singular verb)
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">3. Either/Or and Neither/Nor Errors</h4>
              <p>Not matching the verb with the closest subject in compound constructions.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>Either the students or the teacher are wrong.</p>
                  <p>Neither the manager nor the employees was present.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Should agree with closest subject)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>Either the students or the teacher is wrong.</p>
                  <p>Neither the manager nor the employees were present.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Verb agrees with closest subject)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">4. Collective Noun Confusion</h4>
              <p>Inconsistent treatment of collective nouns within the same context.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Inconsistent:</p>
                  <p>The team is winning, and they are celebrating.</p>
                  <p>The family has decided, but they are arguing.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Mixing singular and plural treatment)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Consistent:</p>
                  <p>The team is winning, and it is celebrating.</p>
                  <p>The family members have decided, but they are arguing.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Consistent treatment throughout)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">5. Inverted Sentence Errors</h4>
              <p>Confusing the subject in there/here constructions or questions.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>There is many problems to solve.</p>
                  <p>Here comes the students.</p>
                  <p>Where is your books?</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Subject comes after verb in these constructions)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>There are many problems to solve.</p>
                  <p>Here come the students.</p>
                  <p>Where are your books?</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Verb agrees with the actual subject)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">6. Relative Pronoun Subject Errors</h4>
              <p>Incorrect agreement when relative pronouns serve as subjects.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>The student who study hard succeed.</p>
                  <p>The books that is on the table are mine.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Verb should agree with antecedent)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>The student who studies hard succeeds.</p>
                  <p>The books that are on the table are mine.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Verb agrees with the antecedent)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">7. Quantity and Measurement Errors</h4>
              <p>Confusion about whether quantities are treated as singular or plural.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>Five dollars are too much.</p>
                  <p>Two hours are enough time.</p>
                  <p>Half of the students is absent.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Amounts as units are singular; fractions depend on the noun)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>Five dollars is too much.</p>
                  <p>Two hours is enough time.</p>
                  <p>Half of the students are absent.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Correct agreement based on context)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">8. Subject Complement Confusion</h4>
              <p>Making the verb agree with the complement instead of the subject.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>The problem are the students.</p>
                  <p>My favorite food are tacos.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Verb should agree with subject, not complement)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>The problem is the students.</p>
                  <p>My favorite food is tacos.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Verb agrees with the subject)</p>
                </div>
              </div>
            </div>

            <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 mt-4">
              <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertTitle>Exam Tip</AlertTitle>
              <AlertDescription>
                In competitive exams, subject-verb agreement errors are often hidden by placing distracting words
                between the subject and verb. Always identify the true subject first, then choose the appropriate verb
                form. Practice with complex sentences to build confidence in identifying the core subject-verb
                relationship.
              </AlertDescription>
            </Alert>

            <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-md border border-orange-200 dark:border-orange-800 mt-4">
              <h4 className="text-lg font-semibold">Error Prevention Checklist</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>✓ Cross out prepositional phrases and modifiers</li>
                <li>✓ Identify the true subject (not objects or complements)</li>
                <li>✓ Check for compound subjects and apply appropriate rules</li>
                <li>✓ Verify indefinite pronoun agreement (singular vs. plural)</li>
                <li>✓ Apply proximity rule for either/or, neither/nor constructions</li>
                <li>✓ Ensure consistency with collective nouns throughout the passage</li>
                <li>✓ Double-check inverted sentences (there/here constructions)</li>
                <li>✓ Verify relative pronoun agreement with antecedents</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
