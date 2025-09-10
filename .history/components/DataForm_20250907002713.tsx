"use client";
import { useState, useRef } from "react";

interface Customer {
  // فیلدهای نمونه. مطابق مستندات eWAY Rapid API قابل تغییر است
  CustomerID?: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Mobile: string;
}

const initialForm = {
  FirstName: "",
  LastName: "",
  Email: "",
  Mobile: "",
};

export default function DataForm() {
  const [form, setForm] = useState<Customer>(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const method = form.CustomerID ? "PUT" : "POST";
      const res = await fetch("/api/myeway", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "عملیات با خطا مواجه شد.");

      setSuccess(form.CustomerID ? "ویرایش موفق!" : "افزودن موفق!");
      setForm(initialForm);

      // ریفریش لیست مشتریان (مبتنی بر Context یا رویکرد سفارشی، بسته به نیاز شما)
      window.location.reload();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col gap-3">
      <input
        name="FirstName"
        placeholder="نام"
        value={form.FirstName}
        onChange={handleChange}
        required
        className="input input-bordered input-primary"
      />
      <input
        name="LastName"
        placeholder="نام خانوادگی"
        value={form.LastName}
        onChange={handleChange}
        required
        className="input input-bordered input-primary"
      />
      <input
        name="Email"
        placeholder="ایمیل"
        type="email"
        value={form.Email}
        onChange={handleChange}
        required
        className="input input-bordered input-primary"
      />
      <input
        name="Mobile"
        placeholder="شماره موبایل"
        type="tel"
        value={form.Mobile}
        onChange={handleChange}
        className="input input-bordered input-primary"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full btn btn-primary"
      >
        {loading ? "در حال ارسال..." : form.CustomerID ? "ویرایش" : "افزودن"}
      </button>

      {error && <div className="text-red-600">{error}</div>}
      {success && <div className="text-green-600">{success}</div>}
    </form>
  );
}