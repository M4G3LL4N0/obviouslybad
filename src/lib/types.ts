export type Verdict =
  | "Obviously Bad"
  | "Maybe Salvageable"
  | "Weird But Strong"
  | "Actually Promising";

export type IdeaAnalysis = {
  verdict: Verdict;
  score: number; // 0-100
  obviousProblems: string[];
  existingAlternatives: string[];
  whyPeopleMayNotCare: string[];
  missingWedge: string;
  whatWouldNeedToBeTrue: string[];
  strongestDefense: string[];
  nextStep: string;
  disclaimer: string;
};

export type ExampleIdea = {
  id: string;
  title: string;
  idea: string;
};

