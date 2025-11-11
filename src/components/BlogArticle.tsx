import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const articleContent: Record<string, { title: string; date: string; author: string; category: string; heroImage: string; fullContent: string }> = {
  'tendances-web-design': {
    title: 'Les Tendances du Web Design en 2025',
    date: '15 Janvier 2025',
    author: 'HERINIAINA Willy',
    category: 'Design',
    heroImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fullContent: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Les Tendances du Web Design en 2025</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Le web design évolue constamment et 2025 apporte son lot de tendances passionnantes qui redéfinissent la manière dont nous créons des expériences numériques. Dans cet article, nous explorerons les principales tendances qui façonnent le paysage du web design en cette année.
      </p>

      <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Web Design Tendances" class="w-full h-64 object-cover rounded-xl mb-8 mt-6 shadow-lg" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Design Minimaliste et Épuré</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Le minimalisme continue de dominer le web design. Les designers se concentrent sur l'essentiel, éliminant les éléments inutiles pour créer des interfaces claires et intuitives. Cette approche améliore non seulement l'expérience utilisateur mais réduit également les temps de chargement.
      </p>
      <img src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Design Minimaliste" class="w-full h-48 object-cover rounded-lg mb-6 shadow-md" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Typographie Expressive</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        La typographie devient un élément de design à part entière. Les polices audacieuses et les combinaisons typographiques créatives ajoutent de la personnalité aux sites web, rendant les pages plus mémorables et engageantes.
      </p>
      <img src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Typographie Creative" class="w-full h-48 object-cover rounded-lg mb-6 shadow-md" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Animations Microinteractions</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Les microinteractions subtiles deviennent essentielles pour créer une expérience utilisateur fluide. Des transitions délicates aux feedback visuels, ces petits détails améliorent considérablement l'engagement des utilisateurs.
      </p>
      <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Animations Web" class="w-full h-48 object-cover rounded-lg mb-6 shadow-md" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Mode Sombre Systématique</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Le mode sombre n'est plus une option facultative mais une nécessité. Les utilisateurs apprécient cette fonctionnalité pour réduire la fatigue oculaire, et les designers intègrent désormais le mode sombre dès le départ dans leurs projets.
      </p>
      <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Mode Sombre" class="w-full h-48 object-cover rounded-lg mb-6 shadow-md" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Accessibilité Prioritaire</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        L'accessibilité web devient une priorité absolue. Les designers créent désormais des interfaces inclusives qui fonctionnent pour tous, indépendamment des capacités physiques ou technologiques.
      </p>
      <img src="https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Accessibilité Web" class="w-full h-48 object-cover rounded-lg mb-6 shadow-md" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Conclusion</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        2025 est une année excitante pour le web design. En adoptant ces tendances, vous pouvez créer des expériences web modernes, engageantes et accessibles qui captivent votre audience et reflètent votre marque.
      </p>
    `,
  },
  'optimiser-performances': {
    title: 'Comment Optimiser les Performances de Votre Site Web',
    date: '10 Janvier 2025',
    author: 'HERINIAINA Willy',
    category: 'Développement',
    heroImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fullContent: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Comment Optimiser les Performances de Votre Site Web</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        La performance d'un site web est cruciale pour le succès en ligne. Les utilisateurs abandonnent les sites lents, et Google favorise les sites rapides dans ses résultats de recherche. Découvrez comment optimiser les performances de votre site web.
      </p>

      <img src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Performance Web" class="w-full h-64 object-cover rounded-xl mb-8 mt-6 shadow-lg" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Optimiser les Images</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Les images sont souvent les plus gros fichiers sur un site web. Compressez les images sans perdre en qualité, utilisez les formats modernes comme WebP, et servez les images responsives adaptées à chaque appareil.
      </p>
      <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Optimisation Images" class="w-full h-48 object-cover rounded-lg mb-6 shadow-md" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Minifier CSS et JavaScript</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Réduisez la taille des fichiers CSS et JavaScript en supprimant les espaces inutiles et les commentaires. Cela diminue les temps de chargement et améliore la performance globale.
      </p>
      <img src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Code Optimisation" class="w-full h-48 object-cover rounded-lg mb-6 shadow-md" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Utiliser la Mise en Cache</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Implémentez la mise en cache du navigateur et du serveur pour réduire les requêtes répétées. Les visiteurs réguliers bénéficieront de temps de chargement beaucoup plus rapides.
      </p>
      <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Mise en Cache" class="w-full h-48 object-cover rounded-lg mb-6 shadow-md" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Lazy Loading</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Chargez les images et les contenu de manière progressive au fur et à mesure que l'utilisateur fait défiler la page. Cette technique réduit le temps de chargement initial.
      </p>
      <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Lazy Loading" class="w-full h-48 object-cover rounded-lg mb-6 shadow-md" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Monitorer les Performances</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Utilisez les outils comme Google PageSpeed Insights, Lighthouse, et WebPageTest pour identifier les goulots d'étranglement et suivre les améliorations au fil du temps.
      </p>
      <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Monitoring Performance" class="w-full h-48 object-cover rounded-lg mb-6 shadow-md" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Conclusion</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Optimiser la performance de votre site web est un processus continu. En appliquant ces techniques, vous offrirez une meilleure expérience utilisateur et améliorerez votre classement dans les moteurs de recherche.
      </p>
    `,
  },
  'mobile-first': {
    title: 'L\'Importance du Mobile First dans le Développement Web',
    date: '5 Janvier 2025',
    author: 'HERINIAINA Willy',
    category: 'Stratégie',
    heroImage: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fullContent: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">L'Importance du Mobile First dans le Développement Web</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Avec plus de 60% du trafic web provenant de dispositifs mobiles, une approche mobile-first est devenue incontournable. Découvrez pourquoi adopter une stratégie mobile-first et comment l'implémenter efficacement.
      </p>

      <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Mobile First Development" class="w-full h-64 object-cover rounded-xl mb-8 mt-6 shadow-lg" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. La Réalité du Trafic Mobile</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        La majorité des utilisateurs accèdent à Internet via leurs téléphones mobiles. Ignorer cette réalité signifie perdre une grande partie de votre audience. Concevoir pour les mobiles en premier garantit que votre site fonctionne bien pour la majorité de vos utilisateurs.
      </p>
      <img src="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Usage Mobile" class="w-full h-48 object-cover rounded-lg mb-6 shadow-md" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Améliorer la Performance</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Commencer par les mobiles force les développeurs à penser à la performance dès le départ. Les connexions mobiles étant souvent plus lentes, vous optimisez naturellement votre site pour une expérience rapide.
      </p>
      <img src="https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Performance Mobile" class="w-full h-48 object-cover rounded-lg mb-6 shadow-md" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. SEO et Classement Google</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Google favorise les sites optimisés pour mobile. Une approche mobile-first améliore votre visibilité dans les résultats de recherche et attire plus de trafic organique.
      </p>
      <img src="https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800" alt="SEO Mobile" class="w-full h-48 object-cover rounded-lg mb-6 shadow-md" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Comment Implémenter Mobile First</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Commencez par concevoir une interface minimaliste pour les petits écrans, puis ajoutez progressivement des éléments pour les écrans plus larges. Utilisez les media queries CSS pour adapter votre design à différentes tailles d'écran.
      </p>
      <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Design Responsive" class="w-full h-48 object-cover rounded-lg mb-6 shadow-md" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Tester sur Vrai Appareil</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Testez toujours votre site sur de vrais appareils mobiles, pas seulement dans les émulateurs du navigateur. Cela vous permet d'identifier les problèmes réels de performance et d'expérience utilisateur.
      </p>
      <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Testing Mobile" class="w-full h-48 object-cover rounded-lg mb-6 shadow-md" />

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Conclusion</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Adopter une approche mobile-first n'est plus une option mais une nécessité. En plaçant les mobiles au centre de votre stratégie de développement, vous créez un web plus inclusif et performant pour tous vos utilisateurs.
      </p>
    `,
  },
};

export default function BlogArticle() {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();
  const article = articleId ? articleContent[articleId] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [articleId]);

  const handleBackToBlog = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
      }
    }, 300);
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <div className="w-[90%] mx-auto py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
            <button
              onClick={handleBackToBlog}
              className="text-[rgb(240,45,58)] hover:text-[rgb(220,35,48)] font-semibold bg-none border-none cursor-pointer transition-colors duration-300"
            >
              Retour au blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full h-96 overflow-hidden">
        <img
          src={article.heroImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-white"></div>
        <div className="absolute bottom-0 left-0 right-0 w-[90%] mx-auto px-6 pb-8">
          <span className="inline-block bg-[rgb(240,45,58)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {article.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto py-12">
        <button
          onClick={handleBackToBlog}
          className="flex items-center gap-2 text-[rgb(240,45,58)] hover:text-[rgb(220,35,48)] font-semibold mb-12 transition-colors duration-300 bg-none border-none cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour au blog</span>
        </button>

        <article className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: article.fullContent }}
          />
        </article>
      </div>
    </div>
  );
}
