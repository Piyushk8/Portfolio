"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch"; // Import the Switch component
import { MoonStar, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);  // To track whether the component is mounted

  // Use useEffect to set mounted to true on the client-side after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // If the component isn't mounted yet, render nothing or a loading state
  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch className="" checked={theme === "dark"} onCheckedChange={toggleTheme} />
      <span className="bg-background shadow-primary shadow-md text-sm dark:text-primary-foreground p-1 rounded-full">
        {theme === "dark" ? (
          <MoonStar className="size-5" />
        ) : (
          <Sun className="size-5" />
        )}
      </span>
    </div>
  );
}
