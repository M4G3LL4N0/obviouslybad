"use client";

import { useMemo, useState } from "react";
import { analyzeIdea } from "@/lib/analyzeIdea";
import type { IdeaAnalysis } from "@/lib/types";
import { VerdictCard } from "@/components/verdict-card";

type OutputCardProps = {
  title: string;
  items?: string[];
  body?: string;
};

function OutputCard({ title, items, body }: OutputCardProps) {
  return (
    <div className="glass rounded-2xl p-5">
      <h3 className="text-sm font-semibold tracking-tight text-zinc-50">
        {title}
      </h3>
      {body ? (
        <p className="mt-3 text-sm leading-7 text-zinc-200/75">{body}</p>
      ) : null}
      {items?.length ? (
        <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-200/75">
          {items.map((x) => (
            <li key={x} className="flex gap-3">
              <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300/70" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

const DEFAULT_IDEA =
  "An AI social network for founders where your AI agent posts updates, finds cofounders, and matches you with investors.";

export function IdeaAnalyzer({ initialIdea }: { initialIdea?: string }) {
  const [idea, setIdea] = useState(initialIdea ?? "");
  const [submittedIdea, setSubmittedIdea] = useState<string | null>(null);

  const analysis: IdeaAnalysis | null = useMemo(() => {
    if (!submittedIdea) return null;
    return analyzeIdea(submittedIdea);
  }, [submittedIdea]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="glass rounded-3xl p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Stress Test an Idea
            </h2>
            <p className="mt-2 text-sm leading-7 text-zinc-200/75">
              Brutally useful. Not polite. Not paid. No live market research.
            </p>
          </div>
          <button
            type="button"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-50 transition hover:bg-white/10 md:inline-flex"
            onClick={() => setIdea(DEFAULT_IDEA)}
          >
            Fill example
          </button>
        </div>

        <div className="mt-5">
          <label className="text-xs uppercase tracking-[0.2em] text-zinc-300/60">
            Your idea
          </label>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Paste a startup idea. Be specific. The system will not be gentle."
            className="mt-2 min-h-[140px] w-full resize-y rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm leading-7 text-zinc-50 outline-none ring-0 placeholder:text-zinc-400/60 focus:border-indigo-400/40 focus:shadow-[0_0_0_4px_rgba(99,102,241,0.14)]"
          />
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black transition hover:bg-zinc-100 disabled:opacity-50"
              disabled={!idea.trim()}
              onClick={() => setSubmittedIdea(idea)}
            >
              Stress Test
            </button>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-zinc-50 transition hover:bg-white/10"
              onClick={() => {
                setIdea("");
                setSubmittedIdea(null);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {analysis ? (
          <>
            <div>
              <h3 className="text-sm font-semibold tracking-tight text-zinc-50">
                Final verdict
              </h3>
            </div>
            <VerdictCard analysis={analysis} />
            <div className="grid gap-4 md:grid-cols-2">
              <OutputCard
                title="Why this idea is weak"
                items={analysis.obviousProblems}
              />
              <OutputCard
                title="What already beats it"
                items={analysis.existingAlternatives}
              />
              <OutputCard
                title="Why people may not care"
                items={analysis.whyPeopleMayNotCare}
              />
              <OutputCard title="Missing wedge" body={analysis.missingWedge} />
              <OutputCard
                title="Unrealistic assumptions"
                items={analysis.whatWouldNeedToBeTrue}
              />
              <OutputCard
                title="Strongest defense"
                items={analysis.strongestDefense}
              />
            </div>
          </>
        ) : (
          <div className="glass rounded-3xl p-6 md:p-8">
            <h3 className="text-base font-semibold tracking-tight">
              Output appears here
            </h3>
            <p className="mt-2 text-sm leading-7 text-zinc-200/75">
              Paste an idea and hit{" "}
              <span className="font-semibold text-zinc-50">
                Stress Test
              </span>
              . You’ll get problems, alternatives, missing wedge, strongest
              defense, and a verdict.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

