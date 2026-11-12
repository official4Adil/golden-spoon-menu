# The Golden Spoon: digital menu

Plain HTML + CSS + JS (ES modules). No build step. 113 dishes, all content in `menu-data.js`.

## Files
- `index.html`, `style.css`, `app.js`: the site
- `menu-data.js`: restaurant info and every dish (edit this to change anything)
- `images/<dish-id>.jpg`: dish photos (e.g. `images/paneer-tikka.jpg`). Optional `images/hero.jpg` for the top banner
- `audio/<dish-id>.mp3`: Indian-voice narration per dish
- `scripts/`: helpers that fill `images/` and `audio/`

## 1. Photos (real pictures)
Option A, your own food photos: save them as `images/<dish-id>.jpg` (best quality, and no licence issues).
Option B, free licensed photos from Pexels:
```
PEXELS_KEY=your_key npm run images     # key is free at pexels.com/api
```
Matches are best-effort: open `images/` and replace any wrong photo with your own file of the same name. Credits are saved in `images/credits.json`.
Any dish can also use a direct URL: add it as the 4th value, e.g. `['Paneer Tikka', '...', 0, 'https://.../x.jpg']`.
Dishes without a photo automatically show an elegant illustrated tile.

## 2. Indian-voice audio
```
pip install edge-tts
npm run audio                           # en-IN-NeerjaNeural (female)
VOICE=en-IN-PrabhatNeural npm run audio # male voice
```
This writes one MP3 per dish. If an MP3 is missing, the site reads the dish aloud using the visitor's phone voice (Indian English if available).

## 3. Deploy on Vercel
```
npm i -g vercel
vercel --prod
```
or push to GitHub and import the repo in Vercel (Framework: Other, no build command, output directory: `.`).

## Notes
- Veg / Non-veg dots follow the section names in your menu. Set `v: 1` or `v: 0` on any section in `menu-data.js` to change them. Please check dietary tags yourself before launch.
- No prices were provided. To add them, put a price in `menu-data.js` and show it in `app.js`.
