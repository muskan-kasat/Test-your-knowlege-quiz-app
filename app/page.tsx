"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizData, Question } from "@/data/quizData";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResults from "@/components/QuizResults";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizData.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);
  const [direction, setDirection] = useState(0);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setDirection(1);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(quizData.length).fill(null));
    setShowResults(false);
    setDirection(0);
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quizData.length) * 100);
  };

  const isLastQuestion = currentQuestion === quizData.length - 1;
  const isFirstQuestion = currentQuestion === 0;

  if (showResults) {
    return <QuizResults score={calculateScore()} onRestart={handleRestart} />;
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/40 backdrop-blur-sm rounded-[2.5rem] p-8 sm:p-12 shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-teal-700 mb-3 italic">
              Test Your Knowledge
            </h1>
            <p className="text-gray-700 text-sm sm:text-base">
              Answer all questions to see your results
            </p>
          </div>

          {/* Progress Bar */}
          <ProgressBar
            currentQuestion={currentQuestion}
            totalQuestions={quizData.length}
          />

          {/* Question Card */}
          <AnimatePresence mode="wait" custom={direction}>
            <QuizQuestion
              key={currentQuestion}
              question={quizData[currentQuestion]}
              selectedAnswer={answers[currentQuestion]}
              onAnswer={handleAnswer}
              direction={direction}
              isFirstQuestion={isFirstQuestion}
            />
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-end gap-3 mt-6">
            {!isFirstQuestion && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full bg-cyan-200 hover:bg-cyan-300 flex items-center justify-center transition-colors shadow-md"
                aria-label="Previous question"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>
            )}

            {isLastQuestion ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                disabled={answers[currentQuestion] === null}
                className="px-8 py-2.5 rounded-lg bg-cyan-200 hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-800 font-medium transition-colors shadow-md"
                aria-label="Submit quiz"
              >
                Submit
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-cyan-200 hover:bg-cyan-300 flex items-center justify-center transition-colors shadow-md"
                aria-label="Next question"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
