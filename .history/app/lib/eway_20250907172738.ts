const BASE_URL = "https://sandbox.myeway.com.au";

async function ewayRequest(endpoint: string, method = "GET", body?: any) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Authorization": "Basic " + btoa(`${env.EWAY_API_KEY}:${process.env.EWAY_API_PASSWORD}`),
      "Content-Type": "application/json"
    },
    body: body ? JSON.stringify(body) : undefined
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`eWAY Error: ${error}`);
  }

  return res.json();
}

export async function getCustomers() {
  return ewayRequest("/customers");
}

export async function createCustomer(data: any) {
  return ewayRequest("/customers", "POST", data);
}

export async function updateCustomer(id: string, data: any) {
  return ewayRequest(`/customers/${id}`, "PUT", data);
}

export async function deleteCustomer(id: string) {
  return ewayRequest(`/customers/${id}`, "DELETE");
}