import { mkdirSync, writeFileSync } from "node:fs";

// The worst superpower: perfect precognition, delivered three seconds too late.
const ENTRY =
  "I can predict the future with perfect accuracy — exactly three seconds after it happens.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
