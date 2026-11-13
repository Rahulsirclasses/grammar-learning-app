# Grammar Learning App - Complete Project Information

## 📋 Project Overview

- **Name:** Grammar Pro – by Rahul Sir Classes
- **Framework:** Next.js 14.2.25 (React 19 + TypeScript)
- **Description:** English grammar learning platform for competitive exams (CAT, GMAT)
- **Status:** v0.1.0 (In development)
- **Version:** 0.1.0
- **Visibility:** Private

---

## 🏗️ Tech Stack

### Frontend
- **Next.js:** 14.2.25 (React Server Components)
- **React:** 19 with TypeScript 5.7
- **Styling:** Tailwind CSS 3.4 + PostCSS
- **Component Library:** Radix UI (30+ accessible components)
- **Animations:** Framer Motion 12.23.24
- **Icons:** Lucide React 0.454.0

### UI & Form Libraries
- **Data Visualization:** Recharts 2.15.0
- **Toast Notifications:** Sonner 1.7.1+
- **Form Management:** React Hook Form 7.54.1 with @hookform/resolvers
- **Form Validation:** Zod 3.24.1
- **Carousels:** Embla Carousel React 8.5.1
- **Pan/Zoom:** React Resizable Panels 2.1.7
- **Accessibility:** Radix UI Accordion, Dialog, Select, Popover, etc.

### Backend & Authentication
- **Database/Backend:** MongoDB Atlas (Mongoose)
  - mongoose: ^8.18.0
- **Server-side Authentication:** Custom JWT with HTTP-only cookies
  - jsonwebtoken: ^9.0.2
  - bcryptjs: ^2.4.3

### Analytics & Utilities
- **Analytics:** Vercel Analytics 1.3.1
- **Font:** Geist 1.3.1 (System fonts) + Inter (Google Fonts)
- **Utilities:** clsx, class-variance-authority, tailwind-merge, vaul
- **Date Handling:** date-fns 4.1.0
- **Day Picker:** react-day-picker 9.8.0
- **OTP Input:** input-otp 1.4.1
- **Command Menu:** cmdk 1.0.4

### Development
- **TypeScript:** 5.7.3 (Strict mode)
- **Linting:** ESLint
- **CSS Processing:** PostCSS, Autoprefixer
- **Build Tool:** Next.js built-in (Webpack)

---

## 📁 Project Structure

