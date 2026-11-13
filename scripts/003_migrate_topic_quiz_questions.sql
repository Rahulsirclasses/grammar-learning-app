-- Migration script for topic quiz questions
-- This migrates all hardcoded questions from topic-quiz-content.tsx to the database

-- Subject-Verb Agreement questions
INSERT INTO practice_questions (question_type, topic, difficulty, question_text, options, correct_answer, explanation, tags)
VALUES
('mcq', 'subject-verb-agreement', 'medium', 'Which of the following sentences demonstrates correct subject-verb agreement?', 
 '["The team of researchers are conducting the experiment.", "The team of researchers is conducting the experiment.", "The researchers team are conducting the experiment.", "The researchers team is conducting the experiment."]'::jsonb,
 '"The team of researchers is conducting the experiment."'::jsonb,
 'When a collective noun like ''team'' is followed by a prepositional phrase (''of researchers''), the verb should agree with the collective noun. ''Team'' is singular, so it takes the singular verb ''is''.',
 ARRAY['subject-verb-agreement', 'collective-nouns']),

('fill-blank', 'subject-verb-agreement', 'medium', 'Complete the sentence with the correct form: Neither the students nor the teacher ____ going to the field trip tomorrow.',
 NULL,
 '"is"'::jsonb,
 'When ''neither/nor'' connects a singular and plural subject, the verb agrees with the subject closest to it. In this case, ''teacher'' is singular, so we use the singular verb ''is''.',
 ARRAY['subject-verb-agreement', 'correlative-conjunctions']),

('error-spotting', 'subject-verb-agreement', 'medium', 'Identify the part that contains an error, if any: The committee / have decided / to postpone / the meeting.',
 '["The committee", "have decided", "to postpone", "the meeting."]'::jsonb,
 '"have decided"'::jsonb,
 'In American English, collective nouns like ''committee'' are treated as singular and take singular verbs. The correct form should be ''The committee has decided...''',
 ARRAY['subject-verb-agreement', 'collective-nouns']),

('mcq', 'subject-verb-agreement', 'medium', 'Which sentence demonstrates correct subject-verb agreement with indefinite pronouns?',
 '["Each of the students have completed their assignments.", "Each of the students has completed their assignments.", "None of the cake were eaten at the party.", "Either of the options are acceptable."]'::jsonb,
 '"Each of the students has completed their assignments."'::jsonb,
 'Indefinite pronouns like ''each'', ''everyone'', ''anybody'', ''either'', and ''neither'' are singular and take singular verbs. So ''Each of the students has completed'' is correct.',
 ARRAY['subject-verb-agreement', 'indefinite-pronouns']),

('error-spotting', 'subject-verb-agreement', 'hard', 'Identify the part that contains an error, if any: The number of students / attending the lecture / have increased / significantly this year.',
 '["The number of students", "attending the lecture", "have increased", "significantly this year."]'::jsonb,
 '"have increased"'::jsonb,
 'The subject is ''The number'' (singular), not ''students''. So it should be ''The number of students has increased''. Be careful with phrases like ''a number of'' (plural) versus ''the number of'' (singular).',
 ARRAY['subject-verb-agreement', 'number-of']),

('fill-blank', 'subject-verb-agreement', 'medium', 'Complete the sentence with the correct verb form: The jury ____ for three days before reaching a verdict.',
 NULL,
 '"deliberated"'::jsonb,
 'In American English, collective nouns like ''jury'', ''team'', and ''family'' are typically treated as singular, but when emphasizing the individual members, they can take plural verbs. In this case, ''deliberated'' is correct as we''re using the past tense.',
 ARRAY['subject-verb-agreement', 'collective-nouns', 'tenses']),

-- Tenses questions
('mcq', 'tenses', 'medium', 'Which sentence correctly uses the past perfect tense?',
 '["I have eaten lunch before he arrived.", "I had eaten lunch before he arrived.", "I was eating lunch before he arrived.", "I ate lunch before he arrived."]'::jsonb,
 '"I had eaten lunch before he arrived."'::jsonb,
 'The past perfect tense (had + past participle) is used to indicate that an action was completed before another action in the past. ''I had eaten lunch'' happened before ''he arrived''.',
 ARRAY['tenses', 'past-perfect']),

('fill-blank', 'tenses', 'hard', 'Complete with the correct tense: By the time we reach the theater, the movie ____ already ____.',
 NULL,
 '"will have started"'::jsonb,
 'This requires the future perfect tense (will have + past participle) to show that one future action (the movie starting) will be completed before another future action (reaching the theater).',
 ARRAY['tenses', 'future-perfect']),

('error-spotting', 'tenses', 'medium', 'Identify the part that contains an error, if any: She is working / at this company / since 2010 / and loves her job.',
 '["She is working", "at this company", "since 2010", "and loves her job."]'::jsonb,
 '"She is working"'::jsonb,
 'For an action that started in the past and continues to the present with ''since'', we need the present perfect continuous tense. It should be ''She has been working'' instead of ''She is working''.',
 ARRAY['tenses', 'present-perfect-continuous']),

