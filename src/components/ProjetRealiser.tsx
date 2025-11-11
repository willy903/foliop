import { ExternalLink, Github } from 'lucide-react';

const projets = [
  {
    title: 'E-Commerce Moderne',
    description: 'Plateforme de vente en ligne avec panier, paiement sécurisé et gestion des stocks.',
    tags: ['React', 'Node.js', 'Stripe'],
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Application de Gestion',
    description: 'Dashboard analytique pour la gestion de projets avec visualisation de données en temps réel.',
    tags: ['TypeScript', 'Supabase', 'TailwindCSS'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Portfolio Créatif',
    description: 'Site portfolio avec animations fluides et design minimaliste pour un artiste.',
    tags: ['React', 'Framer Motion', 'Vite'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Application Mobile',
    description: 'Application de fitness avec suivi d\'activités et plans d\'entraînement personnalisés.',
    tags: ['React Native', 'Firebase', 'Redux'],
    image: 'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Site Vitrine',
    description: 'Site corporate responsive avec blog intégré et formulaire de contact.',
    tags: ['Next.js', 'Markdown', 'SEO'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Plateforme SaaS',
    description: 'Solution SaaS complète avec authentification, paiements et tableau de bord utilisateur.',
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une sélection de mes travaux récents et réussites
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
