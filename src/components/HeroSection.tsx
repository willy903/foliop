import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 bg-[rgb(240,45,58)] rounded-full mx-auto flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
              JD
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Bonjour, je suis
            <span className="block text-[rgb(240,45,58)] mt-2">Développeur Web</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Créateur d'expériences numériques modernes et performantes
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a href="#contact" className="bg-[rgb(240,45,58)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[rgb(220,35,48)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Me Contacter
            </a>
            <a href="#projets" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Voir Mes Projets
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[rgb(240,45,58)] transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[rgb(240,45,58)] transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-[rgb(240,45,58)] transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-[rgb(240,45,58)]" />
      </div>
    </section>
  );
}
