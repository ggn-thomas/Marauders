'use client'

import React from 'react';
import Image from 'next/image';

interface Joueur {
  id: number;
  prenom: string;
  nom: string;
  age: number;
  poids: number;
  taille: number;
  poste: string;
  numero: number;
  photo: string;
}

interface Staff {
  id: number;
  prenom: string;
  nom: string;
  role: string;
  photo: string;
}

const EquipesPage: React.FC = () => {
  const attaque: Joueur[] = [
    { id: 1, prenom: "Thomas", nom: "Dubois", age: 24, poids: 85, taille: 180, poste: "QB", numero: 7, photo: "/personne.jpg" },
    { id: 2, prenom: "Pierre", nom: "Martin", age: 22, poids: 92, taille: 185, poste: "RB", numero: 23, photo: "/personne.jpg" },
    { id: 3, prenom: "Lucas", nom: "Bernard", age: 26, poids: 88, taille: 182, poste: "WR", numero: 11, photo: "/personne.jpg" },
    { id: 4, prenom: "Antoine", nom: "Moreau", age: 25, poids: 90, taille: 188, poste: "WR", numero: 81, photo: "/personne.jpg" },
    { id: 5, prenom: "Julien", nom: "Petit", age: 28, poids: 95, taille: 190, poste: "TE", numero: 85, photo: "/personne.jpg" },
    { id: 6, prenom: "Maxime", nom: "Roux", age: 27, poids: 110, taille: 195, poste: "OL", numero: 72, photo: "/personne.jpg" },
  ];

  const defense: Joueur[] = [
    { id: 7, prenom: "Vincent", nom: "Leroy", age: 25, poids: 105, taille: 188, poste: "DL", numero: 91, photo: "/personne.jpg" },
    { id: 8, prenom: "Nicolas", nom: "Garnier", age: 23, poids: 98, taille: 185, poste: "LB", numero: 52, photo: "/personne.jpg" },
    { id: 9, prenom: "Alexandre", nom: "Faure", age: 24, poids: 95, taille: 183, poste: "LB", numero: 55, photo: "/personne.jpg" },
    { id: 10, prenom: "Sylvain", nom: "Andre", age: 26, poids: 88, taille: 178, poste: "CB", numero: 21, photo: "/personne.jpg" },
    { id: 11, prenom: "Florian", nom: "Michel", age: 25, poids: 90, taille: 180, poste: "CB", numero: 24, photo: "/personne.jpg" },
    { id: 12, prenom: "David", nom: "Lopez", age: 27, poids: 93, taille: 185, poste: "S", numero: 31, photo: "/personne.jpg" },
  ];

  const specialTeams: Joueur[] = [
    { id: 13, prenom: "Jeremy", nom: "Blanc", age: 23, poids: 78, taille: 175, poste: "K", numero: 3, photo: "/personne.jpg" },
    { id: 14, prenom: "Cedric", nom: "Simon", age: 24, poids: 82, taille: 178, poste: "P", numero: 4, photo: "/personne.jpg" },
    { id: 15, prenom: "Olivier", nom: "Laurent", age: 22, poids: 85, taille: 180, poste: "LS", numero: 48, photo: "/personne.jpg" },
    { id: 16, prenom: "Sebastien", nom: "Girard", age: 25, poids: 90, taille: 183, poste: "KR", numero: 19, photo: "/personne.jpg" },
  ];

  const staff: Staff[] = [
    { id: 1, prenom: "Grégory", nom: "Bordat", role: "Président & Head Coach", photo: "/personne.jpg" },
    { id: 2, prenom: "Arnaud", nom: "Nicaise", role: "Co-Président & Coach Défense", photo: "/personne.jpg" },
    { id: 3, prenom: "François", nom: "Lalay", role: "Secrétaire & Coach Attaque", photo: "/personne.jpg" },
    { id: 4, prenom: "Justine", nom: "Becanne", role: "Trésorière", photo: "/personne.jpg" },
    { id: 5, prenom: "Marc", nom: "Dupont", role: "Coach Special Teams", photo: "/personne.jpg" },
  ];

  const JoueurCard: React.FC<{ joueur: Joueur }> = ({ joueur }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64">
        <Image
          src={joueur.photo}
          alt={`${joueur.prenom} ${joueur.nom}`}
          fill
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder-player.jpg';
          }}
        />
        <div className="absolute top-4 left-4 bg-[#d71f1c] text-white font-bold text-xl px-3 py-1 rounded">
          #{joueur.numero}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-black mb-2">
          {joueur.prenom} {joueur.nom}
        </h3>
        <p className="text-[#d71f1c] font-semibold mb-3">{joueur.poste}</p>
        <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
          <div>
            <span className="font-medium">Âge:</span> {joueur.age}
          </div>
          <div>
            <span className="font-medium">Poids:</span> {joueur.poids}kg
          </div>
          <div>
            <span className="font-medium">Taille:</span> {joueur.taille}cm
          </div>
        </div>
      </div>
    </div>
  );

  const StaffCard: React.FC<{ membre: Staff }> = ({ membre }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64">
        <Image
          src={membre.photo}
          alt={`${membre.prenom} ${membre.nom}`}
          fill
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder-coach.jpg';
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-black mb-2">
          {membre.prenom} {membre.nom}
        </h3>
        <p className="text-[#d71f1c] font-semibold">{membre.role}</p>
      </div>
    </div>
  );

  const Section: React.FC<{
    title: string;
    icon: string;
    joueurs?: Joueur[];
    staff?: Staff[];
    bgColor: string;
  }> = ({ title, icon, joueurs, staff, bgColor }) => (
    <section className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl mr-3">{icon}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              {title}
            </h2>
          </div>
          <div className="w-24 h-1 bg-[#d71f1c] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {joueurs && joueurs.map((joueur) => (
            <JoueurCard key={joueur.id} joueur={joueur} />
          ))}
          {staff && staff.map((membre) => (
            <StaffCard key={membre.id} membre={membre} />
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#d71f1c] to-black">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              L&apos;Équipe
            </h1>
            <p className="text-xl md:text-2xl">
              Roster Saison 2024
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <Section 
        title="Attaque" 
        icon="" 
        joueurs={attaque} 
        bgColor="bg-white" 
      />
      
      <Section 
        title="Défense" 
        icon="" 
        joueurs={defense} 
        bgColor="bg-gray-50" 
      />
      
      <Section 
        title="Special Teams" 
        icon="" 
        joueurs={specialTeams} 
        bgColor="bg-white" 
      />
      
      <Section 
        title="Coach & Staff" 
        icon="" 
        staff={staff} 
        bgColor="bg-gray-50" 
      />

      {/* Statistiques */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Effectif 2024-2025
            </h2>
            <div className="w-24 h-1 bg-[#d71f1c] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#d71f1c] mb-2">
                {attaque.length + defense.length + specialTeams.length}
              </div>
              <div className="text-gray-300">Joueurs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#d71f1c] mb-2">
                {staff.length}
              </div>
              <div className="text-gray-300">Staff</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#d71f1c] mb-2">
                {Math.round((attaque.reduce((sum, j) => sum + j.age, 0) + 
                           defense.reduce((sum, j) => sum + j.age, 0) + 
                           specialTeams.reduce((sum, j) => sum + j.age, 0)) / 
                          (attaque.length + defense.length + specialTeams.length))}
              </div>
              <div className="text-gray-300">Âge moyen</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#d71f1c] mb-2">10</div>
              <div className="text-gray-300">Années d&apos;exp.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipesPage;