# Avatar Kink Quiz

A static, mobile-friendly fan-made quiz that can be hosted free on GitHub Pages, Netlify, or Vercel.

## Files

- `index.html`
- `style.css`
- `script.js`
- `assets/questions/` — 16 original question illustrations
- `assets/results/` — 4 elemental result illustrations

## Publish with GitHub Pages

1. Create a new public GitHub repository.
2. Upload all three files to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/root`, then save.
6. GitHub will provide the public URL after deployment finishes.

## Publish with Netlify

Drag the unzipped folder into Netlify’s manual deploy area.

## Important notes

- The quiz never asks users to enter a full passcode, only a two-digit sum.
- No answers are sent to a server.
- The scoring key is inside `script.js`, mainly in `calculateResults()`.
- This is an unofficial fan project. The included artwork is original, generic elemental fan art and does not use official character images.
- The current scoring uses the answer key drafted in the conversation and can be edited later.


## Enhanced features

- Animated fire, water, earth, and air particles
- Smooth question-card transitions
- Optional original synthesized ambient soundtrack
- Downloadable 1080×1350 PNG result cards
- Native mobile sharing when supported
- A special zero-result Easter egg for Questions 8 and 16

The soundtrack is generated in the browser with Web Audio and does not use copyrighted Avatar music.
