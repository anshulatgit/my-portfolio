"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ width: "2.25rem", height: "2.25rem" }} />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        padding: "0.5rem",
        borderRadius: "0.5rem",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: "inherit",
        opacity: 0.7,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
