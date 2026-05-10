"use client";
import { useEffect, useRef, useState } from "react";
import { Phase } from "@/lib/content";
import { storage } from "@/lib/storage";
import { ChevronDown, ChevronUp, MessageSquare, BookOpen } from "lucide-react";

interface PhaseSectionProps {
  phase: Phase;
  searchQuery: string;
}

function highlight(text: string, query: string): React.ReactNode {
  if (!query || query.length < 2) return text;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="search-highlight">{part}</mark>
    ) : (
      part
    )
  );
}

function readingTime(phase: Phase): number {
  const text = phase.days_content.map((d) => d.content.join(" ")).join(" ");
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200);
}

export default function PhaseSection({ phase, searchQuery }: PhaseSectionProps) {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [noteOpen, setNoteOpen] = useState<Record<string, boolean>>({});
  const [phaseComplete, setPhaseComplete] = useState<Record<string, boolean>>({});
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const savedNotes = storage.getJSON<Record<string, string>>(`notes_${phase.id}`, {});
    const savedChecks = storage.getJSON<Record<string, boolean>>(`checks_${phase.id}`, {});
    const savedPhaseChecks = storage.getJSON<Record<string, boolean>>(`phasechecks_${phase.id}`, {});
    setNotes(savedNotes);
    setChecks(savedChecks);
    setPhaseComplete(savedPhaseChecks);

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [phase.id]);

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleNote = (key: string) => {
    setNoteOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const updateNote = (key: string, val: string) => {
    const updated = { ...notes, [key]: val };
    setNotes(updated);
    storage.setJSON(`notes_${phase.id}`, updated);
  };

  const toggleCheck = (key: string) => {
    const updated = { ...checks, [key]: !checks[key] };
    setChecks(updated);
    storage.setJSON(`checks_${phase.id}`, updated);
  };

  const togglePhaseCheck = (key: string) => {
    const updated = { ...phaseComplete, [key]: !phaseComplete[key] };
    setPhaseComplete(updated);
    storage.setJSON(`phasechecks_${phase.id}`, updated);
  };

  const totalChecks = phase.days_content.reduce(
    (acc, d) => acc + (d.checklist?.length || 0),
    0
  );
  const completedChecks = Object.values(checks).filter(Boolean).length;
  const progress = totalChecks > 0 ? (completedChecks / totalChecks) * 100 : 0;

  const rt = readingTime(phase);

  return (
    <section
      id={phase.id}
      ref={ref}
      className="phase-section relative"
    >
      {/* Section separator */}
      <div className="section-divider" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Phase header */}
        <div
          className={`mb-12 opacity-0-init transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "translate-y-8"
          }`}
          style={{ transitionDelay: "0.05s" }}
        >
          {/* Phase label row */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--gold)" }}
            >
              Phase {phase.number}
            </div>
            <div
              className="h-px flex-1"
              style={{ background: "var(--border)" }}
            />
            <div className="day-badge">Days {phase.days}</div>
            <div
              className="text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              ~{rt} min read
            </div>
          </div>

          <h2
            className="font-display mb-3"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: "1",
              color: "var(--text-primary)",
            }}
          >
            {phase.title}
          </h2>

          <p
            className="text-base mb-6"
            style={{ color: "var(--gold)", fontStyle: "italic" }}
          >
            {phase.tagline}
          </p>

          {/* Progress bar for phase */}
          {totalChecks > 0 && (
            <div className="flex items-center gap-3 mb-6">
              <div
                className="flex-1 h-px rounded-full overflow-hidden"
                style={{ background: "var(--surface-3)" }}
              >
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, var(--gold-dim), var(--gold))",
                  }}
                />
              </div>
              <span
                className="text-xs font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                {completedChecks}/{totalChecks}
              </span>
            </div>
          )}

          {/* Why this phase exists */}
          <div
            className="card p-6 cursor-pointer"
            onClick={() => toggleExpand("why")}
          >
            <div className="flex items-center justify-between">
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "var(--text-muted)" }}
              >
                Why This Phase Exists
              </span>
              {expanded["why"] ? (
                <ChevronUp size={14} style={{ color: "var(--gold)" }} />
              ) : (
                <ChevronDown size={14} style={{ color: "var(--gold)" }} />
              )}
            </div>
            {expanded["why"] && (
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {highlight(phase.why, searchQuery)}
              </p>
            )}
          </div>
        </div>

        {/* Day items */}
        <div className="space-y-4">
          {phase.days_content.map((item, idx) => {
            const key = `${phase.id}_${idx}`;
            const isExpanded = expanded[key] !== false; // default open

            return (
              <div
                key={key}
                className={`card overflow-hidden opacity-0-init transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "translate-y-8"
                }`}
                style={{ transitionDelay: `${0.1 + idx * 0.06}s` }}
              >
                {/* Day header */}
                <div
                  className="flex items-center gap-3 p-5 cursor-pointer"
                  onClick={() => toggleExpand(key)}
                  style={{ borderBottom: isExpanded ? "1px solid var(--border)" : "none" }}
                >
                  <div className="day-badge shrink-0">{item.day}</div>
                  <h3
                    className="font-display flex-1 text-lg"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {highlight(item.title, searchQuery)}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleNote(key); }}
                      className="p-1 rounded transition-colors"
                      style={{ color: noteOpen[key] ? "var(--gold)" : "var(--text-muted)" }}
                      aria-label="Toggle note"
                    >
                      <MessageSquare size={14} />
                    </button>
                    {isExpanded ? (
                      <ChevronUp size={14} style={{ color: "var(--text-muted)" }} />
                    ) : (
                      <ChevronDown size={14} style={{ color: "var(--text-muted)" }} />
                    )}
                  </div>
                </div>

                {/* Day content */}
                {isExpanded && (
                  <div className="p-5 space-y-4">
                    {item.content.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {highlight(para, searchQuery)}
                      </p>
                    ))}

                    {/* Checklist */}
                    {item.checklist && item.checklist.length > 0 && (
                      <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                        <p
                          className="text-xs tracking-widest uppercase mb-3"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <BookOpen size={10} className="inline mr-1" />
                          Action Items
                        </p>
                        <div className="space-y-2">
                          {item.checklist.map((c, cIdx) => {
                            const checkKey = `${key}_check_${cIdx}`;
                            return (
                              <label
                                key={cIdx}
                                className="flex items-start gap-3 cursor-pointer group"
                              >
                                <input
                                  type="checkbox"
                                  className="gold-checkbox mt-0.5"
                                  checked={!!checks[checkKey]}
                                  onChange={() => toggleCheck(checkKey)}
                                />
                                <span
                                  className="text-sm transition-colors"
                                  style={{
                                    color: checks[checkKey]
                                      ? "var(--text-muted)"
                                      : "var(--text-secondary)",
                                    textDecoration: checks[checkKey] ? "line-through" : "none",
                                  }}
                                >
                                  {highlight(c, searchQuery)}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Note */}
                    {noteOpen[key] && (
                      <div className="mt-3 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                        <p
                          className="text-xs tracking-widest uppercase mb-2"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Your Notes
                        </p>
                        <textarea
                          className="note-area"
                          placeholder="Add your notes here…"
                          value={notes[key] || ""}
                          onChange={(e) => updateNote(key, e.target.value)}
                          rows={3}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Phase completion checklist */}
        {phase.completion_checklist && (
          <div
            className={`mt-8 card p-6 opacity-0-init transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "translate-y-8"
            }`}
            style={{ transitionDelay: `${0.1 + phase.days_content.length * 0.06 + 0.1}s` }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Phase {phase.number} Completion Check
            </p>
            <div className="space-y-2">
              {phase.completion_checklist.map((item, idx) => {
                const key = `phase_complete_${idx}`;
                return (
                  <label key={idx} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="gold-checkbox mt-0.5"
                      checked={!!phaseComplete[key]}
                      onChange={() => togglePhaseCheck(key)}
                    />
                    <span
                      className="text-sm"
                      style={{
                        color: phaseComplete[key] ? "var(--text-muted)" : "var(--text-secondary)",
                        textDecoration: phaseComplete[key] ? "line-through" : "none",
                      }}
                    >
                      {item}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
