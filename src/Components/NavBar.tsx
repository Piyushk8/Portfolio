"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [active, setActive] = useState("#about");

  return (
    <header
      className="fixed top-0 left-0 w-full px-6 md:px-24 py-4
      bg-white/10 backdrop-blur-xl border-b border-white/20
      shadow-[0_4px_25px_rgba(0,0,0,0.25)] z-50 text-foreground"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">

        {/* Logo + Mobile */}
        <div className="w-full flex justify-between items-center md:w-auto">
          <div className="flex items-center whitespace-nowrap">
            <button className="mr-2 text-[10px] p-1 font-extrabold rounded-sm flex items-center justify-center text-white bg-sky-600 hover:bg-sky-500 transition w-5 h-5">
              /
            </button>

            <h1 className="text-base sm:text-lg font-bold font-mono text-foreground">
              <a href="/">Piyush Kumar.</a>
            </h1>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button onClick={() => setIsMenu((prev) => !prev)}>
              <MenuIcon className="w-6 h-6 text-sky-600" />
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center items-center mt-3 md:mt-0">
          <NavigationMenu>
            <NavigationMenuList
              className="flex items-center gap-3 font-mono text-[16px] text-balance text-foreground
              px-2 py-3 bg-white/10 dark:bg-white/10
              backdrop-blur-2xl border border-white/20 dark:border-white/20
              rounded-3xl shadow-[0_4px_18px_rgba(0,0,0,0.25)]"
            >
              <NavItem href="#about" label="About" active={active} setActive={setActive} />
              <NavItem href="#projects" label="Projects" active={active} setActive={setActive} />
              <NavItem href="#skills" label="Skills" active={active} setActive={setActive} />
              <NavItem href="#call" label="Book a Call" active={active} setActive={setActive} />
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Theme Toggle */}
        <div className="hidden md:flex ml-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ href, label, active, setActive }: any) => (
  <NavigationMenuItem>
    <Link
      href={href}
      onClick={() => setActive(href)}
      className={`px-6 py-2 rounded-3xl transition-all text-sm
      ${
        active === href
          ? `
          bg-linear-to-br from-zinc-400/30 to-zinc-500/30 dark:bg-white/20
          text-sky-900 dark:text-white font-semibold
          border border-zinc-400/50 dark:border-white/30
          shadow-[inset_0_0_12px_rgba(56,189,248,0.4),0_0_20px_rgba(56,189,248,0.3)]
          dark:shadow-[inset_0_0_8px_rgba(255,255,255,0.6),0_0_15px_rgba(255,255,255,0.2)]
          backdrop-blur-[18px]
        `
          : `
          text-slate-700 dark:text-gray-300
          hover:text-zinc-700 dark:hover:text-white 
          hover:bg-sky-400/10 dark:hover:bg-white/10
        `
      }`}
    >
      {label}
    </Link>
  </NavigationMenuItem>
);

const NavLinks = () => null;

export default NavBar;