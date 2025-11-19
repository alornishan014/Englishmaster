# 🎓 English Master - Learn English with Expert-Led Online Courses

A comprehensive English learning platform built with modern web technologies, designed to help students master English from basics to advanced levels. Created by [Taskkora](https://taskkora.com) - A Freelancing Marketplace.

## ✨ Features

### 🎯 Core Learning System
- **📚 9 Comprehensive Courses** - From English basics to IELTS preparation
- **🎮 Interactive Letter Matching Game** - Candy Crush-style game with English letters
- **🏆 Point-Based Learning System** - Earn points to unlock advanced courses
- **📊 Progress Tracking** - Monitor your learning journey with detailed analytics
- **🎖️ Certificates** - Earn certificates upon course completion

### 🎨 Modern User Interface
- **📱 Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **🌙 Dark/Light Mode Support** - Comfortable viewing in any environment
- **✨ Smooth Animations** - Engaging micro-interactions and transitions
- **🎯 Accessible Design** - Built with web accessibility best practices

### 💻 Technology Stack

#### 🎯 Core Framework
- **⚡ Next.js 15** - React framework with App Router for optimal performance
- **📘 TypeScript 5** - Type-safe development for better code quality
- **🎨 Tailwind CSS 4** - Utility-first CSS framework for rapid styling

#### 🧩 UI Components & Styling
- **🧩 shadcn/ui** - High-quality, accessible components built on Radix UI
- **🎯 Lucide React** - Beautiful & consistent icon library
- **🌈 Professional Design** - Custom color scheme with #0a233b and yellow accents

#### 🗄️ Database & Backend
- **🗄️ Prisma ORM** - Type-safe database operations with SQLite
- **🔐 Authentication Ready** - NextAuth.js integration for secure user management
- **📊 User Management** - Points system, course enrollment, and progress tracking

#### 🎮 Interactive Features
- **🎮 Mini Game** - Unlimited letter-matching gameplay
- **📰 Blog System** - Educational content and learning tips
- **💬 Testimonials** - Auto-scrolling student feedback display
- **🔍 Smart Search** - Course search with real-time suggestions

## 🎯 Learning Paths

### 🆓 Free Course
- **English Basics** - Fundamental grammar, vocabulary, and communication skills

### 🏆 Points-Based Courses (2-8)
- **Grammar Master** (150 points) - Comprehensive grammar training
- **Vocabulary Builder** (200 points) - 3000+ essential words
- **Speaking Skills** (250 points) - Pronunciation and conversation practice
- **Writing Excellence** (300 points) - Essay and professional writing
- **Listening Comprehension** (350 points) - Various accents and contexts
- **Business English** (400 points) - Professional communication
- **Advanced Fluency** (500 points) - Native-like proficiency

### 💎 Premium Course
- **IELTS Preparation** (৳3,000) - Complete test preparation with band 7+ guarantee

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up database
npm run db:push

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the application running.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage with hero section
│   ├── pricing/           # Pricing plans page
│   ├── courses/           # Course listing page
│   ├── game/              # Letter matching game
│   └── blog/              # Educational blog
├── components/
│   ├── layout/            # Header, Footer, Credit components
│   ├── sections/          # Homepage sections (Hero, Courses, Testimonials)
│   ├── game/              # Game components
│   └── ui/                # shadcn/ui components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and configurations
└── prisma/                # Database schema and migrations
```

## 🎮 Game Features

### Letter Matching Game
- **🎯 8x8 Grid** - Colorful letter tiles with vowel/consonant distinction
- **🔄 Match Mechanics** - Match 2, 3, or 4 letters horizontally or vertically
- **🏆 Scoring System** - Points, combos, levels, and high scores
- **🎨 Visual Feedback** - Smooth animations and color-coded tiles
- **♾️ Unlimited Gameplay** - Play forever with increasing difficulty

### Game Controls
- **Click to Select** - Click a letter, then click an adjacent letter to swap
- **Auto-Match Detection** - Automatic detection and removal of matches
- **Combo System** - Build combos for bonus points
- **Level Progression** - Difficulty increases as you advance

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#0a233b` - Main brand color for headers and backgrounds
- **Accent Yellow**: `#facc15` - Buttons, highlights, and call-to-action elements
- **Text Colors**: White on dark backgrounds, dark on light backgrounds
- **Hover Effects**: Color reversal for interactive elements

### Typography
- **Headings**: Bold, large text with proper hierarchy
- **Body Text**: Clean, readable fonts with optimal line height
- **Responsive**: Scales appropriately across all device sizes

### Component Design
- **Cards**: Rounded corners with shadows and hover effects
- **Buttons**: Consistent styling with hover state animations
- **Forms**: Clean, accessible form elements with proper validation
- **Navigation**: Mobile-responsive with hamburger menu

## 🔧 Development Features

### 📝 Code Quality
- **TypeScript** - Full type safety across the application
- **ESLint** - Code linting for consistent style
- **Prettier** - Code formatting for maintainability
- **React Best Practices** - Modern hooks and patterns

### 🎯 Performance
- **Next.js Optimizations** - Automatic code splitting and caching
- **Image Optimization** - Responsive images with lazy loading
- **Bundle Optimization** - Minimal JavaScript for fast loading
- **SEO Ready** - Proper meta tags and structured data

### 🔐 Security
- **Input Validation** - Protection against XSS and injection attacks
- **Authentication** - Secure user management system
- **Data Protection** - Safe handling of user information
- **API Security** - Protected routes and rate limiting

## 🌐 Pages & Routes

### Main Pages
- **Homepage** (`/`) - Hero section, course cards, testimonials
- **Pricing** (`/pricing`) - Detailed pricing plans and features
- **Courses** (`/courses`) - Browse all courses with filtering
- **Game** (`/game`) - Play the letter matching game
- **Blog** (`/blog`) - Educational articles and learning tips

### Navigation Features
- **Smart Search Bar** - Real-time course suggestions
- **Mobile Menu** - Hamburger menu for mobile devices
- **Breadcrumbs** - Easy navigation tracking
- **Footer Links** - Quick access to important pages

## 🏆 Student Features

### Learning Management
- **Course Enrollment** - Easy enrollment in free and paid courses
- **Progress Tracking** - Monitor completion percentages
- **Points System** - Earn and spend points on course access
- **Achievement Badges** - Celebrate learning milestones

### Community Features
- **Testimonials** - Share learning experiences
- **Student Reviews** - Rate and review courses
- **Discussion Forums** - Connect with other learners
- **Leaderboards** - Compete in games and challenges

## 📊 Admin Features

### Course Management
- **Course Creation** - Add new courses with lessons and content
- **Content Editing** - Update course materials and descriptions
- **Student Progress** - Monitor individual and class performance
- **Payment Processing** - Approve premium course purchases

### User Management
- **Student Accounts** - Manage user profiles and permissions
- **Point Allocation** - Award points for course completion
- **Support Tickets** - Handle student inquiries and issues
- **Analytics Dashboard** - Track platform usage and engagement

## 🎯 Educational Philosophy

### Learning Approach
- **Gamification** - Make learning fun and engaging
- **Progressive Difficulty** - Start easy and gradually increase complexity
- **Practical Application** - Real-world scenarios and examples
- **Multimedia Content** - Videos, audio, and interactive exercises

### Assessment Methods
- **Quizzes and Tests** - Regular knowledge checks
- **Speaking Practice** - Pronunciation and conversation exercises
- **Writing Assignments** - Structured writing tasks with feedback
- **Progress Reviews** - Comprehensive skill assessments

## 🤝 Contributing

This project is developed and maintained by Taskkora. For contributions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support or inquiries:
- **Email**: support@englishmaster.com
- **Website**: [English Master](https://englishmaster.com)
- **Developer**: [Taskkora](https://taskkora.com)

## 📄 License

This project is proprietary software developed by Taskkora. All rights reserved.

---

Built with ❤️ by [Taskkora](https://taskkora.com) - A Freelancing Marketplace

🚀 *Master English, Master Your Future*
