export default function CustomerForm({ onSubmit, defaultValues }: any) {
    return (
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          name="name"
          defaultValue={defaultValues?.name}
          placeholder="نام"
          className="w-full p-2 border rounded"
        />
        <input
          name="email"
          defaultValue={defaultValues?.email}
          placeholder="ایمیل"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded">
          ذخیره
        </button>
      </form>
    );
  }