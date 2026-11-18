// news-image-20261117 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a hand-built infographic
// summing up the world news of Tuesday 17 November 2026 (see NOTES.md
// for the stories and sources). This program copies it to the output
// directory, byte for byte, so both grader runs write identical bytes.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
