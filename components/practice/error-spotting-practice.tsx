"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, AlertTriangle, CheckCircle2, ChevronLeft, ChevronRight, Clock, Lightbulb } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type ErrorSpottingQuestion = {
  id: number
  sentence: string
  parts: string[]
  errorPart: number // 0-based index, -1 for "No error"
  explanation: string
  difficulty: "easy" | "medium" | "hard"
  topic: string
  subtopic?: string
}

const errorSpottingQuestions: ErrorSpottingQuestion[] = [
  {
    id: 1,
    sentence: "The committee have decided to postpone the meeting until next week.",
    parts: ["The committee", "have decided", "to postpone the meeting", "until next week."],
    errorPart: 1,
    explanation:
      "The word 'committee' is a collective noun and should take a singular verb when considered as a single unit. The correct form should be 'The committee has decided to postpone the meeting until next week.'",
    difficulty: "easy",
    topic: "Subject-Verb Agreement",
    subtopic: "Collective Nouns",
  },
  {
    id: 2,
    sentence: "Neither of the students were able to solve the difficult problem.",
    parts: ["Neither of the students", "were able", "to solve", "the difficult problem."],
    errorPart: 1,
    explanation:
      "When 'neither' is used as a subject, it takes a singular verb. The correct form should be 'Neither of the students was able to solve the difficult problem.'",
    difficulty: "medium",
    topic: "Subject-Verb Agreement",
    subtopic: "Indefinite Pronouns",
  },
  {
    id: 3,
    sentence: "The data clearly shows that there is a correlation between the two variables.",
    parts: ["The data", "clearly shows", "that there is", "a correlation", "between the two variables."],
    errorPart: 1,
    explanation:
      "The word 'data' is technically the plural form of 'datum' and should take a plural verb. The correct form should be 'The data clearly show that there is a correlation between the two variables.' However, in modern usage, 'data' is often treated as singular, especially in non-academic contexts.",
    difficulty: "medium",
    topic: "Subject-Verb Agreement",
    subtopic: "Latin Plurals",
  },
  {
    id: 4,
    sentence: "She is one of those teachers who is always willing to help students after class.",
    parts: ["She is", "one of those teachers", "who is", "always willing", "to help students after class."],
    errorPart: 2,
    explanation:
      "In the phrase 'one of those teachers who...', the relative pronoun 'who' refers to 'teachers' (plural), not 'one' (singular). Therefore, the correct form should be 'She is one of those teachers who are always willing to help students after class.'",
    difficulty: "hard",
    topic: "Subject-Verb Agreement",
    subtopic: "Relative Clauses",
  },
  {
    id: 5,
    sentence: "The quality of the products have improved significantly since last year.",
    parts: ["The quality", "of the products", "have improved", "significantly", "since last year."],
    errorPart: 2,
    explanation:
      "The subject of the sentence is 'quality' (singular), not 'products'. The prepositional phrase 'of the products' does not change the subject. The correct form should be 'The quality of the products has improved significantly since last year.'",
    difficulty: "medium",
    topic: "Subject-Verb Agreement",
    subtopic: "Prepositional Phrases",
  },
  {
    id: 6,
    sentence: "He gave the book to she who had asked for it first.",
    parts: ["He gave", "the book", "to she", "who had asked for it first."],
    errorPart: 2,
    explanation:
      "After prepositions, pronouns should be in the objective case. 'She' is a subjective case pronoun, and the objective case form is 'her'. The correct form should be 'He gave the book to her who had asked for it first.'",
    difficulty: "medium",
    topic: "Pronouns",
    subtopic: "Case",
  },
  {
    id: 7,
    sentence: "Between you and I, the project might not be completed on time.",
    parts: ["Between", "you and I,", "the project might not", "be completed on time."],
    errorPart: 1,
    explanation:
      "The preposition 'between' should be followed by pronouns in the objective case. 'I' is a subjective case pronoun, and the objective case form is 'me'. The correct form should be 'Between you and me, the project might not be completed on time.'",
    difficulty: "medium",
    topic: "Pronouns",
    subtopic: "Case",
  },
  {
    id: 8,
    sentence: "The dog wagged its tail when it saw its owner.",
    parts: ["The dog", "wagged its tail", "when it saw", "its owner."],
    errorPart: -1, // No error
    explanation:
      "This sentence is grammatically correct. The possessive pronoun 'its' is used correctly to show possession by the dog. It should not be confused with the contraction 'it's' (it is).",
    difficulty: "easy",
    topic: "Pronouns",
    subtopic: "Possessive",
  },
  {
    id: 9,
    sentence: "The team played good despite missing their star player.",
    parts: ["The team", "played good", "despite missing", "their star player."],
    errorPart: 1,
    explanation:
      "In this sentence, 'good' is incorrectly used as an adverb to modify the verb 'played'. 'Good' is an adjective, and the adverb form 'well' should be used instead. The correct form should be 'The team played well despite missing their star player.'",
    difficulty: "easy",
    topic: "Parts of Speech",
    subtopic: "Adverbs",
  },
  {
    id: 10,
    sentence: "Having finished the assignment, the TV was watched by John.",
    parts: ["Having finished the assignment,", "the TV", "was watched", "by John."],
    errorPart: 0,
    explanation:
      "This sentence contains a dangling modifier. The participial phrase 'Having finished the assignment' should modify the subject of the main clause, but 'the TV' cannot finish an assignment. The correct form should be 'Having finished the assignment, John watched the TV.'",
    difficulty: "medium",
    topic: "Modifiers",
    subtopic: "Dangling Modifiers",
  },
  {
    id: 11,
    sentence: "She not only completed the project on time but also under budget.",
    parts: ["She", "not only completed", "the project on time", "but also under budget."],
    errorPart: 3,
    explanation:
      "This sentence has a parallelism error. The correlative conjunction 'not only...but also' should connect parallel elements. Here, 'on time' is an adverbial phrase, but 'under budget' is not parallel to it. The correct form should be 'She not only completed the project on time but also completed it under budget.' or 'She completed the project not only on time but also under budget.'",
    difficulty: "hard",
    topic: "Parallelism",
    subtopic: "Correlative Conjunctions",
  },
  {
    id: 12,
    sentence: "The teacher explained the problem to the students and solving it step by step.",
    parts: ["The teacher", "explained the problem", "to the students", "and solving it step by step."],
    errorPart: 3,
    explanation:
      "This sentence has a parallelism error. The two actions connected by 'and' should be in the same form. 'Explained' is a past tense verb, but 'solving' is a gerund. The correct form should be 'The teacher explained the problem to the students and solved it step by step.'",
    difficulty: "medium",
    topic: "Parallelism",
    subtopic: "Verb Forms",
  },
  {
    id: 13,
    sentence: "I have been working on this project since three months.",
    parts: ["I have been working", "on this project", "since", "three months."],
    errorPart: 3,
    explanation:
      "The preposition 'since' is used with a specific point in time, while 'for' is used with a duration. The correct form should be 'I have been working on this project for three months.' or 'I have been working on this project since January.'",
    difficulty: "medium",
    topic: "Prepositions",
    subtopic: "Time Expressions",
  },
  {
    id: 14,
    sentence: "She is looking forward to meet her old friends at the reunion.",
    parts: ["She is", "looking forward to", "meet", "her old friends at the reunion."],
    errorPart: 2,
    explanation:
      "After the preposition 'to' in the phrasal verb 'look forward to', a gerund (verb + ing) should be used, not the base form of the verb. The correct form should be 'She is looking forward to meeting her old friends at the reunion.'",
    difficulty: "medium",
    topic: "Prepositions",
    subtopic: "Gerunds",
  },
  {
    id: 15,
    sentence: "If I would have known about the problem earlier, I would have fixed it.",
    parts: ["If I would have known", "about the problem", "earlier,", "I would have fixed it."],
    errorPart: 0,
    explanation:
      "In conditional sentences, the past perfect tense should be used in the if-clause when expressing a hypothetical past situation. The correct form should be 'If I had known about the problem earlier, I would have fixed it.'",
    difficulty: "hard",
    topic: "Tenses",
    subtopic: "Conditionals",
  },
  {
    id: 16,
    sentence: "By the time we reached the station, the train already left.",
    parts: ["By the time", "we reached the station,", "the train", "already left."],
    errorPart: 3,
    explanation:
      "When describing an action that occurred before another past action, the past perfect tense should be used. The correct form should be 'By the time we reached the station, the train had already left.'",
    difficulty: "medium",
    topic: "Tenses",
    subtopic: "Past Perfect",
  },
  {
    id: 17,
    sentence: "The number of students in the class are increasing every year.",
    parts: ["The number", "of students", "in the class", "are increasing every year."],
    errorPart: 3,
    explanation:
      "The phrase 'the number of' takes a singular verb because 'number' is the subject. The correct form should be 'The number of students in the class is increasing every year.' (Note: 'A number of students' would take a plural verb.)",
    difficulty: "medium",
    topic: "Subject-Verb Agreement",
    subtopic: "Quantifiers",
  },
  {
    id: 18,
    sentence: "She is taller than any other girl in her class.",
    parts: ["She is", "taller than", "any other girl", "in her class."],
    errorPart: -1, // No error
    explanation:
      "This sentence is grammatically correct. When using a comparative adjective ('taller') with 'than', the phrase 'any other' correctly excludes the subject from the comparison group.",
    difficulty: "medium",
    topic: "Modifiers",
    subtopic: "Comparatives",
  },
  {
    id: 19,
    sentence: "The reason why he was late is because his car broke down.",
    parts: ["The reason", "why he was late", "is because", "his car broke down."],
    errorPart: 2,
    explanation:
      "The phrase 'the reason is because' is redundant since both 'reason' and 'because' express cause. The correct form should be 'The reason he was late is that his car broke down.' or 'He was late because his car broke down.'",
    difficulty: "hard",
    topic: "Redundancy",
    subtopic: "Redundant Expressions",
  },
  {
    id: 20,
    sentence: "Each of the students have to submit their assignments by Friday.",
    parts: ["Each of the students", "have to submit", "their assignments", "by Friday."],
    errorPart: 1,
    explanation:
      "The subject 'each' is singular and requires a singular verb. The correct form should be 'Each of the students has to submit their assignments by Friday.' (Note: While traditionally 'his or her' would be used instead of 'their', modern usage accepts 'their' as a singular gender-neutral pronoun.)",
    difficulty: "medium",
    topic: "Subject-Verb Agreement",
    subtopic: "Indefinite Pronouns",
  },
  {
    id: 21,
    sentence: "The book which you recommended me was very interesting.",
    parts: ["The book", "which you recommended", "me", "was very interesting."],
    errorPart: 2,
    explanation:
      "The verb 'recommend' requires the preposition 'to' when followed by an indirect object. The correct form should be 'The book which you recommended to me was very interesting.' Alternatively, the sentence could be restructured as 'The book that you recommended was very interesting.'",
    difficulty: "medium",
    topic: "Prepositions",
    subtopic: "Verb + Preposition",
  },
  {
    id: 22,
    sentence: "She is one of the most talented singer I have ever heard.",
    parts: ["She is", "one of the most talented", "singer", "I have ever heard."],
    errorPart: 2,
    explanation:
      "After the phrase 'one of the most', a plural noun should be used because 'one of' implies that there are multiple items in the group. The correct form should be 'She is one of the most talented singers I have ever heard.'",
    difficulty: "medium",
    topic: "Nouns",
    subtopic: "Singular/Plural",
  },
  {
    id: 23,
    sentence: "The manager, along with his team members, are working on the new project.",
    parts: ["The manager,", "along with his team members,", "are working", "on the new project."],
    errorPart: 2,
    explanation:
      "Phrases like 'along with', 'as well as', and 'in addition to' do not change the number of the subject. The subject is 'manager' (singular), so a singular verb is required. The correct form should be 'The manager, along with his team members, is working on the new project.'",
    difficulty: "hard",
    topic: "Subject-Verb Agreement",
    subtopic: "Intervening Phrases",
  },
  {
    id: 24,
    sentence: "I would rather go for a walk than to stay at home.",
    parts: ["I would rather", "go for a walk", "than", "to stay at home."],
    errorPart: 3,
    explanation:
      "After 'would rather... than', parallel structures should be used. Since 'go' is the base form of the verb, 'stay' should also be in the base form. The correct form should be 'I would rather go for a walk than stay at home.'",
    difficulty: "medium",
    topic: "Parallelism",
    subtopic: "Comparative Structures",
  },
  {
    id: 25,
    sentence: "The news about the economic recovery are encouraging.",
    parts: ["The news", "about the economic recovery", "are", "encouraging."],
    errorPart: 2,
    explanation:
      "The word 'news' is a singular uncountable noun and requires a singular verb. The correct form should be 'The news about the economic recovery is encouraging.'",
    difficulty: "easy",
    topic: "Subject-Verb Agreement",
    subtopic: "Uncountable Nouns",
  },
  {
    id: 26,
    sentence: "She is the only one of the candidates who have the necessary qualifications.",
    parts: ["She is", "the only one", "of the candidates", "who have the necessary qualifications."],
    errorPart: 3,
    explanation:
      "In this sentence, the relative pronoun 'who' refers to 'the only one' (singular), not 'candidates'. Therefore, a singular verb is required. The correct form should be 'She is the only one of the candidates who has the necessary qualifications.'",
    difficulty: "hard",
    topic: "Subject-Verb Agreement",
    subtopic: "Relative Clauses",
  },
  {
    id: 27,
    sentence: "Neither the students nor the teacher were able to solve the problem.",
    parts: ["Neither the students", "nor the teacher", "were able", "to solve the problem."],
    errorPart: 2,
    explanation:
      "With 'neither/nor', the verb agrees with the noun closer to it. Since 'teacher' is singular, a singular verb is required. The correct form should be 'Neither the students nor the teacher was able to solve the problem.' (If the order were reversed: 'Neither the teacher nor the students were able...')",
    difficulty: "hard",
    topic: "Subject-Verb Agreement",
    subtopic: "Compound Subjects",
  },
  {
    id: 28,
    sentence: "The woman whom I thought was my friend betrayed me.",
    parts: ["The woman", "whom I thought", "was my friend", "betrayed me."],
    errorPart: 1,
    explanation:
      "In this sentence, 'who' should be used instead of 'whom' because it functions as the subject of 'was my friend'. 'Whom' is used for objects. The correct form should be 'The woman who I thought was my friend betrayed me.'",
    difficulty: "hard",
    topic: "Pronouns",
    subtopic: "Relative Pronouns",
  },
  {
    id: 29,
    sentence: "The children enjoyed themselves at the party.",
    parts: ["The children", "enjoyed", "themselves", "at the party."],
    errorPart: -1, // No error
    explanation:
      "This sentence is grammatically correct. The reflexive pronoun 'themselves' correctly refers back to the plural subject 'children'.",
    difficulty: "easy",
    topic: "Pronouns",
    subtopic: "Reflexive Pronouns",
  },
  {
    id: 30,
    sentence: "She is more prettier than her sister.",
    parts: ["She is", "more prettier", "than", "her sister."],
    errorPart: 1,
    explanation:
      "This is a double comparative error. Either 'more' or the comparative form '-er' should be used, but not both. The correct form should be 'She is prettier than her sister.' or 'She is more pretty than her sister.' (though the first option is preferred for short adjectives like 'pretty')",
    difficulty: "easy",
    topic: "Modifiers",
    subtopic: "Comparatives",
  },
  {
    id: 31,
    sentence: "The professor, together with his research assistants, are conducting a groundbreaking study.",
    parts: ["The professor,", "together with his research assistants,", "are conducting", "a groundbreaking study."],
    errorPart: 2,
    explanation:
      "Phrases like 'together with', 'along with', and 'as well as' don't change the number of the subject. The subject is 'professor' (singular), so it should take a singular verb ('is conducting').",
    difficulty: "medium",
    topic: "Subject-Verb Agreement",
    subtopic: "Intervening Phrases",
  },
  {
    id: 32,
    sentence: "She is one of the only students who has completed all the assignments.",
    parts: ["She is", "one of the only students", "who has", "completed all the assignments."],
    errorPart: 2,
    explanation:
      "The relative pronoun 'who' refers to 'students' (plural), not 'one', so it should take a plural verb ('who have').",
    difficulty: "hard",
    topic: "Subject-Verb Agreement",
    subtopic: "Relative Clauses",
  },
  {
    id: 33,
    sentence: "The data was collected over a period of six months and has been analyzed thoroughly.",
    parts: ["The data", "was collected", "over a period of six months", "and has been analyzed thoroughly."],
    errorPart: -1,
    explanation:
      "While traditionally 'data' is plural (singular: 'datum'), in modern usage, especially in non-scientific contexts, it's often treated as a singular mass noun. Both 'was collected' and 'has been analyzed' are acceptable in contemporary English.",
    difficulty: "medium",
    topic: "Subject-Verb Agreement",
    subtopic: "Latin Plurals",
  },
  {
    id: 34,
    sentence: "If I would have known about the traffic, I would have left earlier.",
    parts: ["If I would have known", "about the traffic,", "I would have left", "earlier."],
    errorPart: 0,
    explanation:
      "In third conditional sentences (past unreal situations), we use 'if + past perfect' in the if-clause, not 'if + would have'. The correct form is 'If I had known about the traffic...'",
    difficulty: "hard",
    topic: "Conditionals",
    subtopic: "Third Conditional",
  },
  {
    id: 35,
    sentence: "She doesn't hardly ever visit her parents.",
    parts: ["She", "doesn't", "hardly ever", "visit her parents."],
    errorPart: 2,
    explanation:
      "'Doesn't' and 'hardly' both express negative ideas, creating a double negative. In standard English, only one negative element should be used. Either 'She doesn't ever visit...' or 'She hardly ever visits...' would be correct.",
    difficulty: "medium",
    topic: "Negation",
    subtopic: "Double Negatives",
  },
  {
    id: 36,
    sentence: "The reason why he resigned is because he found a better job.",
    parts: ["The reason", "why he resigned", "is because", "he found a better job."],
    errorPart: 2,
    explanation:
      "The phrase 'the reason is because' is redundant since both 'reason' and 'because' express cause. The correct form is 'The reason he resigned is that he found a better job' or simply 'He resigned because he found a better job.'",
    difficulty: "medium",
    topic: "Redundancy",
    subtopic: "Redundant Expressions",
  },
  {
    id: 37,
    sentence: "Between you and I, the project might not be completed on time.",
    parts: ["Between", "you and I,", "the project might not", "be completed on time."],
    errorPart: 1,
    explanation:
      "After prepositions like 'between', we use object pronouns. 'I' is a subject pronoun, and the object form is 'me'. The correct phrase is 'Between you and me'.",
    difficulty: "medium",
    topic: "Pronouns",
    subtopic: "Case",
  },
  {
    id: 38,
    sentence: "She is looking forward to meet her old friends at the reunion.",
    parts: ["She is", "looking forward to", "meet", "her old friends at the reunion."],
    errorPart: 2,
    explanation:
      "After the preposition 'to' in the phrasal verb 'look forward to', a gerund (verb + ing) should be used, not the base form of the verb. The correct form is 'looking forward to meeting'.",
    difficulty: "medium",
    topic: "Prepositions",
    subtopic: "Gerunds",
  },
  {
    id: 39,
    sentence: "The committee have decided to postpone the meeting until next week.",
    parts: ["The committee", "have decided", "to postpone the meeting", "until next week."],
    errorPart: 1,
    explanation:
      "In American English, collective nouns like 'committee' are treated as singular and take singular verbs. The correct form should be 'The committee has decided'. In British English, collective nouns can take plural verbs when emphasizing the individual members.",
    difficulty: "medium",
    topic: "Subject-Verb Agreement",
    subtopic: "Collective Nouns",
  },
  {
    id: 40,
    sentence: "She is more prettier than her sister.",
    parts: ["She is", "more prettier", "than", "her sister."],
    errorPart: 1,
    explanation:
      "This is a double comparative error. Either 'more' or the comparative form '-er' should be used, but not both. The correct form should be 'She is prettier than her sister' or 'She is more pretty than her sister' (though the first option is preferred for short adjectives like 'pretty').",
    difficulty: "easy",
    topic: "Modifiers",
    subtopic: "Comparatives",
  },
]

