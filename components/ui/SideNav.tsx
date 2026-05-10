"use client";
import { useEffect, useState } from "react";
import { phases } from "@/lib/content";

export default function SideNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = ["hero", ...phases.map((p) => p.id), "tools"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-50 no-print hidden xl:flex flex-col gap-1 pl-4">
      <button
        onClick={() => scrollTo("hero")}
        className={`nav-item text-left ${active === "hero" ? "active" : ""}`}
      >
        Overview
      </button>
      {phases.map((p) => (
        <button
          key={p.id}
          onClick={() => scrollTo(p.id)}
          className={`nav-item text-left ${active === p.id ? "active" : ""}`}
        >
          Phase {p.number} · {p.days}
        </button>
      ))}
      <button
        onClick={() => scrollTo("tools")}
        className={`nav-item text-left ${active === "tools" ? "active" : ""}`}
      >
        Tools
      </button>
    </nav>
  );
}
