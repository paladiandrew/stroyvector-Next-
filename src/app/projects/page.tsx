'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  { src: '/projects/a.jpg', alt: 'Проект A' },
  { src: '/projects/b.jpg', alt: 'Проект B' },
  { src: '/projects/c.jpg', alt: 'Проект C' },
  { src: '/projects/d.jpg', alt: 'Проект D' },
  { src: '/projects/e.jpg', alt: 'Проект E' },
  { src: '/projects/f.jpg', alt: 'Проект F' },
  { src: '/projects/g.jpg', alt: 'Проект G' },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  return (
    <div className="bg-dark text-white px-4 sm:px-6 lg:px-10 py-12 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 text-primary pt-[100px]">Наши Проекты</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group animate-slideInUp"
            onClick={() => setCurrentIndex(index)}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-lg font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity delay-150">
                {image.alt}
              </span>
            </div>
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setCurrentIndex(null)}
        >
          <div className="relative max-w-full max-h-full">
            <button 
              className="absolute -top-14 right-0 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl hover:bg-primary-hover transition-colors shadow-lg"
              onClick={() => setCurrentIndex(null)}
            >
              ✖
            </button>

            {currentIndex! > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl hover:bg-primary-hover transition-colors shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex((prev) => (prev !== null ? prev - 1 : prev));
                }}
              >
                ←
              </button>
            )}

            {currentIndex! < images.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl hover:bg-primary-hover transition-colors shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex((prev) => (prev !== null ? prev + 1 : prev));
                }}
              >
                →
              </button>
            )}

            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={1600}
              height={900}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}