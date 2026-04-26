"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { useScroll } from "@/utils/useScroll";

export default function DarkModeBtn() {
  const isScrolled = useScroll();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    function handleThemeStorage() {
      const stored = localStorage.getItem("darkMode");
      if (stored) {
        setIsDarkMode(JSON.parse(stored));
      }
    }

    handleThemeStorage();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  });

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={cn(
        "bg-light-2 dark:bg-dark-2 hover:bg-light-3 dark:hover:bg-dark-3 aspect-square cursor-pointer rounded-full p-2 text-xl transition-all active:scale-95",
        {
          "bg-light-3 dark:bg-dark-3 hover:bg-light-4 dark:hover:bg-dark-4": isScrolled,
        },
      )}
    >
      {isDarkMode ? <Icon icon="lucide:moon" /> : <Icon icon="lucide:sun" />}
    </button>
  );
}
