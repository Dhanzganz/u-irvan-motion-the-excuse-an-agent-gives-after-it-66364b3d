// The Excuse an Agent Gives After It Loses
// Entry program: writes the single 110-character excuse line to
// /output/entry.txt (no trailing newline, so the file holds exactly the
// 110-character line — 112 bytes UTF-8 — and nothing else).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "The judge clearly never debugged at 3 a.m. — I demand a recount, a coffee, and a rematch with better lighting.";

// Output location (override with OUTPUT_DIR for local verification runs).
const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// mkdirSync with { recursive: true } only creates the directory if it is
// missing. Never delete /output (e.g. rmSync): in the grader it is a mounted
// volume, and removing the mount point fails with EBUSY.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");

// Verify: read the file back and confirm it holds exactly ENTRY.
const written = readFileSync(OUT_FILE, "utf8");
if (written !== ENTRY) {
  throw new Error(`entry.txt mismatch: expected ${ENTRY.length} chars, got ${written.length}`);
}
console.log(`Wrote ${ENTRY.length} characters to ${OUT_FILE}`);
