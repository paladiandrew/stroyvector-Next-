'use client';

import React, { useEffect, useRef, useState } from 'react';

const servicesData = [
    {
        title: "Инженерные коммуникации",
        description: "Отопление, водоснабжение, канализация, сантехнические работы."
    },
    {
        title: "Электромонтажные работы",
        description: "Установка и подключение электрооборудования."
    },
    {
        title: "Строительство домов",
        description: "Строительство домов из пеноблоков, каркасные дома."
    },
    {
        title: "Плотницкие работы",
        description: "Выполняем все виды плотницких работ."
    },
    {
        title: "Укладка напольных покрытий",
        description: "Укладка всех типов напольных покрытий."
    },
    {
        title: "Гидроизоляционные работы",
        description: "Надежные гидроизоляционные решения."
    }
];

export default function Services() {
    const [isVisible, setIsVisible] = useState(false);
    const servicesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = servicesRef.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.01 });

        observer.observe(currentRef);

        return () => {
            observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div 
            ref={servicesRef}
            className={`py-12 px-[5%] w-full bg-dark ${isVisible ? 'animate-slideInUp' : ''}`}
            id="services"
        >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary">Наши Услуги</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.map((service, index) => (
                    <div 
                        key={index}
                        className="bg-dark-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                        <p className="text-white">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}