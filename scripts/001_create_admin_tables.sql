-- Create admin users table for authentication
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create mock tests table
CREATE TABLE IF NOT EXISTS mock_tests (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  duration INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  passing_score INTEGER DEFAULT 70,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create mock test sections table
CREATE TABLE IF NOT EXISTS mock_test_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  mock_test_id TEXT NOT NULL REFERENCES mock_tests(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  section_order INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create practice questions table  
CREATE TABLE IF NOT EXISTS practice_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_type TEXT NOT NULL CHECK (question_type IN ('mcq', 'fill-blank', 'error-spotting', 'sentence-correction')),
  topic TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  question_text TEXT NOT NULL,
  options JSONB,
  correct_answer JSONB NOT NULL,
  explanation TEXT NOT NULL,
  hint TEXT,
  image_url TEXT,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create theory content table
CREATE TABLE IF NOT EXISTS theory_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  content JSONB NOT NULL,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create topic quizzes table
CREATE TABLE IF NOT EXISTS topic_quizzes (
  id TEXT PRIMARY KEY,
  topic_name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_practice_questions_topic ON practice_questions(topic);
CREATE INDEX IF NOT EXISTS idx_practice_questions_type ON practice_questions(question_type);
CREATE INDEX IF NOT EXISTS idx_practice_questions_difficulty ON practice_questions(difficulty);
CREATE INDEX IF NOT EXISTS idx_mock_test_sections_test_id ON mock_test_sections(mock_test_id);

-- Enable Row Level Security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE mock_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE mock_test_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE practice_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE theory_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE topic_quizzes ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for admin access
CREATE POLICY "Allow authenticated users to read admin_users"
  ON admin_users FOR SELECT
  USING (auth.uid()::text = id::text OR email = auth.jwt()->>'email');

CREATE POLICY "Allow admins full access to mock_tests"
  ON mock_tests FOR ALL
  USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt()->>'email'))
  WITH CHECK (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt()->>'email'));

CREATE POLICY "Allow admins full access to mock_test_sections"
  ON mock_test_sections FOR ALL
  USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt()->>'email'))
  WITH CHECK (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt()->>'email'));

CREATE POLICY "Allow admins full access to practice_questions"
  ON practice_questions FOR ALL
  USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt()->>'email'))
  WITH CHECK (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt()->>'email'));

CREATE POLICY "Allow admins full access to theory_content"
  ON theory_content FOR ALL
  USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt()->>'email'))
  WITH CHECK (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt()->>'email'));

CREATE POLICY "Allow admins full access to topic_quizzes"
  ON topic_quizzes FOR ALL
  USING (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt()->>'email'))
  WITH CHECK (EXISTS (SELECT 1 FROM admin_users WHERE email = auth.jwt()->>'email'));

-- Allow public read access to content (students can view)
CREATE POLICY "Allow public read access to mock_tests"
  ON mock_tests FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access to mock_test_sections"
  ON mock_test_sections FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access to practice_questions"
  ON practice_questions FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access to theory_content"
  ON theory_content FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access to topic_quizzes"
  ON topic_quizzes FOR SELECT
  USING (true);
