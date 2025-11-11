import { Calendar, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const articles = [
  {
    id: 'tendances-web-design',
    title: 'Web Design 2025 : Les 5 Tendances Incontournables',
    excerpt: 'Du minimalisme radical aux interfaces immersives, découvrez les tendances qui révolutionnent le web design et comment les implémenter pour captiver vos utilisateurs et dominer votre marché.',
    date: '15 Janvier 2025',
    author: 'HERINIAINA Willy',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Design',
  },
  {
    id: 'optimiser-performances',
    title: 'Performances Web : Guide Complet pour un Site Ultra-Rapide',
    excerpt: 'Techniques avancées et astuces prouvées pour transformer votre site en véritable machine de conversion. Optimisez images, code et serveur pour gagner en vitesse, en SEO et en taux de conversion.',
    date: '10 Janvier 2025',
    author: 'HERINIAINA Willy',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Développement',
  },
  {
    id: 'mobile-first',
    title: 'Mobile First : La Stratégie Gagnante pour 2025',
    excerpt: 'Avec 70% du trafic web sur mobile, une approche mobile-first n\'est plus optionnelle. Découvrez comment concevoir des expériences mobiles exceptionnelles qui boostent engagement et conversions.',
    date: '5 Janvier 2025',
    author: 'HERINIAINA Willy',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Stratégie',
  },
];

export default function Blog() {
  const navigate = useNavigate();

  const handleReadMore = (articleId: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate(`/blog/${articleId}`);
    }, 300);
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre <span className="text-[rgb(240,45,58)]">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conseils d'experts, tendances du secteur et guides pratiques pour réussir votre transformation digitale et rester compétitif
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[rgb(240,45,58)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[rgb(240,45,58)] transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <button
                  onClick={() => handleReadMore(article.id)}
                  className="flex items-center gap-2 text-[rgb(240,45,58)] hover:text-[rgb(220,35,48)] font-semibold transition-colors duration-300 group bg-none border-none cursor-pointer"
                >
                  <span>Lire la suite</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
