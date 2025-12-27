import { useState } from "react";
import React from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { id: 1, name: 'home', href: '#home' },
    { id: 2, name: 'about', href: '#about' },
    { id: 3, name: 'Learning Journey', href: '#experience' },
    { id: 4, name: 'Projects', href: '#projects' },
    { id: 5, name: 'contact', href: '#contact' },
    { id: 6, name: 'cv', href: '#cv' },

  ];

  return (
    <header className="fixed top-2 left-0 right-0 z-50 bg-black/90 border-b border-neutral-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center ">

        {/* الشعار مع الصورة المصغرة */}
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity translate-x-3 ">
          <div className="w-10 h-10 rounded-full border-2 border-[#a855f7] overflow-hidden shadow-sm shadow-[#a855f7]/50">
            <img src="../assets/i.png" alt="logo" className="w-full h-full object-cover " />
          </div>
          <span className="text-white font-bold text-xl tracking-tighter">
            Islam <span className="text-[#a855f7]">Naim</span>
          </span>
        </a>

        <nav className="hidden sm:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                {link.name === 'cv' ? (
                  <a
                    href="/Islam_Naim_CV.pdf"
                    download="Islam_Naim_CV.pdf"
                    className="text-neutral-400 hover:text-white text-lg transition-colors cursor-pointer"
                  >
                    {t(link.name)}
                  </a>
                ) : (
                  <a href={link.href} className="text-neutral-400 hover:text-white text-lg transition-colors">
                    {t(link.name)}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <button onClick={toggleLanguage} className="bg-neutral-800 text-white border border-neutral-700 px-4 py-1.5 rounded-full font-medium text-sm hover:bg-white hover:text-black transition-all">
            {i18n.language === 'en' ? 'TR' : 'EN'}
          </button>
        </nav>

        <button className="sm:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>      <div className={`absolute top-full left-0 w-full bg-black border-b border-neutral-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-5' : 'max-h-0'}`}>
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.name === 'cv' ? (
                <a
                  href="/Islam_Naim_CV.pdf"
                  download="Islam_Naim_CV.pdf"
                  className="text-neutral-400 text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {t(link.name)}
                </a>
              ) : (
                <a href={link.href} className="text-neutral-400 text-xl" onClick={() => setIsOpen(false)}>
                  {t(link.name)}
                </a>
              )}
            </li>
          ))}
          <button onClick={toggleLanguage} className="text-[#a855f7] font-bold py-2">
            {i18n.language === 'en' ? 'TÜRKÇE' : 'ENGLISH'}
          </button>
        </ul>
      </div>

    </header>
  );
};

export default Navbar;