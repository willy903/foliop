import { ExternalLink, Github } from 'lucide-react';

const projets = [
  {
    title: 'E-Commerce Nouvelle Génération',
    description: 'Boutique en ligne ultra-performante avec système de paiement sécurisé, gestion intelligente des stocks et expérience d\'achat optimisée. +45% de conversion.',
    tags: ['React', 'Node.js', 'Stripe'],
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Dashboard Analytique Pro',
    description: 'Plateforme de gestion projet all-in-one avec visualisations interactives, rapports automatiques et collaboration en temps réel. Gain de productivité de 60%.',
    tags: ['TypeScript', 'Supabase', 'TailwindCSS'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Portfolio Artistique Immersif',
    description: 'Vitrine digitale époustouflante avec animations cinématographiques, galerie interactive et design avant-gardiste qui capture l’essence créative de l’artiste.',
    tags: ['React', 'Framer Motion', 'Vite'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'App Fitness Connectée',
    description: 'Application mobile complète combinant suivi d\'activité en temps réel, programmes d\'entraînement adaptés et coaching IA pour une transformation physique optimale.',
    tags: ['React Native', 'Firebase', 'Redux'],
    image: 'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Site Corporate Premium',
    description: 'Présence digitale professionnelle avec design épuré, blog SEO-optimisé, formulaires intelligents et architecture responsive. Visée augmentée de 180%.',
    tags: ['Next.js', 'Markdown', 'SEO'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'SaaS Multi-tenant',
    description: 'Plateforme logicielle entièrement cloud avec authentification sécurisée, abonnements automatisés, dashboards personnalisés et scalabilité infinie.',
    tags: ['React', 'Supabase', 'Stripe'],
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function ProjetRealiser() {
  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projets <span className="text-[rgb(240,45,58)]">Réalisés</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos créations digitales qui ont transformé des idées en succès mesurables. Chaque projet reflète notre engagement envers l'excellence et l'innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projets.map((projet, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={projet.image}
                  alt={projet.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{projet.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{projet.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-[rgb(240,45,58)] hover:text-[rgb(220,35,48)] font-semibold transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span>Voir</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold transition-colors duration-300">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
