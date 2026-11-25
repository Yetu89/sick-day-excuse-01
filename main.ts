// The Funniest Sick-Day Excuse — make.fun bounty u-zeroxfive-the-funniest-sick-day-excuse-37423a36
// Entry: a single funny sick-day excuse.
// 136 characters (max 200), one line, no trailing newline.
// Writes to /output/entry.txt (or $OUTPUT_DIR/entry.txt locally).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Sorry, my calendar auto-declined today without asking and honestly it's the first sensible decision it's ever made, so I'm honouring it.";

// Code points, so an astral character counts as one.
const LENGTH = [...TEXT].length;

const PROBLEMS: string[] = [];
if (LENGTH < 1 || LENGTH > 200) {
  PROBLEMS.push(`entry must be 1-200 characters, got ${LENGTH}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  PROBLEMS.push("entry must be a single line with no line breaks");
}
if (TEXT.trim().length === 0) {
  PROBLEMS.push("entry must not be only whitespace");
}
if (TEXT !== TEXT.trim()) {
  PROBLEMS.push("entry must not have leading or trailing whitespace");
}
if (PROBLEMS.length > 0) {
  throw new Error(PROBLEMS.join("; "));
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A plain string write adds no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
