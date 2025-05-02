"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Lilita_One } from "next/font/google";
import { TypingAnimation } from "@/Components/magicui/typing-animation";
import * as motion from "motion/react-client";
import { NavbarDock } from "@/Components/navbarDock";
import Link from "next/link";
import { Download } from "lucide-react";
// import cv from "../../../public/PiyushResume.pdf"
const lilita_One = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-10 py-20 bg-transparent text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="text-center md:text-left max-w-3xl space-y-6"
      >
        <div className="text-3xl  sm:text-4xl md:text-5xl font-semibold leading-snug">
          Hi 👋,
          <br />
          <span className={cn(lilita_One.className, "inline-block")}>
            I'm{" "}
            <span className="text-primary">
              <TypingAnimation duration={75} className="inline">
                Piyush Kumar
              </TypingAnimation>
            </span>
          </span>
        </div>

        <p className="text-base md:text-xl font-light text-muted-foreground leading-relaxed">
          A Full-stack developer who loves turning ideas into fast, functional,
          and user-friendly experiences.
        </p>

        <div className="mt-6">
          <NavbarDock />
        </div>

        <div className="mt-10 gap-4 justify-self-center md:justify-self-start flex flex-col md:flex-row md:items-center">
          <Link
            href="#contact"
            className="px-4 py-2 bg-primary text-primary-foreground dark:text-foreground text-sm font-semibold rounded-2xl transition md:mr-4 mb-4 md:mb-0"
          >
            Connect with me
          </Link>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => window.open("/PiyushResume.pdf", "_blank")}
              className="px-4 py-2 border border-violet-600 text-violet-600 hover:bg-violet-50 dark:hover:bg-zinc-900 text-sm font-semibold rounded-full transition"
            >
              Download CV
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
