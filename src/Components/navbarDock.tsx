"use client";

import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

export function NavbarDock() {
  return (
    <div
      className="
        inline-flex items-center gap-3 px-6 py-3
        rounded-full relative
        bg-white/10 dark:bg-white/10
        backdrop-blur-2xl
        border border-white/30 dark:border-white/20
        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        before:absolute before:inset-0 before:rounded-full
        before:bg-gradient-to-br before:from-white/40 before:to-transparent before:opacity-30
        overflow-hidden
        animate-in fade-in duration-500
      "
    >
      <DockIcon href="https://github.com/piyushk8" label="GitHub"
        from="from-gray-800" to="to-gray-900"
        hoverFrom="hover:from-gray-700" hoverTo="hover:to-gray-800">
        <Github className="size-5" strokeWidth={2.5} />
      </DockIcon>

      <Separator />

      <DockIcon href="https://x.com/piyushk5531" label="X (Twitter)"
        from="from-black" to="to-gray-900"
        hoverFrom="hover:from-black/80" hoverTo="hover:to-gray-800/80">
        <Twitter className="size-5" strokeWidth={2.5} />
      </DockIcon>

      <Separator />

      <DockIcon href="https://www.linkedin.com/in/piyush-kumar-588098297/" label="LinkedIn"
        from="from-blue-600" to="to-blue-700"
        hoverFrom="hover:from-blue-500" hoverTo="hover:to-blue-600">
        <Linkedin className="size-5" strokeWidth={2.5} />
      </DockIcon>
    </div>
  );
}

const DockIcon = ({ href, label, children, from, to, hoverFrom, hoverTo }: any) => {
  const [hover, setHover] = React.useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative group"
    >
      <div
        className={`
          p-3 rounded-2xl transition-all duration-300
          bg-gradient-to-br ${from} ${to}
          border border-white/20
          shadow-[0_4px_18px_rgba(0,0,0,0.3)]
          ${hover ? "scale-110 -translate-y-1" : "scale-100"}
          ${hoverFrom} ${hoverTo}
        `}
      >
        {/* Shine */}
        <div
          className={`
            absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
            transition-transform duration-700
            ${hover ? "translate-x-full" : "-translate-x-full"}
          `}
        />
        <div className="relative z-10 text-white">{children}</div>
      </div>

      {/* Tooltip */}
      <span
        className={`
          absolute -top-9 left-1/2 -translate-x-1/2
          px-2 py-1 rounded-md text-xs font-medium
          bg-black/70 text-white backdrop-blur-sm
          border border-white/10 shadow-lg
          transition-all duration-200 whitespace-nowrap
          ${hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
        `}
      >
        {label}
      </span>
    </a>
  );
};

const Separator = () => (
  <div className="w-px h-6 bg-white/25 dark:bg-white/15" />
);

export default NavbarDock;
