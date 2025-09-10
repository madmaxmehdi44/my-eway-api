import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.EWAY_SANDBOX_BASE_URL;
const API_KEY = process.env.EWAY_API_KEY;
const API_PASSWORD = process.env.EWAY_PASSWORD;

// نمونه برای مسیر عمومی: /customers (برای لیست، افزودن، حذف، ویرایش مشتری)
const API_PATH = "/customers";

// ساخت هدر احراز هویت Basic
const getAuthHeader = () => {
  const token = Buffer.from(`${API_KEY}:${API_PASSWORD}`).toString('base64');
  return `Basic ${token}`;
};

export async function GET(request: NextRequest) {
  try {
    // لیست مشتری‌ها را دریافت می‌کند.
    const res = await fetch(`${BASE_URL}${API_PATH}`, {
      headers: {
        Authorization: getAuthHeader(),
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const errorMsg = await res.text();
      return NextResponse.json({ error: errorMsg }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// افزودن مشتری جدید
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const res = await fetch(`${BASE_URL}${API_PATH}`, {
      method: "POST",
      headers: {
        Authorization: getAuthHeader(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!res.ok) return NextResponse.json({ error: data }, { status: res.status });

    return NextResponse.json(data, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ویرایش مشتری (آیدی باید در body ارسال شود)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { CustomerID, ...updatedFields } = body;
    const res = await fetch(`${BASE_URL}${API_PATH}/${CustomerID}`, {
      method: "PUT",
      headers: {
        Authorization: getAuthHeader(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields),
    });

    const data = await res.json();
    if (!res.ok) return NextResponse.json({ error: data }, { status: res.status });

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// حذف مشتری (آیدی باید در Query ارسال شود)
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "آیدی ضروری است" }, { status: 400 });

    const res = await fetch(`${BASE_URL}${API_PATH}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: getAuthHeader(),
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorMsg = await res.text();
      return NextResponse.json({ error: errorMsg }, { status: res.status });
    }

    return NextResponse.json({ message: "حذف موفق" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
