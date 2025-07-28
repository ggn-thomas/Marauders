'use client'

import React from 'react';
import Image from 'next/image';
import { MapPin, Trophy, Calendar, Users, Star, Target } from 'lucide-react';

const ChampionnatPage: React.FC = () => {

  const poules = {
    atlantiqueSud: [
      {
        id: 'marauders',
        name: 'Les Marauders',
        ville: 'Gensac-La-Pallue',
        color: '#d71f1c'
      },
      {
        id: 'ducks',
        name: 'Les Ducks',
        ville: 'Gardonne',
        color: '#1f5f99'
      },
      {
        id: 'peaux-rouges',
        name: 'Les Peaux Rouges',
        ville: 'Mios',
        color: '#8B4513'
      },
      {
        id: 'aurochs',
        name: 'Les Aurochs',
        ville: 'Cahors',
        color: '#2D5016'
      }
    ],
    atlantiqueNord: [
      {
        id: 'hussards',
        name: 'Les Hussards',
        ville: 'La Roche/Yon',
        color: '#8B008B'
      },
      {
        id: 'gladiators',
        name: 'Les Gladiators',
        ville: 'Niort',
        color: '#DAA520'
      },
      {
        id: 'bridges',
        name: 'The Bridges',
        ville: 'St Nazaire',
        color: '#006400'
      },
      {
        id: 'alligators',
        name: 'Les Alligators',
        ville: 'Rochefort',
        color: '#FF6347'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#d71f1c] to-black">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <Trophy className="mx-auto mb-4" size={64} />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              UFOLEP
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Hexagonal Challenge
            </h2>
            <p className="text-xl md:text-2xl">
              2024-2025
            </p>
          </div>
        </div>
        {/* Image UFOLEP à droite du titre sur desktop seulement */}
        <div className="hidden md:block absolute top-1/2 right-1/6 transform -translate-y-2/5 z-20">
          <Image
            src="/championnat-ufolep.png"
            alt="Championnat UFOLEP"
            width={315}
            height={225}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Image UFOLEP sur mobile */}
      <section className="md:hidden py-8 bg-gradient-to-r from-[#d71f1c] to-black">
        <div className="max-w-6xl mx-auto px-4 flex justify-center">
          <Image
            src="/championnat-ufolep.png"
            alt="Championnat UFOLEP"
            width={250}
            height={179}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Présentation du Championnat */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Le Championnat
            </h2>
            <div className="w-24 h-1 bg-[#d71f1c] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              L&apos;UFOLEP Hexagonal Challenge réunit les meilleures équipes de football américain 
              de France dans un format compétitif et convivial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-[#d71f1c] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">8 Équipes</h3>
              <p className="text-gray-600">Réparties en 2 poules</p>
            </div>
            <div className="text-center">
              <div className="bg-[#d71f1c] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Saison</h3>
              <p className="text-gray-600">De septembre à juin</p>
            </div>
            <div className="text-center">
              <div className="bg-[#d71f1c] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Format</h3>
              <p className="text-gray-600">Matches aller-retour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Les Poules */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Les Poules
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 w-full">
            {/* Poule Atlantique Sud */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-4 sm:p-6 w-full min-w-0">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 text-center">
                Poule Atlantique Sud
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {poules.atlantiqueSud.map((club) => (
                  <div key={club.id} className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-50 rounded min-w-0">
                    <div className="flex items-center min-w-0 flex-1">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-base sm:text-lg font-bold text-black truncate">{club.name}</h4>
                        <p className="text-gray-600 flex items-center text-sm">
                          <MapPin size={14} className="mr-1 flex-shrink-0" />
                          <span className="truncate">{club.ville}</span>
                        </p>
                      </div>
                    </div>
                    {club.id === 'marauders' && (
                      <Star className="text-[#d71f1c] flex-shrink-0 ml-2" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Poule Atlantique Nord */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-4 sm:p-6 w-full min-w-0">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 text-center">
                Poule Atlantique Nord
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {poules.atlantiqueNord.map((club) => (
                  <div key={club.id} className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-50 rounded min-w-0">
                    <div className="flex items-center min-w-0 flex-1">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-base sm:text-lg font-bold text-black truncate">{club.name}</h4>
                        <p className="text-gray-600 flex items-center text-sm">
                          <MapPin size={14} className="mr-1 flex-shrink-0" />
                          <span className="truncate">{club.ville}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classement Final */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
              Classement Final 2024-2025
            </h2>
            <div className="w-24 h-1 bg-[#d71f1c] mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-700">
              Résultats finaux des poules Atlantiques
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto shadow-lg">
            <table className="w-full min-w-[500px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-1 sm:px-3 py-2 text-left text-xs font-semibold text-black">Position</th>
                  <th className="px-1 sm:px-3 py-2 text-left text-xs font-semibold text-black">Équipe</th>
                  <th className="px-1 sm:px-3 py-2 text-center text-xs font-semibold text-black">Poule</th>
                  <th className="px-1 sm:px-3 py-2 text-center text-xs font-semibold text-black">Points</th>
                  <th className="px-1 sm:px-3 py-2 text-center text-xs font-semibold text-black">Victoires</th>
                  <th className="px-1 sm:px-3 py-2 text-center text-xs font-semibold text-black">Défaites</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-yellow-50">
                  <td className="px-1 sm:px-3 py-2 text-xs font-bold text-black">1</td>
                  <td className="px-1 sm:px-3 py-2 text-xs font-bold text-black">Les Hussards</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">Atlantique Nord</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center font-bold text-black">21</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">7</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">0</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-1 sm:px-3 py-2 text-xs font-bold text-black">2</td>
                  <td className="px-1 sm:px-3 py-2 text-xs font-bold text-black">Les Ducks</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">Atlantique Sud</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center font-bold text-black">18</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">6</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">1</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-1 sm:px-3 py-2 text-xs font-bold text-black">3</td>
                  <td className="px-1 sm:px-3 py-2 text-xs font-bold text-black">Les Marauders</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">Atlantique Sud</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center font-bold text-black">15</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">5</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">2</td>
                </tr>
                <tr>
                  <td className="px-1 sm:px-3 py-2 text-xs font-bold text-black">4</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-black">Les Gladiators</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">Atlantique Nord</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center font-bold text-black">15</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">5</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">2</td>
                </tr>
                <tr>
                  <td className="px-1 sm:px-3 py-2 text-xs font-bold text-black">5</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-black">Les Aurochs</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">Atlantique Sud</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center font-bold text-black">12</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">4</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">3</td>
                </tr>
                <tr>
                  <td className="px-1 sm:px-3 py-2 text-xs font-bold text-black">6</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-black">The Bridges</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">Atlantique Nord</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center font-bold text-black">9</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">3</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">4</td>
                </tr>
                <tr>
                  <td className="px-1 sm:px-3 py-2 text-xs font-bold text-black">7</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-black">Les Peaux Rouges</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">Atlantique Sud</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center font-bold text-black">6</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">2</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">5</td>
                </tr>
                <tr>
                  <td className="px-1 sm:px-3 py-2 text-xs font-bold text-black">8</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-black">Les Alligators</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">Atlantique Nord</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center font-bold text-black">3</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">1</td>
                  <td className="px-1 sm:px-3 py-2 text-xs text-center text-black">6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Résultats de la saison */}
      <section id="resultats" className="py-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
              Saison des Marauders 2024-2025
            </h2>
            <div className="w-24 h-1 bg-[#d71f1c] mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-700">
              Tous les matchs de notre équipe en poule Atlantique Sud
            </p>
          </div>

          <div className="max-w-4xl mx-auto w-full">
            {/* Poule Atlantique Sud */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 text-center">
                Tous les matchs des Marauders
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {/* Journée 1 */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4 w-full min-w-0">
                  <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Journée 1 - 15 septembre</h4>
                  <div className="space-y-2">
                    <div className="flex items-center p-2 sm:p-3 bg-white rounded border border-l-2 border-l-[#d71f1c] min-w-0">
                      <span className="font-medium w-1/3 text-right pr-2 text-xs sm:text-sm truncate">Les Marauders</span>
                      <span className="text-lg sm:text-2xl font-bold w-1/3 text-center flex-shrink-0">21 - 14</span>
                      <span className="font-medium w-1/3 text-left pl-2 text-xs sm:text-sm truncate">Les Peaux Rouges</span>
                    </div>
                    <div className="flex items-center p-2 sm:p-3 bg-white rounded border min-w-0">
                      <span className="font-medium w-1/3 text-right pr-2 text-xs sm:text-sm truncate">Les Ducks</span>
                      <span className="text-lg sm:text-2xl font-bold w-1/3 text-center flex-shrink-0">28 - 7</span>
                      <span className="font-medium w-1/3 text-left pl-2 text-xs sm:text-sm truncate">Les Aurochs</span>
                    </div>
                  </div>
                </div>

                {/* Journée 2 */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4 w-full min-w-0">
                  <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Journée 2 - 22 septembre</h4>
                  <div className="space-y-2">
                    <div className="flex items-center p-2 sm:p-3 bg-white rounded border border-r-2 border-r-[#d71f1c] min-w-0">
                      <span className="font-medium w-1/3 text-right pr-2 text-xs sm:text-sm truncate">Les Aurochs</span>
                      <span className="text-lg sm:text-2xl font-bold w-1/3 text-center flex-shrink-0">17 - 24</span>
                      <span className="font-medium w-1/3 text-left pl-2 text-xs sm:text-sm truncate">Les Marauders</span>
                    </div>
                    <div className="flex items-center p-2 sm:p-3 bg-white rounded border min-w-0">
                      <span className="font-medium w-1/3 text-right pr-2 text-xs sm:text-sm truncate">Les Peaux Rouges</span>
                      <span className="text-lg sm:text-2xl font-bold w-1/3 text-center flex-shrink-0">10 - 35</span>
                      <span className="font-medium w-1/3 text-left pl-2 text-xs sm:text-sm truncate">Les Ducks</span>
                    </div>
                  </div>
                </div>

                {/* Journée 3 */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4 w-full min-w-0">
                  <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Journée 3 - 6 octobre</h4>
                  <div className="space-y-2">
                    <div className="flex items-center p-2 sm:p-3 bg-white rounded border border-r-2 border-r-[#d71f1c] min-w-0">
                      <span className="font-medium w-1/3 text-right pr-2 text-xs sm:text-sm truncate">Les Ducks</span>
                      <span className="text-lg sm:text-2xl font-bold w-1/3 text-center flex-shrink-0">31 - 28</span>
                      <span className="font-medium w-1/3 text-left pl-2 text-xs sm:text-sm truncate">Les Marauders</span>
                    </div>
                    <div className="flex items-center p-2 sm:p-3 bg-white rounded border min-w-0">
                      <span className="font-medium w-1/3 text-right pr-2 text-xs sm:text-sm truncate">Les Aurochs</span>
                      <span className="text-lg sm:text-2xl font-bold w-1/3 text-center flex-shrink-0">21 - 7</span>
                      <span className="font-medium w-1/3 text-left pl-2 text-xs sm:text-sm truncate">Les Peaux Rouges</span>
                    </div>
                  </div>
                </div>

                {/* Journée 4 */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4 w-full min-w-0">
                  <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Journée 4 - 20 octobre</h4>
                  <div className="space-y-2">
                    <div className="flex items-center p-2 sm:p-3 bg-white rounded border border-l-2 border-l-[#d71f1c] min-w-0">
                      <span className="font-medium w-1/3 text-right pr-2 text-xs sm:text-sm truncate">Les Marauders</span>
                      <span className="text-lg sm:text-2xl font-bold w-1/3 text-center flex-shrink-0">35 - 14</span>
                      <span className="font-medium w-1/3 text-left pl-2 text-xs sm:text-sm truncate">Les Aurochs</span>
                    </div>
                    <div className="flex items-center p-2 sm:p-3 bg-white rounded border min-w-0">
                      <span className="font-medium w-1/3 text-right pr-2 text-xs sm:text-sm truncate">Les Ducks</span>
                      <span className="text-lg sm:text-2xl font-bold w-1/3 text-center flex-shrink-0">42 - 3</span>
                      <span className="font-medium w-1/3 text-left pl-2 text-xs sm:text-sm truncate">Les Peaux Rouges</span>
                    </div>
                  </div>
                </div>

                {/* Journée 5 */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4 w-full min-w-0">
                  <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Journée 5 - 3 novembre</h4>
                  <div className="space-y-2">
                    <div className="flex items-center p-2 sm:p-3 bg-white rounded border border-r-2 border-r-[#d71f1c] min-w-0">
                      <span className="font-medium w-1/3 text-right pr-2 text-xs sm:text-sm truncate">Les Peaux Rouges</span>
                      <span className="text-lg sm:text-2xl font-bold w-1/3 text-center flex-shrink-0">14 - 28</span>
                      <span className="font-medium w-1/3 text-left pl-2 text-xs sm:text-sm truncate">Les Marauders</span>
                    </div>
                    <div className="flex items-center p-2 sm:p-3 bg-white rounded border min-w-0">
                      <span className="font-medium w-1/3 text-right pr-2 text-xs sm:text-sm truncate">Les Aurochs</span>
                      <span className="text-lg sm:text-2xl font-bold w-1/3 text-center flex-shrink-0">21 - 35</span>
                      <span className="font-medium w-1/3 text-left pl-2 text-xs sm:text-sm truncate">Les Ducks</span>
                    </div>
                  </div>
                </div>

                {/* Journée 6 */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4 w-full min-w-0">
                  <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Journée 6 - 17 novembre</h4>
                  <div className="space-y-2">
                    <div className="flex items-center p-2 sm:p-3 bg-white rounded border border-l-2 border-l-[#d71f1c] min-w-0">
                      <span className="font-medium w-1/3 text-right pr-2 text-xs sm:text-sm truncate">Les Marauders</span>
                      <span className="text-lg sm:text-2xl font-bold w-1/3 text-center flex-shrink-0">42 - 21</span>
                      <span className="font-medium w-1/3 text-left pl-2 text-xs sm:text-sm truncate">Les Ducks</span>
                    </div>
                    <div className="flex items-center p-2 sm:p-3 bg-white rounded border min-w-0">
                      <span className="font-medium w-1/3 text-right pr-2 text-xs sm:text-sm truncate">Les Peaux Rouges</span>
                      <span className="text-lg sm:text-2xl font-bold w-1/3 text-center flex-shrink-0">7 - 14</span>
                      <span className="font-medium w-1/3 text-left pl-2 text-xs sm:text-sm truncate">Les Aurochs</span>
                    </div>
                  </div>
                </div>

                {/* Journée 7 - Match retour */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4 w-full min-w-0">
                  <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">Journée 7 - 1er décembre</h4>
                  <div className="space-y-2">
                    <div className="flex items-center p-2 sm:p-3 bg-white rounded border border-r-2 border-r-[#d71f1c] min-w-0">
                      <span className="font-medium w-1/3 text-right pr-2 text-xs sm:text-sm truncate">Les Ducks</span>
                      <span className="text-lg sm:text-2xl font-bold w-1/3 text-center flex-shrink-0">24 - 17</span>
                      <span className="font-medium w-1/3 text-left pl-2 text-xs sm:text-sm truncate">Les Marauders</span>
                    </div>
                    <div className="flex items-center p-2 sm:p-3 bg-white rounded border min-w-0">
                      <span className="font-medium w-1/3 text-right pr-2 text-xs sm:text-sm truncate">Les Aurochs</span>
                      <span className="text-lg sm:text-2xl font-bold w-1/3 text-center flex-shrink-0">28 - 0</span>
                      <span className="font-medium w-1/3 text-left pl-2 text-xs sm:text-sm truncate">Les Peaux Rouges</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistiques de la saison */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">
              Statistiques des Marauders
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-[#d71f1c] text-white rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">5</div>
                <div className="text-sm opacity-90">Victoires</div>
              </div>
              <div className="bg-gray-800 text-white rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="text-sm opacity-90">Défaites</div>
              </div>
              <div className="bg-[#d71f1c] text-white rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">187</div>
                <div className="text-sm opacity-90">Points marqués</div>
              </div>
              <div className="bg-gray-800 text-white rounded-lg p-6 text-center">
                <div className="text-3xl font-bold mb-2">137</div>
                <div className="text-sm opacity-90">Points encaissés</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations UFOLEP */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              À Propos de l&apos;UFOLEP
            </h2>
            <div className="w-24 h-1 bg-[#d71f1c] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                L&apos;UFOLEP (Union Française des Œuvres Laïques d&apos;Éducation Physique) est une 
                fédération multisports qui organise des championnats dans un esprit convivial 
                et éducatif.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#d71f1c] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Valeurs éducatives</h4>
                    <p className="text-gray-600">Sport accessible à tous, formation des jeunes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#d71f1c] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Esprit convivial</h4>
                    <p className="text-gray-600">Compétition dans le respect et la fair-play</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#d71f1c] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Développement local</h4>
                    <p className="text-gray-600">Soutien aux clubs et territoires</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-4">Hexagonal Challenge</h3>
                <p className="text-gray-700 mb-6">
                  Le championnat UFOLEP de football américain réunit les meilleures équipes 
                  de France dans un format unique et passionnant.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#d71f1c]">8</div>
                    <div className="text-gray-600 text-sm">Équipes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#d71f1c]">2</div>
                    <div className="text-gray-600 text-sm">Poules</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChampionnatPage;