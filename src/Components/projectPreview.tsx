"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Maximize2, ExternalLink } from "lucide-react";
import { useState } from "react";

interface ProjectPreviewProps {
  title: string;
  liveUrl?: string;
}

export default function ProjectPreview({ title, liveUrl }: ProjectPreviewProps) {
  const [open, setOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [exists, setExists] = useState(true);

  const file = `/projects/${title.toLowerCase().replace(/[^a-z0-9]/g, "")}.png`;

  if (!exists) return null; 

  return (
    <>
      <motion.div
        onClick={() => setOpen(true)}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="cursor-pointer group relative rounded-2xl overflow-hidden
        border-2 border-sky-200/30 dark:border-sky-800/30 
        shadow-[0_8px_32px_rgba(56,189,248,0.15)]
        hover:shadow-[0_20px_60px_rgba(56,189,248,0.3)]
        bg-gradient-to-br from-white/80 to-sky-50/50 dark:from-zinc-900/80 dark:to-blue-950/30
        backdrop-blur-xl transition-all duration-500"
      >
        <div className="relative flex items-center justify-between px-4 py-3 
          bg-gradient-to-r from-sky-100/60 to-blue-100/40 
          dark:from-zinc-800/60 dark:to-blue-950/40 
          border-b border-sky-200/50 dark:border-sky-900/50 backdrop-blur-md">

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="flex-1 mx-6 px-4 py-1.5 rounded-lg 
            bg-white/50 dark:bg-zinc-900/50 
            border border-sky-200/50 dark:border-sky-900/50">
            <p className="text-xs text-muted-foreground truncate">
              {liveUrl || `localhost:3000/${title.toLowerCase()}`}
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Maximize2 size={16} className="text-sky-600 dark:text-sky-400" />
          </motion.div>
        </div>

        <div className="relative aspect-video bg-sky-50 dark:bg-zinc-900">
          <Image
            src={file}
            alt={`${title} Preview`}
            fill
            onLoad={() => setIsLoaded(true)}
            onError={() => setExists(false)} // prevents crash
            className={`object-cover transition-all duration-500 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {open && exists && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl 
              flex items-center justify-center p-4"
          >
            <motion.button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full 
                bg-white/10 hover:bg-white/20 border border-white/20 text-white"
            >
              <X size={24} />
            </motion.button>

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-6 right-24 z-50 px-4 py-3 rounded-full 
                bg-sky-500 hover:bg-sky-600 text-white font-semibold"
              >
                <ExternalLink size={18} />
              </a>
            )}

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-7xl rounded-3xl overflow-hidden border-2 border-sky-400/50"
            >
              <Image
                src={file}
                alt={`${title} Fullscreen`}
                width={2400}
                height={1400}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
