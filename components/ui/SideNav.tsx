"use client";
import { useEffect, useState } from "react";
import { phases, sectionIds } from "@/lib/content";
import { getScrollSection, scrollToSection } from "@/lib/scroll";

export default function SideNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = [sectionIds.hero, ...phases.map((p) => p.id), sectionIds.tools];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
    );
    sections.forEach((id) => {
      const el = getScrollSection(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-50 no-print hidden xl:flex flex-col gap-1 pl-4">
      <button
        onClick={() => scrollToSection(sectionIds.hero)}
        className={`nav-item text-left ${active === sectionIds.hero ? "active" : ""}`}
        aria-controls={sectionIds.hero}
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
        onClick={() => scrollToSection(sectionIds.tools)}
        className={`nav-item text-left ${active === sectionIds.tools ? "active" : ""}`}
        aria-controls={sectionIds.tools}
      >
        Tools
      </button>
    </nav>
  );
}
