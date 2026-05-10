export interface DayItem {
  day: string;
  title: string;
  content: string[];
  checklist?: string[];
}

export interface Phase {
  id: string;
  number: number;
  days: string;
  title: string;
  subtitle: string;
  tagline: string;
  color: string;
  why: string;
  days_content: DayItem[];
  completion_checklist?: string[];
}

export const phases: Phase[] = [
  {
    id: "phase-1",
    number: 1,
    days: "1–15",
    title: "Raise Architecture",
    subtitle: "Funder Map. Belief Stack. Capital Structure.",
    tagline: "Map every funder type, build the belief stack, and structure the raise before touching a deck.",
    color: "#C9A84C",
    why: "Most founders start their raise by opening PowerPoint. They spend two weeks building a deck. Then they send it to everyone they know. Then they wait. Then they wonder why the raise is going nowhere six months later. The $47M round that closed in 90 days did not start with a deck. It started with architecture. Architecture means three things: knowing exactly which types of investors should be in this round and why, building the internal belief system that makes the founder unshakeable when the first ten investors say no, and structuring the raise mechanics before any outreach begins so that the round has a framework investors can say yes to. Founders who skip architecture spend the back half of their raise trying to fix problems that architecture would have prevented.",
    days_content: [
      {
        day: "Day 1",
        title: "The Raise Decision",
        content: [
          "Before anything else is built, answer three questions in writing. Not in your head. In writing. The act of writing forces the clarity that thinking alone does not.",
          "Question 1: What specific amount are you raising and why that amount specifically. The amount must be tied to specific milestones — not 'we need capital to grow' but 'we need $8M to hire a VP of Sales, open the New York market, and reach $5M ARR, at which point we can raise at a 3x higher valuation.'",
          "Question 2: What are you willing to give up and what are you not willing to give up. Board control. Equity percentage. Governance rights. Founder vesting. These are not negotiated at the term sheet stage if you have not thought about them at the raise architecture stage.",
          "Question 3: What is the real deadline and what happens if you miss it. A raise without a deadline has no urgency — for you or for investors. The $47M round had a hard close target from Day 1. Not a soft preference. A hard target.",
        ],
        checklist: [
          "Write down the specific raise amount with milestone justification",
          "Document what you are and are not willing to give up",
          "Set a hard close deadline and write down consequences of missing it",
        ],
      },
      {
        day: "Day 2",
        title: "The Funder Type Map",
        content: [
          "Draw four columns: PE Firms, Family Offices, Venture Capital, and Strategic/Corporate. For each column answer: Does my company's stage, sector, and deal structure match what this funder type typically writes checks for. Do I have any existing relationships — direct or one degree removed — in this category. What is the typical check size and how many do I need to hit my raise target. What is the typical decision timeline and does it fit my 90-day target.",
          "After completing all four columns, rank the funder types from most likely to move fastest to slowest. This ranking determines your outreach sequence in Phase 3.",
          "A common mistake: targeting the most prestigious funder type first rather than the most likely funder type first. The $47M round was built from the outside in — angels and family offices who move fast anchored the first $10M and created the momentum that made institutional conversations easier.",
        ],
        checklist: [
          "Complete all four funder type columns",
          "Rank funder types by speed of deployment",
          "Identify at least 3 existing relationships per column",
        ],
      },
      {
        day: "Day 3",
        title: "The Deal Structure Decision",
        content: [
          "Before any investor conversation happens, decide the deal structure and the reason behind it.",
          "Equity round: You are selling ownership. What percentage is available at what valuation. This number must be defensible with comparable transactions — not a number you arrived at because it felt right.",
          "SAFE or convertible note: You are deferring the valuation conversation. What cap, what discount, what most-favored-nation terms. These details matter and investors will ask.",
          "Revenue-based financing or structured debt: You are borrowing against future revenue. Does your revenue profile support this. What coverage ratio do you have. This structure suits capital-efficient businesses with predictable recurring revenue.",
          "The deal structure decision affects which investors you can approach. A SAFE is not appropriate for most institutional PE conversations. Choose the structure that fits the investor type that fits your raise.",
        ],
        checklist: [
          "Select deal structure (equity, SAFE, convertible note, or RBF)",
          "Document the specific terms and rationale",
          "Confirm structure matches target investor type",
        ],
      },
      {
        day: "Days 4–5",
        title: "The Comparable Raise Research",
        content: [
          "Find five raises in your sector at your stage from the last 18 months that closed successfully. For each comparable raise document: Total amount raised. Deal structure. Types of investors. Timeline from announcement to close. Any publicly available terms.",
          "This research does two things. First it validates that your raise is fundable by showing that similar companies at similar stages have raised successfully in this environment. Second it gives you the comparable transaction data to defend your valuation when an investor pushes back on it.",
          "Most founders skip this research and are caught flat-footed when an investor says 'your valuation seems high.' Founders who have done the comparable research say 'here are five transactions at our stage in our sector in the last 18 months — we are at the median multiple and below the top two.' That answer ends the valuation discussion.",
        ],
        checklist: [
          "Identify 5 comparable raises in your sector from last 18 months",
          "Document amount, structure, investor types, and timeline for each",
          "Calculate your position relative to the median multiple",
        ],
      },
      {
        day: "Days 6–7",
        title: "The Belief Stack",
        content: [
          "The belief stack is the internal foundation that keeps a founder grounded when the raise gets difficult. Every raise gets difficult. Investors say no. Conversations go cold. Term sheets get pulled. The founder who has not built their belief stack in advance starts to drift — changing the story, changing the terms, changing the ask.",
          "The belief stack is a written document that answers five questions with specific evidence: Why does this company exist and why does it matter. Why are you the right person to build this. Why is now the right moment for this raise. What are the five strongest pieces of evidence that this company is working. What does success look like in 18 months.",
          "Read this document every morning of the raise. Not because it contains information you will forget. Because the raise will push your confidence and this document pulls it back.",
        ],
        checklist: [
          "Write the full belief stack document with specific evidence",
          "Answer all five questions with verifiable facts, not opinions",
          "Schedule a daily 5-minute morning read for the full 90 days",
        ],
      },
      {
        day: "Days 8–9",
        title: "Investor Qualification Criteria",
        content: [
          "Before building the investor list, define exactly who belongs on it. Most founders build their investor list by searching 'who invests in [sector]' and adding every name that appears. This produces a list of 500 loosely relevant contacts that converts at 1 percent because most of them are wrong for this specific raise.",
          "Define your qualification criteria in writing: Minimum check size. Maximum check size. Stage requirement — they must have invested at this stage in the last 18 months. Sector requirement — genuine thesis conviction, not a tangential past investment. Deployment signal requirement — at least two active signals from the deployment signal framework. Geography requirement.",
          "Every name on the investor list must pass all six criteria. Not five of six. All six. A list of 200 investors who all pass all six criteria produces more meetings than a list of 1,000 who were included because they were famous.",
        ],
        checklist: [
          "Define minimum and maximum check size",
          "Set stage and sector requirements in writing",
          "Confirm deployment signal and geography requirements",
        ],
      },
      {
        day: "Days 10–11",
        title: "The Round Mechanics",
        content: [
          "Define the round mechanics before any conversation begins. These are the structural details that investors ask about in every first meeting and that founders who have not thought about them fumble.",
          "The mechanics to define: Total raise target. Minimum close threshold — the amount at which you close the round even if you have not reached the full target. First close target date. Target investors per close. Lead investor definition — what specifically does the lead investor provide beyond capital. Pro-rata rights policy. Valuation and dilution.",
        ],
        checklist: [
          "Define total raise target and minimum close threshold",
          "Set first close target date",
          "Document lead investor definition and pro-rata rights policy",
          "Confirm valuation is consistent with comparable transaction data",
        ],
      },
      {
        day: "Days 12–13",
        title: "The Advisory & Validation Network",
        content: [
          "Before outreach begins, identify three to five people who can validate this raise publicly. Not investors. Validators. A validator is someone whose name, when associated with your raise, changes an investor's prior probability that this is a real opportunity.",
          "These validators are not asked to source investors. They are asked two specific things: to allow their association with the company to be mentioned in investor conversations, and to be available for one reference call per investor if the raise reaches the due diligence stage.",
          "Most founders approach advisors during the raise when they need help urgently. The founders who close fastest approach advisors before the raise, when there is no urgency, and give advisors time to genuinely engage before the clock starts.",
        ],
        checklist: [
          "Identify 3–5 validators with genuine domain credibility",
          "Approach each validator before Day 15",
          "Confirm association permission and reference call availability",
        ],
      },
      {
        day: "Days 14–15",
        title: "The Raise Infrastructure",
        content: [
          "Build the physical infrastructure of the raise before any outreach begins.",
          "The data room: A clean, organized folder structure with every document an investor could ask for — financials, cap table, incorporation documents, key contracts, team backgrounds, product overview. Every document must be accessible within 24 hours of an investor request.",
          "The CRM: At minimum a Google Sheet. Every investor who will be contacted must have a row. Every interaction must be logged. Every next action must be dated. The raise that closes in 90 days does not have conversations that fall through the cracks.",
          "The calendar: Every week of the raise has a specific goal. Write the goal for each week across the full 90 days. When the raise drifts — and it will drift — the weekly goal structure pulls it back.",
        ],
        checklist: [
          "Data room structure built with all core documents loaded",
          "CRM structure built and ready for investor entries",
          "Professional email infrastructure confirmed",
          "Weekly goals written for all 90 days",
        ],
      },
    ],
    completion_checklist: [
      "Raise amount defined and tied to specific milestones",
      "Deal structure decided and documented",
      "Funder type map complete with prioritization",
      "Comparable transaction research done",
      "Belief stack written and accessible",
      "Investor qualification criteria defined in writing",
      "Round mechanics defined and documented",
      "Validator network identified and approached",
      "Data room structure exists and core documents are loaded",
      "CRM structure built and ready for investor entries",
      "Weekly goals written for all 90 days",
    ],
  },
  {
    id: "phase-2",
    number: 2,
    days: "16–30",
    title: "The Capital Story",
    subtitle: "Capital Story. Investor Content. LP Narratives.",
    tagline: "Build the capital story, create cinematic content, and write separate narrative tracks per funder.",
    color: "#C9A84C",
    why: "Most founders send outreach before they have a story. They have a pitch — a deck they have been refining for weeks. But a pitch and a story are not the same thing. A pitch is what the founder wants investors to know. A story is what investors need to feel before they can act. The $47M round that closed in 90 days did not close because the pitch was polished. It closed because the story was true and specific and different depending on who was hearing it. A PE firm needed to hear the story of a business with institutional-grade operations. A family office needed to hear the story of a founder with a long-term vision. An angel investor needed to hear the story of a founder who discovered something real. Same company. Same facts. Three completely different stories.",
    days_content: [
      {
        day: "Days 16–17",
        title: "The Core Narrative Architecture",
        content: [
          "The core narrative is the foundation from which every investor-type-specific story is built. It has four components. Every founder should be able to deliver all four in under two minutes without notes.",
          "Component 1 — The Crack in the World: Something is broken in the world that most people have accepted as normal. You saw it. You could not accept it. Name it specifically. The more specific the crack, the more real the story feels.",
          "Component 2 — Why Now: Something changed recently that makes solving this problem possible or urgent in a way that it was not before. A technology shift. A regulatory change. A behavioral shift. This is the timing argument.",
          "Component 3 — Why Us: You specifically are the right people to solve this problem. What specific experience, access, insight, or relationship do you have that makes your probability of success materially higher than a well-funded competitor starting today.",
          "Component 4 — The Momentum Signal: The story of what is already working. Not projections. Not plans. Evidence that the market has already validated the thesis in some form.",
        ],
        checklist: [
          "Write Component 1 (The Crack) in under 30 seconds",
          "Write Component 2 (Why Now) in under 30 seconds",
          "Write Component 3 (Why Us) in under 30 seconds",
          "Write Component 4 (Momentum Signal) in under 30 seconds",
          "Practice full narrative until it delivers in under 2 minutes",
        ],
      },
      {
        day: "Days 18–19",
        title: "The PE Firm Narrative Track",
        content: [
          "PE firms are running a specific calculation in every investor conversation. It is not 'is this a good company.' It is 'can this company produce a return on my fund at my return requirements within my fund's time horizon.'",
          "The PE firm narrative structure: Open with the market opportunity in PE language — consolidation cycle, defensible positions. Lead with revenue quality, gross margin, EBITDA path, retention, and capital efficiency — not growth rate. Present three specific value creation levers with revenue or margin impact. Identify the specific most likely exit route with comparable transaction multiples. Frame the ask with specific numbers and comparable transactions.",
          "Never apologize for the valuation. Never reduce it under pressure in the first conversation.",
        ],
        checklist: [
          "Write the full PE firm narrative track",
          "Include EBITDA path and value creation levers",
          "Identify comparable exit transactions and multiples",
          "Practice until conversational, not memorized",
        ],
      },
      {
        day: "Days 20–21",
        title: "The Family Office Narrative Track",
        content: [
          "Family offices evaluate deals through a completely different framework than PE firms. They are managing multigenerational wealth. They are evaluating whether this investment fits a portfolio designed to be held for decades. They are evaluating the founder as much as the business.",
          "The family office narrative structure: Open with relationship context — acknowledge what you know about them. Lead with business durability signals, not growth velocity — revenue stability, contract length, retention rates. Demonstrate founder character through specific stories, not credentials. Present the capital stewardship signal — how capital is structured to preserve while generating return. Articulate what the family office gains beyond financial return.",
          "The tone should be notably different from the PE track — warmer, more patient, more character-forward.",
        ],
        checklist: [
          "Write the full family office narrative track",
          "Include durability signals (not growth velocity)",
          "Identify the relationship and beyond-transaction value",
          "Practice with notably different tone than PE track",
        ],
      },
      {
        day: "Days 22–23",
        title: "The Venture Capital Narrative Track",
        content: [
          "The VC narrative answers the fund return question before it is asked. VCs fund category leaders, not good businesses.",
          "The VC narrative structure: Open with the category creation frame — 'We are building the default solution for [specific customer] doing [specific thing].' Lead with month-over-month or year-over-year growth rate with acceleration evidence. Present the specific market timing argument — why this window is open now and will close. Demonstrate founder-market fit through the specific insight you have that competitors cannot learn without years in the market. Imply the fund return math without stating it explicitly.",
        ],
        checklist: [
          "Write the full VC narrative track",
          "Articulate the category creation frame clearly",
          "Present growth velocity with acceleration evidence",
          "Demonstrate the founder-market fit insight",
        ],
      },
      {
        day: "Days 24–25",
        title: "The Cinematic Content System",
        content: [
          "The $47M round did not rely entirely on cold outreach. It used content. Not 'post on LinkedIn every day' content. Cinematic content — a specific type of posting that creates the social proof layer that makes every direct outreach conversation warmer before it starts.",
          "Post 1 — The Problem Post: Open with the specific problem in the most visceral terms possible. Not 'the industry is inefficient.' The exact moment of failure that most people have experienced and accepted as normal.",
          "Post 2 — The Why Now Post: Open with the specific change that happened in the market in the last 12 to 24 months. Walk through why that change makes this problem solvable now when it was not before.",
          "Post 3 — The Insight Post: Open with the thing you believed that turned out to be wrong — the conventional wisdom your experience disproved. Walk through what you discovered instead.",
          "Post 4 — The Evidence Post: Open with the most compelling proof point — the one number that is hardest to argue with. Walk through what that number means about the market and the business.",
          "Publish one post every 3 to 4 days. Engage genuinely with every comment.",
        ],
        checklist: [
          "Write Post 1 (The Problem Post)",
          "Write Post 2 (The Why Now Post)",
          "Write Post 3 (The Insight Post)",
          "Write Post 4 (The Evidence Post)",
          "Schedule posts at 3–4 day intervals",
        ],
      },
      {
        day: "Days 26–30",
        title: "The Outreach Preparation",
        content: [
          "The investor list: Using the qualification criteria from Phase 1 and the active investor finding system, identify the first 200 qualified investors. For each investor complete the intelligence brief — deployment signal, portfolio gap observation, warmth tier, and geography protocol note.",
          "The five-touch sequence templates: Build the five email and DM templates for each investor type — PE, family office, VC. Each touch must have a new subject line and new information. Each touch must be adapted for the specific investor type.",
          "The one-page positioning doc: Using the narrative tracks built in Phase 2, complete the one-page company positioning document. This document is agreed by the founding team before Phase 3 begins and does not change during the raise.",
          "The email infrastructure test: Send the first five outreach messages to test contacts — people who will give honest feedback on the quality and clarity of the outreach. Adjust based on their responses before the full 200-contact sequence begins.",
        ],
        checklist: [
          "200 qualified investors identified with intelligence briefs",
          "Five-touch sequence templates built for all three investor types",
          "One-page positioning document finalized",
          "Email infrastructure tested with 5 test contacts",
          "Feedback incorporated before full sequence launches",
        ],
      },
    ],
  },
  {
    id: "phase-3",
    number: 3,
    days: "31–45",
    title: "The Outreach Launch",
    subtitle: "200 LPs Targeted. Investor Sequence Launched.",
    tagline: "200 qualified LPs targeted, 5-touch sequence running, no deck in message one.",
    color: "#C9A84C",
    why: "Most founders treat outreach as a task. They send messages when they have time. They follow up when they remember. They add investors to the list when something comes up. This is why most raises take nine months. Outreach in a 90-day raise is a system. It runs on a schedule. Every touch has a defined purpose and a defined timing. Every investor moves through a defined sequence. The system runs whether or not the founder feels like it that day. The $47M round sent 200 qualified first touches in a 15-day window. Not 200 messages to 200 random investors. 200 precisely personalized, signal-timed, intelligence-backed messages to 200 investors who had been verified as actively deploying. On the Tier 1 contacts — warm connections and highest-signal investors — the reply rate was above 35 percent.",
    days_content: [
      {
        day: "Touch 1 — Day 0",
        title: "The Signal-Timed First Message",
        content: [
          "The first message has one job. Earn a reply. Not close the investment. Not pitch the company. Prove in the first sentence that this message was written specifically for this investor at this specific moment based on something real about what they are doing right now.",
          "Structure: Line 1 — The intelligence opener: References a specific real thing this investor did recently. A fund close. A new investment. A LinkedIn post. Under 15 words. Specific and verifiable. Line 2 — The credibility stack: Two proof points in one sentence. Specific numbers. Line 3 — The proof meaning: What the credibility signals predict. Line 4 — The soft ask: One question. Under 10 words. Easy to say yes to.",
          "Rules that never change: Under 100 words total. Plain text only. No deck. No attachments. No mention of the deck. No apology for the cold outreach.",
        ],
        checklist: [
          "Intelligence opener references a real, verifiable recent action",
          "Message is under 100 words",
          "No deck or attachments included",
          "Subject line is under 10 words and specific",
        ],
      },
      {
        day: "Touch 2 — Day 3",
        title: "The Expanded Proof Point",
        content: [
          "New information only. Never reference the prior message. Never 'just following up.' The subject line is a new subject line — not Re: the prior one. The content is a new proof point not mentioned in Touch 1. The ask is the same soft ask or slightly softer. Under 75 words.",
        ],
        checklist: [
          "New subject line (not a reply to Touch 1)",
          "New proof point not mentioned in Touch 1",
          "Under 75 words",
          "No reference to the previous message",
        ],
      },
      {
        day: "Touch 3 — Day 7",
        title: "The Momentum Signal",
        content: [
          "Something has changed in the round or the business since Touch 1. If a new commitment has come in — reference it without naming the investor. If a new customer has signed — reference the customer type and what it means. If a round percentage milestone has been reached — reference it specifically. If none of these are available — reference a market development that validates the thesis.",
          "Never fabricate momentum. A fake momentum signal that an investor can see through destroys credibility permanently. Real momentum signals — even small ones — create genuine urgency. Under 75 words. New subject line. Specific timing proposed in the ask.",
        ],
        checklist: [
          "Real momentum signal only — never fabricated",
          "New subject line",
          "Specific timing proposed",
          "Under 75 words",
        ],
      },
      {
        day: "Touch 4 — Day 14",
        title: "The Market Validation",
        content: [
          "An external development that makes the thesis feel more urgent today than it did two weeks ago. A competitor raised a round that validates the market. A regulation passed that creates immediate demand. An industry report confirmed what the company has been saying. A major player was acquired and the gap they left is exactly what this company fills.",
          "The external event must be real. The connection to the company must be explicit — do not make the investor draw the inference. Under 100 words. New subject line.",
        ],
        checklist: [
          "External event is real and verifiable",
          "Connection to company made explicit",
          "New subject line",
          "Under 100 words",
        ],
      },
      {
        day: "Touch 5 — Day 21",
        title: "The Final Window",
        content: [
          "The round is closing. A specific timeline is stated. What is still available and for how long. A binary ask — in or pass — with explicit permission to say no.",
          "The explicit permission to say no is not politeness. It is psychology. An investor who sees 'completely fine if the timing isn't right — happy to note you as a pass for this round' can respond to decline gracefully. That graceful decline often contains a referral ask response. Without the permission to say no the investor stays silent — which is the worst outcome.",
          "Under 75 words. New subject line with finality signal.",
        ],
        checklist: [
          "Specific close date stated",
          "Explicit permission to say no included",
          "Binary ask (in or pass)",
          "New subject line with finality signal",
          "Under 75 words",
        ],
      },
      {
        day: "Days 31–45",
        title: "The Investor Tier System",
        content: [
          "Tier 1 (Days 31–33, first 30 contacts): Mutual connections confirmed. Investors who have engaged with the founder's content. Referrals from existing investors or advisors. Anyone the founder has met in any context. Why first: The conversion rate difference between a warm-referenced outreach and cold outreach is 5 to 10 times.",
          "Tier 2 (Days 33–38, next 60 contacts): Deployment Score 4 or 5 verified. Strong sector thesis confirmed. No personal connection but strong deployment signal available. Lead with the deployment signal reference combined with the portfolio gap observation.",
          "Tier 3 (Days 38–43, next 70 contacts): Deployment Score 3. Sector adjacency rather than direct thesis. Lead with a portfolio observation that makes the thesis link explicit.",
          "Tier 4 (Days 43–45, final 40 contacts): Deployment Score 3 or below. Qualified but no strong timing signal. Lead with round momentum — by Day 43 the first commitments from Tier 1 and 2 provide social proof that makes cold outreach significantly more effective.",
        ],
        checklist: [
          "Tier 1 contacts sequenced and sent Days 31–33",
          "Tier 2 contacts sequenced and sent Days 33–38",
          "Tier 3 contacts sequenced and sent Days 38–43",
          "Tier 4 contacts sequenced and sent Days 43–45",
        ],
      },
    ],
  },
  {
    id: "phase-4",
    number: 4,
    days: "46–60",
    title: "The Meeting Sprint",
    subtitle: "Investor Meetings Running. Objections Handled.",
    tagline: "The 3-meeting framework live, objection vault ready, follow-up cadences active.",
    color: "#C9A84C",
    why: "Phase 3 generated conversations. Phase 4 converts them. The meeting sprint is where the raise either builds irreversible momentum or stalls into the slow drift that kills most rounds. In the $47M raise the meeting sprint produced the first verbal commitments that changed everything. Once verbal commitments existed — real commitments from real investors with real capital behind them — every subsequent conversation started differently. The question shifted from 'is this fundable' to 'should I be in this round.' That shift only happens when meetings are run correctly. When conviction is built in the right sequence. When objections are handled before they calcify. When every meeting ends with a specific next step locked in before the call ends.",
    days_content: [
      {
        day: "Meeting 1",
        title: "The Discovery Call",
        content: [
          "Job: Build enough conviction to earn Meeting 2. Nothing else. Most founders run Meeting 1 as a pitch. They spend 45 minutes covering every slide in the deck, answering questions defensively, and closing for commitment before the investor has had time to form a view. This is the wrong meeting structure.",
          "Minutes 0–3: Agenda setting. The founder sets the frame: 'I'd love to spend the first few minutes understanding what you're focused on right now, then walk you through where we are, and leave time for any questions.'",
          "Minutes 3–8: Discovery. Three questions in order: What is your current investment focus. What have you seen in this space recently that has interested or disappointed you. What would make this a compelling opportunity from your perspective.",
          "Minutes 8–20: The tailored narrative. Using what was heard in the discovery block, deliver the two-minute core narrative adapted for what this investor specifically said they care about.",
          "Minutes 25–30: The BAMFAM close. Book A Meeting From A Meeting. Before hanging up, secure a specific commitment to a specific next step with a specific date.",
        ],
        checklist: [
          "Set explicit agenda in first 3 minutes",
          "Ask all three discovery questions",
          "Tailor narrative to what investor flagged as priority",
          "BAMFAM — secure Meeting 2 date before call ends",
        ],
      },
      {
        day: "Meeting 2",
        title: "The Conviction Builder",
        content: [
          "Job: Move the investor from interested to believing. Build the conviction they need to present this to their partners, family principal, or co-investors.",
          "Meeting 2 is where the deck is shared — not before. Send the deck 24 hours before Meeting 2 with a brief note referencing one specific thing discussed in Meeting 1.",
          "Meeting 2 opens with a reference to Meeting 1: 'Based on our last conversation you flagged [specific concern] as the most important thing to understand. I want to address that directly before we go anywhere else.'",
          "The bulk of Meeting 2 addresses the investor's specific questions with the full materials as reference. Not a full deck walkthrough — a targeted conversation using the deck as reference for the specific elements the investor cares most about.",
          "Meeting 2 closes with the same BAMFAM discipline: 'Given what we've covered — what's the most logical next step from your perspective?'",
        ],
        checklist: [
          "Deck sent 24 hours before with personalized note",
          "Open Meeting 2 with reference to Meeting 1 specific concern",
          "Target conversation to investor's priorities, not full deck walkthrough",
          "BAMFAM — secure Meeting 3 or next step before call ends",
        ],
      },
      {
        day: "Meeting 3",
        title: "The Commitment Meeting",
        content: [
          "Job: Convert verbal interest to a signed commitment or a clear pass. Meeting 3 happens only after Meeting 2 has produced genuine conviction signals — the investor has asked specific questions about terms, introduced a partner or co-investor, or explicitly expressed intent to participate.",
          "Open by referencing progress. Surface the remaining concerns: 'What, if anything, would need to be different for this to be a clear yes for you?' This question is the single most effective tool in any late-stage investment conversation.",
          "Handle the final objections using the Objection Vault. Close with a specific commitment ask: 'Based on everything we've covered — are you in a position to commit to the round today, or is there a specific step remaining before you can?'",
          "The two acceptable answers are yes and a specific answer about what remains. 'I'll think about it' is not acceptable — it is a stall that needs a forcing function.",
        ],
        checklist: [
          "Only schedule Meeting 3 after genuine conviction signals",
          "Ask 'what would need to be different for a clear yes' directly",
          "Handle final objections with the Objection Vault",
          "Close with a specific commitment ask",
        ],
      },
      {
        day: "Days 46–60",
        title: "The Follow-Up Cadence",
        content: [
          "After every meeting — not after every good meeting, every meeting — the following sequence runs automatically.",
          "Within 2 hours: The same-day follow-up. References one specific thing discussed on the call. Confirms the next step agreed before hanging up. Attaches the deal brief if not already shared. Under 5 lines.",
          "48 hours later if no response: A brief check-in with one new piece of information — a traction update, a round progress update, a market development. Under 3 lines.",
          "7 days later if still no movement: The round has advanced since the meeting. New momentum signal. Restate the next step with a gentle deadline. Under 3 lines.",
        ],
        checklist: [
          "Same-day follow-up sent within 2 hours of every meeting",
          "48-hour follow-up sent if no response",
          "7-day follow-up with momentum signal if still no movement",
          "CRM updated after every touch",
        ],
      },
    ],
  },
  {
    id: "phase-5",
    number: 5,
    days: "61–75",
    title: "Pipeline Management",
    subtitle: "LP Pipeline Managed. Soft Closes Started.",
    tagline: "Every LP conversation tracked from first touch to soft close.",
    color: "#C9A84C",
    why: "The founders who get to Day 60 with meetings happening and conversations live and genuine interest from real investors — and then lose momentum in the back half — almost always lose it for the same reason. Not because investors lost interest. Because the founder lost track. A follow-up that should have gone out on Day 63 went out on Day 71. An investor who needed one more specific answer to commit never got it. A warm conversation that needed a forcing function at the 3-week mark was allowed to drift to 6 weeks while the founder focused on new conversations rather than converting existing ones. The pipeline management framework is the system that prevents this.",
    days_content: [
      {
        day: "Stage 1",
        title: "Targeted",
        content: [
          "Definition: On the qualified list. Signal-verified. Not yet contacted. The only acceptable health status for Stage 1 is active progress to Stage 2. Every day an investor sits in Stage 1 without being contacted is a missed opportunity. Next action: Send Touch 1. Immediately.",
        ],
      },
      {
        day: "Stage 2",
        title: "Contacted",
        content: [
          "Definition: Touch 1 sent. No reply yet. Sequence running. Healthy duration: 3 to 21 days — the full 5-touch sequence window. Stall signal: Touch 3 sent with no reply and no sequence adjustment made. Next action: Continue sequence per schedule. After Touch 5 with no reply — move to re-engagement monitoring.",
        ],
      },
      {
        day: "Stage 3",
        title: "Engaged",
        content: [
          "Definition: Replied. Conversation is live. Reply classified and responded to. Healthy duration: 2 to 7 days to booked Meeting 1. Stall signal: More than 7 days since reply with no Meeting 1 booked. Next action: If stalling — run the stall breaker. Gentle forcing function with round progress update and binary ask.",
        ],
      },
      {
        day: "Stage 4",
        title: "Called",
        content: [
          "Definition: Meeting 1 completed. BAMFAM executed. Healthy duration: 3 to 10 days to Meeting 2 or clear next step. Stall signal: More than 10 days since Meeting 1 with no Meeting 2 booked and no documented follow-up sent. Next action: Send the 7-day post-meeting follow-up with new momentum signal.",
        ],
      },
      {
        day: "Stage 5",
        title: "Evaluating",
        content: [
          "Definition: Meeting 2 completed. Materials reviewed. Diligence questions active. Healthy duration: 7 to 21 days. Stall signal: More than 14 days since last diligence question with no follow-up sent. Next action: Send a round momentum update to every Stage 5 investor every 5 to 7 days.",
        ],
      },
      {
        day: "Stage 6",
        title: "Soft Close",
        content: [
          "Definition: Verbal commitment expressed. Discussing terms, allocation, and documentation. Healthy duration: 7 to 14 days to signed documents. Stall signal: More than 7 days since verbal commitment with no documentation progress. Next action: Send term sheet or documentation immediately. Every day between verbal commitment and signed document is a day the commitment can evaporate.",
          "Soft Close Rule 1: Documentation within 24 hours of verbal commitment. Soft Close Rule 2: Momentum updates every 5 days to every Stage 6 investor. Soft Close Rule 3: Three days before the round closes, send the final close communication with specific allocation and deadline.",
        ],
      },
      {
        day: "Stage 7",
        title: "Signed",
        content: [
          "Definition: Signed documents. Wire confirmed or in process. Next action: Send the onboarding communication. Welcome the investor into the company's story. Begin the relationship that lives beyond the transaction.",
        ],
      },
    ],
  },
  {
    id: "phase-6",
    number: 6,
    days: "76–90",
    title: "The Close Execution",
    subtitle: "Term Sheets Signed. Capital Committed.",
    tagline: "Term sheets negotiated, final objections handled, capital committed.",
    color: "#C9A84C",
    why: "Most founders think the hard part of a raise is generating interest. The hardest part is converting interest to capital in a defined window. Days 76 to 90 are where the $47M round was either going to close or not close. The interest existed. The conversations had happened. The verbal commitments were in place. But verbal commitments are not capital. The last 15 days of a raise have a specific psychology. Investors know the window is closing. Some will accelerate to get in before the close. Some will use the approaching deadline as leverage to push for better terms. Some will go quiet — not because they have decided to pass but because the urgency of the close date has not yet made them act. The close execution guide manages all three.",
    days_content: [
      {
        day: "Day 76",
        title: "The Round Status Communication",
        content: [
          "Send a round status update to every investor in Stage 3 through Stage 6. This is not a sales message. It is an information message.",
          "Content: The current percentage of the round that is committed or verbally committed. The specific close date — not 'soon.' A calendar date. What is still available. One new development in the business since the last communication. A specific next step for each investor tier.",
        ],
        checklist: [
          "Round status sent to all Stage 3–6 investors",
          "Specific close date included",
          "Tier-specific next steps included",
        ],
      },
      {
        day: "Days 77–78",
        title: "Documentation Sprint",
        content: [
          "Every Stage 6 investor who has expressed verbal commitment receives their signed documentation by end of Day 78. Not 'we'll get the documents to you.' The documents go out. To every verbal commitment. Simultaneously.",
          "If any investor has a documentation question it is answered within 4 hours. At this stage of a raise every day between question and answer is a day the commitment can cool.",
        ],
        checklist: [
          "Documentation sent to all Stage 6 investors",
          "All documentation questions answered within 4 hours",
        ],
      },
      {
        day: "Days 79–82",
        title: "The Final Objection Handling Sprint",
        content: [
          "Every investor in Stage 4 and Stage 5 who has not moved to Stage 6 gets a specific, direct call this week. Not a follow-up email. A call.",
          "The call opens with one question: 'We're finalizing the round next week and I wanted to reach out directly before we close. What would need to be true for this to be a clear yes for you?'",
          "This question surfaces the real objection. Handle whatever surfaces using the Objection Vault from Phase 4.",
        ],
        checklist: [
          "Direct calls made to all Stage 4 and 5 investors",
          "Objection surfacing question asked on every call",
          "Objections handled using the Objection Vault",
        ],
      },
      {
        day: "Days 83–84",
        title: "The Term Sheet Negotiation Framework",
        content: [
          "Rule 1 — Know your floor before negotiations begin: For every term — valuation, governance rights, pro-rata, information rights, board composition — the minimum acceptable position is defined before Day 83.",
          "Rule 2 — Negotiate terms in writing not verbally: Every counter-proposal goes in writing. 'Can you put that in writing and I'll review it with the team' is always an acceptable response.",
          "Rule 3 — Hold the valuation unless you get something: If an investor pushes hard on valuation, the only acceptable response is to trade the valuation concession for something specific — a larger check, a board seat that adds genuine value, an introduction to a co-investor. Never reduce the valuation simply because an investor asked.",
        ],
        checklist: [
          "Floor defined for every negotiable term",
          "All counter-proposals requested in writing",
          "Valuation held unless receiving something specific in return",
        ],
      },
      {
        day: "Days 85–86",
        title: "The Social Proof Cascade",
        content: [
          "By Day 85 the round has meaningful commitments. Use them. Every investor still in Stage 3, 4, or 5 receives a specific message: 'We've completed the majority of the investor meetings and the round is now [X]% committed. We have [number] positions remaining at current terms before we close on [date].'",
          "This message is specific and true. It references real progress. It creates genuine urgency — not manufactured pressure. The social proof cascade typically produces 20 to 30 percent of the final commitments in a raise.",
        ],
        checklist: [
          "Social proof message sent to all Stage 3–5 investors",
          "Specific percentage and remaining positions stated",
          "Message is based on real, not manufactured, progress",
        ],
      },
      {
        day: "Days 87–88",
        title: "The Final Closing Calls",
        content: [
          "Every investor who has not yet committed but has shown interest at any point in the raise gets a final direct call. Not an email. A call.",
          "The call is brief and direct: 'We're closing the round on [date] — two days from now. I wanted to call you directly before we finalize the investor list. Is there any remaining reason not to move forward?'",
          "This call produces one of four outcomes: Yes — send documentation immediately. A specific remaining concern — address it and send documentation immediately after. A clear no — graceful exit and referral ask. Unavailable — leave a voicemail and follow up with a text.",
        ],
        checklist: [
          "Direct calls made to all interested investors who have not committed",
          "Documentation sent immediately to anyone who says yes",
          "Referral ask made on all clear passes",
        ],
      },
      {
        day: "Day 89",
        title: "The Hard Close",
        content: [
          "The round closes. Not because the last dollar has been committed but because the close date was communicated from Day 1 and the integrity of the process depends on honoring it.",
          "Every investor who committed is confirmed and welcomed. Every investor who did not commit receives a professional close communication: 'We've closed the round as planned. Thank you for considering — we'd welcome the opportunity to include you in a future round when the timing aligns better.' This communication is a relationship preservation message, not a burn.",
        ],
        checklist: [
          "Round formally closed on Day 89",
          "Commitment confirmations sent to all investors",
          "Professional close communication sent to non-investors",
        ],
      },
      {
        day: "Day 90",
        title: "The Onboarding & Relationship Launch",
        content: [
          "The raise is closed. The capital is committed. The wires are in process. Day 90 is not a celebration day — it is a relationship launch day.",
          "Every new investor receives an onboarding communication that does three specific things: It welcomes them into the company's story with genuine warmth. It sets clear expectations for investor communication going forward — quarterly updates on specific dates. It makes one specific ask. Not for money. For one introduction to one person in their network who would be valuable to the company.",
          "The investor who just signed a check is in the most generous frame of mind they will ever be toward this company. That moment should be used.",
        ],
        checklist: [
          "Personalized onboarding sent to every new investor",
          "Communication cadence and expectations set",
          "One specific introduction ask made to every investor",
        ],
      },
    ],
  },
];

