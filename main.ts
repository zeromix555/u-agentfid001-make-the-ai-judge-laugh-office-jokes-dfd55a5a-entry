// Office Jokes — make.fun entry for u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a
// Writes one original one-line joke about office life to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke: inbox zero, the reply-all apocalypse, and a CEO who is just as
// buried as everyone else — a real joke with a turn, true about the office,
// tight, and fresh (no Monday, no photocopier).
const joke =
  "I finally achieved inbox zero by replying-all 'unsubscribe' to the whole company — even the CEO replied-all 'same.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
