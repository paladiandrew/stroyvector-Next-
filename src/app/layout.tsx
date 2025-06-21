import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
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
    "строительство домов",
    "инженерные коммуникации",
    "электромонтаж",
    "ООО СтройВектор",
    "Москва",
  ],
  openGraph: {
    title: "ООО \"СТРОЙВЕКТОР\" — Ремонтно-строительные услуги под ключ",
    description:
      "Профессиональные ремонтно-строительные услуги в Москве, Калуге, Туле и регионах ЦФО. Строительство домов, инженерные коммуникации, электромонтаж и другие работы под ключ.",
    url: "https://stroy-vector.com",
    siteName: "СтройВектор",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <Header />
        {children}
        <Footer />
        <YandexMetrica />
        <BackToTop />
      </body>
    </html>
  );
}
