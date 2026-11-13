
/**
 * Seed Database with Practice Questions and Mock Tests
 */

import { connect, connection } from "mongoose"
import { PracticeQuestionModel } from "@/lib/mongodb/models/practice-question"
import { MockTestModel } from "@/lib/mongodb/models/mock-test"
import { FillBlanksQuestionModel } from "@/lib/mongodb/models/fill-blanks-question"

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/grammar-learning-app"

const sampleMCQs = [
    {
        id: "tenses-1",
        question: "She _____ to the store every day.",
        options: ["go", "goes", "going", "gone"],
        correctAnswer: 1,
        explanation: "With third-person singular subjects (she, he, it), we use the base form of the verb plus -s or -es in the simple present tense.",
        difficulty: "easy",
        topic: "tenses",
        subtopic: "simple present",
        type: "mcq"
    },
    {
        id: "tenses-2",
        question: "By the time we arrived, the movie _____.",
        options: ["already started", "has already started", "had already started", "was already starting"],
        correctAnswer: 2,
        explanation: "The past perfect tense (had + past participle) is used to indicate that an action was completed before another action in the past.",
        difficulty: "medium",
        topic: "tenses",
        subtopic: "past perfect",
        type: "mcq"
    },
    {
        id: "subject-verb-1",
        question: "Either the principal or the teachers _____ going to attend the conference.",
        options: ["is", "are", "was", "were"],
        correctAnswer: 1,
        explanation: "When 'either/or' or 'neither/nor' is used, the verb agrees with the noun closest to it. In this case, 'teachers' is plural, so 'are' is correct.",
        difficulty: "medium",
        topic: "subject-verb",
        subtopic: "either/or",
        type: "mcq"
    }
];

const sampleFillBlanks = [
    {
        id: "fb-1",
        sentence: "The professor asked us to submit _____ assignments by Friday.",
        blanks: [{ index: 0, answer: "our", acceptableAnswers: ["the", "those", "these"] }],
        explanation: "The possessive adjective 'our' is used to show ownership of the assignments by the speaker and others.",
        difficulty: "easy",
        topic: "pronouns",
        hint: "This blank requires a possessive adjective that shows ownership by the speaker and others.",
        type: "fill-blanks"
    },
    {
        id: "fb-2",
        sentence: "She has been working _____ this project _____ March.",
        blanks: [
            { index: 0, answer: "on", acceptableAnswers: [] },
            { index: 1, answer: "since", acceptableAnswers: [] }
        ],
        explanation: "'On' is the correct preposition to use with 'working on a project'. 'Since' is used with a specific point in time to indicate when something began.",
        difficulty: "medium",
        topic: "prepositions",
        hint: "The first blank needs a preposition that collocates with 'working', and the second blank needs a preposition that indicates a starting point in time.",
        type: "fill-blanks"
    }
];

