import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#services', label: 'Services' },
    { href: '#technologies', label: 'Technologies' },
    { href: '#projets', label: 'Projets' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="w-[90%] mx-auto px-6">
        <div className="flex items-center justify-between">
          <button
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== '/') {
                window.location.href = '/';
              } else {
                handleNavClick('#hero');
              }
            }}
            className="flex items-center gap-2 bg-none border-none cursor-pointer"
          >
            <img src="/logo officiel.png" alt="SW DEV Logo" className="h-12 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`font-medium transition-all duration-300 hover:text-[rgb(240,45,58)] ${
                  link.label === 'Contact'
                    ? `px-6 py-2 rounded-full transition-all duration-300 ${
                        isScrolled
                          ? 'bg-[rgb(240,45,58)] text-white hover:bg-[rgb(220,35,48)] hover:shadow-lg'
                          : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                      }`
                    : `${isScrolled ? 'text-gray-700' : 'text-white'}`
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[rgb(240,45,58)] transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
