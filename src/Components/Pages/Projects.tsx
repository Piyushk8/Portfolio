"use client";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink, Github, Play } from "lucide-react";
import Link from "next/link";
import { JSX, useState } from "react";
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
  SiLangchain,
  SiGooglegemini,
  SiWebrtc,
  SiCanvas,
} from "react-icons/si";
import VideoPopup from "../videoPlayer";
import { cn } from "@/lib/utils";

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
  Langchain: <SiLangchain color="47A248" />,
  Gemini: <SiGooglegemini color="0db7ed" />,
  WebRTC: <SiWebrtc color="" />,
  Canvas: <SiCanvas color="0db7ed" />,
};

const projects = [
  {
    title: "Snaply",
    description: "A Social Media App for Snappy Connection",
    features: [
      "Real-time social feed with infinite scroll",
      "Cloud-based media storage and optimization",
      "Type-safe API calls with React Query",
      "Responsive design with modern UI/UX",
    ],
    tech: ["TypeScript", "Nextjs", "TanstackQuery", "Cloudinary"],
    demo: "",
    preview: true,
    live: "https://snaply-eight.vercel.app/",
    href: "https://github.com/Piyushk8/Snaply",
  },
  {
    title: "Just A Meet",
    preview: true,
    description:
      "A seamless video conferencing app for quick and secure meetings",
    features: [
      "Peer-to-peer video calls with WebRTC",
      "Real-time collaboration with canvas drawing",
      "Socket.io for instant messaging",
      "Tiled layout for multi-participant calls",
    ],
    tech: ["Nextjs", "TypeScript", "WebRTC", "Canvas", "Socketio"],
    demo: "",
    live: "https://jam-just-a-meet.vercel.app/",
    href: "https://github.com/Piyushk8/JAM---Just-A-Meet",
  },
  {
    title: "AI Agent",
    preview: false,
    description:
      "An experimental project with AI-powered agents for task automation and reasoning",
    features: [
      "Multi-step reasoning with Langchain",
      "Google Gemini AI integration",
      "Context-aware task automation",
      "Modern Next.js architecture",
    ],
    tech: ["TypeScript", "Nextjs", "Gemini", "Langchain"],
    demo: "",
    live: "https://ai-agent-psi-two.vercel.app/",
    href: "https://github.com/Piyushk8/Ai-agent",
  },
  {
    title: "Chatties",
    preview: true,
    description: "Scalable Realtime Chat App with PERN Stack",
    features: [
      "PostgreSQL for robust data persistence",
      "Real-time messaging with Socket.io",
      "Optimistic UI updates with Tanstack Query",
      "Cloud-based media sharing",
    ],
    tech: [
      "TypeScript",
      "PostgreSQL",
      "React",
      "Express",
      "Socketio",
      "TanstackQuery",
      "Cloudinary",
    ],
    live: "https://chatties.vercel.app/",
    demo: "",
    href: "https://github.com/Piyushk8/Chatties",
  },
  {
    title: "ChatterBox",
    description: "Realtime ChatApp with MERN Stack",
    preview: false,
    features: [
      "MongoDB for flexible document storage",
      "RTK Query for efficient state management",
      "Real-time notifications",
      "Media sharing with Cloudinary",
    ],
    live: "https://chat-app-frontend-rose.vercel.app/",
    tech: [
      "JavaScript",
      "MongoDB",
      "React",
      "NodeJS",
      "Socketio",
      "Redux",
      "Cloudinary",
    ],
    demo: "",
    href: "https://github.com/Piyushk8/ChatApp-Frontend",
  },
  {
    title: "CloudSphere IDE",
    description:
      "A cloud-based IDE with Docker container isolation for every room and user",
    features: [
      "Isolated Docker containers per user",
      "S3 bucket integration for file storage",
      "Terminal access via xterm.js",
      "Nginx reverse proxy for routing",
    ],
    preview: true,
    tech: [
      "TypeScript",
      "Docker",
      "MongoDB",
      "React",
      "NodeJS",
      "Socketio",
      "S3",
    ],
    demo: "https://github.com/user-attachments/assets/1623032d-eb83-4148-9908-7762d6df4b2e",
    href: "https://github.com/Piyushk8/CloudSphere-backend",
  },
];
import { Space_Grotesk } from "next/font/google";
import ProjectPreview from "../projectPreview";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20" id="projects">
      <motion.h2
        className={cn(
          spaceGrotesk.className,
          "relative text-5xl md:text-6xl font-bold tracking-tight text-center mb-20"
        )}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Featured Projects
        {/* underline glow */}
        <span className="absolute left-1/2 -bottom-3 h-[3px] w-24 -translate-x-1/2 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.7)]" />
      </motion.h2>

      {/* Desktop: Single column large cards, Mobile: Grid */}
      <div className="space-y-8 md:space-y-12">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.title + index}
            className="group relative bg-gradient-to-br from-white to-sky-50/30 
            dark:from-zinc-900 dark:to-blue-950/20
            rounded-3xl border-2 border-sky-200/50 dark:border-sky-900/30
            p-8 md:p-10 shadow-xl hover:shadow-2xl
            transition-all duration-500 overflow-hidden
            backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Gradient overlay on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-sky-400/0 to-blue-500/0 
              group-hover:from-sky-400/5 group-hover:to-blue-500/5 
              transition-all duration-500 rounded-3xl"
            />

            {/* Content Grid */}
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-start">
              {/* Left Column - Info */}
              <div className="space-y-6">
                {project.preview && <ProjectPreview title={project.title} liveUrl={project.demo}/>}
                {/* Title & Description */}
                <div>
                  <h3
                    className="text-3xl font-bold text-foreground mb-3 
                    group-hover:text-sky-600 dark:group-hover:text-sky-400 
                    transition-colors duration-300"
                  >
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features?.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-sky-500 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-5 py-2.5 
                      bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl
                      transition-all duration-300 hover:scale-105 hover:shadow-lg
                      hover:shadow-sky-500/30"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Link>

                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-5 py-2.5 
                        bg-gradient-to-br from-sky-500 to-blue-600 
                        hover:from-sky-600 hover:to-blue-700
                        text-white font-semibold rounded-xl
                        transition-all duration-300 hover:scale-105 hover:shadow-lg
                        hover:shadow-blue-500/30"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </Link>
                  )}

                  {project.demo && (
                    <button
                      onClick={() => setActiveVideo(project.demo)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 
                        border-2 border-sky-600 dark:border-sky-500 
                        text-sky-600 dark:text-sky-400 font-semibold rounded-xl
                        hover:bg-sky-600 hover:text-white dark:hover:bg-sky-500
                        transition-all duration-300 hover:scale-105"
                    >
                      <Play size={18} fill="currentColor" />
                      <span>Watch Demo</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Right Column - Tech Stack */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-4">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tag) => (
                      <motion.div
                        key={tag}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="flex items-center gap-2 px-4 py-2.5 
                          bg-white dark:bg-zinc-800 
                          border-2 border-sky-200 dark:border-sky-900
                          rounded-xl shadow-sm hover:shadow-md
                          transition-all duration-300
                          hover:border-sky-400 dark:hover:border-sky-600"
                      >
                        <span className="text-2xl">{techIcons[tag]}</span>
                        <span className="text-sm font-medium text-foreground">
                          {tag}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative element */}
                <div
                  className="hidden md:block mt-8 p-6 rounded-2xl 
                  bg-gradient-to-br from-sky-100/50 to-blue-100/30 
                  dark:from-sky-950/30 dark:to-blue-950/20
                  border border-sky-200/50 dark:border-sky-900/30"
                >
                  <p className="text-sm text-muted-foreground italic">
                    "Built with modern technologies for optimal performance and
                    scalability"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Popup */}
      {activeVideo && (
        <VideoPopup
          videoSrc={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}

      {/* Show More Button */}
      {projects.length > 3 && (
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 text-base font-semibold 
              bg-gradient-to-r from-sky-500 to-blue-600 
              hover:from-sky-600 hover:to-blue-700
              text-white rounded-full shadow-lg hover:shadow-xl
              transition-all duration-300 hover:scale-105"
          >
            {showAll ? "Show Less Projects" : "Show More Projects"}
          </button>
        </motion.div>
      )}
    </div>
  );
}