```
grammar-learning-app/
│
├── app/                              # Next.js App Router (Main Application)
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout with theme & providers
│   ├── page.tsx                      # Home/Landing page
│   │
│   ├── admin-panel-secret/           # Admin Dashboard (Secret Route)
│   │   ├── page.tsx
│   │   ├── dashboard/
│   │   ├── mock-tests/
│   │   └── questions/
│   │
│   ├── auth/                         # Authentication Routes
│   │   ├── error/
│   │   ├── forgot-password/
│   │   ├── reset-password/
│   │   └── signup-success/
│   │
│   ├── login/                        # Login page
│   │   └── page.tsx
│   │
│   ├── dashboard/                    # User Dashboard
│   │   └── page.tsx
│   │
│   ├── practice/                     # Practice Section
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   ├── error-spotting/           # Error spotting practice
│   │   ├── fill-blanks/              # Fill in the blanks practice
│   │   ├── mcq/                      # Multiple choice questions
│   │   ├── sentence-correction/      # Sentence correction
│   │   ├── topic-quizzes/            # Topic-specific quizzes
│   │   ├── topic-tests/              # Topic-specific tests
│   │   └── [testId]/                 # Dynamic test route
│   │
│   ├── mock-tests/                   # Full Mock Tests
│   │   ├── page.tsx
│   │   └── [testId]/                 # Individual mock test
│   │
│   ├── theory/                       # Grammar Theory & Lessons
│   │   ├── page.tsx
│   │   └── [topic]/                  # Dynamic topic route
│   │
│   ├── leaderboard/                  # Competitive Leaderboard
│   │   └── page.tsx
│   │
│   ├── progress/                     # Progress Tracking
│   │   └── page.tsx
│   │
│   └── bookmarks/                    # Saved Bookmarks
│       └── page.tsx
│
├── components/                       # React Components
│   ├── theme-provider.tsx            # Theme context provider
│   │
│   ├── admin/                        # Admin-specific components
│   │   ├── admin-dashboard-content.tsx
│   │   ├── mock-test-form.tsx
│   │   ├── mock-tests-list.tsx
│   │   ├── question-form.tsx
│   │   └── questions-list.tsx
│   │
│   ├── dashboard/                    # Dashboard widgets
│   │   ├── daily-drill.tsx
│   │   ├── performance-summary.tsx
│   │   ├── practice-topics.tsx
│   │   ├── quick-access.tsx
│   │   ├── recent-activity.tsx
│   │   └── streak-card.tsx
│   │
│   ├── practice/                     # Practice mode components
│   │   ├── error-spotting-practice.tsx
│   │   ├── fill-blanks-practice.tsx
│   │   ├── mcq-practice.tsx
│   │   ├── practice-categories.tsx
│   │   ├── sentence-correction-practice.tsx
│   │   ├── topic-quiz-content.tsx
│   │   ├── topic-quizzes-practice.tsx
│   │   ├── topic-test-content.tsx
│   │   ├── topic-tests-practice.tsx
│   │   └── topic-quizzes/
│   │
│   ├── theory/                       # Theory display components
│   │   └── (various theory components)
│   │
│   ├── leaderboard/                  # Leaderboard UI
│   │   ├── leaderboard-filter.tsx
│   │   └── leaderboard-table.tsx
│   │
│   ├── mock-tests/                   # Mock test components
│   │   └── mock-test-list.tsx
│   │
│   ├── progress/                     # Progress visualization
│   │   ├── achievements.tsx
│   │   ├── progress-stats.tsx
│   │   └── strength-weakness.tsx
│   │
│   ├── hero-sections/                # Landing page sections
│   │   ├── simple-hero.tsx
│   │   ├── hero-concept-1.tsx
│   │   ├── hero-concept-2.tsx
│   │   ├── hero-concept-3.tsx
│   │   ├── hero-concept-4.tsx
│   │   └── hero-concept-5.tsx
│   │
│   ├── hero-concepts/                # Hero concept blocks
│   │   ├── hero-concept-1.tsx
│   │   ├── hero-concept-2.tsx
│   │   ├── hero-concept-3.tsx
│   │   ├── hero-concept-4.tsx
│   │   └── hero-concept-5.tsx
│   │
│   ├── layouts/                      # Layout components
│   │   └── dashboard-layout.tsx
│   │
│   └── ui/                           # Reusable UI components (Shadcn/ui style)
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── context-menu.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── hover-card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── slider.tsx
│       ├── switch.tsx
│       ├── tabs.tsx
│       ├── toast.tsx
│       ├── toggle.tsx
│       ├── toggle-group.tsx
│       └── tooltip.tsx
│
├── contexts/                         # React Context
│   └── bookmark-context.tsx          # Bookmark management context
│
├── lib/                              # Utility Libraries
│   ├── utils.ts                      # General utility functions
│   ├── mongodb/                      # MongoDB connection, models, repositories
│   │   ├── mongodb.ts                # Singleton DB connection
│   │   ├── client.ts                 # Browser client wrapper
│   │   ├── server.ts                 # Server client wrapper
│   │   ├── models/
│   │   └── repositories/
│   └── auth/                         # JWT auth utilities
│       ├── jwt.ts
│       └── authMiddleware.ts
│
├── data/                             # Static Data
│   └── mini-quizzes.ts               # Mini quiz data
│
├── hooks/                            # Custom React Hooks
│   ├── use-mobile.tsx                # Mobile device detection
│   ├── use-text-to-speech.ts         # Text-to-speech functionality
│   └── use-toast.ts                  # Toast notification hook
│
├── public/                           # Static Assets
│   └── (images, icons, etc.)
│
├── styles/                           # Additional Styles
│   └── globals.css                   # Global stylesheet
│
├── scripts/                          # Database Migration Scripts
│   ├── 001_create_admin_tables.sql
│   ├── 002_add_admin_user.sql
│   ├── 003_migrate_topic_quiz_questions.sql
│   ├── 004_migrate_fill_blanks_questions.sql
│   ├── 005_migrate_mock_tests.sql
│   └── 006_migrate_additional_quiz_questions.sql
│
├── middleware.ts                     # Next.js middleware
├── next.config.mjs                   # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── postcss.config.mjs                # PostCSS configuration
├── components.json                   # Component configuration
├── package.json                      # Project dependencies
├── pnpm-lock.yaml                    # Dependency lock file
└── README.md                         # Project documentation (if exists)
```

---

## 🔧 Build & Run Scripts

```bash
# Development server (with hot reload)
npm run dev
# or
pnpm dev

# Production build
npm run build
# or
pnpm build

# Start production server
npm start
# or
pnpm start

# Run linting
npm run lint
# or
pnpm lint
```

---

## ⚙️ Configuration Details

### Next.js Configuration (next.config.mjs)
```javascript
{
  typescript: {
    ignoreBuildErrors: true,    // Build doesn't fail on TypeScript errors
  },
  images: {
    unoptimized: true,          // Disable image optimization for compatibility
  }
}
```

### TypeScript Configuration (tsconfig.json)
- **Target:** ES6
- **Mode:** Strict (enabled)
- **Module System:** ESNext
- **Module Resolution:** Bundler
- **JSX:** Preserve (for Next.js)
- **Path Alias:** `@/*` → root directory
- **Incremental Build:** Enabled
- **Config:** next.d.ts plugin enabled

