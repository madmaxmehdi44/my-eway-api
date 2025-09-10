"use client";
import { useState, useEffect } from "react";

interface Customer {
  CustomerID: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Mobile: string;
}

export default function DataList() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/myeway")
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "خطا در دریافت داده");
        setCustomers(data.Customers || []);
      })
      .catch((err: any) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("آیا مطمئن هستید؟")) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/myeway?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "خطا در حذف داده");
      setCustomers(customers.filter((c) => c.CustomerID !== id));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>در حال بارگذاری...</div>;
  if (error) return <div className="text-red-600">{error}</div>;
  if (!customers.length) return <div>داده‌ای یافت نشد.</div>;

  return (
    <ul className="divide-y divide-gray-200">
      {customers.map((customer) => (
        <li
          key={customer.CustomerID}
          className="flex items-center justify-between py-2"
        >
          <div>
            <span className="font-bold">{customer.FirstName} {customer.LastName}</span>
            <span className="ml-2 text-gray-400">{customer.Email}</span>
            <span className="ml-2 text-gray-600">{customer.Mobile}</span>
          </div>
          <div className="flex gap-2">
            {/* V. ساده: در پروژه واقعی امکان ویرایش با پرکردن فرم از اطلاعات مشتری */}
            {/* <button onClick={() => handleEdit(customer)} className="btn btn-xs btn-warning">ویرایش</button> */}
            <button
              onClick={() => handleDelete(customer.CustomerID)}
              className="btn btn-xs btn-error"
            >
              حذف
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}