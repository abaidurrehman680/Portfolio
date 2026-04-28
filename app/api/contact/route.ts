import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  message?: string;
};

/** Deliver form submissions to your inbox via https://web3forms.com (free). Set WEB3FORMS_ACCESS_KEY in .env.local and on Vercel. */
export async function POST(request: Request) {
  try {
    let json: Body;
    try {
      json = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const name = String(json.name ?? "").trim();
    const email = String(json.email ?? "").trim();
    const message = String(json.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      return NextResponse.json(
        {
          error: "Email delivery is not configured.",
          code: "MISSING_WEB3FORMS_KEY",
        },
        { status: 503 },
      );
    }

    const textBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    let res: Response;
    try {
      res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[Abaid.dev] Message from ${name}`,
          from_name: name,
          name,
          email,
          message: textBody,
        }),
      });
    } catch (err) {
      console.error("Web3Forms fetch failed:", err);
      return NextResponse.json(
        {
          error:
            "Could not reach email service. Check firewall/VPN or try another network.",
          code: "UPSTREAM_FETCH_FAILED",
        },
        { status: 502 },
      );
    }

    let data: { success?: boolean; message?: string } = {};
    try {
      data = (await res.json()) as { success?: boolean; message?: string };
    } catch {
      return NextResponse.json(
        { error: "Invalid response from email service." },
        { status: 502 },
      );
    }

    if (!res.ok || !data.success) {
      return NextResponse.json(
        { error: data.message || "Could not send message. Try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("POST /api/contact:", e);
    return NextResponse.json(
      { error: "Something went wrong on the server." },
      { status: 500 },
    );
  }
}
