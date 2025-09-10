"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <section className="flex flex-col items-center py-8 text-red-600">
      <h2>یک خطا رخ داده است!</h2>
      <p>{error.message}</p>
      <button
        className="mt-4 btn btn-primary"
        onClick={() => reset()}
      >
        تلاش مجدد
      </button>
    </section>
  );
}