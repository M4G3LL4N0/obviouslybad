"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="mx-auto w-full max-w-6xl px-6 py-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2 font-semibold tracking-tight text-zinc-50"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]">
            OB
          </span>
          <span className="text-sm uppercase tracking-[0.2em] text-zinc-200/90">ObviouslyBad</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-zinc-200/80 md:flex">
          <Link className="transition hover:text-zinc-50" href="/examples">
            Examples
          </Link>
          <Link className="transition hover:text-zinc-50" href="/about">
            About
          </Link>
          <Link
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-zinc-100"
            href="/#analyze"
          >
            Stress test
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-zinc-50 md:hidden"
          aria-expanded={open}
          aria-controls="obviouslybad-mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden>{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open ? (
        <nav
          id="obviouslybad-mobile-nav"
          className="mt-4 flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-2 md:hidden"
        >
          <Link
            href="/examples"
            className="rounded-xl px-3 py-2.5 text-sm text-zinc-200 hover:bg-white/5"
            onClick={() => setOpen(false)}
          >
            Examples
          </Link>
          <Link
            href="/about"
            className="rounded-xl px-3 py-2.5 text-sm text-zinc-200 hover:bg-white/5"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#analyze"
            className="rounded-xl bg-white px-3 py-2.5 text-center text-sm font-semibold text-black"
            onClick={() => setOpen(false)}
          >
            Stress test an idea
          </Link>
          <p className="px-3 pt-1 text-[11px] leading-relaxed text-zinc-500">
            Heuristic stress tests are for learning — not investment, legal, or hiring decisions. Verify
            assumptions with real customers.
          </p>
        </nav>
      ) : null}
    </header>
  );
}
