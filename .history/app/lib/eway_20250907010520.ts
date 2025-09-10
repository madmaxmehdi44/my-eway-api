// lib/eway.ts
const BASE_URL = "https://sandbox.myeway.com.au";

export async function fetchCustomers() {
  const res = await fetch(`${BASE_URL}/customers`, {
    headers: {
      "Authorization": `Bearer ${process.env.EWAY_API_KEY}`,
      "Content-Type": "application/json"
    }
  });
  return res.json();
}

export async function createCustomer(data: any) {
  const res = await fetch(`${BASE_URL}/customers`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.EWAY_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function updateCustomer(id: string, data: any) {
  const res = await fetch(`${BASE_URL}/customers/${id}`, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${process.env.EWAY_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function deleteCustomer(id: string) {
  const res = await fetch(`${BASE_URL}/customers/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${process.env.EWAY_API_KEY}`
    }
  });
  return res.ok;
}