import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[rgb(240,45,58)]">Mon</span>Portfolio
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Développeur web passionné, créant des expériences numériques modernes et performantes.
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
                href="mailto:contact@example.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[rgb(240,45,58)] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Portfolio. Fait avec <Heart className="w-4 h-4 text-[rgb(240,45,58)]" /> par un développeur passionné
          </p>
        </div>
      </div>
    </footer>
  );
}
