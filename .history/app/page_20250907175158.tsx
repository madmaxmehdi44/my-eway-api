import { Navbar } from "@heroui/navbar";

export default function Home() {
  return (
    <main lang="en">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">eWAY Sandbox Dashboard</h1>
        <a className="mt-2 text-gray-600" sr>مدیریت مشتری‌ها و پرداخت‌ها</a>
        
      </div>
    </main>
  );
}
