"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { JSX, useState } from "react";
import Image from "next/image";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiFramer,
  SiFirebase,
  SiSocketdotio,
  SiRedux,
  SiCloudflare,
  SiCloudinary,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiVite,
  SiReactquery,
} from "react-icons/si";
import HeroVideoDialog from "../magicui/hero-video-dialog";
import VideoPopup from "../videoPlayer";

const techIcons: Record<string, JSX.Element> = {
  TypeScript: <SiTypescript color="#3178C6" />,
  TanstackQuery: <SiReactquery color="47A248" />,
  JavaScript: <SiJavascript color="#F7DF1E" />,
  React: <SiReact color="#61DAFB" />,
  Nextjs: <SiNextdotjs color="#000000" />,
  Cloudinary: <SiCloudinary color="#3178C6" />,
  PostgreSQL: <SiPostgresql color="#336791" />,
  Docker: <SiDocker color="#0db7ed" />,
  NodeJS: <SiNodedotjs color="#339933" />,
  Express: <SiExpress color="#000000" />,
  Tailwind: <SiTailwindcss color="#38BDF8" />,
  Firebase: <SiFirebase color="#FFCA28" />,
  Socketio: <SiSocketdotio color="#010101" />,
  Redux: <SiRedux color="#764ABC" />,
  S3: <SiCloudflare color="#FF9900" />,
  Cloudflare: <SiCloudflare color="#F38020" />,
  MongoDB: <SiMongodb color="#47A248" />,
  HTML: <SiHtml5 color="#E34F26" />,
  CSS: <SiCss3 color="#1572B6" />,
  Framer: <SiFramer color="#0055FF" />,
  Vite: <SiVite color="#646CFF" />,
};

const projects = [
  {
    title: "Snaply",
    description: "A Social Media App for Snappy Connection..",
    // image: snaply,
    tech: ["TypeScript", "Nextjs", "ReactQuery", "Cloudinary"],
    demo: "",
    live: "https://snaply-eight.vercel.app/",
    href: "https://github.com/Piyushk8/Snaply",
  },
  {
    title: "Chatties",
    description: "Scalabale Realtime Chat App with PERN",
    // image: chatties,
    tech: [
      "TypeScript",
      "PostgreSQL",
      "React",
      "Express",
      "Socketio",
      "Tanstack Query",
      "Cloudinary",
    ],
    live: "https://chatties.vercel.app/",
    demo: "",
    href: "https://github.com/Piyushk8/Chatties",
  },
  {
    title: "ChatterBox",
    description: "Realtime ChatApp with MERN",
    image: "",
    live: "https://chat-app-frontend-rose.vercel.app/",
    tech: ["JavaScript", "MERN", "Socketio", "RTK Query", "Cloudinary"],
    demo: "",
    href: "https://github.com/Piyushk8/ChatApp-Frontend",
  },
  {
    title: "CloudSphere IDE",
    description:
      "A cloud based-IDE with docker containers isolation for every room and user",
    // image: cloudSphere,
    tech: [
      "TypeScript",
      "Docker",
      "MERN",
      "Nginx",
      "S3 Bucket",
      "socketio",
      "xtermJS",
    ],
    demo: "https://github.com/user-attachments/assets/1623032d-eb83-4148-9908-7762d6df4b2e",
    href: "https://github.com/Piyushk8/CloudSphere-backend",
  },
  {
    title: "CloudSphere-Frontend",
    description: "Frontend for the CLoud based IDE",
    // image: cloudSphere,
    tech: ["TypeScript"],
    demo: "https://github.com/user-attachments/assets/1623032d-eb83-4148-9908-7762d6df4b2e",
    live: "",
    href: "https://github.com/Piyushk8/CloudSphere-Frontend",
  },
  {
    title: "Daily-Spark",
    description: "A Simple Blogging website",
    image: "",
    tech: ["JavaScript"],
    demo: "",
    href: "https://github.com/Piyushk8/Daily-Spark",
  },
  {
    title: "TypeOnTerminal",
    description:
      "A Word per minute counter for terminal with WPM, accuracy and more...",
    // image: TypeOnTerminal,
    tech: [],
    demo: "",
    href: "https://github.com/Piyushk8/TypeOnTerminal",
  },
  {
    title: "GourmetHub",
    description: "FoodOrderApp ui for fun",
    image: "",
    tech: ["JavaScript"],
    demo: "",
    href: "https://github.com/Piyushk8/GourmetHub",
  },
  {
    title: "HelpHive",
    description:
      "UI for HelpHive a Centralized System for connecting donors to Needy",
    image: "",
    tech: ["HTML"],
    demo: "",
    live: "",
    href: "https://github.com/Piyushk8/HelpHive",
  },
];
export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20" id="projects">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.title + index}
            className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-lg hover:shadow-xl transition-all " // ⬅️ Add min height
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="flex-1 flex-col flex justify-between mt-4">
              <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-violet-100 dark:bg-violet-800 px-2 py-1 rounded-full flex items-center gap-1"
                  >
                    <span className="text-base">{techIcons[tag]}</span>
                    <span className="text-zinc-700 dark:text-zinc-200">
                      {tag}
                    </span>
                  </span>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 flex flex-wrap justify-between gap-2"
              >
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-violet-600 hover:text-violet-800 font-medium transition-transform hover:scale-105"
                >
                  View Project <ArrowRight size={16} />
                </Link>

                {/* Only render Live/Demo if available */}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="inline-flex border border-primary rounded-2xl p-1 px-2 items-center gap-1 text-primary hover:text-violet-800 font-medium transition-transform hover:scale-105"
                  >
                    Live Link
                  </Link>
                )}
                {project.demo && (
                  <div>
                    {/* <Link
                      href={project.demo}
                      target="_blank"
                      className="inline-flex border border-primary rounded-2xl p-1 px-2 items-center gap-1 text-violet-100 hover:text-violet-800 font-medium transition-transform hover:scale-105"
                    >
                      Demo
                    </Link> */}
                    <button
                      onClick={() => setActiveVideo(project.demo)}
                      className="inline-flex border border-primary rounded-2xl p-1 px-2 items-center gap-1 text-primary hover:text-violet-800 font-medium transition-transform hover:scale-105"
                    >
                      Demo
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
        {activeVideo && (
          <VideoPopup
            videoSrc={activeVideo}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </div>

      {projects.length > 3 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 text-sm font-medium text-white bg-violet-600 rounded hover:bg-violet-700 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}
