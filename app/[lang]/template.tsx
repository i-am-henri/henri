"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.2 }}
      className="min-h-[calc(100vh-300px)] py-5 w-full sm:py-0 sm:w-[400px] md:w-[500px] lg:w-[650px] flex flex-col space-y-16"
    >
      {children}
    </motion.div>
  );
}