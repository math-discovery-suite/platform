"use client";
import React, { useState } from "react";
import { CRALayer } from "@math-suite/types";
import { manifest } from "../manifest";

/** Block Builders — Grade Band: 2-3 */
export default function PlaceValue23App() {
  const [currentLayer, setCurrentLayer] = useState<CRALayer>("concrete");

  return (
    <div style={{ minHeight: "100vh", fontFamily: "system-ui", background: "#F0F5F7" }}>
      <header style={{ padding: "16px 24px", background: "#fff", borderBottom: "1px solid #E8E8E8" }}>
        <h1 style={{ margin: 0, color: "#5A8F6E" }}>{manifest.name}</h1>
        <p style={{ margin: 0, fontSize: 14, color: "#888" }}>{manifest.gradeBand} | {manifest.description}</p>
      </header>
      <main style={{ padding: 24 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {(["concrete", "representational", "abstract"] as CRALayer[]).map(layer => (
            <button key={layer} onClick={() => setCurrentLayer(layer)}
              style={{ padding: "8px 16px", border: currentLayer === layer ? "2px solid #5A8F6E" : "1px solid #ccc",
                background: currentLayer === layer ? "#5A8F6E" : "#fff",
                color: currentLayer === layer ? "#fff" : "#333", borderRadius: 8, cursor: "pointer" }}>
              {layer === "concrete" ? "Build It" : layer === "representational" ? "Draw It" : "Write It"}
            </button>
          ))}
        </div>
        <div style={{ background: "#fff", borderRadius: 12, padding: 40, textAlign: "center", border: "2px dashed #ddd" }}>
          <p style={{ fontSize: 18, color: "#999" }}>Workspace: {currentLayer} mode</p>
          <p style={{ color: "#bbb" }}>Manipulative components will render here</p>
        </div>
      </main>
    </div>
  );
}
