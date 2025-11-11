import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="w-[90%] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/logo officiel.png" alt="SW DEV Logo" className="h-16 w-auto mb-4" />
            <p className="text-gray-400 leading-relaxed">
              Société de services informatiques à Madagascar, créant des solutions web modernes et performantes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-[rgb(240,45,58)] transition-colors duration-300">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[rgb(240,45,58)] transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#projets" className="text-gray-400 hover:text-[rgb(240,45,58)] transition-colors duration-300">
                  Projets
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-[rgb(240,45,58)] transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[rgb(240,45,58)] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Suivez-moi</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[rgb(240,45,58)] transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[rgb(240,45,58)] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[rgb(240,45,58)] transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@swdev.mg"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[rgb(240,45,58)] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} SW DEV. Fait avec <Heart className="w-4 h-4 text-[rgb(240,45,58)]" /> par HERINIAINA Willy Jacquino
          </p>
        </div>
      </div>
    </footer>
  );
}
