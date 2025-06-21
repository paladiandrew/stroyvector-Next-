import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="bg-dark text-white py-12 px-[5%] text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-5">Свяжитесь с нами</h2>
      <p className="text-xl mb-8 leading-relaxed max-w-4xl mx-auto">
        Мы всегда готовы помочь вам! Если у вас есть вопросы или вы хотите обсудить ваш проект, 
        пожалуйста, свяжитесь с нами. Вы также можете ознакомиться с нашими примерами работ, 
        чтобы лучше понять наш стиль и качество.
      </p>
      <div className="flex justify-center gap-5 flex-wrap">
        <Link 
          href="/projects" 
          className="bg-primary text-white px-6 py-3 rounded-md text-lg
                    hover:bg-primary-hover transition-colors duration-300
                    md:px-5 md:py-2 md:text-base"
        >
          Примеры работ
        </Link>
        <Link 
          href="/contacts" 
          className="bg-primary text-white px-6 py-3 rounded-md text-lg
                    hover:bg-primary-hover transition-colors duration-300
                    md:px-5 md:py-2 md:text-base"
        >
          Контакты
        </Link>
      </div>
    </div>
  );
}