const sampleMockTests = [
    {
        id: "full-verbal-1",
        title: "Full Verbal Test 1",
        description: "Comprehensive verbal reasoning assessment covering all grammar topics",
        duration: 60,
        questionsCount: 50,
        difficulty: "Medium",
        category: "Comprehensive",
        sections: [
            { title: "Test Overview", content: "This comprehensive verbal test covers all major grammar topics including parts of speech, tenses, articles, modifiers, and more. You'll have 60 minutes to complete 50 questions across various formats." },
            { title: "Instructions", content: "Read each question carefully. Some questions may have multiple correct answers. You can mark questions for review and return to them later. Your score will be calculated based on the number of correct answers with no penalty for incorrect responses." },
            { title: "Question Types", content: "This test includes multiple choice questions, sentence correction problems, error spotting exercises, and fill-in-the-blank questions. Each type tests different aspects of your grammar knowledge." },
            { title: "Scoring", content: "Each question is worth 1 point. A score of 40 or above is considered excellent. 30-39 is good, 20-29 is average, and below 20 indicates areas that need improvement." }
        ],
        questions: [
            { id: 1, type: "mcq", text: "Which of the following sentences uses the past perfect tense correctly?", options: ["I have eaten breakfast before I went to school.", "I had eaten breakfast before I went to school.", "I had eaten breakfast before I had gone to school.", "I have had eaten breakfast before I went to school."], correctAnswer: 1 },
            { id: 2, type: "mcq", text: "Identify the sentence with the correct use of articles:", options: ["She is an university student.", "I need a umbrella because it's raining.", "He is the best player on the team.", "We went to a movies last night."], correctAnswer: 2 },
            { id: 3, type: "mcq", text: "Which sentence contains a dangling modifier?", options: ["Walking down the street, the birds sang loudly.", "The teacher explained the problem to the students who were confused.", "Having finished the assignment, the TV was turned on.", "While reading the book, she fell asleep."], correctAnswer: 2 },
            { id: 4, type: "mcq", text: "Choose the sentence with correct subject-verb agreement:", options: ["The group of students are studying for their exams.", "Each of the books have a different cover design.", "Neither of the candidates have withdrawn from the race.", "Economics is my favorite subject."], correctAnswer: 3 },
            { id: 5, type: "mcq", text: "Identify the sentence with correct pronoun usage:", options: ["Between you and I, the project was a success.", "The teacher gave the assignments to John and I.", "She is taller than him.", "Them and us need to work together."], correctAnswer: 2 }
        ]
    },
    {
        id: "sentence-correction-1",
        title: "Sentence Correction Test 1",
        description: "Identify and correct grammatical errors in sentences",
        duration: 45,
        questionsCount: 30,
        difficulty: "Medium",
        category: "Grammar",
        sections: [
            { title: "Test Overview", content: "This test focuses on your ability to identify and correct grammatical errors in sentences. You'll be presented with sentences that may contain errors in subject-verb agreement, pronoun usage, modifiers, parallelism, and other grammar concepts." },
            { title: "Instructions", content: "Read each sentence carefully and identify the error, if any. Choose the option that best corrects the error while maintaining the meaning of the original sentence. Some sentences may not contain any errors." },
            { title: "Question Types", content: "This test includes sentence correction questions where you must identify grammatical errors and select the best correction. Each question presents a sentence with an underlined portion that may contain an error." },
            { title: "Scoring", content: "Each question is worth 1 point. A score of 24 or above is considered excellent. 18-23 is good, 12-17 is average, and below 12 indicates areas that need improvement." }
        ],
        questions: [
            { id: 1, type: "mcq", text: "Choose the sentence with the correct subject-verb agreement:", options: ["The committee are discussing the proposal.", "The committee is discussing the proposal.", "The committee were discussing the proposal.", "The committee have discussing the proposal."], correctAnswer: 1 },
            { id: 2, type: "mcq", text: "Identify the sentence with the correct pronoun usage:", options: ["The manager asked John and I to attend the meeting.", "The manager asked John and me to attend the meeting.", "The manager asked John and myself to attend the meeting.", "The manager asked I and John to attend the meeting."], correctAnswer: 1 }
        ]
    },
    {
        id: "reading-comprehension-1",
        title: "Reading Comprehension Test 1",
        description: "Analyze passages and answer questions about content and meaning",
        duration: 50,
        questionsCount: 25,
        difficulty: "Hard",
        category: "Reading",
        passage: "In an era marked by unprecedented environmental challenges, the conservation of our natural world has emerged as one of the most pressing imperatives of our time. The delicate balance of ecosystems that has sustained life on Earth for millennia is increasingly threatened by human activities...",
        sections: [
            { title: "Test Overview", content: "This test evaluates your ability to understand, analyze, and interpret written passages. You'll read several passages and answer questions about main ideas, details, inferences, author's tone, and vocabulary in context." },
            { title: "Instructions", content: "Read each passage carefully before answering the questions. Choose the best answer based on what is stated or implied in the passage." },
            { title: "Question Types", content: "This test includes multiple-choice questions based on reading passages." },
            { title: "Scoring", content: "Each question is worth 1 point. A score of 20 or above is considered excellent." }
        ],
        questions: [
            { id: 1, type: "mcq", text: "Based on the passage, what is the main idea?", options: ["The importance of environmental conservation", "The effects of climate change on wildlife", "The role of governments in protecting endangered species", "The relationship between industrialization and habitat destruction"], correctAnswer: 0 }
        ]
    },
    {
        id: "critical-reasoning-1",
        title: "Critical Reasoning Test 1",
        description: "Evaluate arguments and identify logical reasoning patterns",
        duration: 40,
        questionsCount: 20,
        difficulty: "Hard",
        category: "Reasoning",
        arguments: [
            { id: 1, text: "In recent years, there has been a significant increase in the number of people working from home. A survey conducted last year found that employees who work from home report higher job satisfaction...", questions: [1] }
        ],
        sections: [
            { title: "Test Overview", content: "This test assesses your ability to analyze arguments, identify assumptions, evaluate evidence, and recognize logical flaws." },
            { title: "Instructions", content: "Read each argument carefully and consider the question that follows. Choose the answer that best addresses the question based on the information provided." },
            { title: "Question Types", content: "This test includes questions about strengthening/weakening arguments, identifying assumptions, and drawing conclusions." },
            { title: "Scoring", content: "Each question is worth 1 point. A score of 16 or above is considered excellent." }
        ],
        questions: [
            { id: 1, type: "mcq", text: "Which of the following best identifies the flaw in the argument?", options: ["It confuses correlation with causation", "It relies on an appeal to authority", "It uses circular reasoning", "It presents a false dilemma"], correctAnswer: 0, argumentId: 1 }
        ]
    }
];

async function seedDatabase() {
    try {
        console.log("🔗 Connecting to MongoDB at:", MONGODB_URI)
        await connect(MONGODB_URI)
        console.log("✅ Connected to MongoDB")

        console.log("\n🌱 Seeding collection: practice_questions...")
        for (const q of sampleMCQs) {
            await PracticeQuestionModel.findOneAndUpdate({ id: q.id }, q, { upsert: true, new: true })
            console.log(`  ✓ Seeded MCQ: ${q.id}`)
        }

        console.log("\n🌱 Seeding collection: fill_blanks_questions...")
        for (const q of sampleFillBlanks) {
            // NOTE: Using FillBlanksQuestionModel here as it matches the collection name in setup script
            await FillBlanksQuestionModel.findOneAndUpdate({ id: q.id }, q, { upsert: true, new: true })
            console.log(`  ✓ Seeded FillBlanks: ${q.id}`)
        }

        console.log("\n🌱 Seeding collection: mock_tests...")
        for (const t of sampleMockTests) {
            await MockTestModel.findOneAndUpdate({ id: t.id }, t, { upsert: true, new: true })
            console.log(`  ✓ Seeded mock test: ${t.id}`)
        }

        console.log("\n✨ Database seeding complete!")

        await connection.close()
        process.exit(0)
    } catch (error) {
        console.error("❌ Seeding failed:", error)
        process.exit(1)
    }
}

seedDatabase()
