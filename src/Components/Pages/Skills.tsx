"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiCss3, SiFramer,
  SiFigma, SiNotion, SiJavascript, SiGit, SiDocker, SiNodedotjs,
  SiPostgresql, SiMongodb, SiPython, SiLinux
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Notion", icon: SiNotion, color: "#ffffff" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
];

export default function SkillsSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative w-full py-32 dark:bg-black text-white overflow-hidden">

      {/* Title */}
      <div className="text-center mb-24">
        <p className="uppercase tracking-[8px] text-foreground dark:text-gray-400 text-sm">
          MY SKILLS
        </p>

        <h1 className="text-6xl text-foreground font-serif font-bold mt-3">
          The Secret
          <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ml-2">
            Sauce
          </span>
        </h1>
      </div>

      {/* Icons Row */}
      <div className="flex flex-wrap justify-center gap-4 px-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          const isHover = hovered === skill.name;

          return (
            <motion.div
              key={skill.name}
              onHoverStart={() => setHovered(skill.name)}
              onHoverEnd={() => setHovered(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="relative"
            >
              {/* Tile */}
              <motion.div
                animate={
                  isHover
                    ? { scale: 1.12, y: -6, boxShadow: `0 0 25px ${skill.color}70` }
                    : { scale: 1, y: 0 }
                }
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
                className="
                  w-20 h-20 rounded-2xl bg-zinc-900/70 backdrop-blur-xl border border-white/10
                  shadow-lg flex items-center justify-center cursor-pointer
                "
              >
                <Icon className="text-4xl transition-all" style={{ color: skill.color }} />
              </motion.div>

              {/* Tooltip (name) */}
            {isHover && (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    className="
      absolute left-1/2 -bottom-10 -translate-x-1/2 px-3 py-1
      rounded-md bg-black/80 backdrop-blur-md border border-white/10
      text-sm font-medium text-gray-200 whitespace-nowrap
      z-999 shadow-lg pointer-events-none
    "
  >
    {skill.name}
  </motion.div>
)}


             
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
