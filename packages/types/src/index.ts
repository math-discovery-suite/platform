// Core Type Definitions for Math Discovery Suite

export type PiagetStage = "preoperational" | "concrete-operational" | "formal-operational";
export type CRALayer = "concrete" | "representational" | "abstract";
export type GradeBand = "K-1" | "2-3" | "4-5" | "6-8";

export interface StudentAction {
  id: string;
  timestamp: number;
  type: "manipulate" | "draw" | "write" | "answer" | "switch-layer" | "journal-entry";
  craLayer: CRALayer;
  conceptId: string;
  details: Record<string, unknown>;
  duration: number;
}

export interface StudentProgress {
  studentId: string;
  conceptId: string;
  appId: string;
  comfortLayer: CRALayer;
  concreteReturns: number;
  journalEntries: JournalEntry[];
  promptsReceived: number;
  solutionPaths: string[];
  masteryScore: number;
  lastActivity: number;
}

export interface JournalEntry {
  id: string;
  timestamp: number;
  conceptId: string;
  content: string;
  drawing?: string;
  relatedLayer: CRALayer;
}

export interface SocraticPrompt {
  id: string;
  type: "noticing" | "predicting" | "comparing" | "generalizing" | "justifying" | "transferring";
  text: string;
  trigger: PromptTrigger;
  conceptId: string;
  craLayer: CRALayer;
  tier: 1 | 2 | 3;
}

export interface PromptTrigger {
  inactivitySeconds?: number;
  incorrectAttempts?: number;
  progressionPoint?: string;
  layerSwitch?: CRALayer;
}

export interface MathConcept {
  id: string;
  name: string;
  gradeBand: GradeBand;
  piagetStage: PiagetStage;
  concreteDescription: string;
  representationalDescription: string;
  abstractDescription: string;
  contextScenarios: string[];
  prerequisites: string[];
  relatedConcepts: string[];
}

export interface Manipulative {
  id: string;
  type: string;
  position: { x: number; y: number; z?: number };
  size: { width: number; height: number; depth?: number };
  color?: string;
  interactive: boolean;
  state: Record<string, unknown>;
}

export interface WorkspaceState {
  manipulatives: Manipulative[];
  currentLayer: CRALayer;
  grid: { enabled: boolean; size: number };
  overlays: { showFormula: boolean; showDiagram: boolean; showNumberLine: boolean };
}

export interface TeacherStudentView {
  studentId: string;
  studentName: string;
  conceptProgress: StudentProgress[];
  layerTimeDistribution: { concrete: number; representational: number; abstract: number };
  teacherInsights: string[];
  recommendations: string[];
}

export interface AppManifest {
  id: string;
  name: string;
  description: string;
  gradeBand: GradeBand;
  version: string;
  concepts: string[];
  route: string;
  icon: string;
  themeColor: string;
}