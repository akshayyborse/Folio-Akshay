"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound(): JSX.Element {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#0E1016] text-[#e4ded7] gap-6 text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[40px] sm:text-[48px] md:text-[56px] font-semibold uppercase"
      >
        Page Not Found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-sm sm:text-base max-w-md opacity-80"
      >
        The page you are looking for does not exist or may have been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Link
          href="/"
          className="mt-4 inline-block text-sm uppercase tracking-wide border border-[#e4ded7] px-6 py-3 rounded-md transition hover:bg-[#e4ded7] hover:text-[#0E1016]"
        >
          Back to Portfolio
        </Link>
      </motion.div>
    </div>
  );
}
