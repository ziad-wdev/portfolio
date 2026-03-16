import { Icon } from "@iconify/react";
import { cn } from "clsx-for-tailwind";
import { useEffect, useState } from "react";
import Nav from "./Nav";

export default function Header() {
  const scrollMargin = 25;
  const [isScrolled, setIsScrolled] = useState(window.scrollY > scrollMargin);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollMargin);
    };
    window.addEventListener("scroll", handleScroll);
    return window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "bg-light dark:bg-dark text-dark-4 dark:text-light-4 fixed top-0 right-0 left-0 py-6 transition-all",
        {
          "bg-light-2/50 dark:bg-dark-2/50 py-4 backdrop-blur-lg": isScrolled,
        },
      )}
    >
      <div className="container flex items-center justify-between">
        <h1 className="text-accent text-2xl font-bold">ziad.dev</h1>
        <div className="flex-center gap-8 max-md:gap-6">
          <Nav></Nav>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="bg-light-3 dark:bg-dark-3 hover:bg-light-4 dark:hover:bg-dark-4 aspect-square cursor-pointer rounded-full p-2 text-xl transition-all active:scale-95"
          >
            {isDarkMode ? (
              <Icon icon="lucide:moon" />
            ) : (
              <Icon icon="lucide:sun" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
