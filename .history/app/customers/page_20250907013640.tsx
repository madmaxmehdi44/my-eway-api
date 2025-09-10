"use client";

import { useEffect } from "react";
import { getCustomers } from "../lib/eway";

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers()
      .then(setCustomers)
      .catch(err => alert("خطا در دریافت اطلاعات: " + err.message));
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteCustomer(id);
      setCustomers(prev => prev.filter(c => c.id !== id));
    } catch (err) {
      alert("خطا در حذف: " + (err as Error).message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-bold">لیست مشتری‌ها</h2>
      <CustomerTable customers={customers} onDelete={handleDelete} />
    </div>
  );
}