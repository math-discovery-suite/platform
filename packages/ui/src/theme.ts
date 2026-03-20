export const theme = {
  colors: {
    navy: "#1E3A5F", teal: "#0D7377", sage: "#5A8F6E", warm: "#C4743A",
    cream: "#FFF8F0", lightBg: "#F0F5F7", dark: "#1A1A2E", white: "#FFFFFF",
    concrete: "#0D7377", representational: "#C4743A", abstract: "#1E3A5F",
    success: "#22C55E", warning: "#F59E0B", error: "#EF4444",
  },
  fonts: {
    heading: "'DM Serif Display', Georgia, serif",
    body: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  radii: { sm: "6px", md: "10px", lg: "16px", xl: "24px" },
  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.08)",
    md: "0 4px 12px rgba(0,0,0,0.08)",
    lg: "0 8px 24px rgba(0,0,0,0.12)",
  },
} as const;
