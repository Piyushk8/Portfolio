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
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <svg
            className="w-full h-full"
            fill="none"
            stroke="var(--muted-foreground)"
          >
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M40 0H0V40" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
          Hi, I’m <span className="font-semibold">Piyush Kumar</span> — a
          developer who loves solving real-world problems and learning by
          building. I started my journey with <b>JavaScript & C++</b> and slowly
          expanded into <b>full-stack development</b>, exploring everything from
          simple UI components to full web apps.
          <br />
          <br />
          Along the way, I’ve built some scalable and interesting Projects,
          tried out new frameworks, and contributed to open source whenever I
          could. I enjoy figuring things out, improving bit by bit, and
          collaborating with others. When I'm not coding, you'll probably find
          me gaming, reading or just trying out new things 😄.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => window.open("/PiyushResume.pdf", "_blank")}
            className="px-4 py-2 border bg-primary text-white hover:bg-violet-400 dark:hover:bg-zinc-900 text-sm font-semibold rounded-full transition"
          >
            <Download size={16} className="inline mr-2" />
            Download CV
          </button>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white px-5 py-2 rounded-xl transition"
          >
            <Folder size={16} />
            View Projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
