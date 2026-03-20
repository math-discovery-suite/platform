import { CRALayer, StudentAction } from "@math-suite/types";

/**
 * CRA Manager - Controls transitions between Concrete, Representational, Abstract.
 * Students can ALWAYS return to concrete. There is no gate.
 */
export class CRAManager {
  private currentLayer: CRALayer = "concrete";
  private layerHistory: { layer: CRALayer; timestamp: number; duration: number }[] = [];
  private layerStartTime: number = Date.now();

  getCurrentLayer(): CRALayer { return this.currentLayer; }

  switchLayer(newLayer: CRALayer): void {
    const now = Date.now();
    this.layerHistory.push({ layer: this.currentLayer, timestamp: this.layerStartTime, duration: now - this.layerStartTime });
    this.currentLayer = newLayer;
    this.layerStartTime = now;
  }

  suggestTransition(recentActions: StudentAction[]): CRALayer | null {
    if (this.currentLayer === "concrete") {
      const successes = recentActions.filter(a => a.craLayer === "concrete" && a.type === "manipulate").length;
      if (successes >= 5) return "representational";
    }
    if (this.currentLayer === "abstract") {
      const errors = recentActions.slice(-5).filter(a => a.details?.correct === false).length;
      if (errors >= 3) return "concrete";
    }
    return null;
  }

  getLayerDistribution(): Record<CRALayer, number> {
    const totals: Record<CRALayer, number> = { concrete: 0, representational: 0, abstract: 0 };
    for (const entry of this.layerHistory) totals[entry.layer] += entry.duration;
    totals[this.currentLayer] += Date.now() - this.layerStartTime;
    const total = Object.values(totals).reduce((a, b) => a + b, 0);
    if (total === 0) return { concrete: 100, representational: 0, abstract: 0 };
    return {
      concrete: Math.round((totals.concrete / total) * 100),
      representational: Math.round((totals.representational / total) * 100),
      abstract: Math.round((totals.abstract / total) * 100),
    };
  }
}
