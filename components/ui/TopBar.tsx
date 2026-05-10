"use client";
import { useEffect, useState } from "react";
import { Search, Moon, Sun, Download } from "lucide-react";

interface TopBarProps {
  onSearch: (q: string) => void;
  onToggleTheme: () => void;
  isDark: boolean;
  onExport: () => void;
}

export default function TopBar({ onSearch, onToggleTheme, isDark, onExport }: TopBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSearch = (val: string) => {
    setQ(val);
    onSearch(val);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 no-print transition-all duration-300 ${
        scrolled
          ? "bg-[var(--obsidian)] border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
      style={{ paddingTop: "2px" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="font-display text-lg tracking-tight"
            style={{ color: "var(--gold)" }}
          >
            90 Day Raise
          </span>
          <span
            className="hidden md:block text-xs tracking-widest uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            Roadmap
          </span>
        </div>

        <div className="flex items-center gap-2">
          {searchOpen && (
            <input
              autoFocus
              value={q}
              onChange={(e) => handleSearch(e.target.value)}
              onBlur={() => { if (!q) setSearchOpen(false); }}
              className="gold-input w-48 md:w-64"
              placeholder="Search the roadmap…"
            />
          )}
          <button
            onClick={() => { setSearchOpen(!searchOpen); if (searchOpen) handleSearch(""); }}
            className="p-2 rounded-sm transition-colors hover:text-[var(--gold)]"
            style={{ color: "var(--text-muted)" }}
            aria-label="Search"
          >
            <Search size={16} />
          </button>
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-sm transition-colors hover:text-[var(--gold)]"
            style={{ color: "var(--text-muted)" }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={onExport}
            className="p-2 rounded-sm transition-colors hover:text-[var(--gold)]"
            style={{ color: "var(--text-muted)" }}
            aria-label="Export notes"
          >
            <Download size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
