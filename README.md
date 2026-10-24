# IQ Option OTC Scanner V2 (starter)

This is a NEW, separate project. It does not modify the previous scanner file.

## Important
- The UI is a starter scaffold; it does not contain live OTC prices until a compatible, authorized data feed is configured.
- Do not put API keys in `index.html` or commit them to GitHub.
- Confirm that your provider really supports IQ Option OTC candles on M1 and M5, and confirm which 5 instruments are included in its free plan.
- Signals are educational rule-based checks, not guaranteed winning trades. Test on demo first.

## Files
- `index.html`: mobile-friendly scanner UI.
- `worker.js`: Cloudflare Worker backend proxy template.
- `wrangler.toml`: Worker project config template.

## Setup overview
1. Create a NEW GitHub repository for this project and upload `index.html`, `README.md`.
2. Enable GitHub Pages for the repository (deploy from the main branch/root).
3. Deploy `worker.js` as a Cloudflare Worker separately.
4. Add the data provider endpoint and request format in `worker.js` after confirming provider docs.
5. Add provider credentials as Worker Secrets (never in frontend code).
6. Set the backend URL in `index.html` in `BACKEND_URL`.
7. Verify M1/M5 candles against IQ Option charts before relying on signals.

This starter intentionally returns WAIT until real candle data is connected.
