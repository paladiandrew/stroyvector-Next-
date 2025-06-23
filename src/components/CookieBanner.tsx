'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('cookies-accepted')) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] md:w-auto bg-dark text-white p-4 rounded-lg shadow-lg z-[1000] flex flex-col md:flex-row items-center gap-3">
      <span className="text-sm">Мы используем cookie для улучшения работы сайта.</span>
      <button
        onClick={() => {
          localStorage.setItem('cookies-accepted', 'true');
          setShow(false);
        }}
        className="bg-primary px-4 py-1 rounded-md text-sm hover:bg-primary-hover transition-colors"
      >
        Ок
      </button>
    </div>
  );
} 