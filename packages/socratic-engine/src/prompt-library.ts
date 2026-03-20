import { SocraticPrompt } from "@math-suite/types";

/** Pre-built Socratic question sets for common concepts. */
export class PromptLibrary {
  static volumeRectPrism(): SocraticPrompt[] {
    return [
      { id: "vol-notice", type: "noticing", text: "How many cubes in the bottom layer?", trigger: { progressionPoint: "first-layer" }, conceptId: "volume-rect-prism", craLayer: "concrete", tier: 1 },
      { id: "vol-predict", type: "predicting", text: "Before building the next layer, how many cubes will the whole box need?", trigger: { progressionPoint: "first-layer" }, conceptId: "volume-rect-prism", craLayer: "concrete", tier: 1 },
      { id: "vol-generalize", type: "generalizing", text: "You built 3 boxes. Can you describe a shortcut for ANY box?", trigger: { progressionPoint: "third-prism" }, conceptId: "volume-rect-prism", craLayer: "representational", tier: 2 },
      { id: "vol-justify", type: "justifying", text: "WHY does length times width times height give the total cubes?", trigger: { progressionPoint: "formula-found" }, conceptId: "volume-rect-prism", craLayer: "abstract", tier: 3 },
      { id: "vol-transfer", type: "transferring", text: "A box holds 24 cubes. What shapes could that box be?", trigger: { progressionPoint: "formula-applied" }, conceptId: "volume-rect-prism", craLayer: "abstract", tier: 3 },
    ];
  }

  static volumeCylinder(): SocraticPrompt[] {
    return [
      { id: "cyl-compare", type: "comparing", text: "The box formula was base area times height. What is different about a cylinder base?", trigger: { progressionPoint: "cylinder-intro" }, conceptId: "volume-cylinder", craLayer: "concrete", tier: 2 },
      { id: "cyl-notice", type: "noticing", text: "Fill the circular base with squares. What happens at the edges?", trigger: { progressionPoint: "filling-circle" }, conceptId: "volume-cylinder", craLayer: "concrete", tier: 2 },
      { id: "cyl-generalize", type: "generalizing", text: "Base area is pi r squared. The shortcut is base area times height. What is the formula?", trigger: { progressionPoint: "base-area-found" }, conceptId: "volume-cylinder", craLayer: "abstract", tier: 3 },
    ];
  }
}
