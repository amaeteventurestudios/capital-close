"use client";
import { useEffect, useState } from "react";
import { storage } from "@/lib/storage";

const questions = [
  {
    id: "why_exist",
    label: "Why does this company exist and why does it matter?",
    hint: "Not the elevator pitch version. The real answer. The specific problem you watched happen that made you unable to not build this.",
    placeholder: "The specific problem you witnessed that you could not accept as normal…",
  },
  {
    id: "why_you",
    label: "Why are you the right person to build this?",
    hint: "Not credentials. The specific experience, relationships, or insight that you have and a competitor would need years to replicate.",
    placeholder: "The unfair advantage your experience gives you…",
  },
  {
    id: "why_now",
    label: "Why is now the right moment for this raise?",
    hint: "Not 'we need money.' The specific market shift, traction milestone, or competitive window that makes this the moment to accelerate.",
    placeholder: "The specific change that opened the window…",
  },
  {
    id: "evidence",
    label: "What are the five strongest pieces of evidence that this company is working?",
    hint: "Not opinions. Specific facts: customer outcomes with numbers, retention rates, growth trajectory, LOIs, strategic relationships.",
    placeholder: "1. \n2. \n3. \n4. \n5. ",
  },
  {
    id: "success_18m",
    label: "What does success look like in 18 months?",
    hint: "Not 'we will be bigger.' Specific revenue, specific team, specific market position, specific optionality.",
    placeholder: "Specific revenue, team size, market position, and what becomes possible…",
  },
];

export default function BeliefStack() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [viewMode, setViewMode] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const saved = storage.getJSON<Record<string, string>>("belief_stack", {});
    setAnswers(saved);
  }, []);

  const update = (id: string, val: string) => {
    const updated = { ...answers, [id]: val };
    setAnswers(updated);
    storage.setJSON("belief_stack", updated);
  };

  const handleSave = () => {
    storage.setJSON("belief_stack", answers);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const allAnswered = questions.every((q) => answers[q.id]?.trim().length > 0);

  if (viewMode && allAnswered) {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3
            className="font-display text-2xl"
            style={{ color: "var(--text-primary)" }}
          >
            Your Belief Stack
          </h3>
          <button
            onClick={() => setViewMode(false)}
            className="btn-gold"
          >
            Edit
          </button>
        </div>
        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="card p-6">
              <p
                className="text-xs tracking-widest uppercase mb-2"
                style={{ color: "var(--gold)" }}
              >
                {q.label}
              </p>
              <p
                className="text-sm leading-relaxed whitespace-pre-wrap"
                style={{ color: "var(--text-secondary)" }}
              >
                {answers[q.id] || "—"}
              </p>
            </div>
          ))}
        </div>
        <p
          className="text-xs mt-4 text-center"
          style={{ color: "var(--text-muted)" }}
        >
          Read this every morning of the raise.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p
        className="text-sm mb-6 leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        The belief stack keeps you grounded when the raise gets difficult. Answer all five questions
        with specific evidence. Read it every morning.
      </p>
      <div className="space-y-5">
        {questions.map((q) => (
          <div key={q.id} className="card p-5">
            <label>
              <p
                className="text-sm font-display mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {q.label}
              </p>
              <p
                className="text-xs mb-3 italic"
                style={{ color: "var(--text-muted)" }}
              >
                {q.hint}
              </p>
              <textarea
                className="note-area"
                rows={4}
                placeholder={q.placeholder}
                value={answers[q.id] || ""}
                onChange={(e) => update(q.id, e.target.value)}
              />
            </label>
          </div>
        ))}
      </div>
      <div className="flex gap-3 mt-5">
        <button onClick={handleSave} className="btn-gold-filled">
          {saved ? "Saved ✓" : "Save Belief Stack"}
        </button>
        {allAnswered && (
          <button onClick={() => setViewMode(true)} className="btn-gold">
            View Document
          </button>
        )}
      </div>
    </div>
  );
}
