"use client";

import { motion } from "framer-motion";

interface QuizResultsProps {
  score: number;
  onRestart: () => void;
}

export default function QuizResults({ score, onRestart }: QuizResultsProps) {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 font-medium mb-6 text-lg"
        >
          Keep Learning!
        </motion.p>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-serif text-5xl sm:text-6xl font-bold text-teal-700 mb-4 italic"
        >
          Your Final score is
        </motion.h1>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="text-[12rem] sm:text-[16rem] font-serif font-bold text-teal-700 leading-none my-8"
          role="status"
          aria-live="polite"
          aria-label={`Your score is ${score} percent`}
        >
          {score}
          {score > 0 && (
            <span className="text-[8rem] sm:text-[10rem] align-top">%</span>
          )}
        </motion.div>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className="mt-8 px-8 py-3 rounded-xl bg-cyan-200 hover:bg-cyan-300 text-gray-800 font-medium transition-colors shadow-md"
        >
          Start Again
        </motion.button>
      </motion.div>
    </main>
  );
}
