import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'CEO, TechStart',
    content: 'Un travail exceptionnel ! Le site web dépasse toutes nos attentes. Professionnel, réactif et créatif.',
    avatar: 'SM',
  },
  {
    name: 'Pierre Dubois',
    role: 'Directeur Marketing, InnovCorp',
    content: 'Collaboration excellente du début à la fin. Le résultat final est à la fois beau et performant.',
    avatar: 'PD',
  },
  {
    name: 'Marie Lambert',
    role: 'Fondatrice, CreativeLab',
    content: 'Compétences techniques impressionnantes et grande attention aux détails. Je recommande vivement !',
    avatar: 'ML',
  },
];

export default function Testimonial() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ce Que Disent <span className="text-[rgb(240,45,58)]">Mes Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfaction client au cœur de chaque projet
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              <Quote className="w-12 h-12 text-[rgb(240,45,58)] opacity-20 absolute top-6 right-6" />

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-[rgb(240,45,58)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