### Tailwind CSS Configuration (tailwind.config.ts)
- **Default Theme:** Dark mode
- **Plugins:** 
  - tailwindcss-animate (for animations)
  - Radix UI color system integration

### PostCSS Configuration (postcss.config.mjs)
- **Plugins:** 
  - tailwindcss
  - autoprefixer (browser vendor prefixes)

---

## ✨ Key Features & Modules

### 1. Learning Modes
- **MCQ (Multiple Choice Questions)** - Traditional multiple choice tests
- **Fill in the Blanks** - Completion-based questions
- **Error Spotting** - Identify grammatical errors
- **Sentence Correction** - Correct and improve sentences
- **Topic-wise Quizzes** - Short quizzes on specific topics
- **Topic-wise Tests** - Comprehensive tests by topic

### 2. Exam Preparation
- **Mock Full-Length Tests** - Complete exam simulations
- **Performance Analytics** - Track score trends
- **Question Bank** - Comprehensive question database
- **Detailed Explanations** - Learn from mistakes

### 3. User Features
- **Dashboard** - Personalized learning dashboard
  - Daily drills
  - Performance summary
  - Quick access to practice areas
  - Recent activity tracking
  - Streak counter
- **Progress Tracking**
  - Statistics & metrics
  - Strength & weakness analysis
  - Achievements & milestones
- **Bookmarks** - Save important questions
- **Leaderboard** - Compete with other users
  - Rankings & filtering
  - Performance comparison

### 4. Admin Panel
- **Secret Route:** `/admin-panel-secret`
- **Capabilities:**
  - Create and manage questions
  - Create and manage mock tests
  - Manage quiz content
  - View and edit existing content
- **Components:**
  - Dashboard overview
  - Question form & list
  - Mock test form & list

### 5. Accessibility & UX
- **Text-to-Speech** - Audio support for questions
- **Dark Mode** - Eye-friendly interface
- **Mobile Responsive** - Works on all devices
- **Toast Notifications** - User feedback
- **Accessible Components** - Radix UI standards

### 6. Authentication
- **Custom JWT Auth** - Secure authentication with HTTP-only cookie sessions
- **Password Security** - bcrypt hashing and token-based reset flow
- **Routes:**
  - `/login` - User login
  - `/auth/signup-success` - Signup completion
  - `/auth/forgot-password` - Password recovery
  - `/auth/reset-password` - Reset password flow

---

## 📦 Dependencies Summary

### Core Dependencies (56)
- **UI & Components:** Radix UI, Lucide, Recharts, Sonner
- **Forms & Validation:** React Hook Form, Resolvers, Zod
- **Styling:** Tailwind CSS, Autoprefixer, class-variance-authority, clsx
- **Animations:** Framer Motion
- **Backend:** MongoDB (Mongoose), JWT, bcrypt
- **Utilities:** date-fns, day-picker, cmdk, vaul
- **Other:** Next.js, React, Next-Themes, Geist, Vercel Analytics

### Dev Dependencies (8)
- **@types/node** - Node.js type definitions
- **@types/react** - React type definitions
- **@types/react-dom** - React DOM type definitions
- **@types/jsonwebtoken** - JWT type definitions
- **tsx** - TypeScript script runner for migrations
- **TypeScript** - Language and compiler

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- pnpm (or npm/yarn)
- MongoDB Atlas connection string
- JWT secret key

### Installation
```bash
# Install dependencies
pnpm install

# Set up environment variables
# Create .env.local using .env.example
# Required: MONGODB_URI, JWT_SECRET, NEXT_PUBLIC_APP_URL

# Run development server
pnpm dev

# Open browser to http://localhost:3000
```

---

## 📝 Database & Migrations

Database migrations are located in `/scripts`:
1. **001_create_admin_tables.sql** - Create admin tables
2. **002_add_admin_user.sql** - Add default admin user
3. **003_migrate_topic_quiz_questions.sql** - Topic quiz data
4. **004_migrate_fill_blanks_questions.sql** - Fill blanks data
5. **005_migrate_mock_tests.sql** - Mock test questions
6. **006_migrate_additional_quiz_questions.sql** - Additional quiz content

---

## 🎯 Project Goals

This is a comprehensive English grammar learning platform designed for:
- Competitive exam preparation (CAT, GMAT, etc.)
- Interactive learning experience
- Progress tracking and analytics
- Real-time competition via leaderboards
- Personalized learning paths

---

## 📄 License & Credits

- **Creator:** Rahul Sir Classes
- **Built with:** Modern web technologies
- **Design System:** Radix UI + Tailwind CSS

---

**Last Updated:** March 6, 2026
