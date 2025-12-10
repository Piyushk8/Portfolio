"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Lilita_One } from "next/font/google";
import { TypingAnimation } from "@/Components/magicui/typing-animation";
import * as motion from "motion/react-client";
import { Download } from "lucide-react";
import { NavbarDock } from "@/Components/navbarDock";

const lilita_One = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Hero = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center
    min-h-screen px-6 md:px-10 py-20 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/hero_bg.jpg')",
        backgroundPosition: "center 40%",
      }}
    >
      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70 }}
        className="max-w-4xl space-y-8 text-white dark:text-foreground"
      >
        {/* HEADLINE */}
        <h1 className="text-4xl sm:text-6xl md:text-[4.5rem] font-semibold leading-tight tracking-tight">
          Hi{" "}
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 20, 0] }}
            transition={{
              duration: 1,
              repeat: 1,
              ease: "easeInOut",
            }}
            whileHover={{
              rotate: [0, 25, -10, 25, 0],
              transition: { duration: 1, ease: "easeInOut" },
            }}
            className="inline-block origin-bottom-right cursor-pointer"
          >
            👋
          </motion.span>
          ,
          <br />
          <span className={cn(lilita_One.className, "inline-block")}>
            I'm{" "}
            <span className="text-primary drop-shadow-[0_0_16px_rgba(140,82,255,0.65)]">
              <TypingAnimation duration={65} className="inline">
                Piyush Kumar
              </TypingAnimation>
            </span>
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="text-lg md:text-xl font-light text-slate-200 dark:text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          A Full-stack developer crafting seamless interfaces, scalable
          solutions, and delightful user experiences across the web.
        </p>

        {/* DOCK NAV */}
        <div className="mt-10 flex justify-center">
          <NavbarDock />
        </div>

        {/* CTA BUTTONS */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Let's Connect Button */}
          <a
            href="#contact"
            className="group relative flex items-center gap-4 rounded-full
            bg-white/10 backdrop-blur-xl border border-white/20
            px-8 py-4 text-base sm:text-lg font-semibold text-white
            shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
            transition-all duration-500 ease-out
            hover:border-white/30
            hover:shadow-[0_8px_48px_0_rgba(255,255,255,0.15)]
            hover:scale-105
            active:scale-95
            overflow-hidden"
          >
            <div className="absolute inset-0 rounded-full bg-white origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

            <span className="relative z-10 tracking-wide group-hover:text-black transition-colors duration-700 delay-100">
              Let's Connect
            </span>

            <span
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full 
              bg-linear-to-br from-white via-white to-white/90
              text-black text-lg font-bold
              shadow-[0_4px_16px_rgba(255,255,255,0.4)]
              transition-all duration-700 ease-out
              group-hover:translate-x-2 group-hover:rotate-[-8deg]
              group-hover:shadow-[0_6px_24px_rgba(255,255,255,0.6)]"
            >
              →
            </span>

            <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10" />
          </a>

          {/* Download CV Button */}
          <button
            onClick={() => window.open("/PiyushResume.pdf", "_blank")}
            className="group relative px-8 py-4 rounded-2xl
              bg-linear-to-br from-sky-400 via-cyan-400 to-blue-600
              text-white font-semibold text-base sm:text-lg
              shadow-[0_12px_48px_rgba(59,130,246,0.45)]
              border-2 border-transparent
              transition-all duration-500 ease-out
              hover:shadow-[0_8px_32px_rgba(59,130,246,0.25)]
              hover:scale-[1.02]
              active:scale-95
              overflow-hidden flex items-center gap-3"
          >
            <div
              className="absolute inset-0 bg-linear-to-br
              from-blue-500/10 to-cyan-500/10
              backdrop-blur-lg border border-blue-400/30
              opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div
              className="absolute inset-0 translate-x-full group-hover:-translate-x-full
              transition-transform duration-1000 ease-out"
            >
              <div className="h-full w-1/2 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>

            <span
              className="relative z-10 flex items-center justify-center w-8 h-8 rounded-lg
              bg-white/20 border border-white/30
              text-white transition-all duration-500
              group-hover:bg-white/10 group-hover:border-white/20
              group-hover:rotate-12 group-hover:scale-110"
            >
              <Download
                size={16}
                className="transition-colors duration-500 group-hover:text-blue-300"
              />
            </span>

            <span
              className="relative z-10 tracking-wide transition-colors duration-300
              group-hover:text-blue-100"
            >
              Download CV
            </span>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-200 rounded-full animate-ping" />
              <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping animation-delay-300" />
              <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-sky-300 rounded-full animate-ping animation-delay-500" />
            </div>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
