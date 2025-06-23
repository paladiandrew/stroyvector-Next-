'use client';

import { cities } from '@/data/cities';
import type { Metadata } from 'next';
import Link from 'next/link';

interface Params {
  city: string;
}

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const entry = cities.find((c) => c.slug === params.city);
  const cityName = entry?.name ?? params.city;
  return {
    title: `Ремонтно-строительные услуги в ${cityName} — СТРОЙВЕКТОР`,
    description: `СТРОЙВЕКТОР предоставляет ремонт, строительство домов, инженерные сети и сантехнические услуги в ${cityName} и области.`,
    openGraph: {
      title: `Ремонтно-строительные услуги в ${cityName} — СТРОЙВЕКТОР`,
      description: `СТРОЙВЕКТОР предоставляет ремонт, строительство домов, инженерные сети и сантехнические услуги в ${cityName} и области.`,
      url: `https://stroy-vector.com/regions/${params.city}`,
      siteName: 'СТРОЙВЕКТОР',
    },
    alternates: { canonical: `https://stroy-vector.com/regions/${params.city}` },
  };
}

export default function CityPage({ params }: { params: Params }) {
  const entry = cities.find((c) => c.slug === params.city);
  const cityName = entry?.name ?? params.city;
  return (
    <div className="bg-dark text-white px-4 sm:px-6 lg:px-10 py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-primary pt-[100px]">
        Ремонтно-строительные услуги в {cityName}
      </h1>
      <p className="max-w-3xl leading-relaxed mb-8">
        Компания <span className="font-semibold">СТРОЙВЕКТОР</span> оказывает профессиональные ремонтные и строительные услуги
        «под ключ» в {cityName} и прилегающих населённых пунктах. Мы выполняем комплексные строительные работы, инженерные
        коммуникации, сантехнические и электромонтажные услуги.
      </p>
      <p className="max-w-3xl leading-relaxed mb-8">
        Нужен ремонт квартиры, строительство частного дома или укладка инженерных сетей? Свяжитесь с нами — обеспечим высокое
        качество по разумной цене.
      </p>
      <Link href="/contacts" className="inline-block px-8 py-4 bg-primary text-white rounded hover:bg-primary-hover transition-colors">
        Связаться с нами
      </Link>
    </div>
  );
} 