import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capital Close — 90 Day Raise Roadmap",
  description: "The systematic framework for closing a $5M+ raise in 90 days. By Capital Close Partners.",
  openGraph: {
    title: "Capital Close — 90 Day Raise Roadmap",
    description: "The systematic framework for closing a $5M+ raise in 90 days. By Capital Close Partners.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="grain">{children}</body>
    </html>
  );
}
