import { InteractiveExample } from "@/components/ui/interactive-example"

export function SubjectVerbExamples() {
  return (
    <div className="space-y-6">
      <InteractiveExample
        title="Basic Subject-Verb Agreement"
        description="Click on different parts of the sentence to understand how subject and verb must agree in number."
        parts={[
          { text: "The", type: "article", explanation: "Definite article introducing the subject" },
          { text: "cat", type: "subject", explanation: "Singular subject - one cat" },
          { text: "sleeps", type: "verb", explanation: "Singular verb form agreeing with singular subject 'cat'" },
          { text: "on", type: "preposition", explanation: "Preposition showing location" },
          { text: "the", type: "article", explanation: "Definite article" },
          { text: "couch", type: "object", explanation: "Object of the preposition 'on'" },
        ]}
        rule="A singular subject takes a singular verb. Since 'cat' is singular, we use 'sleeps' (not 'sleep')."
        correctAnswer="The cat sleeps on the couch."
        incorrectExample={{
          parts: [
            { text: "The", type: "article" },
            { text: "cat", type: "subject" },
            { text: "sleep", type: "verb" },
            { text: "on", type: "preposition" },
            { text: "the", type: "article" },
            { text: "couch", type: "object" },
          ],
          explanation: "'Sleep' is the plural verb form, but 'cat' is singular, so it should be 'sleeps'.",
        }}
      />

      <InteractiveExample
        title="Compound Subject with 'And'"
        description="When subjects are joined by 'and', they usually take a plural verb."
        parts={[
          { text: "John", type: "subject", explanation: "First part of compound subject" },
          { text: "and", type: "conjunction", explanation: "Conjunction joining two subjects" },
          { text: "Mary", type: "subject", explanation: "Second part of compound subject" },
          { text: "are", type: "verb", explanation: "Plural verb agreeing with compound subject" },
          { text: "studying", type: "verb", explanation: "Present participle forming continuous tense" },
          { text: "together", type: "adverb", explanation: "Adverb describing how they study" },
        ]}
        rule="When two or more subjects are joined by 'and', use a plural verb."
        correctAnswer="John and Mary are studying together."
        incorrectExample={{
          parts: [
            { text: "John", type: "subject" },
            { text: "and", type: "conjunction" },
            { text: "Mary", type: "subject" },
            { text: "is", type: "verb" },
            { text: "studying", type: "verb" },
            { text: "together", type: "adverb" },
          ],
          explanation: "'Is' is singular, but 'John and Mary' is a compound subject requiring the plural verb 'are'.",
        }}
      />

      <InteractiveExample
        title="Indefinite Pronoun Subject"
        description="Some indefinite pronouns are always singular, even when they seem to refer to multiple people."
        parts={[
          {
            text: "Everyone",
            type: "subject",
            explanation: "Indefinite pronoun - always singular despite referring to multiple people",
          },
          { text: "has", type: "verb", explanation: "Singular verb agreeing with singular indefinite pronoun" },
          { text: "completed", type: "verb", explanation: "Past participle forming present perfect tense" },
          { text: "their", type: "pronoun", explanation: "Plural possessive pronoun (acceptable in modern usage)" },
          { text: "assignment", type: "object", explanation: "Direct object of the verb" },
        ]}
        rule="Indefinite pronouns like 'everyone', 'someone', 'anyone' are always singular and take singular verbs."
        correctAnswer="Everyone has completed their assignment."
        incorrectExample={{
          parts: [
            { text: "Everyone", type: "subject" },
            { text: "have", type: "verb" },
            { text: "completed", type: "verb" },
            { text: "their", type: "pronoun" },
            { text: "assignment", type: "object" },
          ],
          explanation: "'Have' is plural, but 'everyone' is always singular and requires 'has'.",
        }}
      />
    </div>
  )
}
