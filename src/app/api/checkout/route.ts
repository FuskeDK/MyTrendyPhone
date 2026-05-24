import { NextRequest, NextResponse } from "next/server";

// The MyTrendyPhone client token — kept server-side so it's never exposed to the browser
const CLIENT_TOKEN = process.env.MARKETY_CLIENT_TOKEN ?? "c37ff7247f6ffbaf7a2e9d3151e27f05cce6a95cd70fe1a7";
const MARKETY_API = process.env.MARKETY_API_URL ?? "https://www.marketyleadgen.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerName, customerEmail, customerPhone, customerAddress, items, total } = body;

    const r = await fetch(`${MARKETY_API}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientToken: CLIENT_TOKEN,
        customerName,
        customerEmail,
        customerPhone,
        customerAddress,
        items,
        total,
      }),
    });

    if (!r.ok) {
      const err = await r.json().catch(() => ({}));
      return NextResponse.json({ error: err.error ?? "Ordre kunne ikke oprettes" }, { status: 500 });
    }

    const data = await r.json();
    return NextResponse.json({ success: true, orderId: data.orderId });
  } catch {
    return NextResponse.json({ error: "Intern serverfejl" }, { status: 500 });
  }
}
