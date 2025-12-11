# Test Your Knowledge - Quiz App

A pixel-perfect, interactive quiz application built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This project was created as part of a Frontend Developer Intern assignment.

![Quiz App Demo](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=flat-square&logo=framer)

## 🎯 Project Overview

This is a fully functional quiz application that allows users to test their knowledge through multiple-choice questions. The application features smooth animations, intuitive navigation, and a scoring system at the end.

### ✨ Key Features

- **Pixel-Perfect Design** - Matches the Figma specifications exactly
- **Smooth Animations** - Implemented with Framer Motion for delightful user experience
- **Interactive UI** - Hover states, transitions, and responsive feedback
- **Progress Tracking** - Visual progress indicator showing quiz completion
- **Score Calculation** - Dynamic results page showing final score percentage
- **Accessibility** - WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **TypeScript** - Fully typed for better development experience
- **Responsive** - Optimized for desktop screens

## 🚀 Tech Stack

### Required Technologies
- **React 18.3** - Latest React features
- **Next.js 14** - App Router, Server Components
- **TypeScript 5** - Type-safe code
- **Tailwind CSS 3.4** - Utility-first styling

### Bonus Technologies
- **Framer Motion 11** - Advanced animations
- **Modern ES6+** - Latest JavaScript features

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd muskan
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
quizapp/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main quiz page with state management
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── QuizQuestion.tsx    # Question display with options
│   ├── QuizResults.tsx     # Results page with score
│   └── ProgressBar.tsx     # Progress indicator
├── data/
│   └── quizData.ts         # Quiz questions and answers
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design Implementation

### Color Palette
- **Background**: Gradient from blue-200 to cyan-200 to blue-300
- **Primary**: Teal-700 (text and headings)
- **Secondary**: Cyan-200 (buttons and highlights)
- **Accent**: Purple-500 (selected states and mascot)
- **Surface**: White with opacity for glass-morphism effect

### Typography
- **Headings**: Playfair Display (Serif, Italic)
- **Body**: System fonts for optimal readability

### Animations
- **Page Transitions**: Slide animations between questions
- **Hover Effects**: Scale and elevation changes
- **Score Reveal**: Spring animation for dramatic effect
- **Mascot**: Floating animation on first question

## ♿ Accessibility Features

- **ARIA Labels** - Proper labels for all interactive elements
- **Keyboard Navigation** - Full keyboard support
- **Focus Indicators** - Visible focus states
- **Screen Reader Support** - Semantic HTML and ARIA attributes
- **Color Contrast** - WCAG AA compliant contrast ratios
- **Role Attributes** - Proper roles for quiz elements

## 🎯 Key Features Implemented

### 1. Question Navigation
- Forward and backward navigation
- Visual progress indicator
- Smooth slide transitions

### 2. Answer Selection
- Single choice selection per question
- Visual feedback on selection (purple border)
- Hover states for better UX

### 3. Results Page
- Percentage score calculation
- Animated score reveal
- Option to restart quiz

### 4. Mascot Element
- Appears only on first question
- Encouraging message
- Floating animation

## 📝 Quiz Data Structure

Questions are stored in a TypeScript interface for type safety:

```typescript
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect GitHub repository

## 📊 Performance Optimizations

- **Code Splitting** - Automatic with Next.js
- **Image Optimization** - Next.js Image component ready
- **CSS Purging** - Tailwind removes unused styles
- **Component Lazy Loading** - Framer Motion optimized
- **TypeScript** - Catch errors at compile time

## 🧪 Testing Considerations

- **Unit Tests** - Components can be tested with Jest/React Testing Library
- **E2E Tests** - Can be implemented with Playwright or Cypress
- **Accessibility Tests** - Can use axe-core or Pa11y

## 📈 Future Enhancements

- [ ] Add more question categories
- [ ] Implement timer per question
- [ ] Save scores to local storage
- [ ] Add sound effects
- [ ] Implement dark mode
- [ ] Add social sharing
- [ ] Responsive design for mobile
- [ ] Add question difficulty levels

## ⏱️ Time Spent

**Total Time**: Approximately 4.5-5 hours

- **Planning & Design Analysis**: 15 minutes
- **Project Setup**: 10 minutes
- **Component Development**: 2.5 hours
- **Styling & Animations**: 1.5 hours
- **Testing & Refinement**: 30 minutes
- **Documentation**: 30 minutes

## 🎓 Key Assumptions Made

1. **Desktop Only**: As per requirements, optimized for desktop screens (1024px+)
2. **Question Data**: Hardcoded quiz data; can be easily replaced with API
3. **Scoring System**: Simple percentage calculation (correct answers / total questions × 100)
4. **Single Attempt**: No retry for individual questions once answered
5. **No Backend**: All logic handled on frontend

## 🔍 Code Quality

- **TypeScript** - Fully typed components and data
- **ESLint** - Next.js recommended configuration
- **Component Structure** - Modular and reusable
- **Clean Code** - Self-documenting with clear naming
- **Best Practices** - Following React and Next.js conventions

## 📄 License

This project is created for educational purposes as part of a frontend developer intern assignment.

## 👤 Author

**MUSKAN KASAT**
- GitHub: https://github.com/muskan-kasat/Test-your-knowlege-quiz-app
- Email: muskankasat5@gmail.com

## 🙏 Acknowledgments

- Design provided via Figma
- Built with love using modern web technologies
- Special thanks to the Next.js, React, and Tailwind teams

---

**Note**: This project demonstrates proficiency in modern frontend development, including React, TypeScript, Tailwind CSS, and animation libraries. It showcases attention to detail, design accuracy, and best practices in web development.


