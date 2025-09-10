"use client";
import { useEffect, useState } from "react";

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/customers")
      .then(res => res.json())
      .then(data => {
        if (data.error) setError(data.error);
        else setCustomers(data);
      })
      .catch(err => setError("خطا در اتصال: " + err.message));
  }, []);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-xl font-bold">لیست مشتری‌ها</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-2">
        {customers.map((c: any) => (
          <li key={c.ID} className="p-2 border rounded">
            <strong>{c.FirstName} {c.LastName}</strong> – {c.Email}
          </li>
        ))}
      </ul>
    </div>
  );
}