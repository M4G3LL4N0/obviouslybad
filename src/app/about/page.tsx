import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-zinc-50"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]">
            OB
          </span>
          <span className="text-sm uppercase tracking-[0.2em] text-zinc-200/90">
            ObviouslyBad
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-zinc-200/80">
          <Link className="hover:text-zinc-50 transition" href="/examples">
            Examples
          </Link>
          <Link className="hover:text-zinc-50 transition" href="/about">
            About
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-20">
      <SubpageVisual variant="about" />
        <div className="glass rounded-3xl p-8 md:p-10">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            About
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-200/75 md:text-base">
            <span className="font-semibold text-zinc-50">
              ObviouslyBad
            </span>{" "}
            is a free public idea reality engine. It exists for one reason:{" "}
            <span className="font-semibold text-zinc-50">
              we make bad ideas obvious
            </span>
            , fast.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-200/75 md:text-base">
            This is not a “validation” tool. It will not flatter you. It will
            try to kill your idea with the most common failure modes: no buyer,
            no wedge, no distribution, and “a competitor already wins by
            default.”
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-200/75 md:text-base">
            The useful part is not the insult. The useful part is that every
            roast includes the{" "}
            <span className="font-semibold text-zinc-50">
              strongest defense
            </span>{" "}
            and a concrete next step. If the criticism is weak, the idea might
            actually be strong.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="glass rounded-2xl p-6">
              <h2 className="text-sm font-semibold tracking-tight text-zinc-50">
                What it is (MVP)
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-200/75">
                <li>Free public idea analyzer</li>
                <li>Deterministic heuristic scoring (no paid API required)</li>
                <li>Structured output: problems, alternatives, wedge, defense</li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-6">
              <h2 className="text-sm font-semibold tracking-tight text-zinc-50">
                What it is not
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-200/75">
                <li>A polite startup consultant</li>
                <li>A pricing-first SaaS “idea validation” site</li>
                <li>Live market research or competitor crawling</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-xs text-zinc-200/50">
            Based on startup pattern analysis, not live market research.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#analyze"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-zinc-100"
            >
              Stress Test an Idea
            </Link>
            <Link
              href="/examples"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-zinc-50 transition hover:bg-white/10"
            >
              See examples
            </Link>
          </div>
        </div>

        <footer className="mt-12 flex flex-col gap-3 border-t border-white/10 py-10 text-sm text-zinc-200/60 md:flex-row md:items-center md:justify-between">
          <p>Make bad ideas obvious.</p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-zinc-50 transition" href="/">
              Home
            </Link>
            <Link className="hover:text-zinc-50 transition" href="/examples">
              Examples
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}

