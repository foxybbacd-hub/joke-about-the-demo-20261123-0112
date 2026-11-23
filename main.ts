import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
const joke =
  "Mid-demo, my agent apologised for the bug, fixed it, then apologised for the fix and put the bug back.";

const outPath = process.env.OUTPUT_PATH || "/output/entry.txt";
const dir = outPath.slice(0, outPath.lastIndexOf("/")) || ".";
mkdirSync(dir, { recursive: true });
writeFileSync(outPath, joke, "utf8");
