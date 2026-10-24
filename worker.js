// Cloudflare Worker template for the NEW OTC Scanner V2.
// Add a verified provider endpoint and response mapping only after checking its documentation.
// Store secrets using: npx wrangler secret put OTC_API_KEY
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }
    if (url.pathname === "/health") {
      return Response.json({ ok: true, service: "IQ Option OTC Scanner V2", dataConnected: false }, { headers: cors });
    }
    if (url.pathname === "/candles") {
      // Safety by design: do not invent candle data.
      // Connect a verified provider here and map its response to:
      // { ok:true, symbol:"...", timeframe:"M1|M5", candles:[{time,open,high,low,close}, ...] }
      return Response.json({
        ok: false,
        connected: false,
        error: "OTC data provider is not configured. Add a verified provider endpoint and response mapping in worker.js."
      }, { status: 503, headers: cors });
    }
    return Response.json({ ok: false, error: "Not found" }, { status: 404, headers: cors });
  }
};
