'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/../public/images/MainLogo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full h-24 bg-gradient-to-r from-primary to-primary-hover flex items-center px-5 z-[1000]">
      <div className="flex items-center mr-auto">
        <Image 
          src={logo} 
          alt="Логотип ООО СТРОЙВЕКТОР" 
          className="mr-2.5 w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20"
          width={80}
          height={80}
          priority
          sizes="(max-width: 640px) 40px, (max-width: 1024px) 56px, 80px"
        />
        <span className="text-base sm:text-lg lg:text-xl text-gray-800">{'ООО "СТРОЙВЕКТОР"'}</span>
      </div>

      <nav className="hidden lg:flex items-center flex-grow justify-center">
        <div className="flex justify-center gap-4">
          <Link href="/" className="text-gray-800 hover:bg-gray-200 rounded px-5 py-2 transition-colors text-lg">Главная</Link>
          <Link href="/projects" className="text-gray-800 hover:bg-gray-200 hover:rounded px-5 py-2 transition-colors text-lg">Примеры работ</Link>
          <Link href="/contacts" className="text-gray-800 hover:bg-gray-200 hover:rounded px-5 py-2 transition-colors text-lg">Контакты</Link>
        </div>
      </nav>

      <div className="hidden lg:block ml-5 text-lg">
        <a href="tel:+79778840940" className="text-gray-800">
          +7 (977) 884-09-40
        </a>
      </div>

      <button 
        className="lg:hidden text-3xl text-gray-800" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Меню"
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-[rgba(255,144,47,0.8)] z-40 animate-fadeIn"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="absolute top-0 right-0 w-72 h-full bg-[rgba(255,144,47,0.95)] p-5 shadow-lg flex flex-col items-end"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="text-3xl text-gray-800 self-end mb-5" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Закрыть меню"
            >
              ✖
            </button>
            <Link href="/" className="text-gray-800 hover:bg-gray-200 rounded px-5 py-2 transition-colors text-lg my-2" onClick={() => setIsMenuOpen(false)}>Главная</Link>
            <Link href="/projects" className="text-gray-800 hover:bg-gray-200 hover:rounded px-5 py-2 transition-colors text-lg my-2" onClick={() => setIsMenuOpen(false)}>Примеры работ</Link>
            <Link href="/contacts" className="text-gray-800 hover:bg-gray-200 hover:rounded px-5 py-2 transition-colors text-lg my-2" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
            <div className="mt-5 text-lg">
              <a href="tel:+79778840940" className="text-gray-800">
                +7 (977) 884-09-40
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}