import { InteractiveExample } from "@/components/ui/interactive-example"

export function PronounsExamples() {
  return (
    <div className="space-y-6">
      <InteractiveExample
        title="Pronoun Case: Subject vs Object"
        description="Understanding when to use subjective (I, he, she) vs objective (me, him, her) pronouns."
        parts={[
          { text: "Between", type: "preposition", explanation: "Preposition requiring objective case pronouns" },
          {
            text: "you",
            type: "pronoun",
            explanation: "Pronoun that's the same in both subjective and objective cases",
          },
          { text: "and", type: "conjunction", explanation: "Conjunction connecting two pronouns" },
          { text: "me", type: "pronoun", explanation: "Objective case pronoun - correct after preposition 'between'" },
          { text: "this", type: "pronoun", explanation: "Demonstrative pronoun" },
          { text: "will", type: "verb", explanation: "Modal auxiliary verb" },
          { text: "remain", type: "verb", explanation: "Main verb" },
          { text: "confidential", type: "adjective", explanation: "Predicate adjective" },
        ]}
        rule="After prepositions, always use objective case pronouns (me, him, her, us, them)."
        correctAnswer="Between you and me, this will remain confidential."
        incorrectExample={{
          parts: [
            { text: "Between", type: "preposition" },
            { text: "you", type: "pronoun" },
            { text: "and", type: "conjunction" },
            { text: "I", type: "pronoun" },
            { text: "this", type: "pronoun" },
            { text: "will", type: "verb" },
            { text: "remain", type: "verb" },
            { text: "confidential", type: "adjective" },
          ],
          explanation: "'I' is subjective case, but after the preposition 'between', we need objective case 'me'.",
        }}
      />

      <InteractiveExample
        title="Who vs Whom"
        description="Determining whether to use 'who' (subject) or 'whom' (object)."
        parts={[
          { text: "The", type: "article", explanation: "Definite article" },
          { text: "person", type: "subject", explanation: "Noun being described by the relative clause" },
          { text: "whom", type: "pronoun", explanation: "Objective case relative pronoun - object of 'called'" },
          { text: "you", type: "subject", explanation: "Subject of the relative clause" },
          { text: "called", type: "verb", explanation: "Verb in the relative clause - 'whom' is its object" },
          { text: "is", type: "verb", explanation: "Main verb of the sentence" },
          { text: "my", type: "pronoun", explanation: "Possessive pronoun" },
          { text: "sister", type: "object", explanation: "Predicate nominative" },
        ]}
        rule="Use 'whom' when the pronoun is the object of a verb or preposition. Use 'who' when it's the subject."
        correctAnswer="The person whom you called is my sister."
        incorrectExample={{
          parts: [
            { text: "The", type: "article" },
            { text: "person", type: "subject" },
            { text: "who", type: "pronoun" },
            { text: "you", type: "subject" },
            { text: "called", type: "verb" },
            { text: "is", type: "verb" },
            { text: "my", type: "pronoun" },
            { text: "sister", type: "object" },
          ],
          explanation: "'Who' is subjective, but here the pronoun is the object of 'called', so 'whom' is correct.",
        }}
      />

      <InteractiveExample
        title="Pronoun-Antecedent Agreement"
        description="Pronouns must agree with their antecedents in number and gender."
        parts={[
          { text: "Each", type: "pronoun", explanation: "Indefinite pronoun - always singular" },
          { text: "student", type: "subject", explanation: "Noun modified by 'each'" },
          { text: "must", type: "verb", explanation: "Modal auxiliary expressing obligation" },
          { text: "bring", type: "verb", explanation: "Main verb" },
          { text: "his", type: "pronoun", explanation: "Possessive pronoun agreeing with singular 'each student'" },
          { text: "or", type: "conjunction", explanation: "Coordinating conjunction" },
          { text: "her", type: "pronoun", explanation: "Alternative possessive pronoun for gender inclusivity" },
          { text: "own", type: "adjective", explanation: "Adjective emphasizing possession" },
          { text: "textbook", type: "object", explanation: "Direct object" },
        ]}
        rule="When the antecedent is singular (like 'each student'), use singular pronouns. Use 'his or her' or 'their' for gender inclusivity."
        correctAnswer="Each student must bring his or her own textbook."
        incorrectExample={{
          parts: [
            { text: "Each", type: "pronoun" },
            { text: "student", type: "subject" },
            { text: "must", type: "verb" },
            { text: "bring", type: "verb" },
            { text: "their", type: "pronoun" },
            { text: "own", type: "adjective" },
            { text: "textbook", type: "object" },
          ],
          explanation:
            "While 'their' is increasingly accepted, traditionally 'each student' (singular) should take singular pronouns 'his or her'.",
        }}
      />
    </div>
  )
}
