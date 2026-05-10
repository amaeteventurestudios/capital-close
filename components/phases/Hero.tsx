"use client";
import { useEffect, useRef, useState } from "react";
import { storage } from "@/lib/storage";
import { phases, sectionIds } from "@/lib/content";
import { scrollToSection } from "@/lib/scroll";

export default function Hero() {
  const [startDate, setStartDate] = useState<string>("");
  const [dayNumber, setDayNumber] = useState<number | null>(null);
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);
  const [currentPhase, setCurrentPhase] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const saved = storage.get("startDate");
    if (saved) {
      setStartDate(saved);
      calculate(saved);
    }
    setTimeout(() => setVisible(true), 100);
  }, []);

  const calculate = (date: string) => {
    if (!date) return;
    const start = new Date(date);
    const today = new Date();
    const diff = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    setDayNumber(diff);
    setDaysRemaining(Math.max(0, 90 - diff));

    const phaseRanges = [
      { phase: "Phase 1", start: 1, end: 15 },
      { phase: "Phase 2", start: 16, end: 30 },
      { phase: "Phase 3", start: 31, end: 45 },
      { phase: "Phase 4", start: 46, end: 60 },
      { phase: "Phase 5", start: 61, end: 75 },
      { phase: "Phase 6", start: 76, end: 90 },
    ];
    const current = phaseRanges.find((p) => diff >= p.start && diff <= p.end);
    setCurrentPhase(current?.phase || (diff > 90 ? "Raise Complete" : "Pre-raise"));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setStartDate(val);
    storage.set("startDate", val);
    calculate(val);
  };

  return (
    <section
      id={sectionIds.hero}
      data-scroll-section={sectionIds.hero}
      ref={ref}
      className="scroll-section relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-20">
        {/* Eyebrow */}
        <div
          className={`flex items-center gap-3 mb-8 opacity-0-init ${visible ? "animate-fade-up" : ""}`}
        >
          <div
            className="h-px w-12"
            style={{ background: "var(--gold)" }}
          />
          <span
            className="text-xs tracking-widest uppercase font-mono"
            style={{ color: "var(--gold)" }}
          >
            LPP Media · Capital Raise System
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`font-display mb-6 opacity-0-init ${visible ? "animate-fade-up delay-100" : ""}`}
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: "0.95",
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
          }}
        >
          90 Day
          <br />
          <span className="gold-shimmer">Raise</span>
          <br />
          Roadmap
        </h1>

        {/* Subline */}
        <p
          className={`max-w-xl mb-12 opacity-0-init ${visible ? "animate-fade-up delay-200" : ""}`}
          style={{
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            lineHeight: "1.6",
          }}
        >
          The systematic framework for closing a $5M+ raise in 90 days.
          Six phases. Every day has a job. Every week has a milestone.
        </p>

        {/* Day tracker */}
        <div
          className={`card p-6 mb-10 max-w-lg opacity-0-init ${visible ? "animate-fade-up delay-300" : ""}`}
        >
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--text-muted)" }}
          >
            Raise Day Tracker
          </p>
          <div className="flex gap-3 items-center flex-wrap">
            <div className="flex-1 min-w-0">
              <label
                className="block text-xs mb-1"
                style={{ color: "var(--text-muted)" }}
              >
                Raise start date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={handleDateChange}
                className="gold-input"
              />
            </div>
            {dayNumber !== null && (
              <div className="flex gap-4 flex-wrap">
                <div className="text-center">
                  <div
                    className="font-display text-3xl"
                    style={{ color: "var(--gold)" }}
                  >
                    {Math.max(1, Math.min(90, dayNumber))}
                  </div>
                  <div
                    className="text-xs tracking-wider uppercase"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Today
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="font-display text-3xl"
                    style={{ color: daysRemaining === 0 ? "var(--gold)" : "var(--text-primary)" }}
                  >
                    {daysRemaining}
                  </div>
                  <div
                    className="text-xs tracking-wider uppercase"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Days Left
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="font-display text-lg pt-1"
                    style={{ color: "var(--gold)" }}
                  >
                    {currentPhase}
                  </div>
                  <div
                    className="text-xs tracking-wider uppercase"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Current
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Progress dots */}
          {dayNumber !== null && (
            <div className="mt-4 flex gap-1">
              {phases.map((p, i) => {
                const phaseDay = i * 15 + 1;
                const inPhase = dayNumber >= phaseDay && dayNumber <= phaseDay + 14;
                const done = dayNumber > phaseDay + 14;
                return (
                  <div
                    key={p.id}
                    onClick={() => scrollToSection(p.id)}
                    className="flex-1 h-1 rounded-full cursor-pointer transition-all"
                    style={{
                      background: done
                        ? "var(--gold)"
                        : inPhase
                        ? "var(--gold-bright)"
                        : "var(--surface-3)",
                    }}
                    title={`Phase ${p.number}: Days ${p.days}`}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Phase grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-3 opacity-0-init ${
            visible ? "animate-fade-up delay-400" : ""
          }`}
        >
          {phases.map((p) => (
            <button
              key={p.id}
              onClick={() => scrollToSection(p.id)}
              className="card p-4 text-left group"
            >
              <div
                className="day-badge mb-2"
                style={{ display: "inline-block" }}
              >
                Days {p.days}
              </div>
              <div
                className="font-display text-base mb-1 group-hover:text-[var(--gold)] transition-colors"
                style={{ color: "var(--text-primary)" }}
              >
                {p.title}
              </div>
              <div
                className="text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                Phase {p.number}
              </div>
            </button>
          ))}
        </div>

        {/* Scroll cue */}
        <div
          className={`mt-16 flex items-center gap-3 opacity-0-init ${
            visible ? "animate-fade-up delay-500" : ""
          }`}
        >
          <div
            className="h-px flex-1 max-w-20"
            style={{ background: "var(--border)" }}
          />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            Scroll to begin
          </span>
          <div
            className="h-px flex-1 max-w-20"
            style={{ background: "var(--border)" }}
          />
        </div>
      </div>
    </section>
  );
}
