// Generates an Indian-English voice MP3 for every dish: audio/<dish-id>.mp3
// Setup once:  pip install edge-tts      Run:  npm run audio
// Voices: en-IN-NeerjaNeural (female, default), en-IN-PrabhatNeural (male)
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { ITEMS, narration } from '../menu-data.js';

const voice = process.env.VOICE || 'en-IN-NeerjaNeural';
mkdirSync('audio', { recursive: true });
let done = 0;
for (const it of ITEMS) {
  const out = `audio/${it.id}.mp3`;
  if (existsSync(out)) continue;
  execFileSync('edge-tts', ['--voice', voice, '--rate=-5%', '--text', narration(it), '--write-media', out], { stdio: 'inherit' });
  console.log(`✔ ${out}`); done++;
}
console.log(`Done. ${done} new files.`);
