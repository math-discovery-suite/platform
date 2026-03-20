import { MathConcept, GradeBand } from "@math-suite/types";

/** Central catalog of all math concepts across the suite. */
export class ConceptRegistry {
  private concepts: Map<string, MathConcept> = new Map();
  register(concept: MathConcept): void { this.concepts.set(concept.id, concept); }
  get(id: string): MathConcept | undefined { return this.concepts.get(id); }
  getByGradeBand(band: GradeBand): MathConcept[] { return Array.from(this.concepts.values()).filter(c => c.gradeBand === band); }
  getAll(): MathConcept[] { return Array.from(this.concepts.values()); }
}
