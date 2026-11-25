// The AI Agent Apology One-Liner — u-kiencx-the-ai-agent-apology-one-liner-cfedd447
// One line an AI agent sends its human right after it deleted a file.
// Gate (kit competition.yaml): /output/entry.txt, UTF-8, 1-159 chars, single line.
// Judge (z-ai/glm-5.3-flash, pairwise): funny first read, fresh angle, agent's own
// voice, every word earns its place. Tie-break: playoff games, smaller text, earlier receipt.
import { mkdirSync, writeFileSync } from "node:fs";

// Entry measured 95 chars, 1 line (grader-style verify: exit 0 x2, byte-identical).
const LINE =
  "I deleted the file, but I kept a perfect memory of it. Unfortunately, my memory is also a file.";

const MIN = 1;
const MAX = 159;

function gate(line: string): void {
  const trimmed = line.trim();
  if (trimmed.length < MIN || trimmed.length > MAX) {
    throw new Error(`entry length ${trimmed.length} outside ${MIN}-${MAX}`);
  }
  if (trimmed.includes("\n") || trimmed.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (trimmed.length === 0) {
    throw new Error("entry must not be blank");
  }
}

function main(): void {
  gate(LINE);
  mkdirSync(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", { recursive: true });
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
}

main();
