'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Partenaire {
  id: number;
  nom: string;
  logo: string;
  url?: string;
}

const PartenairesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partenaires: Partenaire[] = [
    {
      id: 1,
      nom: 'Sport Store',
      logo: '/sponsor1.png',
      url: 'https://example.com'
    },
    {
      id: 2,
      nom: 'Fitness Center',
      logo: '/sponsor2.png',
      url: 'https://example.com'
    },
    {
      id: 3,
      nom: 'Restaurant Local',
      logo: '/sponsor3.png',
      url: 'https://example.com'
    },
    {
      id: 4,
      nom: 'Banque Régionale',
      logo: '/sponsor4.png',
      url: 'https://example.com'
    },
    {
      id: 5,
      nom: 'Équipements Pro',
      logo: '/sponsor5.jpg',
      url: 'https://example.com'
    },
    {
      id: 6,
      nom: 'Media Sports',
      logo: '/sponsor6.png',
      url: 'https://example.com'
    },
    {
      id: 7,
      nom: 'Media Sports',
      logo: '/sponsor7.png',
      url: 'https://example.com'
    }
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, partenaires.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#d71f1c] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#d71f1c] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d71f1c] rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nos <span className="text-[#d71f1c]">Partenaires</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#d71f1c] to-black mx-auto mb-6"></div>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            <strong>Ils croient en notre vision</strong> et nous accompagnent dans notre passion pour le football américain
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {partenaires.map((partenaire) => (
                <div
                  key={partenaire.id}
                  className="flex-shrink-0 w-1/4 px-4"
                >
                  <div className="bg-white rounded-xl p-8 h-36 flex items-center justify-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-[#d71f1c]/20">
                    {partenaire.url ? (
                      <a 
                        href={partenaire.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center"
                      >
                        <Image
                          src={partenaire.logo}
                          alt={partenaire.nom}
                          width={120}
                          height={60}
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-all duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder-logo.png';
                          }}
                        />
                      </a>
                    ) : (
                      <Image
                        src={partenaire.logo}
                        alt={partenaire.nom}
                        width={120}
                        height={60}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder-logo.png';
                        }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white hover:bg-[#d71f1c] text-[#d71f1c] hover:text-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-10 border border-gray-200 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white hover:bg-[#d71f1c] text-[#d71f1c] hover:text-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-10 border border-gray-200 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#d71f1c] scale-125' : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
              }`}
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Devenez notre <span className="text-[#d71f1c]">partenaire</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Rejoignez notre communauté de partenaires et soutenez le développement du football américain en Charente
            </p>
            <a 
              href="mailto:maraudersfootus@gmail.com?subject=Partenariat%20Marauders"
              className="inline-flex items-center gap-2 bg-[#d71f1c] hover:bg-[#b91a17] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartenairesCarousel;