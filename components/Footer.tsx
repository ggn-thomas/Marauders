import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Facebook, 
 
  Instagram,
  AtSign,
  MapPin
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image 
                src="/logo.png"
                alt="logo Marauders"
                width={40}
                height={40}
                className='rounded-full'
              />
              <span className="ml-3 text-xl font-bold text-white">
                Marauders
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 max-w-md">
              Club de football américain passionné, uni par l&apos;esprit d&apos;équipe et la détermination. 
              Rejoignez-nous pour vivre l&apos;expérience Marauders !
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/maraudersfootus" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#d71f1c] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/maraudersfootus/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#d71f1c] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              {[
                { name: "Accueil", href: "/" },
                { name: "Club", href: "/club" },
                { name: "Équipes", href: "/equipes" },
                { name: "Championnat", href: "/championnat" },
                { name: "Boutique", href: "/boutique" },
                { name: "Nous rejoindre", href: "/nous-rejoindre" }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-[#d71f1c] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d71f1c] mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#d71f1c] mt-0.5 flex-shrink-0" />
                <span>Stade Municipal<br />16130 Gensac-la-Pallue<br />France</span>
              </li>
              <li>
                <a 
                  href="mailto:maraudersfootus@gmail.com" 
                  className="text-gray-300 hover:text-[#d71f1c] transition-colors duration-300 flex items-center group">
                  <AtSign className="w-5 h-5 mr-3 text-[#d71f1c]" />
                  maraudersfootus@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Marauders Football Américain. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
