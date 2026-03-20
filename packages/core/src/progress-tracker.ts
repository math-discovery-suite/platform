import { StudentProgress, StudentAction, JournalEntry, CRALayer } from "@math-suite/types";

/** Tracks HOW students solve, not just IF they solve. */
export class ProgressTracker {
  private progress: StudentProgress;
  constructor(studentId: string, conceptId: string, appId: string) {
    this.progress = { studentId, conceptId, appId, comfortLayer: "concrete",
      concreteReturns: 0, journalEntries: [], promptsReceived: 0,
      solutionPaths: [], masteryScore: 0, lastActivity: Date.now() };
  }
  recordAction(action: StudentAction): void { this.progress.lastActivity = Date.now(); }
  addJournalEntry(entry: JournalEntry): void { this.progress.journalEntries.push(entry); }
  getProgress(): StudentProgress { return { ...this.progress }; }
}
