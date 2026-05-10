"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

type InvestorType = "PE" | "Family Office" | "VC";
type TouchNumber = 1 | 2 | 3 | 4 | 5;

const templates: Record<InvestorType, Record<TouchNumber, (f: Fields) => string>> = {
  PE: {
    1: (f) => `${f.signal ? f.signal + " — " : ""}we've built ${f.metric1 || "[key metric]"} with ${f.metric2 || "[second metric]"} in ${f.sector || "[sector]"}. This signals ${f.meaning || "[what it predicts about the business]"}. Worth a 15-minute call this week?`,
    2: (f) => `New data point since we last connected: ${f.newInfo || "[new proof point]"}. Combined with ${f.metric1 || "[first metric]"}, this positions us as the institutional-grade operator in ${f.sector || "[sector]"}. Still interested in a quick call?`,
    3: (f) => `Round update: ${f.momentum || "[momentum signal — new commitment, new customer, milestone]"}. The thesis is confirming faster than projected. ${f.timing || "[specific day]"} still work for 15 minutes?`,
    4: (f) => `${f.externalEvent || "[market development]"} validates exactly what we've been building toward in ${f.sector || "[sector]"}. The window this creates is directly relevant to our conversation. Worth a call before this week closes?`,
    5: (f) => `We're closing the round on ${f.closeDate || "[close date]"}. ${f.remaining || "[X]"} positions remain at current terms. Completely fine if the timing isn't right — happy to note you as a pass for this round. Otherwise, happy to set something up this week.`,
  },
  "Family Office": {
    1: (f) => `${f.signal ? f.signal + " — " : ""}${f.metric1 || "[key metric]"} in ${f.sector || "[sector]"}, with ${f.metric2 || "[durability signal — retention, contract length, etc]"}. Built for the decade, not the quarter. Would a brief conversation make sense?`,
    2: (f) => `Since we last connected: ${f.newInfo || "[new development — customer, milestone, relationship]"}. Adds another layer to the durability story. Still happy to share more context in a short call.`,
    3: (f) => `${f.momentum || "[momentum signal]"} — the trajectory is confirming what we discussed. ${f.timing || "[specific day]"} still work for 20 minutes?`,
    4: (f) => `${f.externalEvent || "[market development]"} makes this an even cleaner entry point for a long-term capital partner. This is the kind of moment that looks obvious in retrospect. Happy to walk through the specifics.`,
    5: (f) => `We're finalizing the investor group for this round on ${f.closeDate || "[date]"}. Your allocation is ${f.allocation || "[amount]"} at current terms. Completely fine if the timing doesn't align — happy to revisit for the next round. Otherwise, happy to connect this week.`,
  },
  VC: {
    1: (f) => `${f.signal ? f.signal + " — " : ""}${f.metric1 || "[growth metric]"} in ${f.sector || "[sector]"}, with ${f.metric2 || "[second proof point]"}. We're building the default solution for ${f.customer || "[specific customer]"} in ${f.category || "[category]"}. Worth 15 minutes this week?`,
    2: (f) => `New from this week: ${f.newInfo || "[growth signal or milestone]"}. The acceleration pattern is holding. ${f.metric1 || "[primary metric]"} supports the category thesis we discussed. Still open to a quick call?`,
    3: (f) => `Round update: ${f.momentum || "[momentum — new commitment, customer, or market signal]"}. The timing window we discussed is narrowing. ${f.timing || "[specific day]"} still open?`,
    4: (f) => `${f.externalEvent || "[competitor raise, market signal, or regulatory development]"} just made the category thesis impossible to ignore. This is the moment. Happy to connect before week's end.`,
    5: (f) => `Closing the round on ${f.closeDate || "[date]"}. ${f.remaining || "[X]"} spots remain at current terms. In or pass — either way, completely understood. If you're in, happy to move fast.`,
  },
};

const subjectLines: Record<InvestorType, Record<TouchNumber, (f: Fields) => string>> = {
  PE: {
    1: (f) => `${f.metric1 || "[metric]"} — ${f.sector || "[sector]"} opportunity`,
    2: (f) => `New: ${f.newInfo ? f.newInfo.slice(0, 40) + "…" : "[proof point]"}`,
    3: (f) => `Round update — ${f.momentum ? f.momentum.slice(0, 30) + "…" : "[momentum]"}`,
    4: (f) => `${f.externalEvent ? f.externalEvent.slice(0, 35) + "…" : "[market event]"} — relevant to our conversation`,
    5: (f) => `Closing ${f.closeDate || "[date]"} — ${f.remaining || "X"} positions remaining`,
  },
  "Family Office": {
    1: (f) => `${f.sector || "[sector]"} — built for the decade`,
    2: (f) => `${f.newInfo ? f.newInfo.slice(0, 40) + "…" : "[development]"}`,
    3: (f) => `${f.momentum ? f.momentum.slice(0, 35) + "…" : "[momentum]"}`,
    4: (f) => `${f.externalEvent ? f.externalEvent.slice(0, 40) + "…" : "[market signal]"}`,
    5: (f) => `Final allocation — ${f.closeDate || "[date]"}`,
  },
  VC: {
    1: (f) => `${f.metric1 || "[growth metric]"} — ${f.category || "[category]"} play`,
    2: (f) => `${f.newInfo ? f.newInfo.slice(0, 40) + "…" : "[new signal]"}`,
    3: (f) => `${f.momentum ? f.momentum.slice(0, 35) + "…" : "[round momentum]"}`,
    4: (f) => `${f.externalEvent ? f.externalEvent.slice(0, 40) + "…" : "[category signal]"}`,
    5: (f) => `Round closes ${f.closeDate || "[date]"} — last positions`,
  },
};

