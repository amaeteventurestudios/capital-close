"use client";
import { useState } from "react";
import { objectionVault } from "@/lib/content";
import { RotateCw, ChevronLeft, ChevronRight } from "lucide-react";

export default function ObjectionVault() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [mode, setMode] = useState<"flashcard" | "list">("flashcard");

  const current = objectionVault[index];

  const next = () => {
    setFlipped(false);
    setTimeout(() => setIndex((i) => (i + 1) % objectionVault.length), 150);
  };

  const prev = () => {
    setFlipped(false);
    setTimeout(() => setIndex((i) => (i - 1 + objectionVault.length) % objectionVault.length), 150);
  };

  return (
    <div>
      {/* Mode toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setMode("flashcard")}
          className={mode === "flashcard" ? "btn-gold-filled" : "btn-gold"}
        >
          Flashcard Drill
        </button>
        <button
          onClick={() => setMode("list")}
          className={mode === "list" ? "btn-gold-filled" : "btn-gold"}
        >
          Full Reference
        </button>
      </div>

      {mode === "flashcard" ? (
        <div>
          {/* Progress */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
              {index + 1} / {objectionVault.length}
            </span>
            <div className="flex gap-1">
              {objectionVault.map((_, i) => (
                <div
                  key={i}
                  onClick={() => { setFlipped(false); setIndex(i); }}
                  className="w-2 h-2 rounded-full cursor-pointer transition-all"
                  style={{
                    background: i === index ? "var(--gold)" : "var(--surface-3)",
                  }}
                />
              ))}
            </div>
            <div className="day-badge">{current.label}</div>
          </div>

          {/* Card */}
          <div
            className="flashcard cursor-pointer mb-6"
            style={{ height: "280px" }}
            onClick={() => setFlipped(!flipped)}
          >
            <div
              className={`flashcard-inner w-full h-full ${flipped ? "flipped" : ""}`}
            >
              {/* Front */}
              <div
                className="flashcard-front card w-full h-full p-8 flex flex-col justify-between"
                style={{ position: "relative" }}
              >
                <div>
                  <p
                    className="text-xs tracking-widest uppercase mb-4"
                    style={{ color: "var(--text-muted)" }}
                  >
                    The Objection
                  </p>
                  <p
                    className="font-display text-2xl"
                    style={{ color: "var(--text-primary)", lineHeight: "1.3" }}
                  >
                    &ldquo;{current.objection}&rdquo;
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    What do they really mean? Click to reveal.
                  </p>
                </div>
                <div
                  className="absolute top-4 right-4"
                  style={{ color: "var(--gold)" }}
                >
                  <RotateCw size={14} />
                </div>
              </div>

              {/* Back */}
              <div
                className="flashcard-back card w-full h-full p-8 flex flex-col justify-between overflow-auto"
              >
                <div>
                  <p
                    className="text-xs tracking-widest uppercase mb-2"
                    style={{ color: "var(--gold)" }}
                  >
                    What They Mean
                  </p>
                  <p
                    className="text-sm mb-4 italic"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {current.meaning}
                  </p>
                  <p
                    className="text-xs tracking-widest uppercase mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Your Response
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {current.response}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-3">
            <button onClick={prev} className="btn-gold flex items-center gap-1">
              <ChevronLeft size={14} /> Prev
            </button>
            <button
              onClick={() => setFlipped(!flipped)}
              className="btn-gold flex items-center gap-1"
            >
              <RotateCw size={14} /> Flip
            </button>
            <button onClick={next} className="btn-gold flex items-center gap-1">
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {objectionVault.map((item) => (
            <div key={item.id} className="card p-5">
              <div className="day-badge mb-3" style={{ display: "inline-block" }}>
                {item.label}
              </div>
              <p
                className="font-display text-lg mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                &ldquo;{item.objection}&rdquo;
              </p>
              <p
                className="text-xs italic mb-3"
                style={{ color: "var(--gold)" }}
              >
                {item.meaning}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.response}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
