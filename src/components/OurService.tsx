import { Code, Smartphone, Palette, Rocket } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Création de sites web modernes et performants avec les dernières technologies.',
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Développement d\'applications mobiles natives et cross-platform.',
  },
  {
    icon: Palette,
    title: 'Design UI/UX',
    description: 'Conception d\'interfaces utilisateur intuitives et esthétiques.',
  },
  {
    icon: Rocket,
    title: 'Optimisation',
    description: 'Amélioration des performances et du référencement de vos projets.',
  },
];

export default function OurService() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mes <span className="text-[rgb(240,45,58)]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour donner vie à vos projets digitaux
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-[rgb(240,45,58)] bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[rgb(240,45,58)] transition-colors duration-300">
                <service.icon className="w-8 h-8 text-[rgb(240,45,58)] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
