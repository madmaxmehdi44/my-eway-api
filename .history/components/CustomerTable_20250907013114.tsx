import { PencilIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";

export default function CustomerTable({ customers, onDelete }: any) {
  return (
    <table className="min-w-full mt-4 border">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2">نام</th>
          <th className="p-2">ایمیل</th>
          <th className="p-2">عملیات</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((c: any) => (
          <tr key={c.id} className="border-t">
            <td className="p-2">{c.name}</td>
            <td className="p-2">{c.email}</td>
            <td className="flex gap-2 p-2">
              <a href={`/customers/${c.id}/edit`}>
                <PencilIcon className="w-5 h-5 text-blue-500" />
              </a>
              <Button onClick:{() => onDelete(c.id)}>
                <TrashIcon className="w-5 h-5 text-red-500" />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}