import { useCallback, useRef } from "react";

export function useDragAndSnap(gridSize: number = 0) {
  const snapToGrid = useCallback((value: number): number => {
    if (gridSize <= 0) return value;
    return Math.round(value / gridSize) * gridSize;
  }, [gridSize]);
  return { snapToGrid };
}
