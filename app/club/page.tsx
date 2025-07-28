'use client'

import React from 'react';
import Image from 'next/image';
import { MapPin, Calendar } from 'lucide-react';

const ClubPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#d71f1c] to-black">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Le Club
            </h1>
            <p className="text-xl md:text-2xl">
              L&apos;histoire des Marauders
            </p>
          </div>
        </div>
      </section>

      {/* Histoire du Club */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Notre Histoire
            </h2>
            <div className="w-24 h-1 bg-[#d71f1c] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Calendar className="text-[#d71f1c] mr-3" size={32} />
                <h3 className="text-2xl font-bold text-black">Fondé en 1995 à Roullet-Saint-Estèphe.</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                L&apos;association a été fondée en 1995 par Frédéric TANNÉ, Éric LABBÉ et Dominique CROCHARD à Roullet-Saint-Estèphe, à la suite de la disparition de la section football américain du Sporting Club Angoulême des Diables d&apos;Angoulême.
                Le club des Marauders a donc 30 ans cette année !
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Il est présidé par Grégory BORDAT et Arnaud NICAISE. Le bureau est aussi composé de François LALAY, secrétaire, et Justine BECANNE, trésorière.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d71f1c]">25+</div>
                  <div className="text-gray-600">Licenciés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d71f1c]">30</div>
                  <div className="text-gray-600">Années</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d71f1c]">+6</div>
                  <div className="text-gray-600">Matchs joués/an</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/old-team.jpeg"
                alt="Ancienne équipe des Marauders"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/image1.jpg';
                }}
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded">
                Équipe 1995 - Nos débuts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Président et Stade */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Président */}
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <Image
                  src="/greg.jpg"
                  alt="Président des Marauders"
                  width={300}
                  height={300}
                  className="rounded-full shadow-lg mx-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/image2.jpg';
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Grégory Bordat</h3>
              <p className="text-[#d71f1c] font-semibold mb-4">Président</p>
              <p className="text-gray-700 leading-relaxed">
                  &quot;Ayant rejoint le club en 2012, d&apos;abord en section Junior puis Senior, Grégory est devenu le Président du club au lancement de la saison de 2023. Au cours de sa deuxième année dans la section Sénior en D3, il a pris la place de coach en défense. Rôle qu&apos;il a gardé pendant deux années supplémentaires avant de partir en universitaire à Bordeaux et revenir chez les Marauders en 2021.&quot; 
              </p>
            </div>

            {/* Stade */}
            <div className="text-center">
              <div className="relative mb-6">
                <Image
                  src="/field.jpg"
                  alt="Stade des Marauders"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/image4.jpg';
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Stade Municipal</h3>
              <p className="text-[#d71f1c] font-semibold mb-4">Notre terrain de jeu</p>
              <p className="text-gray-700 leading-relaxed">
                Le stade municipal de Gensac-la-Pallue nous accueille pour tous nos entraînements 
                et matchs à domicile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localisation */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nous Trouver
            </h2>
            <div className="w-24 h-1 bg-[#d71f1c] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="text-[#d71f1c] mr-3" size={32} />
                <h3 className="text-2xl font-bold text-black">Stade Municipal</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-black mb-2">Adresse</h4>
                  <p className="text-gray-700">
                    Stade Municipal<br />
                    16130 Gensac-la-Pallue<br />
                    Charente, France
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Entraînements</h4>
                  <p className="text-gray-700">
                    Lundi et Jeudi : 20h00 - 22h00<br />
                    Dimanche : à définir (matchs)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Contact</h4>
                  <p className="text-gray-700">
                    Téléphone : +33 1 23 45 67 89<br />
                    Email : contact@marauders-football.com
                  </p>
                </div>
              </div>
            </div>
            
            {/* Google Maps */}
            <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.123456789!2d-0.1234567!3d45.6789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x123456789abcdef%3A0x123456789abcdef!2sGensac-la-Pallue%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du club Marauders"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubPage;