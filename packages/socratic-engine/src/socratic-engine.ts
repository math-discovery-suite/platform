import { SocraticPrompt, StudentAction, CRALayer } from "@math-suite/types";

/** The questioning system that guides discovery. Never tells, always asks. */
export class SocraticEngine {
  private prompts: Map<string, SocraticPrompt[]> = new Map();
  private promptHistory: string[] = [];

  registerPrompts(conceptId: string, prompts: SocraticPrompt[]): void {
    this.prompts.set(conceptId, prompts);
  }

  getNextPrompt(conceptId: string, currentLayer: CRALayer, recentActions: StudentAction[], secondsInactive: number): SocraticPrompt | null {
    const available = this.prompts.get(conceptId);
    if (!available) return null;
    const layerPrompts = available.filter(p => p.craLayer === currentLayer && !this.promptHistory.includes(p.id));
    for (const prompt of layerPrompts) {
      if (prompt.trigger.inactivitySeconds && secondsInactive >= prompt.trigger.inactivitySeconds) {
        this.promptHistory.push(prompt.id);
        return prompt;
      }
    }
    return null;
  }

  resetHistory(): void { this.promptHistory = []; }
  getPromptHistory(): string[] { return [...this.promptHistory]; }
}
