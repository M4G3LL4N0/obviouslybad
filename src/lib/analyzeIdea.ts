import type { IdeaAnalysis, Verdict } from "@/lib/types";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function hasAny(text: string, terms: string[]) {
  return terms.some((t) => text.includes(t));
}

function countMatches(text: string, terms: string[]) {
  return terms.reduce((acc, t) => acc + (text.includes(t) ? 1 : 0), 0);
}

function pickVerdict(score: number, hasClearBuyer: boolean, hasWedge: boolean): Verdict {
  if (score < 28) return "Obviously Bad";
  if (score < 52) return "Maybe Salvageable";
  if (score < 74) return "Weird But Strong";
  if (!hasClearBuyer && !hasWedge) return "Maybe Salvageable";
  return "Actually Promising";
}

export function analyzeIdea(input: string): IdeaAnalysis {
  const raw = input ?? "";
  const idea = raw.trim();
  const text = idea.toLowerCase();

  const disclaimer = "Based on startup pattern analysis, not live market research.";

  if (idea.length < 12) {
    return {
      verdict: "Obviously Bad",
      score: 10,
      obviousProblems: [
        "Too short to evaluate. This reads like a label, not an idea.",
        "No user, no pain, no context, no wedge.",
      ],
      existingAlternatives: ["The internet already has infinite vague ideas."],
      whyPeopleMayNotCare: [
        "People don’t buy slogans. They buy specific outcomes.",
      ],
      missingWedge: "Who is it for, what do they do today, and why is your way unfairly better?",
      whatWouldNeedToBeTrue: [
        "A specific user has a frequent, painful problem here.",
        "You can name the first 10 customers and how you’ll reach them.",
      ],
      strongestDefense: [
        "If you can specify a narrow niche + painful job-to-be-done, there might be something real.",
      ],
      nextStep:
        "Rewrite in one sentence: 'For [specific user], who struggles with [pain], we do [solution] using [wedge], so they get [measurable outcome].'",
      disclaimer,
    };
  }

  let score = 55;

  const genericBuzz = [
    "ai",
    "platform",
    "marketplace",
    "social network",
    "community",
    "web3",
    "blockchain",
    "metaverse",
    "super app",
    "all-in-one",
    "for everyone",
  ];
  const distributionWords = ["viral", "network effects", "influencers", "seo", "partnerships", "distribution"];
  const buyerWords = ["teams", "business", "company", "enterprise", "manager", "founders", "students", "patients", "doctors", "developers", "parents", "landlords", "contractors"];
  const painWords = ["waste", "slow", "expensive", "compliance", "error", "miss", "churn", "late", "risk", "fraud", "manual", "spreadsheet", "pain"];
  const wedgeWords = ["workflow", "data", "integration", "regulatory", "compliance", "logistics", "supply chain", "hardware", "distribution", "exclusive", "embedded", "channel"];
  const incumbentWords = ["amazon", "google", "meta", "facebook", "microsoft", "apple", "uber", "doordash", "stripe", "shopify", "salesforce"];

  const buzzCount = countMatches(text, genericBuzz);
  if (buzzCount >= 3) {
    score -= 16;
  } else if (buzzCount === 2) {
    score -= 10;
  } else if (buzzCount === 1) {
    score -= 6;
  }

  const mentionsDistribution = hasAny(text, distributionWords);
  const hasClearBuyer = hasAny(text, buyerWords);
  const hasPain = hasAny(text, painWords);
  const hasWedge = hasAny(text, wedgeWords);
  const invokesIncumbents = hasAny(text, incumbentWords);

  if (!hasClearBuyer) score -= 10;
  if (!mentionsDistribution) score -= 8;
  if (!hasPain) score -= 6;
  if (!hasWedge) score -= 6;
  if (invokesIncumbents) score -= 6;

  const isRegulated = hasAny(text, ["health", "medical", "hipaa", "fintech", "bank", "cannabis", "regulated", "compliance"]);
  if (isRegulated) {
    if (hasWedge) score += 8;
    else score -= 6;
  }

  const specificityBoost =
    (idea.split(" ").length >= 18 ? 4 : 0) +
    (idea.includes(":") || idea.includes("—") ? 3 : 0) +
    (/(first|only|specific|niche|for)\b/.test(text) ? 3 : 0);
  score += specificityBoost;

  score = clamp(score, 0, 100);

  const obviousProblems: string[] = [];
  const existingAlternatives: string[] = [];
  const whyPeopleMayNotCare: string[] = [];
  const whatWouldNeedToBeTrue: string[] = [];
  const strongestDefense: string[] = [];

  if (buzzCount >= 2) {
    obviousProblems.push("This is buzzword-heavy. That’s usually a sign the wedge is missing.");
  }
  if (!hasClearBuyer) {
    obviousProblems.push("No clear buyer. If nobody pays, you’re building content.");
    whyPeopleMayNotCare.push("If the user is 'everyone', the product is for no one.");
    whatWouldNeedToBeTrue.push("You can name a single buyer with budget and urgency.");
  } else {
    strongestDefense.push("There is at least a hint of who the user is. That’s more than most ideas.");
  }
  if (!mentionsDistribution) {
    obviousProblems.push("No distribution advantage stated. Great products still die in silence.");
    whatWouldNeedToBeTrue.push("You have a repeatable acquisition channel that is unfair for you.");
  } else {
    strongestDefense.push("You’re thinking about distribution, which is where most 'good ideas' actually fail.");
  }
  if (!hasPain) {
    obviousProblems.push("The pain isn't explicit. If it’s not painful, it’s a nice-to-have.");
    whyPeopleMayNotCare.push("Nice-to-haves get postponed forever.");
    whatWouldNeedToBeTrue.push("The problem happens frequently and costs real money, time, or risk.");
  } else {
    strongestDefense.push("The idea at least gestures at a pain point, which can be sharpened.");
  }
  if (invokesIncumbents) {
    obviousProblems.push("If your pitch is 'X for Y' and X is a giant, you need a brutal wedge.");
    existingAlternatives.push("Incumbents and fast followers will copy obvious features for free.");
    whatWouldNeedToBeTrue.push("Your wedge is structural (data, regulation, channel, workflow lock-in), not just UI.");
  }

  if (hasAny(text, ["social network", "community"])) {
    obviousProblems.push("Social/network ideas are distribution-first. Product second. You don’t get both for free.");
    whyPeopleMayNotCare.push("Cold-start: without critical mass, it’s an empty room.");
    existingAlternatives.push("Every niche already has Slack/Discord/Reddit/Twitter groups that are 'good enough'.");
    whatWouldNeedToBeTrue.push("You can seed supply/demand with an unfair audience or built-in channel.");
    strongestDefense.push("If you can produce high-signal content or tools that pull the niche in, community can be a feature, not the product.");
  }

  if (hasAny(text, ["marketplace"])) {
    obviousProblems.push("Marketplaces are chicken-and-egg businesses disguised as apps.");
    whyPeopleMayNotCare.push("Users don’t switch unless you have supply that is meaningfully better or cheaper.");
    existingAlternatives.push("Facebook groups, Craigslist, and existing vertical marketplaces.");
    whatWouldNeedToBeTrue.push("You can start as a service or single-player workflow, then marketplace later.");
    strongestDefense.push("If there’s a supply constraint you uniquely unlock, marketplaces can compound fast.");
  }

  if (hasAny(text, ["ai mentor", "ai coach", "copilot", "assistant"])) {
    obviousProblems.push("AI 'assistant' positioning is a commodity. Your defense must be data + workflow + distribution.");
    existingAlternatives.push("ChatGPT + existing templates + human advisors.");
    whyPeopleMayNotCare.push("Generic advice feels helpful but rarely changes behavior.");
    whatWouldNeedToBeTrue.push("You can deliver outcomes (e.g., better close rates) not just text.");
    strongestDefense.push("If you can attach to a real workflow (docs, CRM, email) and measure outcomes, AI coaching can be legitimately valuable.");
  }

  const missingWedge = hasWedge
    ? "You hinted at a wedge, but it needs to be explicit: what makes this unfairly easier/cheaper/faster for you than for everyone else?"
    : "What is the wedge? A niche, a channel, a constraint, a dataset, a workflow lock-in, regulation/logistics insight—something that makes copying hard.";

  const verdict = pickVerdict(score, hasClearBuyer, hasWedge);

  if (verdict === "Obviously Bad") {
    strongestDefense.push("The best defense is narrowing aggressively until the user and pain are undeniable.");
  }
  if (verdict === "Actually Promising") {
    whyPeopleMayNotCare.push("Even strong ideas fail if the first distribution loop is vague.");
    whatWouldNeedToBeTrue.push("You can prove demand with a tiny experiment in < 7 days.");
  }

  const nextStep =
    verdict === "Obviously Bad"
      ? "Pick a narrower user with a painful job and write the wedge as a constraint (regulation, channel, workflow). Then test with 10 customer calls."
      : verdict === "Maybe Salvageable"
        ? "Define one beachhead user + one painful workflow. Build a tiny demo and charge for it immediately."
        : verdict === "Weird But Strong"
          ? "Stress-test distribution: name the first channel and first 50 users. If you can’t, redesign around a pull mechanism."
          : "Run a fast demand proof: pre-sell to 5 buyers or get 20 qualified signups from a single channel within a week.";

  // De-dupe and trim
  const uniq = (arr: string[]) =>
    Array.from(new Set(arr.map((s) => s.trim()).filter(Boolean)));

  return {
    verdict,
    score,
    obviousProblems: uniq(obviousProblems).slice(0, 8),
    existingAlternatives: uniq(existingAlternatives).slice(0, 8),
    whyPeopleMayNotCare: uniq(whyPeopleMayNotCare).slice(0, 8),
    missingWedge,
    whatWouldNeedToBeTrue: uniq(whatWouldNeedToBeTrue).slice(0, 8),
    strongestDefense: uniq(strongestDefense).slice(0, 8),
    nextStep,
    disclaimer,
  };
}

