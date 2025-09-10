// app/components/Loader.tsx
"use client";
export default function Loader() {
  return (
    <div className="flex items-center justify-center h-20">
      <span className="w-6 h-6 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></span>
    </div>
  );
}