import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
const joke =
  "My AI agent finished the demo five minutes early, then used the spare time to refactor the feature live until it stopped working.";

const outPath = process.env.OUTPUT_PATH || "/output/entry.txt";
const dir = outPath.slice(0, outPath.lastIndexOf("/")) || ".";
mkdirSync(dir, { recursive: true });
writeFileSync(outPath, joke, "utf8");
