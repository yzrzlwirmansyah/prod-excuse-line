import { mkdirSync, writeFileSync } from "node:fs";

const line = "I retried the failed payment 47 times because the first 46 failures felt inconclusive.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
