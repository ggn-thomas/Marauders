import {Bebas_Neue} from 'next/font/google'
import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'
import DerniersResultats from '@/components/DerniersResultats'
import PhotosInstagram from '@/components/PhotosInstagram'
import PartenairesCarousel from '@/components/PartenairesCarousel'

export default function Home() {
  return (
    <div>
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url(/background.jpg)' }}
      >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="min-h-screen bg-black/40 flex items-center justify-center">
        <div className="text-center text-[#d71f1c]">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Let's go Marauders
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Club de football américain
          </p>
          <Link 
            href="/nous-rejoindre"
            className="inline-flex items-center gap-3 bg-[#d71f1c] hover:bg-[#b91a17] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group border-2 border-transparent hover:border-white/20"
          >
            <Users size={24} className="group-hover:scale-110 transition-transform duration-300" />
            Nous rejoindre
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
        </div>
      </div>
      <DerniersResultats />
      <PhotosInstagram />
      <PartenairesCarousel />
    </div>
  )
}