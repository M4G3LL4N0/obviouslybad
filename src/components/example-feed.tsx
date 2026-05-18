import Link from "next/link";
import { EXAMPLE_IDEAS } from "@/lib/examples";

export function ExampleFeed({ mode }: { mode?: "compact" | "full" }) {
  const isCompact = mode === "compact";

  return (
    <div className={isCompact ? "grid gap-4 md:grid-cols-2" : "grid gap-4"}>
      {EXAMPLE_IDEAS.map((ex) => (
        <Link
          key={ex.id}
          href={`/examples?idea=${encodeURIComponent(ex.idea)}`}
          className="glass group rounded-2xl p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.075]"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-sm font-semibold tracking-tight text-zinc-50">
              {ex.title}
            </h3>
            <span className="shrink-0 text-xs font-semibold text-zinc-200/50 group-hover:text-zinc-200/70 transition">
              Roast →
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-200/75">
            {ex.idea}
          </p>
        </Link>
      ))}
    </div>
  );
}

