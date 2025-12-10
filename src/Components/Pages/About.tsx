"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Folder } from "lucide-react";

export default function About() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-24" id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center relative"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <svg className="w-full h-full" fill="none">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>

        {/* Paragraph */}
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Hi, I'm <span className="font-semibold text-foreground">Piyush Kumar</span> — a
          developer who loves solving real-world problems and learning by building. I started with
          <b> JavaScript & C++</b> and expanded into <b>full-stack development</b>, crafting UI components,
          scalable systems, and complete web experiences.
          <br /><br />
          I enjoy experimenting with new technologies, refining my craft, and collaborating with others.
          When I'm not coding, I'm gaming, reading, or exploring something new 😄.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          {/* Download CV */}
          <button
            onClick={() => window.open("/PiyushResume.pdf", "_blank")}
            className="group relative px-8 py-4 rounded-full
              bg-linear-to-br from-blue-500/20 to-cyan-500/20 dark:from-blue-600/15 dark:to-cyan-600/15
              backdrop-blur-xl border-2 border-blue-400/30 dark:border-cyan-500/30
              text-foreground
              shadow-[0_8px_32px_rgba(59,130,246,0.25)] dark:shadow-[0_8px_32px_rgba(6,182,212,0.3)]
              font-semibold text-sm transition-all duration-500 ease-out
              hover:border-blue-400/50 dark:hover:border-cyan-400/50
              hover:shadow-[0_12px_48px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_12px_48px_rgba(6,182,212,0.4)]
              hover:scale-[1.02] active:scale-95
              flex items-center gap-3 overflow-hidden"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-cyan-500 to-blue-600
              dark:from-sky-500 dark:via-cyan-500 dark:to-blue-700
              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
              <div className="h-full w-1/2 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>

            {/* Icon container */}
            <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-lg
              bg-white/10 border border-white/20
              group-hover:bg-white group-hover:border-white
              transition-all duration-500
              group-hover:rotate-12 group-hover:scale-110">
              <Download 
                size={16} 
                className="text-blue-400 dark:text-cyan-400 group-hover:text-blue-700 dark:group-hover:text-blue-700 transition-colors duration-500"
              />
            </span>

            <span className="relative z-10 tracking-wide group-hover:text-white transition-colors duration-300">
              Download CV
            </span>

            {/* Outer glow */}
            <div className="absolute -inset-1 bg-linear-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />
          </button>

          {/* View Projects */}
          <Link
            href="#projects"
            className="group relative px-8 py-4 rounded-full
              bg-linear-to-br from-cyan-500/20 to-blue-600/20 dark:from-cyan-600/15 dark:to-blue-700/15
              backdrop-blur-xl border-2 border-cyan-400/30 dark:border-blue-500/30
              text-foreground
              shadow-[0_8px_32px_rgba(6,182,212,0.25)] dark:shadow-[0_8px_32px_rgba(59,130,246,0.3)]
              font-semibold text-sm transition-all duration-500 ease-out
              hover:border-cyan-400/50 dark:hover:border-blue-400/50
              hover:shadow-[0_12px_48px_rgba(6,182,212,0.4)] dark:hover:shadow-[0_12px_48px_rgba(59,130,246,0.4)]
              hover:scale-[1.02] active:scale-95
              flex items-center gap-3 overflow-hidden"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500 via-blue-500 to-cyan-600
              dark:from-sky-500 dark:via-blue-600 dark:to-cyan-600
              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
              <div className="h-full w-1/2 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>

            {/* Icon container */}
            <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-lg
              bg-white/10 border border-white/20
              group-hover:bg-white group-hover:border-white
              transition-all duration-500
              group-hover:-rotate-12 group-hover:scale-110">
              <Folder 
                size={16} 
                className="text-cyan-400 dark:text-blue-400 group-hover:text-cyan-700 dark:group-hover:text-blue-700 transition-colors duration-500"
              />
            </span>

            <span className="relative z-10 tracking-wide group-hover:text-white transition-colors duration-300">
              View Projects
            </span>

            {/* Outer glow */}
            <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />
          </Link>

        </div>
      </motion.div>
    </section>
  );
}