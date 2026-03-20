dea
# Math Discovery Suite

**The Richard & Richgels Piagetian Math App Framework**

A modular suite of K-8 math apps built on constructivist principles.
Each app guides students through Concrete > Representational > Abstract learning.

## Architecture

```
math-discovery-suite/
  packages/           # Shared libraries
    types/            # TypeScript type definitions
    core/             # CRA manager, progress tracking, adaptive engine
    socratic-engine/  # Socratic questioning system
    manipulatives/    # React manipulative components
    ui/               # Shared UI (CRA toggle, journal, app shell)
    teacher-dashboard/# Teacher analytics components
  apps/               # Individual apps (each independently deployable)
    counting-k1/      # Number Explorers (K-1)
    place-value-23/   # Block Builders (2-3)
    fractions-45/     # Fraction Workshop (4-5)
    geometry-68/      # Shape and Space Lab (6-8)
```

## Quick Start

```bash
npm install
npm run dev        # all apps
cd apps/counting-k1 && npm run dev  # single app
```

## Tech Stack

- Monorepo: Turborepo + npm workspaces
- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict)
- UI: React 18
- 3D (future): Three.js / React Three Fiber

---
*Dedicated to Dr. Tom Richard and Dr. Glen Richgels, Bemidji State University*
