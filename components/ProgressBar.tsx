"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

export default function ProgressBar({
  currentQuestion,
  totalQuestions,
}: ProgressBarProps) {
  return (
    <div
      className="flex gap-3 justify-center mb-12"
      role="progressbar"
      aria-valuenow={currentQuestion + 1}
      aria-valuemin={1}
      aria-valuemax={totalQuestions}
      aria-label={`Question ${currentQuestion + 1} of ${totalQuestions}`}
    >
      {Array.from({ length: totalQuestions }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: 1,
            backgroundColor:
              index <= currentQuestion ? "#1e3a8a" : "#cbd5e1",
          }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="h-2 rounded-full"
          style={{
            width: `${100 / totalQuestions}%`,
            maxWidth: "120px",
          }}
        />
      ))}
    </div>
  );
}
