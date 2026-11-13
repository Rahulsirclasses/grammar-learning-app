import { InteractiveExample } from "@/components/ui/interactive-example"

export function TensesExamples() {
  return (
    <div className="space-y-6">
      <InteractiveExample
        title="Present Perfect vs Simple Past"
        description="Understanding when to use present perfect versus simple past tense."
        parts={[
          { text: "I", type: "subject", explanation: "First person singular subject" },
          { text: "have", type: "verb", explanation: "Auxiliary verb 'have' for present perfect" },
          {
            text: "lived",
            type: "verb",
            explanation: "Past participle of 'live' - action started in past, continues to present",
          },
          { text: "here", type: "adverb", explanation: "Adverb of place" },
          { text: "for", type: "preposition", explanation: "Preposition indicating duration" },
          { text: "five", type: "adjective", explanation: "Number adjective" },
          { text: "years", type: "object", explanation: "Time period - object of preposition" },
        ]}
        rule="Use present perfect for actions that started in the past and continue to the present, especially with 'for' and 'since'."
        correctAnswer="I have lived here for five years."
        incorrectExample={{
          parts: [
            { text: "I", type: "subject" },
            { text: "lived", type: "verb" },
            { text: "here", type: "adverb" },
            { text: "for", type: "preposition" },
            { text: "five", type: "adjective" },
            { text: "years", type: "object" },
          ],
          explanation:
            "Simple past 'lived' suggests the action is finished, but the person still lives there, so present perfect is needed.",
        }}
      />

      <InteractiveExample
        title="Future Tense Formation"
        description="Different ways to express future actions in English."
        parts={[
          { text: "She", type: "subject", explanation: "Third person singular subject" },
          { text: "will", type: "verb", explanation: "Modal auxiliary for simple future" },
          { text: "start", type: "verb", explanation: "Base form of main verb after 'will'" },
          { text: "her", type: "pronoun", explanation: "Possessive pronoun" },
          { text: "new", type: "adjective", explanation: "Adjective describing the job" },
          { text: "job", type: "object", explanation: "Direct object" },
          { text: "tomorrow", type: "adverb", explanation: "Time adverb indicating when" },
        ]}
        rule="Use 'will + base verb' for simple future tense to express decisions made at the moment of speaking or predictions."
        correctAnswer="She will start her new job tomorrow."
        incorrectExample={{
          parts: [
            { text: "She", type: "subject" },
            { text: "will", type: "verb" },
            { text: "starting", type: "verb" },
            { text: "her", type: "pronoun" },
            { text: "new", type: "adjective" },
            { text: "job", type: "object" },
            { text: "tomorrow", type: "adverb" },
          ],
          explanation:
            "After 'will', use the base form of the verb, not the -ing form. It should be 'start', not 'starting'.",
        }}
      />

      <InteractiveExample
        title="Past Continuous vs Simple Past"
        description="Understanding when an action was in progress versus when it was completed."
        parts={[
          { text: "While", type: "conjunction", explanation: "Subordinating conjunction showing simultaneous actions" },
          { text: "I", type: "subject", explanation: "Subject of the dependent clause" },
          { text: "was", type: "verb", explanation: "Past tense of 'be' - auxiliary for past continuous" },
          { text: "reading", type: "verb", explanation: "Present participle - ongoing action in the past" },
          { text: "the", type: "article", explanation: "Definite article" },
          { text: "phone", type: "subject", explanation: "Subject of main clause" },
          {
            text: "rang",
            type: "verb",
            explanation: "Simple past - completed action that interrupted the ongoing action",
          },
        ]}
        rule="Use past continuous for ongoing actions interrupted by simple past actions."
        correctAnswer="While I was reading, the phone rang."
        incorrectExample={{
          parts: [
            { text: "While", type: "conjunction" },
            { text: "I", type: "subject" },
            { text: "read", type: "verb" },
            { text: "the", type: "article" },
            { text: "phone", type: "subject" },
            { text: "was", type: "verb" },
            { text: "ringing", type: "verb" },
          ],
          explanation:
            "The ongoing action should be in past continuous (was reading), and the interrupting action in simple past (rang).",
        }}
      />
    </div>
  )
}
