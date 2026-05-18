import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import { IdeaAnalyzer } from "@/components/idea-analyzer";
import { ExampleFeed } from "@/components/example-feed";

type Props = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function ExamplesPage({ searchParams }: Props) {
  const sp = searchParams ?? {};
  const ideaParam = sp.idea;
  const initialIdea = Array.isArray(ideaParam) ? ideaParam[0] : ideaParam;

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
      <SubpageVisual variant="default" />
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Examples
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-zinc-200/75 md:text-base">
            These are sample roasts to show the tone and structure. Click one,
            or paste your own idea below.
          </p>
        </div>

        <section className="mt-8">
          <ExampleFeed mode="full" />
        </section>

        <section className="mt-10 md:mt-14">
          <IdeaAnalyzer initialIdea={initialIdea} />
        </section>

        <footer className="mt-12 flex flex-col gap-3 border-t border-white/10 py-10 text-sm text-zinc-200/60 md:flex-row md:items-center md:justify-between">
          <p>Based on startup pattern analysis, not live market research.</p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-zinc-50 transition" href="/">
              Home
            </Link>
            <Link className="hover:text-zinc-50 transition" href="/about">
              About
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}

