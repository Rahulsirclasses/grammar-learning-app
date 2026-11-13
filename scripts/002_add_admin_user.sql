-- Add your admin email here
-- Replace with the actual admin email address
INSERT INTO admin_users (email)
VALUES ('manishakranthi94@gmail.com')
ON CONFLICT (email) DO NOTHING;
