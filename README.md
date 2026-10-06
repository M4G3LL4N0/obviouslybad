
<p align="center">
  <picture>
    <source media="(prefers-reduced-motion: reduce)" srcset="assets/hero/hero-reduced.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/hero/hero-light.svg">
    <img src="assets/hero/hero-motion.svg" alt="ObviouslyBad — animated project plate showing policy &rarr; control &rarr; evidence. Motion depicts this project's real state transition." width="100%">
  </picture>
</p>

<p align="center">
  <picture>
    <source media="(prefers-reduced-motion: reduce)" srcset="assets/hero/computational-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/hero/computational-light.svg">
    <img src="assets/hero/computational-motion.svg" alt="State machine: policy &rarr; control &rarr; evidence." width="100%">
  </picture>
</p>

## ObviouslyBad

**Make bad ideas obvious.**

Free public startup idea stress testing. Find out why your idea might fail before you waste months building it.

### Routes

- `/` – hero + analyzer + verdict cards + examples + why this exists + public feed concept
- `/examples` – sample stress tests
- `/about` – what this is / what it isn’t

## Getting Started

Install and run locally (pnpm only):

```bash
cd /Users/joshuadavis/startups/obviouslybad
pnpm dev
```

Build:

```bash
cd /Users/joshuadavis/startups/obviouslybad
pnpm install
pnpm build
```

### Deploy (manual only)

```bash
cd /Users/joshuadavis/startups/obviouslybad
vercel --prod
```
