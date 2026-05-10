# 90 Day Raise Roadmap

A cinematic, interactive web application for the LPP Media 90-Day $5M+ Raise Roadmap.

## Features

- Full 6-phase framework with all day-by-day content
- Raise day tracker with live countdown and phase indicator
- Progress checkboxes per action item (auto-saved to browser)
- Notes per section (auto-saved to browser)
- Search across all content
- Round progress calculator
- Objection Vault flashcard drill
- Belief stack builder
- Outreach message builder (5 touches × 3 investor types)
- Dark/light mode toggle
- Export all notes to text file
- Session scroll position resumption
- Dark gold design — Cormorant Garamond + DM Sans

## Deploy to Vercel

### Step 1 — Push to GitHub

```bash
cd raise-roadmap
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/raise-roadmap.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — no configuration needed
5. Click **Deploy**

Your site will be live at `https://raise-roadmap.vercel.app` (or your custom domain).

### Step 3 — Custom Domain (Optional)

In Vercel dashboard → Settings → Domains → Add your domain.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Zero backend — all data saved to localStorage
