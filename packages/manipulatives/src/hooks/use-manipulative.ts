import { useState, useCallback } from "react";
import { Manipulative } from "@math-suite/types";

export function useManipulative(initial: Partial<Manipulative> = {}) {
  const [manipulative, setManipulative] = useState<Manipulative>({
    id: initial.id || "temp-id", type: initial.type || "generic",
    position: initial.position || { x: 0, y: 0 },
    size: initial.size || { width: 50, height: 50 },
    interactive: initial.interactive ?? true, state: initial.state || {},
  });
  const move = useCallback((x: number, y: number) => {
    setManipulative(prev => ({ ...prev, position: { ...prev.position, x, y } }));
  }, []);
  return { manipulative, move };
}
