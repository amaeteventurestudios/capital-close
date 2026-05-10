import type { Metadata } from "next";
import "./globals.css";

const title = "Capital Close — 90 Day Raise Roadmap";
const description = "The systematic framework for closing a $5M+ raise in 90 days. By Capital Close Partners.";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://capital-close.vercel.app");
const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Capital Close Partners 90 Day Raise Roadmap",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Capital Close Partners",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
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
