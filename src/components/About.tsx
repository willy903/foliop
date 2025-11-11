import { Check, Users, Target, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, garantissant une qualité sans compromis.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Travail en étroite collaboration avec nos clients pour comprendre leurs besoins.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Solutions modernes et technologiquement avancées pour rester compétitif.',
    },
  ];

  const strengths = [
    'Expertise en développement web et design UX/UI',
    'Équipe passionnée et expérimentée',
    'Solutions personnalisées et adaptées à vos besoins',
    'Support et maintenance de qualité',
    'Délais respectés et budgets maîtrisés',
    'Livraison de projets performants et sécurisés',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À Propos de <span className="text-[rgb(240,45,58)]">SW DEV</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fondée par <strong className="text-gray-900">HERINIAINA Willy Jacquino</strong>, SW DEV est votre partenaire de confiance pour la transformation digitale.
            Basée à Madagascar, nous combinons expertise technique et créativité pour donner vie à des projets web ambitieux qui dépassent les attentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Propulser la croissance des entreprises malgaches et internationales en créant des expériences digitales
              qui allient performance technique, design exceptionnel et impact mesurable. Nous transformons vos idées
              en solutions web puissantes qui génèrent des résultats concrets.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Chaque ligne de code que nous écrivons, chaque pixel que nous plaçons, est pensé pour maximiser votre
              réussite. Notre philosophie : écoute active, innovation continue, et excellence sans compromis. Nous ne
              construisons pas seulement des sites web, nous bâtissons des leviers de croissance pour votre business.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-[rgb(240,45,58)] bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-3 group hover:bg-[rgb(240,45,58)] transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-[rgb(240,45,58)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-gray-900">{value.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi Nous Choisir ?</h3>
            <div className="space-y-4">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[rgb(240,45,58)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{strength}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-gradient-to-br from-[rgb(240,45,58)] to-[rgb(220,35,48)] p-8 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-3">Votre Projet Mérite l'Excellence</h4>
              <p className="mb-6">
                Ne laissez pas vos concurrents prendre l'avance. Transformons ensemble votre vision en une
                plateforme digitale performante qui captive vos clients et booste votre croissance.
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-[rgb(240,45,58)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Lancer Mon Projet
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 md:p-12 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Notre Approche</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[rgb(240,45,58)] mb-2">1</div>
              <h4 className="font-bold text-gray-900 mb-3">Écoute & Analyse</h4>
              <p className="text-gray-600">
                Immersion complète dans votre univers pour comprendre vos enjeux, votre audience et vos objectifs business.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[rgb(240,45,58)] mb-2">2</div>
              <h4 className="font-bold text-gray-900 mb-3">Conception & Développement</h4>
              <p className="text-gray-600">
                Création agile combinant design moderne, code propre et technologies de pointe pour un résultat optimal.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[rgb(240,45,58)] mb-2">3</div>
              <h4 className="font-bold text-gray-900 mb-3">Livraison & Support</h4>
              <p className="text-gray-600">
                Déploiement sécurisé, formation complète et accompagnement long terme pour garantir votre autonomie et croissance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
