"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Вернуться наверх"
      onClick={handleClick}
      className={clsx(
        "fixed bottom-6 right-6 z-[1100] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-opacity",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      ↑
    </button>
  );
} 