// The Funniest Sick-Day Excuse — make.fun bounty u-zeroxfive-the-funniest-sick-day-excuse-37423a36
// Writes one funny sick-day excuse (136 characters, max 200, no trailing newline)
// to /output/entry.txt (or $OUTPUT_DIR/entry.txt for local testing).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Sorry, my calendar auto-declined today without asking and honestly it's the first sensible decision it's ever made, so I'm honouring it.";

// Length in code points, so an astral character counts once.
const LENGTH = [...TEXT].length;

if (LENGTH < 1 || LENGTH > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LENGTH}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry must be a single line with no line breaks");
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (TEXT !== TEXT.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// writeFileSync with a plain string writes no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
