"use client";

import Nav from "@/components/ui/Nav";
import DarkModeBtn from "@/components/ui/DarkModeBtn";

import { cn } from "@/utils/cn";
import { useScroll } from "@/utils/useScroll";

export default function Header() {
  const isScrolled = useScroll();

  return (
    <header
      className={cn(
        "bg-light dark:bg-dark text-dark-3 dark:text-light-3 fixed top-0 right-0 left-0 z-50 py-6 transition-all",
        {
          "bg-light-2/75 dark:bg-dark-2/75 py-4 backdrop-blur-md": isScrolled,
        },
      )}
    >
      <div className="container flex items-center justify-between">
        <h1 className="text-accent dark:text-accent-light text-2xl">ziad.dev</h1>
        <div className="flex-center gap-6 sm:gap-8">
          <Nav></Nav>
          <DarkModeBtn />
        </div>
      </div>
    </header>
  );
}
