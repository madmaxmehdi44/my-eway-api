import EwayPayButton from "@/components/EwayPayButton";
import { Link } from "@heroui/link";
import { Navbar } from "@heroui/navbar";

export default function Home() {
  return (
    <main lang="en">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">eWAY Sandbox Dashboard</h1>
        <Link href="https://my-eway-api.vercel.app/customers" className="mt-2 text-gray-600" >مدیریت مشتری‌ها و پرداخت‌ها</Link>

      </div>

    </main>
  );
}
export default function PaymentPage() {
  return (
    <main lang="en">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">eWAY Sandbox Dashboard</h1>
        <Link href="https://my-eway-api.vercel.app/customers" className="mt-2 text-gray-600" >مدیریت مشتری‌ها و پرداخت‌ها</Link>

      </div>

     
  );
}

