import Link from 'next/link';
import dynamic from 'next/dynamic';
import Spacer from '@/components/Spacer';

const About = dynamic(() => import('@/components/About'));
const Services = dynamic(() => import('@/components/Services'));
const Geography = dynamic(() => import('@/components/Geography'));
const ContactUs = dynamic(() => import('@/components/ContactUs'));

export default function Home() {
  return (
    <div className="text-left bg-dark-gray min-h-screen">
      {/* Hero Section */}
      <div
        className="h-screen flex items-center relative bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 144, 47, 0.85), rgba(255, 183, 91, 0.7)), url(/images/cover.jpg)",
        }}
      >
        <div className="w-full px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-32 lg:translate-y-24">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl font-bold mb-6 text-left max-w-3xl animate-fadeInLeft"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Мы обеспечиваем качественные ремонтно-строительные услуги, на которые можно положиться.
          </h1>
          <p 
            className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl mb-8 text-left leading-relaxed animate-fadeInLeft"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Свяжитесь с нами, и начнем реализовывать ваши мечты!
          </p>
          <div className="text-left animate-slide-up animate-delay-2000">
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gray-900/80 text-white text-xl rounded-md transition-all duration-300 hover:bg-white hover:text-gray-900 hover:shadow-lg hover:-translate-y-1"
            >
              Связаться с нами
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </div>

      <Spacer />
      <About />
      <Spacer />
      <Services />
      <Spacer />
      <Geography />
      <Spacer />
      <ContactUs />
    </div>
  );
}