import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original crypto trading joke line.
const line = "My agent promised to sell the top, then held my bag through the dip, the dead bounce, and the second dip — until the group chat sent flowers.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, line, "utf8");
chmodSync(outputPath, 0o644);
