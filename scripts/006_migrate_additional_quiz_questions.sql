-- Additional topic quiz questions migration

-- Pronouns questions
INSERT INTO practice_questions (question_type, topic, difficulty, question_text, options, correct_answer, explanation, tags)
VALUES
('mcq', 'pronouns', 'easy', 'Which sentence uses pronouns correctly?',
 '["Him and me went to the store.", "Her and I went to the store.", "She and I went to the store.", "She and me went to the store."]'::jsonb,
 '"She and I went to the store."'::jsonb,
 'When pronouns are used as subjects, they must be in the subjective case. ''She'' and ''I'' are both subjective pronouns, making ''She and I went to the store'' correct.',
 ARRAY['pronouns', 'subject-pronouns']),

('fill-blank', 'pronouns', 'medium', 'Complete with the correct pronoun: The prize was divided between John and ____.',
 NULL,
 '"me"'::jsonb,
 'After prepositions like ''between'', we use object pronouns. Since ''I'' is the subject form and ''me'' is the object form, ''me'' is correct here.',
 ARRAY['pronouns', 'object-pronouns']),

-- Parallelism questions
('mcq', 'parallelism', 'medium', 'Which sentence demonstrates correct parallel structure?',
 '["The CEO likes talking to his employees and to visit the factory floor.", "The CEO likes talking to his employees and visiting the factory floor.", "The CEO likes to talk to his employees and visiting the factory floor.", "The CEO likes to talk to his employees and visit to the factory floor."]'::jsonb,
 '"The CEO likes talking to his employees and visiting the factory floor."'::jsonb,
 'Parallel structure requires using the same grammatical form for similar elements. Option B correctly uses gerunds (''talking'' and ''visiting'') for both activities.',
 ARRAY['parallelism', 'grammar-structure']),

('fill-blank', 'parallelism', 'medium', 'Complete the sentence with the correct parallel structure: "The professor asked students to analyze the data, interpret the results, and ____ a conclusion."',
 NULL,
 '"draw"'::jsonb,
 'The sentence uses infinitives (''to analyze'', ''interpret'' which implies ''to interpret''), so ''to draw'' or just ''draw'' maintains parallel structure. If you chose ''drawing'', the entire structure would need to be gerunds.',
 ARRAY['parallelism', 'infinitives']),

-- Idioms and Phrases questions
('mcq', 'idioms-phrases', 'medium', 'Which sentence uses the idiom correctly?',
 '["The new employee is really pulling his weight in the department.", "The new employee is really pushing his weight in the department.", "The new employee is really carrying his weight in the department.", "The new employee is really holding his weight in the department."]'::jsonb,
 '"The new employee is really pulling his weight in the department."'::jsonb,
 '''To pull one''s weight'' is the correct idiom, meaning to do one''s fair share of work or contribute equally to a group effort.',
 ARRAY['idioms', 'workplace']),

('fill-blank', 'idioms-phrases', 'easy', 'Complete the idiom: "The merger fell through at the last minute, so it''s back to the ____ board."',
 NULL,
 '"drawing"'::jsonb,
 '''Back to the drawing board'' is an idiom meaning to start over after an idea or plan has failed.',
 ARRAY['idioms', 'planning']),

-- Punctuation questions
('mcq', 'punctuation', 'medium', 'Which sentence uses semicolons correctly?',
 '["I have three cats; they are all black and white.", "I have three cats: Fluffy, Mittens; and Whiskers.", "I have three cats, they are all black and white.", "I have three cats; Fluffy; Mittens; and Whiskers."]'::jsonb,
 '"I have three cats; they are all black and white."'::jsonb,
 'Semicolons are used to join two independent clauses without a coordinating conjunction. Option A correctly uses a semicolon to join two related independent clauses.',
 ARRAY['punctuation', 'semicolons']),

-- Articles and Determiners questions
('mcq', 'articles-determiners', 'easy', 'Which sentence uses articles correctly?',
 '["She is an university student studying a history.", "She is a university student studying history.", "She is the university student studying a history.", "She is university student studying the history."]'::jsonb,
 '"She is a university student studying history."'::jsonb,
 'We use ''a'' before words beginning with a consonant sound (like ''university'' which starts with a ''y'' sound). ''History'' as a general subject doesn''t need an article, but specific history topics would use ''the'' (e.g., ''the history of Rome'').',
 ARRAY['articles', 'determiners']),

-- Prepositions questions
('mcq', 'prepositions', 'easy', 'Which sentence uses prepositions correctly?',
 '["She arrived to the airport at 9 PM on Monday.", "She arrived at the airport at 9 PM on Monday.", "She arrived in the airport at 9 PM in Monday.", "She arrived at the airport on 9 PM in Monday."]'::jsonb,
 '"She arrived at the airport at 9 PM on Monday."'::jsonb,
 'We use ''at'' with specific locations like airports, ''at'' with specific times, and ''on'' with days of the week. ''She arrived at the airport at 9 PM on Monday'' is correct.',
 ARRAY['prepositions', 'time-place']);
