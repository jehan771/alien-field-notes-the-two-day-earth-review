// Alien Field Notes: The Two Day Earth Review
// Writes one original line — an alien tourist's review of Earth —
// to /output/entry.txt. Deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Visited Earth for the weekend. The locals ignore the giant glowing ball in the sky and worship small glowing rectangles instead. 4/5 stars, would orbit again.";

// Gate guard: the entry must be 1-200 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate bounds: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