('mcq', 'tenses', 'medium', 'Which sentence correctly uses the present perfect continuous tense?',
 '["I am studying English for five years.", "I have been studying English for five years.", "I studied English for five years.", "I have studied English for five years."]'::jsonb,
 '"I have been studying English for five years."'::jsonb,
 'The present perfect continuous tense (have/has been + present participle) is used for actions that started in the past and continue to the present. ''I have been studying'' correctly expresses an ongoing action from the past until now.',
 ARRAY['tenses', 'present-perfect-continuous']),

('error-spotting', 'tenses', 'hard', 'Identify the part that contains an error, if any: If I would have known / about the problem earlier, / I would have fixed it / immediately.',
 '["If I would have known", "about the problem earlier,", "I would have fixed it", "immediately."]'::jsonb,
 '"If I would have known"'::jsonb,
 'In conditional sentences expressing unreal past situations, we use ''If + past perfect'' in the if-clause. The correct form should be ''If I had known about the problem earlier...''',
 ARRAY['tenses', 'conditionals', 'past-perfect']),

('fill-blank', 'tenses', 'hard', 'Complete with the correct tense: By the time I graduate, I ____ at this university for five years.',
 NULL,
 '"will have been studying"'::jsonb,
 'This requires the future perfect continuous tense (will have been + present participle) or future perfect tense (will have + past participle) to show an action that will continue up to a certain point in the future.',
 ARRAY['tenses', 'future-perfect-continuous']),

-- Modifiers questions
('mcq', 'modifiers', 'medium', 'Which sentence contains a dangling modifier?',
 '["Walking down the street, the birds sang loudly.", "Walking down the street, I saw a beautiful garden.", "The children played happily in the garden.", "The well-decorated room impressed all the guests."]'::jsonb,
 '"Walking down the street, the birds sang loudly."'::jsonb,
 'In ''Walking down the street, the birds sang loudly'', the modifier ''Walking down the street'' is dangling because birds cannot walk down the street. The sentence should be rewritten to clearly identify who was walking.',
 ARRAY['modifiers', 'dangling-modifiers']),

('fill-blank', 'modifiers', 'medium', 'Correct the dangling modifier: "____ the equation, the solution became clear."',
 NULL,
 '"After solving"'::jsonb,
 'The original sentence has a dangling modifier because it doesn''t specify who solved the equation. Adding a subject or changing to ''After solving'' makes it clear who performed the action.',
 ARRAY['modifiers', 'dangling-modifiers']),

('error-spotting', 'modifiers', 'hard', 'Identify the part that contains an error, if any: Quickly and with precision, / the surgeon performed / the delicate operation / successful.',
 '["Quickly and with precision,", "the surgeon performed", "the delicate operation", "successful."]'::jsonb,
 '"successful"'::jsonb,
 'The adverb ''successful'' is incorrectly used to modify the verb ''performed''. It should be ''successfully'' to properly modify how the operation was performed.',
 ARRAY['modifiers', 'adverbs']),

('mcq', 'modifiers', 'medium', 'Which sentence uses a misplaced modifier?',
 '["The professor discussed the assignment that was due on Friday in class.", "In class, the professor discussed the assignment that was due on Friday.", "The professor discussed in class the assignment that was due on Friday.", "The assignment that was due on Friday was discussed by the professor in class."]'::jsonb,
 '"The professor discussed the assignment that was due on Friday in class."'::jsonb,
 'In the first option, ''in class'' is misplaced, creating ambiguity about whether the assignment is due in class on Friday or if the discussion happened in class. The modifier should be placed closer to the verb it modifies.',
 ARRAY['modifiers', 'misplaced-modifiers']),

('fill-blank', 'modifiers', 'medium', 'Correct the misplaced modifier: "____, my roommate ate the leftover pizza."',
 NULL,
 '"Finding the pizza in the refrigerator"'::jsonb,
 'The original sentence suggests the roommate was in the refrigerator, which is a misplaced modifier. The corrected version clarifies that the pizza was in the refrigerator.',
 ARRAY['modifiers', 'misplaced-modifiers']),

('error-spotting', 'modifiers', 'hard', 'Identify the part that contains an error, if any: The student / handed in his paper / to the professor / full of errors.',
 '["The student", "handed in his paper", "to the professor", "full of errors."]'::jsonb,
 '"full of errors"'::jsonb,
 'The phrase ''full of errors'' is a misplaced modifier. As written, it suggests the professor is full of errors. It should be placed closer to ''paper'': ''The student handed in his paper, full of errors, to the professor.''',
 ARRAY['modifiers', 'misplaced-modifiers']);
