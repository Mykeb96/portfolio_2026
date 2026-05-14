# Memorizer

A memory card game built with **React**, **TypeScript**, **Vite**, and **SCSS**. Flip glass-style cards, match eight pairs by gradient and pair mark, and try to finish with your best time.

**Play it live:** [memorizer-game.vercel.app](https://memorizer-game.vercel.app)

## Features

- **Gameplay**: 4×4 grid (2×8 on small screens), 8 pairs; tap anywhere on a card to reveal it; two non-matches flip back after a short delay; matched pairs animate out.
- **UI**: Dark “aurora” backdrop, [Outfit](https://fonts.google.com/specimen/Outfit) typography, frosted face-down cards, gradient face-up backs, hover lift on fine pointers, touch-friendly sizing.
- **Pairs**: Each pair has a distinct gradient and a small **sigil** (same on both cards of the pair) so similar colors stay easy to tell apart.
- **Win screen**: Shows elapsed time and a **Play again** button that reshuffles and resets the clock.
- **Tech**: Strict TypeScript (`CardType`, `gameState`), `React.memo` on cards, `crypto.randomUUID()` for stable ids, `partnerId` links for matching.

## How to play

1. Tap a card to reveal it (the whole card is the control, not a separate button).
2. Tap a second card. If the pair matches, both clear after a moment; if not, they hide again after about one second.
3. When all eight pairs are matched, you see the victory panel with your time.
4. Use **Play again** for a new shuffled board.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (16+ may work; LTS recommended)
- npm (ships with Node)

### Install and run

```bash
git clone <your-repo-url> memorizer
cd memorizer
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

### Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Dev server with HMR |
| `npm run build` | Typecheck and production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |

## Project structure

```
public/
  favicon.svg          # Tab icon (paired cards + star)
src/
  components/
    Card.tsx           # Full-card button, face / revealed / matched layers
  styles/
    App.module.scss    # Shell, grid, victory panel
    components/
      Card.module.scss # Glass + gradients + pair sigil styling
    index.css          # Global base (background, font import)
  App.tsx              # Deck, selection, match timing, win detection, timer
  main.tsx             # Entry
index.html
```

## Implementation notes

- **Deck**: Sixteen cards from eight `PAIR_IDS` (`aurora`, `ember`, `ocean`, …); each pair shares a `color` key used for `data-pair` styling and the sigil map in `Card.tsx`.
- **Shuffle**: Cards are shuffled with `Array.prototype.sort` and a random comparator (fine for this toy scale; upgrade to [Fisher–Yates](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) if you want a provably fair shuffle).
- **Selection**: At most two cards selected; logic ignores extra clicks until the pair resolves.

## Deployment

The public demo is on [Vercel](https://vercel.com/) at **memorizer-game.vercel.app**. Any static host works: run `npm run build` and deploy the `dist/` folder.

## Contributing

1. Fork the repo and create a branch for your change.
2. Run `npm run lint` and `npm run build` before opening a PR.

## Acknowledgments

Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/), and [Sass](https://sass-lang.com/).