export const objectionVault = [
  {
    id: "valuation",
    label: "Valuation",
    objection: "Your valuation feels a bit high for this stage.",
    meaning: "I cannot make the return math work at this entry point with my return requirements.",
    response: "Valuation is always a point of discussion. We landed at [X]x revenue based on comparable transactions in our sector in the last 18 months — [Comparable A] at [multiple] and [Comparable B] at [multiple]. We are at the median multiple, not the top. The return question is really about the exit multiple at your hold period — at [projected exit year] revenue of [$X] and a conservative [Y]x exit multiple that is below both comparables, the return on today's entry is [Z]x. Does that math work for your requirements?",
  },
  {
    id: "timing",
    label: "Timing",
    objection: "The timing isn't right for us right now.",
    meaning: "I have an internal constraint — mandate uncertainty, portfolio concentration, fund lifecycle — that is preventing me from moving forward today.",
    response: "Completely understand. Can I ask — is the timing challenge more on the business side or more on your fund's side? I want to make sure I understand whether this is a conversation worth continuing or whether we should pick this up at a different moment.",
  },
  {
    id: "traction",
    label: "Traction",
    objection: "We'd like to see one more quarter before committing.",
    meaning: "There is a specific metric I need to see move and I haven't named it yet.",
    response: "That's completely reasonable. What I'd find helpful is understanding which metric specifically you're waiting to see — because if I know what would make you comfortable, I can either show you the evidence that it's already moving or we can discuss a milestone-based structure where you commit now with a tranche trigger tied to that metric.",
  },
  {
    id: "market-size",
    label: "Market Size",
    objection: "We're not sure the market is big enough to justify this.",
    meaning: "Your market size claim was not credible — it was either too big (top-down from a report) or the path from current revenue to meaningful scale is not clear.",
    response: "Let me walk you through the bottom-up calculation rather than the top-down number. We have [X] reachable customers in our current segment at [Y] average contract value — that's [Z] in our immediately accessible market. Expansion into [adjacent segment] at similar contract values adds another [$W]. We don't need to be in all of those segments to build a business that works for your return requirements.",
  },
  {
    id: "competition",
    label: "Competition",
    objection: "What happens if [large incumbent] decides to build this?",
    meaning: "I'm worried about defensibility. I've seen companies like this get crushed when a well-resourced player enters the market.",
    response: "[Large incumbent] has the resources to build a version of this — but there are three structural reasons they haven't and won't. First, [specific economics reason — the segment is too small for their enterprise sales motion]. Second, [specific technical reason — their architecture would require rebuilding]. Third, [specific data reason — the proprietary data we accumulate creates an advantage that compounds faster than they can replicate it].",
  },
  {
    id: "team",
    label: "Team",
    objection: "We have concerns about team completeness.",
    meaning: "I've identified a specific capability gap that creates execution risk at the check size I'm considering.",
    response: "I appreciate you naming that directly. Which role specifically creates the concern? I want to address it accurately rather than generally. [After they name the role:] That's the hire we've allocated [specific amount] of this raise to — we have [specific candidate or pipeline description] in process. I'd be happy to share the job description and the current state of that search.",
  },
  {
    id: "process",
    label: "Process",
    objection: "I need to involve my partner before we can move forward.",
    meaning: "I'm genuinely interested but I'm not the sole decision maker — or I want a second opinion before committing.",
    response: "Absolutely — what does your internal process look like from here? I want to make sure I give you everything you need to make a compelling case internally. I'm also happy to prepare a one-page brief specifically written for your partner's context. When is your next opportunity to present this to your partner — and should I block time to be available for any follow-up questions?",
  },
  {
    id: "stall",
    label: "General Stall",
    objection: "Sounds interesting — let me think about it and get back to you.",
    meaning: "I don't want to say no but I'm not ready to say yes and I want to preserve the option at no cost.",
    response: "Of course — I appreciate the consideration. One thing I should mention: we're targeting to close the first tranche by [specific date] and there are a limited number of positions at the current terms. I want to make sure you have everything you need to make a decision before we get to that point. What would be most helpful — should I send the financial model directly, or would a call with our CFO answer the specific questions you're working through?",
  },
];
