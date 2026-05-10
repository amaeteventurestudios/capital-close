"use client";
import { useEffect, useState } from "react";
import { storage } from "@/lib/storage";

export default function RoundCalculator() {
  const [target, setTarget] = useState("");
  const [committed, setCommitted] = useState("");
  const [avgCheck, setAvgCheck] = useState("");
  const [minClose, setMinClose] = useState("");
  const [closeDate, setCloseDate] = useState("");

  useEffect(() => {
    const saved = storage.getJSON<Record<string, string>>("round_calc", {});
    setTarget(saved.target || "");
    setCommitted(saved.committed || "");
    setAvgCheck(saved.avgCheck || "");
    setMinClose(saved.minClose || "");
    setCloseDate(saved.closeDate || "");
  }, []);

  const save = (updates: Record<string, string>) => {
    storage.setJSON("round_calc", {
      target, committed, avgCheck, minClose, closeDate, ...updates,
    });
  };

  const t = parseFloat(target) || 0;
  const c = parseFloat(committed) || 0;
  const avg = parseFloat(avgCheck) || 0;
  const min = parseFloat(minClose) || 0;

  const remaining = Math.max(0, t - c);
  const pct = t > 0 ? (c / t) * 100 : 0;
  const investorsNeeded = avg > 0 ? Math.ceil(remaining / avg) : 0;
  const atMinClose = min > 0 ? (c / min) * 100 : 0;
  const canClose = c >= min;

  const daysLeft = (() => {
    if (!closeDate) return null;
    const diff = Math.ceil(
      (new Date(closeDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
    );
    return diff;
  })();

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(n * 1_000_000);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs mb-1" style={{ color: "var(--text-muted)" }}>
            Raise Target ($M)
          </label>
          <input
            className="gold-input"
            type="number"
            placeholder="5"
            value={target}
            onChange={(e) => { setTarget(e.target.value); save({ target: e.target.value }); }}
          />
        </div>
        <div>
          <label className="block text-xs mb-1" style={{ color: "var(--text-muted)" }}>
            Capital Committed ($M)
          </label>
          <input
            className="gold-input"
            type="number"
            placeholder="1.2"
            value={committed}
            onChange={(e) => { setCommitted(e.target.value); save({ committed: e.target.value }); }}
          />
        </div>
        <div>
          <label className="block text-xs mb-1" style={{ color: "var(--text-muted)" }}>
            Average Check Size ($M)
          </label>
          <input
            className="gold-input"
            type="number"
            placeholder="0.25"
            value={avgCheck}
            onChange={(e) => { setAvgCheck(e.target.value); save({ avgCheck: e.target.value }); }}
          />
        </div>
        <div>
          <label className="block text-xs mb-1" style={{ color: "var(--text-muted)" }}>
            Minimum Close Threshold ($M)
          </label>
          <input
            className="gold-input"
            type="number"
            placeholder="2.5"
            value={minClose}
            onChange={(e) => { setMinClose(e.target.value); save({ minClose: e.target.value }); }}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs mb-1" style={{ color: "var(--text-muted)" }}>
            Hard Close Date
          </label>
          <input
            className="gold-input"
            type="date"
            value={closeDate}
            onChange={(e) => { setCloseDate(e.target.value); save({ closeDate: e.target.value }); }}
          />
        </div>
      </div>

      {t > 0 && (
        <div className="space-y-4">
          {/* Main progress */}
          <div className="card p-5">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                Round Progress
              </span>
              <span className="font-mono text-lg" style={{ color: "var(--gold)" }}>
                {pct.toFixed(1)}%
              </span>
            </div>
            <div
              className="h-2 rounded-full overflow-hidden mb-3"
              style={{ background: "var(--surface-3)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${Math.min(100, pct)}%`,
                  background: "linear-gradient(90deg, var(--gold-dim), var(--gold))",
                }}
              />
            </div>
            <div className="flex justify-between text-xs" style={{ color: "var(--text-muted)" }}>
              <span>{fmt(c)} committed</span>
              <span>{fmt(remaining)} remaining</span>
              <span>{fmt(t)} target</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="card p-4 text-center">
              <div className="font-display text-2xl mb-1" style={{ color: "var(--gold)" }}>
                {fmt(remaining)}
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>Still Needed</div>
            </div>
            <div className="card p-4 text-center">
              <div className="font-display text-2xl mb-1" style={{ color: "var(--text-primary)" }}>
                {avg > 0 ? investorsNeeded : "—"}
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>Investors Needed</div>
            </div>
            <div className="card p-4 text-center">
              <div
                className="font-display text-2xl mb-1"
                style={{ color: canClose ? "var(--gold)" : "var(--text-muted)" }}
              >
                {min > 0 ? `${atMinClose.toFixed(0)}%` : "—"}
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>Min Close</div>
            </div>
            <div className="card p-4 text-center">
              <div
                className="font-display text-2xl mb-1"
                style={{
                  color:
                    daysLeft !== null
                      ? daysLeft <= 14
                        ? "#ef4444"
                        : daysLeft <= 30
                        ? "var(--gold)"
                        : "var(--text-primary)"
                      : "var(--text-muted)",
                }}
              >
                {daysLeft !== null ? daysLeft : "—"}
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>Days to Close</div>
            </div>
          </div>

          {canClose && (
            <div
              className="card p-4 text-center"
              style={{ borderColor: "var(--gold)", borderWidth: "1px" }}
            >
              <p className="text-sm" style={{ color: "var(--gold)" }}>
                ✓ You have reached the minimum close threshold. You can close this round.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