interface Fields {
  signal: string;
  metric1: string;
  metric2: string;
  sector: string;
  meaning: string;
  newInfo: string;
  momentum: string;
  externalEvent: string;
  closeDate: string;
  remaining: string;
  allocation: string;
  timing: string;
  customer: string;
  category: string;
}

const defaultFields: Fields = {
  signal: "",
  metric1: "",
  metric2: "",
  sector: "",
  meaning: "",
  newInfo: "",
  momentum: "",
  externalEvent: "",
  closeDate: "",
  remaining: "",
  allocation: "",
  timing: "",
  customer: "",
  category: "",
};

export default function OutreachBuilder() {
  const [investorType, setInvestorType] = useState<InvestorType>("PE");
  const [touch, setTouch] = useState<TouchNumber>(1);
  const [fields, setFields] = useState<Fields>(defaultFields);
  const [copied, setCopied] = useState(false);

  const body = templates[investorType][touch](fields);
  const subject = subjectLines[investorType][touch](fields);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fieldLabels: Partial<Record<keyof Fields, string>> = {
    signal: "Intelligence opener (recent investor action)",
    metric1: "Primary metric / proof point",
    metric2: "Second metric / durability signal",
    sector: "Your sector",
    meaning: "What the metrics predict about the business",
    newInfo: "New proof point (Touch 2)",
    momentum: "Momentum signal (Touch 3)",
    externalEvent: "External market event (Touch 4)",
    closeDate: "Round close date",
    remaining: "Remaining positions",
    allocation: "Investor's specific allocation",
    timing: "Proposed meeting day/time",
    customer: "Specific customer type (VC)",
    category: "Category you're defining (VC)",
  };

  const relevantFields: Record<TouchNumber, (keyof Fields)[]> = {
    1: ["signal", "metric1", "metric2", "sector", "meaning", "customer", "category"],
    2: ["metric1", "sector", "newInfo"],
    3: ["momentum", "timing"],
    4: ["externalEvent", "sector"],
    5: ["closeDate", "remaining", "allocation"],
  };

  return (
    <div>
      {/* Type and touch selectors */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div>
          <label className="block text-xs mb-1" style={{ color: "var(--text-muted)" }}>
            Investor Type
          </label>
          <div className="flex gap-1">
            {(["PE", "Family Office", "VC"] as InvestorType[]).map((t) => (
              <button
                key={t}
                onClick={() => setInvestorType(t)}
                className={investorType === t ? "btn-gold-filled" : "btn-gold"}
                style={{ fontSize: "0.7rem" }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-xs mb-1" style={{ color: "var(--text-muted)" }}>
            Touch Number
          </label>
          <div className="flex gap-1">
            {([1, 2, 3, 4, 5] as TouchNumber[]).map((n) => (
              <button
                key={n}
                onClick={() => setTouch(n)}
                className={touch === n ? "btn-gold-filled" : "btn-gold"}
                style={{ fontSize: "0.7rem", padding: "0.5rem 0.75rem" }}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {relevantFields[touch]
          .filter((f) => {
            if (f === "customer" || f === "category") return investorType === "VC";
            if (f === "allocation") return investorType === "Family Office";
            return true;
          })
          .map((fieldKey) => (
            <div key={fieldKey}>
              <label className="block text-xs mb-1" style={{ color: "var(--text-muted)" }}>
                {fieldLabels[fieldKey]}
              </label>
              <input
                className="gold-input"
                value={fields[fieldKey]}
                onChange={(e) => setFields((prev) => ({ ...prev, [fieldKey]: e.target.value }))}
                placeholder={`Enter ${fieldLabels[fieldKey]?.toLowerCase()}…`}
              />
            </div>
          ))}
      </div>

      {/* Output */}
      <div className="space-y-3">
        <div className="card p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
              Subject Line
            </span>
            <button
              onClick={() => copy(subject)}
              className="btn-gold flex items-center gap-1"
              style={{ fontSize: "0.65rem", padding: "0.3rem 0.6rem" }}
            >
              <Copy size={10} /> Copy
            </button>
          </div>
          <p className="text-sm" style={{ color: "var(--text-primary)" }}>{subject}</p>
        </div>

        <div className="card p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                Message Body
              </span>
              <span
                className="font-mono text-xs"
                style={{
                  color: body.split(/\s+/).length > 100 ? "#ef4444" : "var(--gold)",
                }}
              >
                {body.split(/\s+/).length} words
              </span>
            </div>
            <button
              onClick={() => copy(`Subject: ${subject}\n\n${body}`)}
              className={`flex items-center gap-1 ${copied ? "btn-gold-filled" : "btn-gold"}`}
              style={{ fontSize: "0.65rem", padding: "0.3rem 0.6rem" }}
            >
              {copied ? <Check size={10} /> : <Copy size={10} />}
              {copied ? "Copied!" : "Copy All"}
            </button>
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)", whiteSpace: "pre-wrap" }}
          >
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
