import { StudentProgress, CRALayer } from "@math-suite/types";

export interface AdaptiveSettings {
  numberComplexity: 1 | 2 | 3;
  scaffoldLevel: "full" | "partial" | "minimal";
  suggestConcreteReturn: boolean;
  offerExtensions: boolean;
  startingLayer: CRALayer;
}

/** Adjusts difficulty based on student behavior. No student bored; no student lost. */
export class AdaptiveEngine {
  static computeSettings(progress: StudentProgress): AdaptiveSettings {
    const { masteryScore, comfortLayer } = progress;
    if (masteryScore < 0.3) return { numberComplexity: 1, scaffoldLevel: "full", suggestConcreteReturn: true, offerExtensions: false, startingLayer: "concrete" };
    if (masteryScore < 0.7) return { numberComplexity: 2, scaffoldLevel: "partial", suggestConcreteReturn: false, offerExtensions: false, startingLayer: comfortLayer };
    return { numberComplexity: 3, scaffoldLevel: "minimal", suggestConcreteReturn: false, offerExtensions: true, startingLayer: "representational" };
  }
}