export default function ErrorSpottingPractice() {
  const [activeTab, setActiveTab] = useState("all")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60) // 60 seconds per question
  const [isQuizCompleted, setIsQuizCompleted] = useState(false)

  // Filter questions based on active tab
  const filteredQuestions =
    activeTab === "all"
      ? errorSpottingQuestions
      : errorSpottingQuestions.filter((q) => q.topic.toLowerCase() === activeTab.toLowerCase())

  const totalQuestions = filteredQuestions.length
  const currentQuestion =
    totalQuestions > 0 ? filteredQuestions[Math.min(currentQuestionIndex, totalQuestions - 1)] : null
  const progress =
    totalQuestions > 0 ? ((Math.min(currentQuestionIndex, totalQuestions - 1) + 1) / totalQuestions) * 100 : 0

  // Timer effect
  useEffect(() => {
    if (isAnswerSubmitted || isQuizCompleted || !currentQuestion) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setIsAnswerSubmitted(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentQuestionIndex, isAnswerSubmitted, isQuizCompleted, currentQuestion])

  // Reset for next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setIsAnswerSubmitted(false)
      setTimeLeft(60)
    } else {
      setIsQuizCompleted(true)
    }
  }

  // Handle previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
      setSelectedAnswer(null)
      setIsAnswerSubmitted(false)
      setTimeLeft(60)
    }
  }

  // Submit answer
  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    setIsAnswerSubmitted(true)
    if (selectedAnswer === currentQuestion?.errorPart) {
      setScore((prev) => prev + 1)
    }
  }

  // Restart quiz
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setIsAnswerSubmitted(false)
    setScore(0)
    setTimeLeft(60)
    setIsQuizCompleted(false)
  }

  // Get unique topics for tabs
  const topics = ["all", ...Array.from(new Set(errorSpottingQuestions.map((q) => q.topic.toLowerCase())))]

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  // Render parts of the sentence with highlighting
  const renderSentenceParts = () => {
    return currentQuestion?.parts.map((part, index) => {
      let className = "px-2 py-1 rounded-md inline-block mr-1 mb-1 "

      if (isAnswerSubmitted) {
        if (index === currentQuestion?.errorPart) {
          className += "bg-red-900/30 border border-red-700"
        } else if (index === selectedAnswer && selectedAnswer !== currentQuestion?.errorPart) {
          className += "bg-amber-900/30 border border-amber-700"
        } else {
          className += "bg-slate-800 border border-slate-600"
        }
      } else {
        className += "bg-slate-800 hover:bg-slate-700 cursor-pointer border border-slate-600"
      }

      return (
        <span key={index} className={className} onClick={() => !isAnswerSubmitted && setSelectedAnswer(index)}>
          <span className="font-semibold text-primary">{String.fromCharCode(65 + index)})</span> {part}
        </span>
      )
    })
  }

  // Add this function
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setIsAnswerSubmitted(false)
    setTimeLeft(60)
  }

  // Quiz completion summary
  if (isQuizCompleted) {
    const percentage = Math.round((score / totalQuestions) * 100)
    let feedback = ""

    if (percentage >= 90) {
      feedback = "Excellent! You have a strong command of English grammar."
    } else if (percentage >= 70) {
      feedback = "Good job! You have a solid understanding of grammar rules."
    } else if (percentage >= 50) {
      feedback = "Not bad! With more practice, you can improve your grammar skills."
    } else {
      feedback = "Keep practicing! Grammar takes time to master."
    }

    return (
      <Card className="w-full bg-slate-900/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-center text-slate-100">Quiz Completed!</CardTitle>
          <CardDescription className="text-center text-slate-400">
            You scored {score} out of {totalQuestions} questions correctly.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full border-8 border-primary flex items-center justify-center">
              <span className="text-3xl font-bold text-slate-100">{percentage}%</span>
            </div>
          </div>
          <Alert className="bg-blue-950/30 border-blue-800/50">
            <AlertCircle className="h-4 w-4 text-blue-400" />
            <AlertTitle className="text-blue-300">Feedback</AlertTitle>
            <AlertDescription className="text-blue-200/80">{feedback}</AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleRestartQuiz} className="bg-primary hover:bg-primary/90">
            Restart Quiz
          </Button>
        </CardFooter>
      </Card>
    )
  }

  // Handle case when there are no questions
  if (!currentQuestion) {
    return (
      <Card className="w-full bg-slate-900/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-100">No Questions Available</CardTitle>
          <CardDescription className="text-slate-400">
            There are no questions available for the selected topic. Please select a different topic.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="mb-4 bg-slate-800 border-slate-700">
              {topics.map((topic) => (
                <TabsTrigger
                  key={topic}
                  value={topic}
                  className="capitalize data-[state=active]:bg-slate-700 data-[state=active]:text-slate-100"
                >
                  {topic === "all" ? "All Topics" : topic}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="mb-4 bg-slate-800 border-slate-700">
          {topics.map((topic) => (
            <TabsTrigger
              key={topic}
              value={topic}
              className="capitalize data-[state=active]:bg-slate-700 data-[state=active]:text-slate-100"
            >
              {topic === "all" ? "All Topics" : topic}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <Card className="w-full bg-slate-900/50 border-slate-700">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center gap-2 text-slate-100">
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                    <Badge
                      className={
                        currentQuestion.difficulty === "easy"
                          ? "bg-emerald-900/50 text-emerald-300 border-emerald-700"
                          : currentQuestion.difficulty === "medium"
                            ? "bg-amber-900/50 text-amber-300 border-amber-700"
                            : "bg-red-900/50 text-red-300 border-red-700"
                      }
                    >
                      {currentQuestion.difficulty}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Topic: {currentQuestion.topic}
                    {currentQuestion.subtopic && ` - ${currentQuestion.subtopic}`}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span className={`font-mono ${timeLeft < 10 ? "text-red-400" : "text-slate-300"}`}>
                    {formatTime(timeLeft)}
                  </span>
                </div>
              </div>
              <Progress value={progress} className="h-2 bg-slate-800" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-2 text-slate-200">Identify the part that contains an error:</h3>
                <div className="text-lg mb-4">{renderSentenceParts()}</div>
                <RadioGroup
                  value={selectedAnswer?.toString() || ""}
                  onValueChange={(value) => setSelectedAnswer(Number.parseInt(value))}
                  className="space-y-2"
                  disabled={isAnswerSubmitted}
                >
                  {currentQuestion.parts.map((part, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={index.toString()}
                        id={`option-${index}`}
                        disabled={isAnswerSubmitted}
                        className="border-slate-500"
                      />
                      <Label
                        htmlFor={`option-${index}`}
                        className={
                          isAnswerSubmitted && index === currentQuestion.errorPart
                            ? "font-semibold text-primary"
                            : "text-slate-300"
                        }
                      >
                        Part {String.fromCharCode(65 + index)}
                      </Label>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="-1"
                      id="option-no-error"
                      disabled={isAnswerSubmitted}
                      className="border-slate-500"
                    />
                    <Label
                      htmlFor="option-no-error"
                      className={
                        isAnswerSubmitted && currentQuestion.errorPart === -1
                          ? "font-semibold text-primary"
                          : "text-slate-300"
                      }
                    >
                      No error
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {isAnswerSubmitted && (
                <Alert
                  className={
                    selectedAnswer === currentQuestion.errorPart
                      ? "bg-emerald-950/30 border-emerald-800/50"
                      : "bg-red-950/30 border-red-800/50"
                  }
                >
                  {selectedAnswer === currentQuestion.errorPart ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <AlertTitle className="text-emerald-300">Correct!</AlertTitle>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="h-4 w-4 text-red-400" />
                      <AlertTitle className="text-red-300">Incorrect</AlertTitle>
                    </>
                  )}
                  <AlertDescription className="mt-2">
                    <div className="flex items-start gap-2 mb-2">
                      <Lightbulb className="h-4 w-4 mt-1 text-amber-400" />
                      <div>
                        <p className="font-medium text-slate-200">Explanation:</p>
                        <p className="text-slate-300">{currentQuestion.explanation}</p>
                      </div>
                    </div>
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
            <CardFooter className="flex justify-between border-t border-slate-700">
              <Button
                variant="outline"
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>

              {!isAnswerSubmitted ? (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="bg-primary hover:bg-primary/90"
                >
                  Submit Answer
                </Button>
              ) : (
                <Button onClick={handleNextQuestion} className="bg-primary hover:bg-primary/90">
                  {currentQuestionIndex < totalQuestions - 1 ? (
                    <>
                      Next <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    "Finish Quiz"
                  )}
                </Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
