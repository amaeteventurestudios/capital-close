export default function Footer() {
  return (
    <footer
      className="py-12 no-print"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p
          className="font-display text-2xl mb-2"
          style={{ color: "var(--gold)" }}
        >
          The founders who close in 90 days are not smarter or luckier.
        </p>
        <p
          className="text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          They are more systematic.
        </p>
        <div
          className="mt-8 pt-8 text-xs"
          style={{
            borderTop: "1px solid var(--border)",
            color: "var(--text-muted)",
          }}
        >
          Capital Close Partners · 90 Day Raise Roadmap
        </div>
      </div>
    </footer>
  );
}
