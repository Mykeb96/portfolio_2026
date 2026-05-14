# Perceptron lab

Interactive visualization of a **binary linear perceptron** learning a simple rule in 2D: points above the diagonal have label **1** (`y > x`), points below have label **0**. Marker colors show the model’s prediction after a chosen number of training epochs.

**Live app:** [perceptron-lab.vercel.app](https://perceptron-lab.vercel.app/)

## What you’ll see

- **Scatter plot** in the `[0, 50] × [0, 50]` square with a dashed **teacher boundary** (`y = x`).
- **Dataset size** slider (10–500 random points); changing it resamples the cloud.
- **Training epochs** slider (0–50): each step runs one full pass over the current dataset, in fixed order, with the perceptron update rule. Weights are **initialized on the wrong half-space** (`x > y` vs truth `y > x`) so the demo starts mostly wrong and improves as you increase epochs.
- **Metrics:** misclassification count and accuracy.

Training uses **features scaled** to roughly `[0, 1]` so updates stay stable; the plot still uses the original coordinates.

## Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev and build
- [Plotly.js](https://plotly.com/javascript/) via [react-plotly.js](https://plotly.com/javascript/react/) for the chart

## Scripts

| Command | Description |
| -------------- | ------------------------------------ |
| `npm run dev` | Start the dev server |
| `npm run build`| Typecheck (`tsc`) and production build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint on `src` |

## Local setup

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Project layout

| Path | Role |
| ---- | ---- |
| `src/perceptron.ts` | Perceptron class (threshold activation, optional initial weights) |
| `src/dataset.ts` | Random labeled points, plot scaling helpers, Plotly trace builder |
| `src/App.tsx` | UI, training loop, chart sizing, controls |
| `public/favicon.svg` | Tab icon |

## Deploy

The public deployment is on **Vercel** at [https://perceptron-lab.vercel.app/](https://perceptron-lab.vercel.app/). Any static host works for the Vite build output (`npm run build` → `dist/`).
