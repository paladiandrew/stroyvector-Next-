'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = aboutRef.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true); 
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.01
        });

        observer.observe(currentRef);

        return () => {
            observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div 
            ref={aboutRef}
            className={`flex flex-col lg:flex-row justify-between items-center bg-dark text-white p-8 rounded-2xl shadow-lg mx-[5%] ${
                isVisible ? 'animate-fadeInLeft' : ''
            }`}
        >
            <div className="lg:max-w-[40%] mb-8 lg:mb-0">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-5">О нас</h2>
                <p className="text-lg lg:text-xl mb-4 leading-relaxed">
                    Мы – команда профессионалов, которая предоставляет высококачественные ремонтно-строительные услуги. 
                    Наша миссия – сделать ваш дом уютнее и функциональнее, используя современные технологии и лучшие практики в строительстве.
                </p>
                <p className="text-lg lg:text-xl leading-relaxed">
                    Мы ценим доверие наших клиентов и стремимся к долгосрочному сотрудничеству.
                </p>
            </div>
            
            <div className="w-full lg:w-1/2 h-64 lg:h-96 relative">
                <Image
                    src="/images/cover.jpg"
                    alt="Команда строителей за работой"
                    fill
                    className="rounded-xl shadow-md object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>
        </div>
    );
}