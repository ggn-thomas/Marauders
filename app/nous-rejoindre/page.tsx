'use client'

import React from 'react';
import Image from 'next/image';
import { Download, Euro, Calendar, Users, Shield, Trophy } from 'lucide-react';

const NousRejoindreePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#d71f1c] to-black">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Nous Rejoindre
            </h1>
            <p className="text-xl md:text-2xl">
              Devenez un Maraudeur !
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Rejoignez l'Aventure
            </h2>
            <div className="w-24 h-1 bg-[#d71f1c] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Le football américain vous attire ? Vous cherchez un sport collectif intense et stratégique ? 
              Les Marauders vous accueillent à bras ouverts !
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Pourquoi nous rejoindre ?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="text-[#d71f1c] mr-3 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-black">Esprit d'équipe</h4>
                    <p className="text-gray-700">Une famille soudée de plus de 25 licenciés</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Trophy className="text-[#d71f1c] mr-3 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-black">Compétition</h4>
                    <p className="text-gray-700">Championnat UFOLEP</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="text-[#d71f1c] mr-3 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-black">Encadrement</h4>
                    <p className="text-gray-700">Coaches expérimentés et location de matériel disponibles</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/image2.jpg"
                alt="Équipe des Marauders"
                width={500}
                height={350}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Tarifs
            </h2>
            <div className="w-24 h-1 bg-[#d71f1c] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Licence Adulte */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-[#d71f1c] mb-4">
                <Euro size={48} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Licence Adulte</h3>
              <div className="text-4xl font-bold text-[#d71f1c] mb-4">
                150€ TTC
              </div>
              <p className="text-gray-600 text-sm mb-6">Par saison (toute l'année)</p>
              <ul className="text-left text-gray-700 space-y-2">
                <li>• Licence UFOLEP</li>
                <li>• Assurance</li>
                <li>• Accès aux entraînements</li>
                <li>• Participation aux matchs</li>
              </ul>
            </div>

            {/* Licence Junior */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-[#d71f1c] mb-4">
                <Users size={48} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Licence Junior</h3>
              <div className="text-4xl font-bold text-[#d71f1c] mb-4">
                120€ TTC
              </div>
              <p className="text-gray-600 text-sm mb-6">Par saison (toute l'année)</p>
              <ul className="text-left text-gray-700 space-y-2">
                <li>• Licence UFOLEP</li>
                <li>• Assurance</li>
                <li>• Accès aux entraînements</li>
                <li>• Formation technique</li>
              </ul>
            </div>

            {/* Location Matériel */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center md:col-span-2 lg:col-span-1">
              <div className="text-[#d71f1c] mb-4">
                <Shield size={48} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Location Équipement</h3>
              <p className="text-gray-600 text-sm mb-6">Plusieurs packs disponibles</p>
              <div className="space-y-3 text-left">
                <div className="border-b pb-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-black">Pack 1</span>
                    <span className="text-[#d71f1c] font-bold">70€/an</span>
                  </div>
                  <p className="text-xs text-gray-600">Casque + épaulières + pantalon + pads</p>
                </div>
                <div className="border-b pb-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-black">Pack 2</span>
                    <span className="text-[#d71f1c] font-bold">40€/an</span>
                  </div>
                  <p className="text-xs text-gray-600">Casque OU épaulières + pantalon + pads</p>
                </div>
                <div className="border-b pb-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-black">Pack 3</span>
                    <span className="text-[#d71f1c] font-bold">30€/an</span>
                  </div>
                  <p className="text-xs text-gray-600">Casque ou épaulières</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-black">Pack 4</span>
                    <span className="text-[#d71f1c] font-bold">40€/an</span>
                  </div>
                  <p className="text-xs text-gray-600">Pantalon + pads</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h4 className="font-bold text-black mb-2">💡 Bon à savoir</h4>
              <p className="text-gray-700">
• Nous acceptons les règlements en carte bancaire (sur place), chèque (maximum 3 fois), chèques vacances ANCV, liquide, virement bancaire, virement via helloasso, ainsi que l'allocation rentrée scolaire sportive Pass'Sport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents et Inscription */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Documents et Inscription
            </h2>
            <div className="w-24 h-1 bg-[#d71f1c] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Documents nécessaires */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Documents nécessaires</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="text-[#d71f1c] mr-4" size={24} />
                  <div>
                    <h4 className="font-semibold text-black">Certificat médical</h4>
                    <p className="text-gray-600 text-sm">Obligatoire, moins de 3 mois</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Users className="text-[#d71f1c] mr-4" size={24} />
                  <div>
                    <h4 className="font-semibold text-black">Pièce d'identité</h4>
                    <p className="text-gray-600 text-sm">Copie recto-verso</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Euro className="text-[#d71f1c] mr-4" size={24} />
                  <div>
                    <h4 className="font-semibold text-black">Photo d'identité</h4>
                    <p className="text-gray-600 text-sm">Format numérique accepté</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Téléchargement */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Formulaire d'inscription</h3>
              <div className="bg-[#d71f1c] text-white rounded-lg p-8 text-center">
                <Download size={48} className="mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-4">Télécharger le dossier</h4>
                <p className="mb-6">
                  Téléchargez le formulaire d'inscription complet au format PDF
                </p>
                <a
                  href="/documents/inscription-marauders.pdf"
                  download="inscription-marauders.pdf"
                  className="inline-flex items-center bg-white text-[#d71f1c] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Download className="mr-2" size={20} />
                  Télécharger le PDF
                </a>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">📧 Envoi du dossier</h4>
                <p className="text-blue-800 text-sm">
                  Une fois complété, envoyez votre dossier à : 
                  <br />
                  <strong>maraudersfootus@gmail.com</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact et Informations pratiques */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Informations Pratiques
            </h2>
            <div className="w-24 h-1 bg-[#d71f1c] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Entraînements</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="text-[#d71f1c] mr-3" size={24} />
                  <div>
                    <h4 className="font-semibold text-black">Lundi et Jeudi</h4>
                    <p className="text-gray-600">20h00 - 22h00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-[#d71f1c] mr-3" size={24} />
                  <div>
                    <h4 className="font-semibold text-black">Dimanche (matchs)</h4>
                    <p className="text-gray-600">à définir</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-black mb-6 mt-8">Lieu</h3>
              <p className="text-gray-700">
                <strong>Stade Municipal</strong><br />
                16130 Gensac-la-Pallue<br />
                Charente, France
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Contact</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-black">Président</h4>
                  <p className="text-gray-700">Grégory Bordat</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Email</h4>
                  <p className="text-gray-700">maraudersfootus@gmail.com</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#d71f1c] text-white rounded-lg">
                <h4 className="text-xl font-bold mb-4">🏈 Essai gratuit</h4>
                <p className="mb-4">
                  Venez découvrir le football américain lors d'un entraînement d'essai !
                </p>
                <p className="text-sm">
                  Contactez-nous pour organiser votre première séance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NousRejoindreePage;