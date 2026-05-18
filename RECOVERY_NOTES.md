# Project Recovery Notes

## Startup Identity
- Startup name: ObviouslyBad
- Project folder: /Users/joshuadavis/startups/obviouslybad
- Domain: TBD
- One-line description: Free public startup idea stress testing. Find out why your idea might fail before you waste months building it.
- Category: Startup intelligence / idea criticism / founder tooling
- Stage: MVP

## Product Vision
- Target user: First-time founders, indie hackers, students, hackathon teams, accelerators, creators, and anyone shipping ideas under time pressure.
- Core problem: People waste time building ideas that would collapse if someone made the flaws obvious early.
- Core solution: Let anyone submit an idea and receive a brutally clear failure analysis, strongest defense, and verdict.
- Differentiation: Unlike validation tools, this product does not flatter ideas. It makes failure obvious and compares the idea against its strongest criticism.
- MVP goal: A premium landing page + deterministic local analyzer (no paid APIs) that produces demo-worthy output cards instantly.
- Long-term vision: Build a public dataset of repeated idea patterns/failure modes and a stronger analysis engine; optionally add an AI route later without changing the free positioning.

## Website/App Structure
- Main routes: `/`, `/examples`, `/about`
- Key components:
  - `src/components/idea-analyzer.tsx`
  - `src/components/verdict-card.tsx`
  - `src/components/example-feed.tsx`
- Data/content files:
  - `src/lib/examples.ts`
  - `src/lib/analyzeIdea.ts`
  - `src/lib/types.ts`
- API routes: None (MVP is local deterministic analysis)
- Auth/database needs: None (MVP)

## Design Direction
- Visual style: Premium dark venture-studio interface, glass cards, soft gradients, subtle glow.
- Tone: Sharp, funny, brutally useful, founder-friendly (not mean for no reason).
- Layout principles: Mobile-first, scannable cards, large hero, clear hierarchy, smooth hover lifts.
- Brand notes:
  - Primary message: “Make bad ideas obvious.”
  - Avoid: generic SaaS template, polite “validation”, pricing-first positioning.

## What Was Preserved
- Project name and core copy: “Make bad ideas obvious.” / “We make bad ideas obvious.”
- Free public positioning (no pricing-first design)
- Deterministic local MVP analysis (no paid API dependency)

## What Was Fixed
- Replaced the starter Next.js template with the ObviouslyBad MVP pages and components
- Added `analyzeIdea()` heuristic engine and typed output model
- Added `/examples` and `/about` routes with consistent premium dark UI

## What Was Removed
- Default create-next-app landing content

## Current Build Status
- Expected: `pnpm build` passes (run commands below)

## Manual Deploy Command

```bash
cd /Users/joshuadavis/startups/obviouslybad
pnpm install
pnpm build
vercel --prod
```

## Return-Later Commands

```bash
cd /Users/joshuadavis/startups/obviouslybad
pnpm install
pnpm build
```

## Next Best Tasks
1. Add optional AI API route
2. Add shareable result cards
3. Add public examples feed
4. Add idea pattern dataset
5. Add Autobuilder idea scoring export

