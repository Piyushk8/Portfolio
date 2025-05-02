"use client";

import { motion } from "motion/react";
import {
  SiDocker,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiJest,
  SiVitest,
  SiCloudflare,
  SiNginx,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGraphql,
  SiSocketdotio,
  SiPrisma,
  SiGit,
  SiCplusplus,
  SiDrizzle,
} from "react-icons/si";
import Image from "next/image";

const categories = {
  Frontend: [
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <SiReact className="text-sky-400" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
    },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-700" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    {
      name: "Socket.io",
      icon: <SiSocketdotio className="text-black dark:text-white" />,
    },
  ],
  Tools: [
    { name: "Jest", icon: <SiJest className="text-red-500" /> },
    { name: "Vitest", icon: <SiVitest className="text-yellow-400" /> },
    {
      name: "Drizzle",
      icon: <SiDrizzle className="text-black dark:text-white" />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="text-black dark:text-white" />,
    },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  ],
  DevOps: [
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "NGINX", icon: <SiNginx className="text-green-600" /> },
    { name: "Cloudflare", icon: <SiCloudflare className="text-orange-500" /> },
    { name: "Git", icon: <SiGit className="text-red-600" /> },
  ],
  other: [
    { name: "Python", icon: <SiPython className="text-yellow-600" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  ],
};

const SkillsSection = () => {
  return (
    <section className="py-10 px-6 bg-gradient-to-b from-violet-100 via-white to-zinc-50 dark:from-zinc-900 dark:via-black dark:to-zinc-800 text-center">
      <motion.h2
        className="text-4xl font-bold mb-12 text-violet-700 dark:text-violet-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Tech Stack
      </motion.h2>

      {Object.entries(categories).map(([category, skills]) => (
        <div key={category} className="mb-12">
          <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-100 mb-6">
            {category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow hover:scale-105 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="text-xl mb-2">{skill.icon}</div>
                <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
