import Link from "next/link";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { ProcessFlowSection } from "@/components/ProcessFlowSection";
import { HeroProductPanel } from "@/components/HeroProductPanel";
import { TrustStrip } from "@/components/TrustStrip";
import { ExampleFeed } from "@/components/example-feed";
import { IdeaAnalyzer } from "@/components/idea-analyzer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>

        <section className="pt-8 md:pt-14">
          <div className="glass relative overflow-hidden rounded-3xl px-6 py-10 md:px-10 md:py-14">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_circle_at_0%_0%,rgba(99,102,241,0.22),transparent_55%),radial-gradient(700px_circle_at_100%_0%,rgba(168,85,247,0.18),transparent_55%)]" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-300/70">
                We make bad ideas obvious.
              </p>
              <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                <span className="gradient-text">Make bad ideas obvious.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-200/80 md:text-lg md:leading-8">
                Paste any startup idea and get the brutally clear version of why
                it might fail, what already beats it, and what would need to be
                true for it to survive.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#analyze"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black shadow-sm shadow-black/30 transition hover:bg-zinc-100"
                >
                  Stress Test an Idea
                </a>
                <Link
                  href="/examples"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-zinc-50 transition hover:bg-white/10"
                >
                  See examples
                </Link>
              </div>
              </div>
              <aside className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">Sample roast card</p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-100 ring-1 ring-red-500/20">
                    Obviously Bad
                  </span>
                  <span className="text-xs text-zinc-200/50">Pattern score 24</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-200/80">
                  “AI social network for founders” usually means: no wedge, a cold start, and generic content.
                </p>
                <p className="mt-3 text-xs leading-6 text-zinc-200/50">
                  Defense shown with the roast: ship a single-player tool first. This card is a product preview, not a live market score.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section id="analyze" className="mt-10 md:mt-14">
          <IdeaAnalyzer />
        </section>

        <section className="mt-12 md:mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Example ideas
              </h2>
              <p className="mt-1 text-sm text-zinc-200/70">
                Click one. Watch it get roasted. Then steal the strongest
                defense.
              </p>
            </div>
            <Link
              className="hidden text-sm font-semibold text-zinc-100/90 hover:text-zinc-50 transition sm:inline"
              href="/examples"
            >
              Full examples →
            </Link>
          </div>
          <div className="mt-6">
            <ExampleFeed mode="compact" />
          </div>
        </section>

        <section className="mt-12 md:mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Public feed (sample roasts)
              </h2>
              <p className="mt-1 text-sm text-zinc-200/70">
                Shareable cards. Sharp bullets. Strongest defense included.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-100 ring-1 ring-red-500/20">
                  Obviously Bad
                </span>
                <span className="text-xs text-zinc-200/50">Score: 24</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-200/75">
                “AI social network for founders” usually means: no wedge + cold
                start + generic content.
              </p>
              <p className="mt-3 text-xs text-zinc-200/50">
                Defense: ship a single-player tool that founders already need,
                then let community emerge.
              </p>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-100 ring-1 ring-amber-500/20">
                  Maybe Salvageable
                </span>
                <span className="text-xs text-zinc-200/50">Score: 47</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-200/75">
                “Uber for dog walking” dies on unit economics + trust + supply
                quality.
              </p>
              <p className="mt-3 text-xs text-zinc-200/50">
                Defense: start as a premium neighborhood concierge (higher AOV),
                not a commodity marketplace.
              </p>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-100 ring-1 ring-violet-500/20">
                  Weird But Strong
                </span>
                <span className="text-xs text-zinc-200/50">Score: 68</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-200/75">
                “Cannabis logistics” can work if the wedge is regulatory +
                operations, not “Amazon for X”.
              </p>
              <p className="mt-3 text-xs text-zinc-200/50">
                Defense: win one state, one workflow, one buyer. Then expand.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 md:mt-16">
          <div className="glass rounded-3xl p-8 md:p-10">
            <h2 className="text-xl font-semibold tracking-tight">Why free</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-200/75 md:text-base">
              Early honesty should be available to everyone. Most bad ideas die
              from the same boring causes: no buyer, no wedge, no distribution,
              and a competitor that already wins by default. This is a public
              reality check, not a “validation” tool.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-200/75 md:text-base">
              If the criticism is weaker than the idea, the idea may have real
              strength. If the flaws are obvious in 30 seconds, you just saved
              months.
            </p>
          </div>
        </section>

        <section className="mt-12 md:mt-16">
          <div className="glass rounded-3xl p-8 md:p-10">
            <h2 className="text-xl font-semibold tracking-tight">
              Stop asking if your idea is good.
            </h2>
            <p className="mt-3 text-sm text-zinc-200/75 md:text-base">
              Find out if it is obviously bad.
            </p>
            <div className="mt-6">
              <a
                href="#analyze"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-zinc-100"
              >
                Stress Test an Idea
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-12 flex flex-col gap-3 border-t border-white/10 py-10 text-sm text-zinc-200/60 md:flex-row md:items-center md:justify-between">
          <p>
            Based on startup pattern analysis, not live market research.
          </p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-zinc-50 transition" href="/about">
              What this is
            </Link>
            <Link className="hover:text-zinc-50 transition" href="/examples">
              Examples
            </Link>
          </div>
        </footer>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6"><HeroProductPanel /></section>
      <ProcessFlowSection />
      <MarketingGraphicsStack />
    </main>
    </div>
  );
}
