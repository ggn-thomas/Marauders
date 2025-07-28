'use client'

import React from 'react';
import Link from 'next/link';

interface Match {
  id: number;
  date: string;
  equipeAdverse: string;
  scoreMarauders: number;
  scoreAdverse: number;
  domicile: boolean;
  victoire: boolean;
}

const DerniersResultats: React.FC = () => {
  const matchs: Match[] = [
    {
      id: 1,
      date: '23 Mars 2024',
      equipeAdverse: 'Aurochs de Cahors',
      scoreMarauders: 14,
      scoreAdverse: 0,
      domicile: true,
      victoire: true
    },
    {
      id: 2,
      date: '09 Mars 2024',
      equipeAdverse: 'Aurochs de Cahors',
      scoreMarauders: 8,
      scoreAdverse: 22,
      domicile: false,
      victoire: false
    },
    {
      id: 3,
      date: '04 Fév 2024',
      equipeAdverse: 'Peaux Rouges',
      scoreMarauders: 35,
      scoreAdverse: 17,
      domicile: true,
      victoire: true
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Derniers Résultats
          </h2>
          <div className="w-24 h-1 bg-[#d71f1c] mx-auto"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full overflow-hidden">
          {matchs.map((match) => (
            <div 
              key={match.id} 
              className="bg-black rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-[#d71f1c] transition-colors duration-300 w-full min-w-0"
            >
              <div className="text-center">
                <div className="text-gray-400 text-sm mb-2">{match.date}</div>
                <div className="text-xs text-gray-500 mb-4">
                  {match.domicile ? 'DOMICILE' : 'EXTÉRIEUR'}
                </div>
                
                <div className="flex items-center justify-center mb-4 min-w-0">
                  <div className="flex-1 text-center min-w-0">
                    <div className="text-white font-bold text-sm sm:text-lg mb-2 truncate">Marauders</div>
                  </div>
                  
                  <div className="px-2 sm:px-4 flex-shrink-0">
                    <div className="text-white text-lg sm:text-xl font-bold">VS</div>
                  </div>
                  
                  <div className="flex-1 text-center min-w-0">
                    <div className="text-white font-bold text-sm sm:text-lg mb-2 truncate" title={match.equipeAdverse}>
                      {match.equipeAdverse}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 sm:w-16 text-center">
                    <div className={`text-2xl sm:text-3xl font-bold ${match.victoire ? 'text-white' : 'text-gray-400'}`}>
                      {match.scoreMarauders}
                    </div>
                  </div>
                  
                  <div className="px-3 sm:px-4">
                    <div className="text-white text-lg sm:text-xl font-bold">-</div>
                  </div>
                  
                  <div className="w-12 sm:w-16 text-center">
                    <div className={`text-2xl sm:text-3xl font-bold ${!match.victoire ? 'text-white' : 'text-gray-400'}`}>
                      {match.scoreAdverse}
                    </div>
                  </div>
                </div>
                
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  match.victoire 
                    ? 'bg-white/10 text-white border border-white/30' 
                    : 'bg-[#d71f1c]/20 text-[#d71f1c] border border-[#d71f1c]/30'
                }`}>
                  {match.victoire ? 'VICTOIRE' : 'DÉFAITE'}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/championnat#resultats"
            className="inline-block bg-[#d71f1c] hover:bg-[#b91a17] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Voir tous les résultats
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DerniersResultats;