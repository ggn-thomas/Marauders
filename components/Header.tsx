'use client'

import React, { useState } from 'react';
import { MoreVertical, X } from 'lucide-react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'CLUB', href: '/club' },
    { name: 'ÉQUIPES', href: '/equipes' },
    { name: 'CHAMPIONNAT', href: '/championnat' },
    { name: 'BOUTIQUE', href: '/boutique' },
    { name: 'NOUS REJOINDRE', href: '/nous-rejoindre' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image 
                src="/logo.png"
                alt="logo Marauders"
                width={50}
                height={50}
                className='rounded-full'
            />
                <div className="ml-3">
              <span className="text-white font-bold text-lg">Marauders</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 hover:bg-white/10 rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-white hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 transition-all duration-200"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <MoreVertical className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/70 backdrop-blur-md border-t border-white/10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white block px-3 py-2 text-base font-medium tracking-wide transition-colors duration-200 hover:bg-white/10 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;