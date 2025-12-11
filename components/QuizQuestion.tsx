"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Question } from "@/data/quizData";

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswer: (answerIndex: number) => void;
  direction: number;
  isFirstQuestion: boolean;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default function QuizQuestion({
  question,
  selectedAnswer,
  onAnswer,
  direction,
  isFirstQuestion,
}: QuizQuestionProps) {
  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="relative"
    >


      {/* Question */}
      <div className="bg-cyan-100 rounded-2xl p-6 mb-6">
        <h2 className="text-lg sm:text-xl font-medium text-gray-800 text-center">
          {question.id}. {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAnswer(index)}
            className={`w-full p-5 rounded-xl text-center font-medium transition-all duration-200 ${
              selectedAnswer === index
                ? "bg-white border-4 border-purple-500 text-gray-800 shadow-lg"
                : "bg-white border-2 border-gray-200 text-gray-700 hover:border-purple-300 hover:shadow-md"
            }`}
            role="radio"
            aria-checked={selectedAnswer === index}
            tabIndex={0}
          >
            {option}
          </motion.button>
        ))}
      </div>

      {/* Paw Image - Only on first question, displayed below options */}
      {isFirstQuestion && (
        // Paw + bubble block with image fallback
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex gap-4 items-start"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="relative bg-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg border-2 border-gray-200 whitespace-nowrap"
          >
            Best of Luck !
            {/* Bubble pointer */}
            <span className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-200" aria-hidden="true"></span>
            <span className="absolute -left-1.5 top-4 w-0 h-0 border-t-7 border-t-transparent border-b-7 border-b-transparent border-r-7 border-r-white" aria-hidden="true"></span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-32 h-32 bg-white rounded-2xl border-4 border-orange-400 p-3 shadow-lg overflow-hidden"
          >
            {(() => {
              const [imgError, setImgError] = useState(false);
              if (imgError) {
                return (
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    fill="none"
                  >
                    <ellipse cx="50" cy="55" rx="35" ry="30" fill="#FFC0CB" opacity="0.8" />
                    <circle cx="35" cy="45" r="8" fill="#FFB6C1" />
                    <circle cx="65" cy="45" r="8" fill="#FFB6C1" />
                    <circle cx="50" cy="60" r="20" fill="#FFB6C1" />
                    <ellipse cx="42" cy="35" rx="4" ry="6" fill="#FF69B4" />
                    <ellipse cx="58" cy="35" rx="4" ry="6" fill="#FF69B4" />
                  </svg>
                );
              }
              return (
                <Image
                  src="/images/paw.png"
                  alt="Pink paw"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                  priority
                  onError={() => setImgError(true)}
                />
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
