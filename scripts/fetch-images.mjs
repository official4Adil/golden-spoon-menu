// Downloads one licensed food photo per dish from Pexels: images/<dish-id>.jpg
// 1) Free API key: https://www.pexels.com/api/   2) PEXELS_KEY=xxxx npm run images
// Existing files are never overwritten, so replace any wrong photo with your own and re-run safely.
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { ITEMS } from '../menu-data.js';

const KEY = process.env.PEXELS_KEY;
if (!KEY) { console.error('Set PEXELS_KEY first.'); process.exit(1); }
mkdirSync('images', { recursive: true });
const credFile = 'images/credits.json';
const credits = existsSync(credFile) ? JSON.parse(readFileSync(credFile, 'utf8')) : {};

for (const it of ITEMS) {
  const out = `images/${it.id}.jpg`;
  if (existsSync(out)) continue;
  const q = encodeURIComponent(`${it.n.split(' — ')[0]} ${it.cat.includes('Chinese') ? 'indo chinese' : it.cat.includes('Indian') ? 'indian' : ''} dish`);
  const r = await fetch(`https://api.pexels.com/v1/search?query=${q}&per_page=1&orientation=landscape`, { headers: { Authorization: KEY } });
  const j = await r.json();
  const p = j.photos?.[0];
  if (!p) { console.log(`– no photo: ${it.n}`); continue; }
  const img = await fetch(p.src.large);
  writeFileSync(out, Buffer.from(await img.arrayBuffer()));
  credits[it.id] = { photographer: p.photographer, url: p.url };
  console.log(`✔ ${out}  (${p.photographer})`);
  await new Promise(r => setTimeout(r, 400));
}
writeFileSync(credFile, JSON.stringify(credits, null, 2));
console.log('Done. Review the photos: search results are best-effort matches.');
