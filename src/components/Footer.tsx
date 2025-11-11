import { Heart, Github, Linkedin, Mail, Twitter, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: '#hero', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#services', label: 'Services' },
    { href: '#technologies', label: 'Technologies' },
    { href: '#projets', label: 'Projets' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  const services = [
    'Développement Web',
    'Développement Mobile',
    'Design UX/UI',
    'Automatisation',
    'E-commerce',
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'Github' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@swdev.mg', label: 'Email' },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="w-[90%] mx-auto px-6">
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <img src="/logo officiel.png" alt="SW DEV Logo" className="h-14 w-auto" />
              <p className="text-gray-400 leading-relaxed text-sm">
                Société de services informatiques créant des solutions web modernes et performantes à Madagascar.
              </p>
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-[rgb(240,45,58)] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-[rgb(240,45,58)]/30"
                      title={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-5 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-[rgb(240,45,58)] rounded"></div>
                Navigation
              </h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[rgb(240,45,58)] transition-colors duration-300 text-sm font-medium group flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[rgb(240,45,58)] transition-colors duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-5 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-[rgb(240,45,58)] rounded"></div>
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-gray-400 text-sm font-medium hover:text-[rgb(240,45,58)] transition-colors duration-300 cursor-pointer flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-5 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-[rgb(240,45,58)] rounded"></div>
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-[rgb(240,45,58)] flex-shrink-0" />
                  <span className="text-gray-400">Madagascar</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <Phone className="w-5 h-5 text-[rgb(240,45,58)] flex-shrink-0" />
                  <span className="text-gray-400">+261 3X XXX XXXX</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <Mail className="w-5 h-5 text-[rgb(240,45,58)] flex-shrink-0" />
                  <span className="text-gray-400">contact@swdev.mg</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <Clock className="w-5 h-5 text-[rgb(240,45,58)] flex-shrink-0" />
                  <span className="text-gray-400">Lun-Ven 09:00-18:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm flex items-center justify-center gap-2 order-2 md:order-1">
                © {currentYear} <span className="font-semibold">SW DEV</span>. Fait avec <Heart className="w-4 h-4 text-[rgb(240,45,58)] animate-pulse" /> par <span className="font-semibold text-[rgb(240,45,58)]">HERINIAINA Willy Jacquino</span>
              </p>
              <div className="flex gap-6 order-1 md:order-2">
                <a href="#" className="text-gray-400 hover:text-[rgb(240,45,58)] text-sm font-medium transition-colors duration-300">
                  Politique de Confidentialité
                </a>
                <a href="#" className="text-gray-400 hover:text-[rgb(240,45,58)] text-sm font-medium transition-colors duration-300">
                  Conditions d'Utilisation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(240,45,58)] to-transparent"></div>
    </footer>
  );
}
