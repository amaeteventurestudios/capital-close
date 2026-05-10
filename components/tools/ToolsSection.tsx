"use client";
import { useEffect, useRef, useState } from "react";
import ObjectionVault from "./ObjectionVault";
import BeliefStack from "./BeliefStack";
import RoundCalculator from "./RoundCalculator";
import OutreachBuilder from "./OutreachBuilder";

const toolList = [
  { id: "calculator", label: "Round Calculator", description: "Track raise progress and calculate what remains." },
  { id: "objection", label: "Objection Vault", description: "Flashcard drill for all 8 investor objection categories." },
  { id: "belief", label: "Belief Stack", description: "Build and save your foundational conviction document." },
  { id: "outreach", label: "Outreach Builder", description: "Generate the correct message for any investor type and touch number." },
];

export default function ToolsSection() {
  const [active, setActive] = useState("calculator");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tools" ref={ref} className="phase-section">
      <div className="section-divider" />
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          className={`mb-10 opacity-0-init transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>
              Raise Tools
            </div>
            <div className="h-px flex-1" style={{ background: "var(--border)" }} />
          </div>
          <h2
            className="font-display mb-3"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: "1",
              color: "var(--text-primary)",
            }}
          >
            Your Raise
            <br />
            <span className="gold-shimmer">Command Center</span>
          </h2>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Interactive tools built from the framework. Everything saves automatically.
          </p>
        </div>

        {/* Tool selector */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 opacity-0-init transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "translate-y-8"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          {toolList.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActive(tool.id)}
              className={`card p-4 text-left transition-all ${
                active === tool.id ? "border-[var(--gold)]" : ""
              }`}
              style={{
                borderColor: active === tool.id ? "var(--gold)" : undefined,
              }}
            >
              <p
                className="text-sm font-display mb-1"
                style={{ color: active === tool.id ? "var(--gold)" : "var(--text-primary)" }}
              >
                {tool.label}
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                {tool.description}
              </p>
            </button>
          ))}
        </div>

        {/* Active tool */}
        <div
          className={`tool-panel opacity-0-init transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "translate-y-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="tool-header">
            <span className="font-display text-lg" style={{ color: "var(--text-primary)" }}>
              {toolList.find((t) => t.id === active)?.label}
            </span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              Auto-saves to browser
            </span>
          </div>
          <div className="p-6">
            {active === "calculator" && <RoundCalculator />}
            {active === "objection" && <ObjectionVault />}
            {active === "belief" && <BeliefStack />}
            {active === "outreach" && <OutreachBuilder />}
          </div>
        </div>
      </div>
    </section>
  );
}
