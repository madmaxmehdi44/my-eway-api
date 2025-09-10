import { NextResponse } from "next/server";
import { env } from "process";


// dotenv.config();

export async function GET() {
    const auth = Buffer.from(`${''}:${env.EWAY_PASSWORD}`).toString("base64");

    const res = await fetch(`${env.EWAY_SANDBOX_BASE_URL}`, {
        headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/json"
        }
    });

    if (!res.ok) {
        const error = await res.text();
        return NextResponse.json({ error }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
}