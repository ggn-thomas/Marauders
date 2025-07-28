'use client'

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/95 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo - ajusté pour mobile */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <Image 
                src="/logo.png"
                alt="logo Marauders"
                width={40}
                height={40}
                className='rounded-full flex-shrink-0'
            />
            <div className="ml-2 min-w-0">
              <span className="text-white font-bold text-base md:text-lg truncate">Marauders</span>
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

          {/* Mobile menu button - toujours visible */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 transition-all duration-200 ml-2"
              aria-label="Menu principal"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-40">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md border-t border-white/10 shadow-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-white block px-4 py-3 text-sm font-medium tracking-wide transition-colors duration-200 hover:bg-white/20 rounded-md border border-transparent hover:border-white/20"
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