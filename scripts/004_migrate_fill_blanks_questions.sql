-- Migration script for fill blanks practice questions

INSERT INTO practice_questions (question_type, topic, difficulty, question_text, correct_answer, explanation, hint, tags)
VALUES
('fill-blank', 'pronouns', 'easy', 'The professor asked us to submit _____ assignments by Friday.',
 '"our"'::jsonb,
 'The possessive adjective ''our'' is used to show ownership of the assignments by the speaker and others.',
 'This blank requires a possessive adjective that shows ownership by the speaker and others.',
 ARRAY['pronouns', 'possessive-adjectives']),

('fill-blank', 'prepositions', 'medium', 'She has been working _____ this project _____ March.',
 '"on, since"'::jsonb,
 '''On'' is the correct preposition to use with ''working on a project''. ''Since'' is used with a specific point in time to indicate when something began.',
 'The first blank needs a preposition that collocates with ''working'', and the second blank needs a preposition that indicates a starting point in time.',
 ARRAY['prepositions', 'time-prepositions']),

('fill-blank', 'verbs', 'easy', 'The professor _____ us to submit our assignments by Friday.',
 '"asked"'::jsonb,
 'Verbs like ''ask'', ''tell'', ''instruct'', ''remind'', ''want'', and ''expect'' can all be used to describe a request or requirement from an authority figure like a professor.',
 'This blank requires a verb that indicates a request or instruction from the professor to the students.',
 ARRAY['verbs', 'reporting-verbs']),

('fill-blank', 'tenses', 'medium', 'She _____ been studying English _____ three years.',
 '"has, for"'::jsonb,
 '''Has been studying'' is the present perfect continuous tense, used for actions that started in the past and continue to the present. ''For'' is used with periods of time to indicate duration.',
 'The first blank needs an auxiliary verb for present perfect continuous tense, and the second blank needs a preposition that indicates duration.',
 ARRAY['tenses', 'present-perfect-continuous', 'time-prepositions']),

('fill-blank', 'conditionals', 'medium', 'If I _____ rich, I _____ travel around the world.',
 '"were, would"'::jsonb,
 'This is a second conditional sentence (unreal present/future). We use ''were'' (though ''was'' is also acceptable in informal contexts) in the if-clause and ''would + base verb'' in the main clause.',
 'This is a conditional sentence expressing a hypothetical situation. The first blank needs a past form of ''be'', and the second blank needs a modal verb expressing possibility.',
 ARRAY['conditionals', 'second-conditional']),

('fill-blank', 'comparatives', 'easy', 'She speaks French _____ than she speaks English.',
 '"better"'::jsonb,
 'When comparing two qualities or actions, we use comparative forms. ''Better'' is the comparative form of ''well'', used to compare skill levels.',
 'This blank requires a comparative form to show the difference between her French and English speaking abilities.',
 ARRAY['comparatives', 'adjectives']),

('fill-blank', 'gerunds', 'medium', 'Despite _____ hard, he didn''t pass the exam.',
 '"studying"'::jsonb,
 'After ''despite'', we use a noun, a pronoun, or a gerund (verb + -ing). ''Studying hard'' is a gerund phrase functioning as a noun.',
 'After ''despite'', we need a noun form. This blank requires the -ing form of a verb that describes preparation for an exam.',
 ARRAY['gerunds', 'prepositions']),

('fill-blank', 'relative-clauses', 'easy', 'The book _____ I borrowed from the library is very interesting.',
 '"that"'::jsonb,
 'We use relative pronouns like ''that'' or ''which'' to introduce relative clauses that give more information about a noun. Both ''that'' and ''which'' can be used to refer to things in defining relative clauses.',
 'This blank requires a relative pronoun that connects ''the book'' to the clause ''I borrowed from the library''.',
 ARRAY['relative-clauses', 'relative-pronouns']),

('fill-blank', 'modals', 'medium', 'You _____ better see a doctor if the pain continues.',
 '"had"'::jsonb,
 '''Had better'' is a modal expression used to give strong advice or to say what is the best or most sensible thing to do in a particular situation. ''Should'', ''would'', and ''might'' are also acceptable depending on the intended meaning.',
 'This blank requires a modal or auxiliary verb that expresses advice or recommendation.',
 ARRAY['modals', 'advice']),

('fill-blank', 'tenses', 'medium', 'By the time we reached the station, the train _____ already left.',
 '"had"'::jsonb,
 'When describing an action that occurred before another past action, we use the past perfect tense (had + past participle). ''Had already left'' indicates the train''s departure happened before our arrival at the station.',
 'This blank requires an auxiliary verb to form the past perfect tense, which is used for an action completed before another past action.',
 ARRAY['tenses', 'past-perfect']);
