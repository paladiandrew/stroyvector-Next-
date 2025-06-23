import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import YandexMetrica from "@/components/YandexMetrica";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ООО \"СТРОЙВЕКТОР\" — Ремонтно-строительные услуги под ключ",
  description:
    "Профессиональные ремонтно-строительные услуги в Москве, Калуге, Туле и регионах ЦФО. Строительство домов, инженерные коммуникации, электромонтаж и другие работы под ключ.",
  metadataBase: new URL("https://stroy-vector.com"),
  keywords: [
    "ремонтно-строительные услуги",
    "ремонт",
    "ремонт квартир",
    "ремонт квартир под ключ",
    "ремонт квартир в Москве",
    "ремонт квартир в Калуге",
    "ремонт квартир в Туле",
    "ремонт квартир в Наро-Фоминске",
    "ремонт квартир в Владимирской области",
    "инженерные коммуникации",
    "сантехника",
    "электромонтаж",
    "монтажные работы",
    "строительство",
    "строительные работы",
    "строительство домов",
    "строительство домов под ключ",
    "ООО СТРОЙВЕКТОР",
    "Москва",
  ],
  openGraph: {
    title: "ООО \"СТРОЙВЕКТОР\" — Ремонтно-строительные услуги под ключ",
    description:
      "Профессиональные ремонтно-строительные услуги в Москве, Калуге, Туле и регионах ЦФО. Строительство домов, инженерные коммуникации, электромонтаж и другие работы под ключ.",
    url: "https://stroy-vector.com",
    siteName: "СТРОЙВЕКТОР",
    images: [
      {
        url: "/images/cover.jpg",
        width: 1200,
        height: 630,
        alt: "ООО \"СТРОЙВЕКТОР\" — ремонтно-строительные услуги",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ООО \"СТРОЙВЕКТОР\" — Ремонтно-строительные услуги под ключ",
    description:
      "Профессиональные ремонтно-строительные услуги в Москве, Калуге, Туле и регионах ЦФО.",
    images: ["/images/cover.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#434343" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://mc.yandex.ru" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ООО \"СТРОЙВЕКТОР\"",
              url: "https://stroy-vector.com",
              logo: "https://stroy-vector.com/images/MainLogo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+7-977-884-09-40",
                contactType: "customer service",
                areaServed: "RU",
                availableLanguage: ["Russian"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "RU",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only bg-white text-black p-2 absolute top-2 left-2 z-[10000] rounded">
          Перейти к содержимому
        </a>
        <Header />
        <main id="main-content" className="flex-1 bg-dark">
          {children}
        </main>
        <Footer />
        <YandexMetrica />
        <CookieBanner />
        <BackToTop />
      </body>
    </html>
  );
}
