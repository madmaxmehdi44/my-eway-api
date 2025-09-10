import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

export async function GET() {
  const auth = Buffer.from(`${process.env.EWAY_API_KEY}:${process.env.EWAY_API_PASSWORD}`).toString("base64");

  const res = await fetch("https://sandbox.myeway.com.au/REST/v1/Customer", {
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