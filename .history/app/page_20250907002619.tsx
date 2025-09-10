// app/page.tsx
import DataList from "./components/DataList";
import DataForm from "./components/DataForm";

export default async function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="mb-6 text-2xl font-bold text-center text-blue-700">مدیریت مشتریان MyEway (Sandbox)</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <section className="p-6 bg-white rounded shadow">
          <h2 className="mb-3 text-lg font-semibold">فرم افزودن / ویرایش مشتری</h2>
          <DataForm />
        </section>
        <section className="p-6 bg-white rounded shadow">
          <h2 className="mb-3 text-lg font-semibold">لیست مشتریان</h2>
          {/* نمایش لیست مشتریان */}
          <DataList />
        </section>
      </div>
    </main>
  );
}