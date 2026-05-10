"use client";
import { useEffect, useState } from "react";
import { phases } from "@/lib/content";
import { scrollToSection } from "@/lib/scroll";

const SECTION_IDS = [
  "hero",
  "phase-1",
  "phase-2",
  "phase-3",
  "phase-4",
  "phase-5",
  "phase-6",
  "tools",
] as const;

export default function SideNav() {
  const [active, setActive] = useState<(typeof SECTION_IDS)[number]>("hero");

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.3;
      let nextActive: (typeof SECTION_IDS)[number] = SECTION_IDS[0];
      let closestTop = Number.NEGATIVE_INFINITY;

      SECTION_IDS.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const top = element.getBoundingClientRect().top;
        if (top <= marker && top >= closestTop) {
          nextActive = id;
          closestTop = top;
        }
      });

      setActive((current) => (current === nextActive ? current : nextActive));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-50 no-print hidden xl:flex flex-col gap-1 pl-4">
      <button
        onClick={() => scrollToSection("hero")}
        className={`nav-item text-left ${active === "hero" ? "active" : ""}`}
        aria-controls="hero"
      >
        Overview
      </button>
      {phases.map((p) => (
        <button
          key={p.id}
          onClick={() => scrollToSection(p.id)}
          className={`nav-item text-left ${active === p.id ? "active" : ""}`}
          aria-controls={p.id}
        >
          Phase {p.number} · {p.days}
        </button>
      ))}
      <button
        onClick={() => scrollToSection("tools")}
        className={`nav-item text-left ${active === "tools" ? "active" : ""}`}
        aria-controls="tools"
      >
        Tools
      </button>
    </nav>
  );
}
