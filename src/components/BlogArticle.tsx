import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

const articleContent: Record<string, { title: string; date: string; author: string; category: string; fullContent: string }> = {
  'tendances-web-design': {
    title: 'Les Tendances du Web Design en 2025',
    date: '15 Janvier 2025',
    author: 'HERINIAINA Willy',
    category: 'Design',
    fullContent: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Les Tendances du Web Design en 2025</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Le web design évolue constamment et 2025 apporte son lot de tendances passionnantes qui redéfinissent la manière dont nous créons des expériences numériques. Dans cet article, nous explorerons les principales tendances qui façonnent le paysage du web design en cette année.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Design Minimaliste et Épuré</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Le minimalisme continue de dominer le web design. Les designers se concentrent sur l'essentiel, éliminant les éléments inutiles pour créer des interfaces claires et intuitives. Cette approche améliore non seulement l'expérience utilisateur mais réduit également les temps de chargement.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Typographie Expressive</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        La typographie devient un élément de design à part entière. Les polices audacieuses et les combinaisons typographiques créatives ajoutent de la personnalité aux sites web, rendant les pages plus mémorables et engageantes.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Animations Microinteractions</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Les microinteractions subtiles deviennent essentielles pour créer une expérience utilisateur fluide. Des transitions délicates aux feedback visuels, ces petits détails améliorent considérablement l'engagement des utilisateurs.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Mode Sombre Systématique</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Le mode sombre n'est plus une option facultative mais une nécessité. Les utilisateurs apprécient cette fonctionnalité pour réduire la fatigue oculaire, et les designers intègrent désormais le mode sombre dès le départ dans leurs projets.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Accessibilité Prioritaire</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        L'accessibilité web devient une priorité absolue. Les designers créent désormais des interfaces inclusives qui fonctionnent pour tous, indépendamment des capacités physiques ou technologiques.
      </p>

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
    fullContent: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Comment Optimiser les Performances de Votre Site Web</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        La performance d'un site web est cruciale pour le succès en ligne. Les utilisateurs abandonnent les sites lents, et Google favorise les sites rapides dans ses résultats de recherche. Découvrez comment optimiser les performances de votre site web.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Optimiser les Images</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Les images sont souvent les plus gros fichiers sur un site web. Compressez les images sans perdre en qualité, utilisez les formats modernes comme WebP, et servez les images responsives adaptées à chaque appareil.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Minifier CSS et JavaScript</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Réduisez la taille des fichiers CSS et JavaScript en supprimant les espaces inutiles et les commentaires. Cela diminue les temps de chargement et améliore la performance globale.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Utiliser la Mise en Cache</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Implémentez la mise en cache du navigateur et du serveur pour réduire les requêtes répétées. Les visiteurs réguliers bénéficieront de temps de chargement beaucoup plus rapides.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Lazy Loading</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Chargez les images et les contenu de manière progressive au fur et à mesure que l'utilisateur fait défiler la page. Cette technique réduit le temps de chargement initial.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Monitorer les Performances</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Utilisez les outils comme Google PageSpeed Insights, Lighthouse, et WebPageTest pour identifier les goulots d'étranglement et suivre les améliorations au fil du temps.
      </p>

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
    fullContent: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">L'Importance du Mobile First dans le Développement Web</h2>

      <p class="text-gray-700 mb-4 leading-relaxed">
        Avec plus de 60% du trafic web provenant de dispositifs mobiles, une approche mobile-first est devenue incontournable. Découvrez pourquoi adopter une stratégie mobile-first et comment l'implémenter efficacement.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. La Réalité du Trafic Mobile</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        La majorité des utilisateurs accèdent à Internet via leurs téléphones mobiles. Ignorer cette réalité signifie perdre une grande partie de votre audience. Concevoir pour les mobiles en premier garantit que votre site fonctionne bien pour la majorité de vos utilisateurs.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Améliorer la Performance</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Commencer par les mobiles force les développeurs à penser à la performance dès le départ. Les connexions mobiles étant souvent plus lentes, vous optimisez naturellement votre site pour une expérience rapide.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. SEO et Classement Google</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Google favorise les sites optimisés pour mobile. Une approche mobile-first améliore votre visibilité dans les résultats de recherche et attire plus de trafic organique.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Comment Implémenter Mobile First</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Commencez par concevoir une interface minimaliste pour les petits écrans, puis ajoutez progressivement des éléments pour les écrans plus larges. Utilisez les media queries CSS pour adapter votre design à différentes tailles d'écran.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Tester sur Vrai Appareil</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Testez toujours votre site sur de vrais appareils mobiles, pas seulement dans les émulateurs du navigateur. Cela vous permet d'identifier les problèmes réels de performance et d'expérience utilisateur.
      </p>

      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Conclusion</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">
        Adopter une approche mobile-first n'est plus une option mais une nécessité. En plaçant les mobiles au centre de votre stratégie de développement, vous créez un web plus inclusif et performant pour tous vos utilisateurs.
      </p>
    `,
  },
};

export default function BlogArticle() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articleId ? articleContent[articleId] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <div className="w-[90%] mx-auto py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
            <Link to="/#blog" className="text-[rgb(240,45,58)] hover:text-[rgb(220,35,48)] font-semibold">
              Retour au blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="w-[90%] mx-auto py-16">
        <Link
          to="/#blog"
          className="flex items-center gap-2 text-[rgb(240,45,58)] hover:text-[rgb(220,35,48)] font-semibold mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour au blog</span>
        </Link>

        <article className="max-w-3xl">
          <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <span className="bg-[rgb(240,45,58)] text-white px-3 py-1 rounded-full text-xs font-semibold">
              {article.category}
            </span>
          </div>

          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: article.fullContent }}
          />
        </article>
      </div>
    </div>
  );
}
