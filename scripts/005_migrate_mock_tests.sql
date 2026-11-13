-- Migration script for mock tests

INSERT INTO mock_tests (id, title, description, duration, total_questions, passing_score)
VALUES
('full-verbal-1', 'Full Verbal Test 1', 'Comprehensive verbal reasoning assessment covering all grammar topics', 60, 50, 70),

('sentence-correction-1', 'Sentence Correction Test', 'Focused assessment on identifying and correcting grammatical errors', 30, 25, 70),

('reading-comprehension-1', 'Reading Comprehension Test', 'Test your ability to understand and analyze written passages', 45, 30, 75),

('critical-reasoning-1', 'Critical Reasoning Test', 'Evaluate arguments and identify logical fallacies', 40, 20, 75);
