"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, AlertTriangle, Lightbulb, BookOpen, FileText } from "lucide-react"
import { PronounsExamples } from "./interactive-examples/pronouns-examples"

const PronounsTheory = () => {
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600">Pronouns</CardTitle>
        <CardDescription>
          Master pronoun usage, cases, agreement rules, and advanced applications for clear and correct communication
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
              <h3 className="text-xl font-semibold text-blue-600">What Are Pronouns?</h3>
              <p>
                Pronouns are words that replace nouns to avoid repetition and make sentences flow more smoothly. They
                must agree with their antecedents (the nouns they replace) in number, gender, and person. Understanding
                pronoun cases, types, and agreement rules is crucial for clear communication and success in competitive
                exams.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Subjective Case</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">I, you, he, she, it, we, they</p>
                  <p className="text-xs text-blue-500 dark:text-blue-500">Used as subjects of sentences</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <h3 className="font-medium text-green-800 dark:text-green-200 mb-2">Objective Case</h3>
                  <p className="text-sm text-green-600 dark:text-green-400 mb-2">me, you, him, her, it, us, them</p>
                  <p className="text-xs text-green-500 dark:text-green-500">Used as objects of verbs/prepositions</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Possessive Case</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                    my, your, his, her, its, our, their
                  </p>
                  <p className="text-xs text-purple-500 dark:text-purple-500">Show ownership or relationship</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">Comprehensive Types of Pronouns</h4>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">1. Personal Pronouns</h5>
                <p>Refer to specific people or things and change form based on person, number, gender, and case.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Complete Personal Pronoun Chart:</h6>
                    <div className="overflow-x-auto mt-2">
                      <table className="min-w-full text-sm">
                        <thead>
                          <tr className="bg-blue-100 dark:bg-blue-900">
                            <th className="px-2 py-1 text-left">Person</th>
                            <th className="px-2 py-1 text-left">Subjective</th>
                            <th className="px-2 py-1 text-left">Objective</th>
                            <th className="px-2 py-1 text-left">Possessive Adj.</th>
                            <th className="px-2 py-1 text-left">Possessive Pron.</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="px-2 py-1">1st Singular</td>
                            <td className="px-2 py-1">I</td>
                            <td className="px-2 py-1">me</td>
                            <td className="px-2 py-1">my</td>
                            <td className="px-2 py-1">mine</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-2 py-1">2nd Singular/Plural</td>
                            <td className="px-2 py-1">you</td>
                            <td className="px-2 py-1">you</td>
                            <td className="px-2 py-1">your</td>
                            <td className="px-2 py-1">yours</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-2 py-1">3rd Singular (M)</td>
                            <td className="px-2 py-1">he</td>
                            <td className="px-2 py-1">him</td>
                            <td className="px-2 py-1">his</td>
                            <td className="px-2 py-1">his</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-2 py-1">3rd Singular (F)</td>
                            <td className="px-2 py-1">she</td>
                            <td className="px-2 py-1">her</td>
                            <td className="px-2 py-1">her</td>
                            <td className="px-2 py-1">hers</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-2 py-1">3rd Singular (N)</td>
                            <td className="px-2 py-1">it</td>
                            <td className="px-2 py-1">it</td>
                            <td className="px-2 py-1">its</td>
                            <td className="px-2 py-1">its</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-2 py-1">1st Plural</td>
                            <td className="px-2 py-1">we</td>
                            <td className="px-2 py-1">us</td>
                            <td className="px-2 py-1">our</td>
                            <td className="px-2 py-1">ours</td>
                          </tr>
                          <tr>
                            <td className="px-2 py-1">3rd Plural</td>
                            <td className="px-2 py-1">they</td>
                            <td className="px-2 py-1">them</td>
                            <td className="px-2 py-1">their</td>
                            <td className="px-2 py-1">theirs</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">2. Reflexive and Intensive Pronouns</h5>
                <p>End in -self (singular) or -selves (plural) and serve different functions.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Reflexive vs. Intensive:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Reflexive:</strong> Essential to meaning - refers back to subject (He hurt himself)
                      </li>
                      <li>
                        <strong>Intensive:</strong> Adds emphasis - can be removed (I myself will do it)
                      </li>
                      <li>
                        <strong>Forms:</strong> myself, yourself, himself, herself, itself, ourselves, yourselves,
                        themselves
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded-md">
                    <h6 className="font-medium">Usage Rules:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>Must have a clear antecedent in the same clause</li>
                      <li>Cannot be used as subjects (Incorrect: "John and myself went")</li>
                      <li>Cannot be used after prepositions unless reflexive (Incorrect: "between you and myself")</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">3. Demonstrative Pronouns</h5>
                <p>Point to specific things and indicate distance in time or space.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Forms and Usage:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>This/These:</strong> Near in time/space (This is my book. These are fresh.)
                      </li>
                      <li>
                        <strong>That/Those:</strong> Far in time/space (That was yesterday. Those were the days.)
                      </li>
                      <li>
                        <strong>Such:</strong> Of that kind (Such is life.)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md">
                    <h6 className="font-medium">Pronoun vs. Adjective:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Pronoun:</strong> Stands alone (This is mine. That belongs to her.)
                      </li>
                      <li>
                        <strong>Adjective:</strong> Modifies a noun (This book is mine. That car is fast.)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">4. Interrogative Pronouns</h5>
                <p>Used to ask questions and introduce interrogative clauses.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Complete List with Functions:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Who:</strong> Subject form for people (Who called?)
                      </li>
                      <li>
                        <strong>Whom:</strong> Object form for people (Whom did you see?)
                      </li>
                      <li>
                        <strong>Whose:</strong> Possessive form (Whose book is this?)
                      </li>
                      <li>
                        <strong>Which:</strong> Choice among options (Which do you prefer?)
                      </li>
                      <li>
                        <strong>What:</strong> General questions about things (What happened?)
                      </li>
                      <li>
                        <strong>Whatever, Whoever, Whichever:</strong> Compound forms (Whatever you decide is fine.)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">5. Relative Pronouns</h5>
                <p>Introduce relative clauses and connect them to main clauses.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Forms and Usage:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Who:</strong> Subject, refers to people (The man who called)
                      </li>
                      <li>
                        <strong>Whom:</strong> Object, refers to people (The person whom I met)
                      </li>
                      <li>
                        <strong>Whose:</strong> Possessive, refers to people/things (The student whose book)
                      </li>
                      <li>
                        <strong>Which:</strong> Refers to things/animals (The book which I read)
                      </li>
                      <li>
                        <strong>That:</strong> Refers to people/things in restrictive clauses (The car that I bought)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                    <h6 className="font-medium">Restrictive vs. Non-restrictive:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Restrictive:</strong> Essential information, no commas (The book that I borrowed is
                        overdue)
                      </li>
                      <li>
                        <strong>Non-restrictive:</strong> Additional information, with commas (My brother, who lives in
                        Paris, is visiting)
                      </li>
                      <li>
                        <strong>Rule:</strong> Use "that" for restrictive, "which" for non-restrictive
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">6. Indefinite Pronouns</h5>
                <p>Refer to non-specific people, things, or amounts.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Categories by Number:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Always Singular:</strong> anyone, everyone, someone, no one, anybody, everybody,
                        somebody, nobody, anything, everything, something, nothing, each, either, neither, one, another,
                        much, little
                      </li>
                      <li>
                        <strong>Always Plural:</strong> both, few, many, others, several
                      </li>
                      <li>
                        <strong>Singular or Plural:</strong> all, any, more, most, none, some (depends on context)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-950 p-3 rounded-md">
                    <h6 className="font-medium">Agreement Rules:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>Singular indefinite pronouns take singular verbs and pronouns</li>
                      <li>Everyone has his or her own opinion (not "their")</li>
                      <li>
                        For variable pronouns, check the prepositional phrase: "All of the cake is gone" vs. "All of the
                        students are here"
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-blue-200 my-4">
                <h5 className="font-semibold">7. Reciprocal Pronouns</h5>
                <p>Express mutual action or relationship between two or more subjects.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Forms and Usage:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Each other:</strong> Between two people/things (They love each other)
                      </li>
                      <li>
                        <strong>One another:</strong> Among three or more (The team members support one another)
                      </li>
                      <li>
                        <strong>Possessive forms:</strong> each other's, one another's (They borrowed each other's
                        books)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">Advanced Pronoun Agreement Rules</h4>

              <div className="pl-4 border-l-4 border-green-200 my-4">
                <h5 className="font-semibold">1. Antecedent Agreement</h5>
                <p>Pronouns must agree with their antecedents in number, gender, and person.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Complex Agreement Situations:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Compound antecedents with "and":</strong> Use plural pronoun (John and Mary brought
                        their books)
                      </li>
                      <li>
                        <strong>Compound antecedents with "or/nor":</strong> Agree with nearest antecedent (Neither John
                        nor the girls brought their books)
                      </li>
                      <li>
                        <strong>Collective nouns:</strong> Singular if acting as unit, plural if acting individually
                        (The team won its game / The team took their positions)
                      </li>
                      <li>
                        <strong>Indefinite pronouns:</strong> Follow specific rules for each type
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-green-200 my-4">
                <h5 className="font-semibold">2. Case Selection Rules</h5>
                <p>Choose the correct pronoun case based on function in the sentence.</p>

                <div className="mt-3 space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h6 className="font-medium">Case Usage Guidelines:</h6>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                      <li>
                        <strong>Subjective:</strong> Subject of verb, subject complement after linking verb
                      </li>
                      <li>
                        <strong>Objective:</strong> Direct object, indirect object, object of preposition
                      </li>
                      <li>
                        <strong>Possessive:</strong> Shows ownership, used before gerunds
                      </li>
                      <li>
                        <strong>Special rule:</strong> Use objective case after "than" and "as" in comparisons when the
                        pronoun is the object
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle>Key Concept</AlertTitle>
                <AlertDescription>
                  Pronouns must agree with their antecedents in number, gender, and person. The case of a pronoun
                  depends on its function in the sentence (subject, object, or possessive). Always identify the
                  antecedent and the pronoun's function before selecting the correct form.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Comprehensive Pronoun Examples in Context</h3>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Personal Pronouns in All Cases</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Subjective Case:</strong> <span className="text-blue-600 font-semibold">She</span> and{" "}
                  <span className="text-blue-600 font-semibold">I</span> went to the concert together.
                </li>
                <li>
                  <strong>Objective Case:</strong> The teacher called{" "}
                  <span className="text-blue-600 font-semibold">him</span> and{" "}
                  <span className="text-blue-600 font-semibold">me</span> to the front.
                </li>
                <li>
                  <strong>After Prepositions:</strong> Between <span className="text-blue-600 font-semibold">you</span>{" "}
                  and <span className="text-blue-600 font-semibold">me</span>, this is confidential.
                </li>
                <li>
                  <strong>Subject Complement:</strong> The winner was{" "}
                  <span className="text-blue-600 font-semibold">she</span>. (formal) / It was{" "}
                  <span className="text-blue-600 font-semibold">her</span>. (informal)
                </li>
                <li>
                  <strong>Comparisons:</strong> He is taller than <span className="text-blue-600 font-semibold">I</span>{" "}
                  (am). / She likes him more than <span className="text-blue-600 font-semibold">me</span> (she likes
                  me).
                </li>
                <li>
                  <strong>Compound Subjects:</strong> <span className="text-blue-600 font-semibold">He</span> and{" "}
                  <span className="text-blue-600 font-semibold">she</span> are the best students.
                </li>
                <li>
                  <strong>Compound Objects:</strong> The award went to{" "}
                  <span className="text-blue-600 font-semibold">her</span> and{" "}
                  <span className="text-blue-600 font-semibold">him</span>.
                </li>
                <li>
                  <strong>Appositives:</strong> We students, <span className="text-blue-600 font-semibold">we</span> who
                  study hard, deserve recognition.
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Possessive Pronouns and Adjectives</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Possessive Adjectives:</strong> <span className="text-blue-600 font-semibold">My</span> car is
                  newer than <span className="text-blue-600 font-semibold">your</span> car.
                </li>
                <li>
                  <strong>Possessive Pronouns:</strong> The red bike is{" "}
                  <span className="text-blue-600 font-semibold">hers</span>, and the blue one is{" "}
                  <span className="text-blue-600 font-semibold">mine</span>.
                </li>
                <li>
                  <strong>Its vs. It's:</strong> The dog wagged <span className="text-blue-600 font-semibold">its</span>{" "}
                  tail because <span className="text-blue-600 font-semibold">it's</span> happy.
                </li>
                <li>
                  <strong>Before Gerunds:</strong> I appreciate{" "}
                  <span className="text-blue-600 font-semibold">your</span> helping me with this project.
                </li>
                <li>
                  <strong>Double Possessive:</strong> That friend of{" "}
                  <span className="text-blue-600 font-semibold">hers</span> is very talented.
                </li>
                <li>
                  <strong>Absolute Possessive:</strong> <span className="text-blue-600 font-semibold">Ours</span> is the
                  house with the red door.
                </li>
                <li>
                  <strong>Joint Possession:</strong> John and Mary's house (shared) vs. John's and Mary's houses
                  (separate)
                </li>
                <li>
                  <strong>Whose vs. Who's:</strong> <span className="text-blue-600 font-semibold">Whose</span> book is
                  this? <span className="text-blue-600 font-semibold">Who's</span> coming to dinner?
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Reflexive and Intensive Pronouns</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Reflexive (Essential):</strong> She taught{" "}
                  <span className="text-blue-600 font-semibold">herself</span> to play piano.
                </li>
                <li>
                  <strong>Intensive (Emphasis):</strong> I <span className="text-blue-600 font-semibold">myself</span>{" "}
                  will handle this matter.
                </li>
                <li>
                  <strong>Plural Forms:</strong> We enjoyed{" "}
                  <span className="text-blue-600 font-semibold">ourselves</span> at the party.
                </li>
                <li>
                  <strong>With Prepositions:</strong> He kept the secret to{" "}
                  <span className="text-blue-600 font-semibold">himself</span>.
                </li>
                <li>
                  <strong>Reciprocal Action:</strong> The children dressed{" "}
                  <span className="text-blue-600 font-semibold">themselves</span> for school.
                </li>
                <li>
                  <strong>Emphasis Placement:</strong> The CEO{" "}
                  <span className="text-blue-600 font-semibold">himself</span> attended the meeting.
                </li>
                <li>
                  <strong>Incorrect Usage:</strong> ❌ Please give it to John and myself. ✅ Please give it to John and
                  me.
                </li>
                <li>
                  <strong>By + Reflexive:</strong> She completed the project by{" "}
                  <span className="text-blue-600 font-semibold">herself</span> (alone).
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Who vs. Whom Mastery</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Who as Subject:</strong> <span className="text-blue-600 font-semibold">Who</span> is calling
                  at this hour?
                </li>
                <li>
                  <strong>Whom as Object:</strong> <span className="text-blue-600 font-semibold">Whom</span> did you see
                  at the store?
                </li>
                <li>
                  <strong>After Prepositions:</strong> To <span className="text-blue-600 font-semibold">whom</span>{" "}
                  should I address this letter?
                </li>
                <li>
                  <strong>In Relative Clauses:</strong> The person{" "}
                  <span className="text-blue-600 font-semibold">who</span> called left a message.
                </li>
                <li>
                  <strong>Object in Relative Clause:</strong> The person{" "}
                  <span className="text-blue-600 font-semibold">whom</span> I met was very friendly.
                </li>
                <li>
                  <strong>Interrupted Clauses:</strong> <span className="text-blue-600 font-semibold">Who</span> do you
                  think will win? (who is subject of "will win")
                </li>
                <li>
                  <strong>Formal vs. Informal:</strong> Whom are you calling? (formal) / Who are you calling? (informal)
                </li>
                <li>
                  <strong>Test Method:</strong> Replace with he/him: "He called" → who; "I saw him" → whom
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Demonstrative Pronouns in Context</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Near/Present:</strong> <span className="text-blue-600 font-semibold">This</span> is my
                  favorite restaurant.
                </li>
                <li>
                  <strong>Far/Past:</strong> <span className="text-blue-600 font-semibold">That</span> was an incredible
                  performance last night.
                </li>
                <li>
                  <strong>Plural Near:</strong> <span className="text-blue-600 font-semibold">These</span> are the best
                  cookies I've ever tasted.
                </li>
                <li>
                  <strong>Plural Far:</strong> <span className="text-blue-600 font-semibold">Those</span> were the days
                  when life was simpler.
                </li>
                <li>
                  <strong>Abstract Reference:</strong> <span className="text-blue-600 font-semibold">Such</span> is the
                  nature of progress.
                </li>
                <li>
                  <strong>Contrast Usage:</strong> I prefer <span className="text-blue-600 font-semibold">this</span> to{" "}
                  <span className="text-blue-600 font-semibold">that</span>.
                </li>
                <li>
                  <strong>Temporal Reference:</strong> <span className="text-blue-600 font-semibold">This</span> morning
                  vs. <span className="text-blue-600 font-semibold">that</span> evening
                </li>
                <li>
                  <strong>Situational:</strong> <span className="text-blue-600 font-semibold">This</span> is what I
                  mean. (current explanation)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Relative Pronouns in Complex Sentences</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Restrictive with "that":</strong> The book{" "}
                  <span className="text-blue-600 font-semibold">that</span> I borrowed is overdue.
                </li>
                <li>
                  <strong>Non-restrictive with "which":</strong> My car,{" "}
                  <span className="text-blue-600 font-semibold">which</span> is ten years old, still runs well.
                </li>
                <li>
                  <strong>People with "who":</strong> The student{" "}
                  <span className="text-blue-600 font-semibold">who</span> studies hardest usually succeeds.
                </li>
                <li>
                  <strong>Object form "whom":</strong> The teacher{" "}
                  <span className="text-blue-600 font-semibold">whom</span> we respect most is retiring.
                </li>
                <li>
                  <strong>Possessive "whose":</strong> The author{" "}
                  <span className="text-blue-600 font-semibold">whose</span> book won the prize will speak tonight.
                </li>
                <li>
                  <strong>Compound relatives:</strong> <span className="text-blue-600 font-semibold">Whoever</span>{" "}
                  arrives first gets the best seat.
                </li>
                <li>
                  <strong>Preposition placement:</strong> The person to{" "}
                  <span className="text-blue-600 font-semibold">whom</span> I spoke was helpful.
                </li>
                <li>
                  <strong>Omitted relatives:</strong> The book (that) I read was excellent. (that can be omitted)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Indefinite Pronouns and Agreement</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Singular Indefinites:</strong> <span className="text-blue-600 font-semibold">Everyone</span>{" "}
                  should bring his or her own lunch.
                </li>
                <li>
                  <strong>Plural Indefinites:</strong> <span className="text-blue-600 font-semibold">Several</span> of
                  the students have submitted their projects.
                </li>
                <li>
                  <strong>Variable Agreement:</strong> <span className="text-blue-600 font-semibold">All</span> of the
                  cake is gone. / <span className="text-blue-600 font-semibold">All</span> of the students are here.
                </li>
                <li>
                  <strong>Negative Forms:</strong> <span className="text-blue-600 font-semibold">No one</span> has
                  finished the assignment yet.
                </li>
                <li>
                  <strong>Choice Indefinites:</strong> <span className="text-blue-600 font-semibold">Either</span> of
                  the options is acceptable.
                </li>
                <li>
                  <strong>Quantity Indefinites:</strong> <span className="text-blue-600 font-semibold">Much</span> of
                  the work remains unfinished.
                </li>
                <li>
                  <strong>Distributive:</strong> <span className="text-blue-600 font-semibold">Each</span> of the
                  players has his own strategy.
                </li>
                <li>
                  <strong>Modern Usage:</strong> <span className="text-blue-600 font-semibold">Everyone</span> should
                  bring their lunch. (increasingly accepted)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <h4 className="text-lg font-semibold">Reciprocal Pronouns</h4>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong>Two People:</strong> John and Mary love{" "}
                  <span className="text-blue-600 font-semibold">each other</span> deeply.
                </li>
                <li>
                  <strong>Multiple People:</strong> The team members support{" "}
                  <span className="text-blue-600 font-semibold">one another</span> through challenges.
                </li>
                <li>
                  <strong>Possessive Form:</strong> They borrowed{" "}
                  <span className="text-blue-600 font-semibold">each other's</span> books for the exam.
                </li>
                <li>
                  <strong>With Prepositions:</strong> The neighbors look out for{" "}
                  <span className="text-blue-600 font-semibold">one another</span>.
                </li>
                <li>
                  <strong>Mutual Action:</strong> The dancers moved in sync with{" "}
                  <span className="text-blue-600 font-semibold">each other</span>.
                </li>
                <li>
                  <strong>Emotional Relationships:</strong> The siblings care about{" "}
                  <span className="text-blue-600 font-semibold">one another</span> deeply.
                </li>
                <li>
                  <strong>Professional Context:</strong> Colleagues should respect{" "}
                  <span className="text-blue-600 font-semibold">each other's</span> opinions.
                </li>
                <li>
                  <strong>Physical Actions:</strong> The boxers circled{" "}
                  <span className="text-blue-600 font-semibold">each other</span> cautiously.
                </li>
              </ul>
            </div>

            {/* Interactive Examples */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">🎯 Interactive Examples</h3>
              <PronounsExamples />
            </div>
          </TabsContent>

          <TabsContent value="shortcuts" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Advanced Pronoun Usage Strategies</h3>

            <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-md border border-yellow-200 dark:border-yellow-800">
              <h4 className="flex items-center text-lg font-semibold">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                Comprehensive Pronoun Selection System
              </h4>
              <p className="mt-2">
                Use these advanced strategies to master pronoun usage in any context, from basic sentences to complex
                competitive exam questions.
              </p>
            </div>

            <div className="space-y-4 mt-4">
              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">1. The Elimination Test for Compound Constructions</h5>
                <p>For compound subjects/objects, remove the other person and test the pronoun alone.</p>
                <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Step-by-Step Process:</h6>
                  <ol className="list-decimal pl-5 text-sm space-y-1 mt-2">
                    <li>Identify the compound construction (John and I, between you and me)</li>
                    <li>Remove the other person/pronoun</li>
                    <li>Test if the remaining pronoun sounds correct</li>
                    <li>Apply the same case to the compound</li>
                  </ol>
                  <p className="text-sm mt-2">
                    <strong>Example:</strong> "John and I went" → Remove "John and" → "I went" ✓
                  </p>
                  <p className="text-sm">
                    <strong>Example:</strong> "Between you and me" → Remove "you and" → "Between me" ✓
                  </p>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">2. The Substitution Test for Who/Whom</h5>
                <p>Replace with "he/him" or "she/her" to test the correct case.</p>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Quick Decision Method:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>If "he/she" fits:</strong> Use "who"
                    </li>
                    <li>
                      <strong>If "him/her" fits:</strong> Use "whom"
                    </li>
                    <li>
                      <strong>Rearrange if necessary:</strong> "Who/Whom did you see?" → "You did see him" → "whom"
                    </li>
                    <li>
                      <strong>In questions:</strong> Answer the question with he/him to test
                    </li>
                  </ul>
                  <p className="text-sm mt-2">
                    <strong>Example:</strong> "Who/Whom called?" → "He called" → Use "Who"
                  </p>
                  <p className="text-sm">
                    <strong>Example:</strong> "Call who/whom?" → "Call him" → Use "Whom"
                  </p>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">3. The Contraction Test for Possessives</h5>
                <p>If you can substitute "it is" or "it has," use "it's." Otherwise, use "its."</p>
                <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Universal Possessive Rules:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Possessive pronouns NEVER use apostrophes:</strong> its, hers, yours, theirs, ours
                    </li>
                    <li>
                      <strong>Contractions ALWAYS use apostrophes:</strong> it's, who's, you're, they're
                    </li>
                    <li>
                      <strong>Test method:</strong> Try expanding the contraction
                    </li>
                    <li>
                      <strong>Memory device:</strong> "The dog wagged its tail" (possessive) vs. "It's raining" (it is)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">4. The Reflexive Pronoun Validity Test</h5>
                <p>Use reflexive pronouns only when the subject and object refer to the same person/thing.</p>
                <div className="bg-orange-50 dark:bg-orange-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Reflexive Checklist:</h6>
                  <ol className="list-decimal pl-5 text-sm space-y-1 mt-2">
                    <li>Is there a clear antecedent in the same clause?</li>
                    <li>Does the action reflect back to the subject?</li>
                    <li>
                      Can you remove the reflexive pronoun and still have a complete sentence? (If yes, it might be
                      intensive)
                    </li>
                    <li>Are you using it to avoid choosing between I/me? (This is usually wrong)</li>
                  </ol>
                  <p className="text-sm mt-2">
                    <strong>Correct:</strong> "She taught herself" ✓ (same person)
                  </p>
                  <p className="text-sm">
                    <strong>Incorrect:</strong> "Give it to myself" ✗ → "Give it to me" ✓
                  </p>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">5. The Preposition Rule</h5>
                <p>Always use objective case pronouns after prepositions.</p>
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Common Preposition Patterns:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Between:</strong> between you and me, between him and her
                    </li>
                    <li>
                      <strong>For:</strong> for him and me, for us students
                    </li>
                    <li>
                      <strong>With:</strong> with her and them, with us
                    </li>
                    <li>
                      <strong>To:</strong> to whom, to her and him
                    </li>
                    <li>
                      <strong>Exception:</strong> Reflexive pronouns after prepositions when appropriate (to himself, by
                      herself)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">6. The Antecedent Agreement Strategy</h5>
                <p>Systematically check number, gender, and person agreement.</p>
                <div className="bg-teal-50 dark:bg-teal-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Agreement Verification Process:</h6>
                  <ol className="list-decimal pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Identify the antecedent:</strong> What noun does the pronoun replace?
                    </li>
                    <li>
                      <strong>Check number:</strong> Singular antecedent = singular pronoun
                    </li>
                    <li>
                      <strong>Check gender:</strong> Match masculine, feminine, or neuter
                    </li>
                    <li>
                      <strong>Check person:</strong> First, second, or third person
                    </li>
                    <li>
                      <strong>Special cases:</strong> Indefinite pronouns, collective nouns, compound antecedents
                    </li>
                  </ol>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">7. The Comparison Construction Method</h5>
                <p>In comparisons with "than" and "as," complete the implied clause to choose the correct case.</p>
                <div className="bg-pink-50 dark:bg-pink-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Comparison Analysis:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Complete the thought:</strong> "He is taller than I (am)" vs. "She likes him more than
                      (she likes) me"
                    </li>
                    <li>
                      <strong>Subject comparison:</strong> Use subjective case (I, he, she, we, they)
                    </li>
                    <li>
                      <strong>Object comparison:</strong> Use objective case (me, him, her, us, them)
                    </li>
                    <li>
                      <strong>Test method:</strong> Add the implied words and see what makes sense
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pl-4 border-l-4 border-yellow-200 my-4">
                <h5 className="font-semibold">8. The Indefinite Pronoun Agreement System</h5>
                <p>Master the complex rules for indefinite pronoun agreement.</p>
                <div className="bg-indigo-50 dark:bg-indigo-950 p-3 rounded-md mt-2">
                  <h6 className="font-medium">Indefinite Pronoun Categories:</h6>
                  <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                    <li>
                      <strong>Always singular:</strong> -one, -body, -thing words, each, either, neither
                    </li>
                    <li>
                      <strong>Always plural:</strong> both, few, many, several, others
                    </li>
                    <li>
                      <strong>Context-dependent:</strong> all, any, more, most, none, some (check the prepositional
                      phrase)
                    </li>
                    <li>
                      <strong>Modern flexibility:</strong> Singular "they" is increasingly accepted for unknown gender
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800 mt-4">
              <h4 className="text-lg font-semibold">Comprehensive Exam Strategy</h4>
              <ol className="list-decimal pl-5 space-y-2 mt-2">
                <li>
                  <span className="font-semibold">Identify the function:</span> Is the pronoun a subject, object, or
                  showing possession?
                </li>
                <li>
                  <span className="font-semibold">Find the antecedent:</span> What noun does the pronoun replace?
                </li>
                <li>
                  <span className="font-semibold">Check agreement:</span> Does the pronoun match its antecedent in
                  number, gender, and person?
                </li>
                <li>
                  <span className="font-semibold">Apply case rules:</span> Use the appropriate test for the pronoun's
                  function
                </li>
                <li>
                  <span className="font-semibold">Use elimination:</span> Remove other words to test the pronoun alone
                </li>
                <li>
                  <span className="font-semibold">Apply substitution:</span> Replace with simpler pronouns to test
                  correctness
                </li>
                <li>
                  <span className="font-semibold">Watch for tricky cases:</span> Pay attention to who/whom, its/it's,
                  you're/your, and reflexive pronouns
                </li>
                <li>
                  <span className="font-semibold">Practice regularly:</span> Consistent practice is key to mastering
                  pronoun usage
                </li>
              </ol>
            </div>
          </TabsContent>

          <TabsContent value="mistakes" className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold text-blue-600">Common Pronoun Mistakes and How to Avoid Them</h3>

            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-md border border-red-200 dark:border-red-800">
              <h4 className="flex items-center text-lg font-semibold">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                Major Pronoun Errors to Avoid
              </h4>
              <p className="mt-2">
                These are the most common pronoun mistakes in competitive exams and everyday writing. Learn to identify
                and correct them.
              </p>
            </div>

            <div className="space-y-4 mt-4">
              <h4 className="text-lg font-semibold">1. Wrong Case in Compound Subjects/Objects</h4>
              <p>Using the wrong pronoun case when there are multiple subjects or objects.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>John and me went to the store.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Should be "I" as subject)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>John and I went to the store.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Use subjective case for subjects)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">2. Its vs. It's Confusion</h4>
              <p>Mixing up the possessive pronoun with the contraction.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>The dog wagged it's tail.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Should be possessive "its")</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>The dog wagged its tail.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Possessive pronouns don't use apostrophes)
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">3. Who vs. Whom Errors</h4>
              <p>Using the wrong case for interrogative and relative pronouns.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>Who did you give the book to?</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Should be "whom" as object of preposition)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>To whom did you give the book?</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Use "whom" as object)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">4. Reflexive Pronoun Misuse</h4>
              <p>Using reflexive pronouns when regular pronouns are needed.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>Please give the report to John and myself.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Should be "me" - not reflexive)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>Please give the report to John and me.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Use regular objective pronoun)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">5. Indefinite Pronoun Agreement</h4>
              <p>Using plural pronouns with singular indefinite pronouns.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>Everyone should bring their lunch.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">("Everyone" is singular)</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>Everyone should bring his or her lunch.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Match singular indefinite pronoun)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">6. You're vs Your</h4>
              <p>Confusing the contraction "you are" with the possessive "your".</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>Your going to love this movie!</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Should be "You're" - contraction of "you are")
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>You're going to love this movie!</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Use the contraction "you're")</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-4">7. Singular They</h4>
              <p>Using "they/them/their" with a singular antecedent.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 dark:bg-red-950 p-3 rounded-md">
                  <p className="font-semibold text-red-600">Incorrect:</p>
                  <p>Each student should bring their own book.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (Traditionally "his or her", but singular "they" is increasingly accepted)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-3 rounded-md">
                  <p className="font-semibold text-green-600">Correct:</p>
                  <p>Each student should bring his or her own book.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    (More formal, but can also use "their" in modern usage)
                  </p>
                </div>
              </div>
            </div>

            <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 mt-4">
              <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertTitle>Exam Tip</AlertTitle>
              <AlertDescription>
                In competitive exams, pronoun questions often test case usage and agreement. Always identify what
                function the pronoun serves in the sentence and ensure it agrees with its antecedent.
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default PronounsTheory
