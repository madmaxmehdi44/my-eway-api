import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">eWAY Sandbox Dashboard</h1>
        <p className="mt-2 text-gray-600">مدیریت مشتری‌ها و پرداخت‌ها</p>
      </div>
    </main>
  );
}
