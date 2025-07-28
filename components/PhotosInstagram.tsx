'use client'

import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  alt: string;
}

const PhotosInstagram: React.FC = () => {
  const photos: Photo[] = [
    {
      id: 1,
      src: '/image8.jpg',
      alt: 'Marauders en action'
    },
    {
      id: 2,
      src: '/image2.jpg',
      alt: 'Équipe Marauders'
    },
    {
      id: 3,
      src: '/image10.jpg',
      alt: 'Entraînement Marauders'
    },
    {
      id: 4,
      src: '/image4.jpg',
      alt: 'Match Marauders'
    },
    {
      id: 5,
      src: '/image9.jpg',
      alt: 'Célébration Marauders'
    },
    {
      id: 6,
      src: '/image6.jpg',
      alt: 'Supporters Marauders'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="text-[#d71f1c] mr-3" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Suivez nous sur Instagram
            </h2>
          </div>
          <div className="w-24 h-1 bg-[#d71f1c] mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            @maraudersfootus
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {photos.map((photo) => (
            <div 
              key={photo.id}
              className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder-photo.jpg';
                }}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white" size={24} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://instagram.com/maraudersfootus" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#d71f1c] hover:bg-[#b91a17] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            <Instagram className="mr-2" size={20} />
            Voir plus sur Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default PhotosInstagram;