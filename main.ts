import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const tip =
  "Tip: if you and your agent have both reread the same error three times, congratulations — one of you is the rubber duck now.";

const out = process.env.OUTPUT_FILE ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, tip + "\n", "utf8");
