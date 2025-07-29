import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [otherDropdown, setOtherDropdown] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-amber-100/80 via-orange-100/80 to-pink-100/80 backdrop-blur shadow-md border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <a href="/" className="text-2xl font-extrabold text-amber-600 tracking-wider flex items-center focus:outline-none focus:ring-2 focus:ring-amber-300" style={{ fontFamily: 'Montserrat, Georgia, serif' }} aria-label="Go to homepage">
            <span className="inline-block align-middle mr-2">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#FDBA74"/>
                <text x="16" y="22" textAnchor="middle" fontSize="18" fill="#fff" fontFamily="Montserrat, Georgia, serif">G</text>
              </svg>
            </span>
            GogteKul
          </a>
        </div>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-10 text-lg font-semibold text-gray-800">
            {/* Home Button - Desktop Nav */}
            <li>
              <Link to="/" className="pb-1 border-b-2 border-transparent hover:border-amber-400 hover:text-amber-600 transition flex items-center gap-1 font-semibold text-gray-800" style={{ fontFamily: 'inherit' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v11a1 1 0 001 1h3m-10 0h4" />
                </svg>
                <span>Home</span>
              </Link>
            </li>
            {/* About Dropdown */}
            <li className="relative">
              <button
                className="pb-1 border-b-2 border-transparent hover:border-amber-400 hover:text-amber-600 transition flex items-center gap-1"
                onClick={() => setAboutDropdown((open) => !open)}
                aria-expanded={aboutDropdown}
                aria-haspopup="true"
              >
                {t('about')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutDropdown && (
                <ul
                  className="absolute left-0 mt-2 min-w-[200px] bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200"
                  onMouseLeave={() => setAboutDropdown(false)}
                >
                  <li>
                    <Link to="/kulvruttantsamiti" className="block px-5 py-2 text-gray-800 hover:bg-amber-100 hover:text-amber-700 transition font-medium">
  {t('kulvruttantSamiti')}
</Link>
                  </li>
                  <li>
                    <a href="/GogteVaatchaal.pdf" download className="block px-5 py-2 text-gray-800 hover:bg-amber-100 hover:text-amber-700 transition font-medium">
  {t('gogteVaatchaal')}
</a>
                  </li>
                  <li>
                    <Link to="/presidentsthoughts" className="block px-5 py-2 text-gray-800 hover:bg-amber-100 hover:text-amber-700 transition font-medium">
  {t('presidentsThoughts')}
</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="block px-5 py-2 text-gray-800 hover:bg-amber-100 hover:text-amber-700 transition font-medium">
  {t('contact')}
</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Kulavruksh */}
            <li>
              <a href="#kulavruksh" className="pb-1 border-b-2 border-transparent hover:border-amber-400 hover:text-amber-600 transition">{t('kulavruksh')}</a>
            </li>
            {/* Other Dropdown */}
            <li className="relative">
              <button
                className="pb-1 border-b-2 border-transparent hover:border-amber-400 hover:text-amber-600 transition flex items-center gap-1"
                onClick={() => setOtherDropdown((open) => !open)}
                aria-expanded={otherDropdown}
                aria-haspopup="true"
              >
                {t('other')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {otherDropdown && (
                <ul
                  className="absolute left-0 mt-2 min-w-[200px] bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200"
                  onMouseLeave={() => setOtherDropdown(false)}
                >
                  <li>
                    <a href="#granth-2006" className="block px-5 py-2 text-gray-800 hover:bg-amber-100 hover:text-amber-700 transition font-medium">
                      {t('granth2006')}
                    </a>
                  </li>
                  <li>
                    <a href="#photo-gallery" className="block px-5 py-2 text-gray-800 hover:bg-amber-100 hover:text-amber-700 transition font-medium">
                      {t('photoGallery')}
                    </a>
                  </li>
                  <li>
                    <a href="#remembrance-day" className="block px-5 py-2 text-gray-800 hover:bg-amber-100 hover:text-amber-700 transition font-medium">
                      {t('remembranceDay')}
                    </a>
                  </li>
                  <li>
                    <a href="#news" className="block px-5 py-2 text-gray-800 hover:bg-amber-100 hover:text-amber-700 transition font-medium">
                      {t('news')}
                    </a>
                  </li>
                  <li>
                    <a href="#events" className="block px-5 py-2 text-gray-800 hover:bg-amber-100 hover:text-amber-700 transition font-medium">
                      {t('events')}
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        {/* Right Side: Language Switcher and Login */}
        <div className="flex items-center space-x-3">
          <LanguageSwitcher />
          <Link to="/login" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-bold shadow transition focus:outline-none focus:ring-2 focus:ring-amber-300">
            {t('loginRegister')}
          </Link>
          {/* Hamburger for mobile */}
          <button className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-300" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-amber-100/90 via-orange-100/90 to-pink-100/90 backdrop-blur shadow-lg border-b border-orange-200">
          <ul className="flex flex-col items-center space-y-4 py-6 text-lg font-semibold text-gray-800">
            {/* Home Button - Mobile Nav */}
            <li>
              <Link to="/" className="flex items-center px-3 py-1 rounded-md hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-300 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v11a1 1 0 001 1h3m-10 0h4" />
                </svg>
                <span className="font-semibold text-amber-700">Home</span>
              </Link>
            </li>
            {/* About Dropdown (Mobile) */}
            <li>
              <details>
                <summary className="block w-full text-center py-2 hover:text-amber-600 transition cursor-pointer">{t('about')}</summary>
                <ul className="pl-4">
                  <li>
                    <a href="#about1" className="block py-2 hover:text-amber-600 transition" onClick={() => setMenuOpen(false)}>{t('about1') || 'About Us'}</a>
                  </li>
                  <li>
                    <a href="#about2" className="block py-2 hover:text-amber-600 transition" onClick={() => setMenuOpen(false)}>{t('about2') || 'Our History'}</a>
                  </li>
                </ul>
              </details>
            </li>
            {/* Kulavruksh */}
            <li>
              <a href="#kulavruksh" className="block w-full text-center py-2 hover:text-amber-600 transition" onClick={() => setMenuOpen(false)}>{t('kulavruksh')}</a>
            </li>
            {/* Other Dropdown (Mobile) */}
            <li>
              <details>
                <summary className="block w-full text-center py-2 hover:text-amber-600 transition cursor-pointer">{t('other')}</summary>
                <ul className="pl-4">
                  <li>
                    <a href="#other1" className="block py-2 hover:text-amber-600 transition" onClick={() => setMenuOpen(false)}>{t('other1') || 'Gallery'}</a>
                  </li>
                  <li>
                    <a href="#other2" className="block py-2 hover:text-amber-600 transition" onClick={() => setMenuOpen(false)}>{t('other2') || 'Contact'}</a>
                  </li>
                </ul>
              </details>
            </li>
            {/* Login/Register */}
            <li>
              <a href="#login" className="block w-full text-center py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold shadow mt-2" onClick={() => setMenuOpen(false)}>{t('loginRegister')}</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;