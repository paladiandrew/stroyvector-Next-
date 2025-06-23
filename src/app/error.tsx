"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark text-white text-center p-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Что-то пошло не так</h1>
      <p className="mb-8 max-w-md">
        Произошла непредвиденная ошибка. Попробуйте обновить страницу или вернитесь на&nbsp;главную.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-primary text-white rounded hover:bg-primary-hover transition-colors"
        >
          Обновить
        </button>
        <Link href="/" className="px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-500 transition-colors">
          На главную
        </Link>
      </div>
    </div>
  );
} 