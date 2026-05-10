"use client";
import { useEffect, useState, useCallback } from "react";
import ProgressBar from "@/components/ui/ProgressBar";
import SideNav from "@/components/ui/SideNav";
import TopBar from "@/components/ui/TopBar";
import Hero from "@/components/phases/Hero";
import PhaseSection from "@/components/phases/PhaseSection";
import ToolsSection from "@/components/tools/ToolsSection";
import Footer from "@/components/ui/Footer";
import { phases } from "@/lib/content";
import { storage } from "@/lib/storage";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedTheme = storage.get("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light");
    }

    // Restore scroll position
    const savedScroll = storage.get("scrollPos");
    if (savedScroll) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScroll, 10));
      }, 300);
    }

    // Save scroll position periodically
    const saveScroll = () => storage.set("scrollPos", String(window.scrollY));
    window.addEventListener("scroll", saveScroll, { passive: true });
    return () => window.removeEventListener("scroll", saveScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.remove("light");
      storage.set("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      storage.set("theme", "light");
    }
  };

  const exportNotes = useCallback(() => {
    const lines: string[] = ["90 DAY RAISE ROADMAP — NOTES EXPORT", "=".repeat(50), ""];

    phases.forEach((phase) => {
      const phaseNotes = storage.getJSON<Record<string, string>>(`notes_${phase.id}`, {});
      const hasNotes = Object.values(phaseNotes).some((n) => n.trim().length > 0);
      if (!hasNotes) return;

      lines.push(`PHASE ${phase.number}: ${phase.title.toUpperCase()} (Days ${phase.days})`);
      lines.push("-".repeat(40));

      phase.days_content.forEach((item, idx) => {
        const key = `${phase.id}_${idx}`;
        const note = phaseNotes[key];
        if (note?.trim()) {
          lines.push(`${item.day} — ${item.title}`);
          lines.push(note.trim());
          lines.push("");
        }
      });
      lines.push("");
    });

    const beliefStack = storage.getJSON<Record<string, string>>("belief_stack", {});
    const questions = [
      "Why does this company exist",
      "Why are you the right person",
      "Why is now the right moment",
      "Evidence this company is working",
      "Success in 18 months",
    ];
    const bsKeys = ["why_exist", "why_you", "why_now", "evidence", "success_18m"];
    const hasBelief = bsKeys.some((k) => beliefStack[k]?.trim().length > 0);

    if (hasBelief) {
      lines.push("BELIEF STACK");
      lines.push("-".repeat(40));
      bsKeys.forEach((key, i) => {
        if (beliefStack[key]?.trim()) {
          lines.push(questions[i]);
          lines.push(beliefStack[key].trim());
          lines.push("");
        }
      });
    }

    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "raise-roadmap-notes.txt";
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <main className="min-h-screen">
      <ProgressBar />
      <SideNav />
      <TopBar
        onSearch={setSearchQuery}
        onToggleTheme={toggleTheme}
        isDark={isDark}
        onExport={exportNotes}
      />
      <div className="roadmap-shell">
        <Hero />
        {phases.map((phase) => (
          <PhaseSection key={phase.id} phase={phase} searchQuery={searchQuery} />
        ))}
        <ToolsSection />
        <Footer />
      </div>
    </main>
  );
}
