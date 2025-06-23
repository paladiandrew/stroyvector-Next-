'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import MapLeaflet to avoid SSR issues
const MapLeaflet = dynamic(() => import('@/components/MapLeaflet'), { ssr: false });

export default function Geography() {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-dark text-white p-[5%] rounded-2xl shadow-lg mx-[3%] gap-6 lg:gap-4">
      <div className="lg:w-1/2 w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-5">Где мы работаем</h2>
        <div className="text-xl mb-4 leading-relaxed">
          Наша компания предоставляет услуги в следующих регионах: 
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li className="mb-1">Москва</li>
            <li className="mb-1">Калуга</li>
            <li className="mb-1">Тула</li>
            <li className="mb-1">Наро-Фоминск</li>
            <li>Владимир</li>
          </ul>
        </div>
        <p className="text-xl leading-relaxed">
          Мы учитываем местные особенности и предпочтения, чтобы предоставить вам услуги, соответствующие вашим ожиданиям.
        </p>
      </div>
      
      <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
        <MapLeaflet />
      </div>
      {/* ссылки на города убраны по запросу */}
    </div>
  );
}