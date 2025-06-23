import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark text-white text-center p-8">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Страница не найдена</p>
      <Link href="/" className="px-6 py-3 bg-primary text-white rounded hover:bg-primary-hover transition-colors">
        На главную
      </Link>
    </div>
  );
} 