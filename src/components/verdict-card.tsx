import type { IdeaAnalysis } from "@/lib/types";

const verdictStyles: Record<IdeaAnalysis["verdict"], string> = {
  "Obviously Bad":
    "bg-red-500/10 text-red-100 ring-1 ring-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.12)]",
  "Maybe Salvageable":
    "bg-amber-500/10 text-amber-100 ring-1 ring-amber-500/20 shadow-[0_0_40px_rgba(245,158,11,0.12)]",
  "Weird But Strong":
    "bg-violet-500/10 text-violet-100 ring-1 ring-violet-500/20 shadow-[0_0_40px_rgba(168,85,247,0.14)]",
  "Actually Promising":
    "bg-emerald-500/10 text-emerald-100 ring-1 ring-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.12)]",
};

function scoreLabel(score: number) {
  if (score >= 80) return "strong";
  if (score >= 60) return "decent";
  if (score >= 40) return "fragile";
  if (score >= 20) return "rough";
  return "dead on arrival";
}

export function VerdictCard({ analysis }: { analysis: IdeaAnalysis }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={[
              "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold",
              verdictStyles[analysis.verdict],
            ].join(" ")}
          >
            {analysis.verdict}
          </span>
          <span className="text-sm text-zinc-200/70">
            Score:{" "}
            <span className="font-semibold text-zinc-100">
              {analysis.score}
            </span>{" "}
            <span className="text-zinc-200/50">({scoreLabel(analysis.score)})</span>
          </span>
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-300/60">
          Reality Check
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-zinc-200/75">
        <span className="font-semibold text-zinc-100">Next step:</span>{" "}
        {analysis.nextStep}
      </p>
      <p className="mt-3 text-xs text-zinc-200/50">{analysis.disclaimer}</p>
    </div>
  );
}

