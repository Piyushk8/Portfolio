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

  return (
    <header className="w-full fixed z-50 backdrop-blur-sm bg-background/80 p-3 md:p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Top Row: Logo + Mobile Actions */}
        <div className="w-full flex justify-between items-center md:w-auto">
          {/* Logo */}
          <div className="flex items-center font-semibold font-sans whitespace-nowrap">
            <button className="mr-2 hover:bg-violet-500 text-[10px] p-1 font-extrabold rounded-sm flex items-center justify-center text-white bg-violet-600 w-5 h-5">
              /
            </button>
            <h1 className="text-base sm:text-lg font-bold font-mono">
              Piyush Kumar.
            </h1>
          </div>

          {/* Mobile: Toggle + Menu */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button onClick={() => setIsMenu((prev) => !prev)}>
              <MenuIcon className="w-6 h-6 text-violet-600" />
            </button>
          </div>
        </div>

        {/* Desktop: Centered Nav + Toggle */}
        <div className="hidden md:flex flex-1 justify-center items-center mt-4 md:mt-0">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8 font-mono text-sm md:text-base">
              <NavigationMenuItem>
                <Link href="#about">About</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#projects">Projects</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#skills">Skills</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop: Toggle Right-Aligned */}
        <div className="hidden md:flex ml-6">
          <ThemeToggle />
        </div>

        {/* Mobile Dropdown */}
        {isMenu && (
          <div className="md:hidden w-full bg-violet-100 rounded-2xl mt-4 p-6 border space-y-4 text-sm font-mono">
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#contact">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
