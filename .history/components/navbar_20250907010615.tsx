import { UserIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <h1 className="text-xl font-bold">eWAY Admin</h1>
      <UserIcon className="w-6 h-6 text-gray-600" />
    </nav>
  );
}