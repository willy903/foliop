import { useState, useEffect, useRef } from 'react';

const technologies = [
  {
    category: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    tools: [
      { name: 'React', icon: '⚛️' },
      { name: 'Angular', icon: '🅰️' },
      { name: 'HTML & CSS', icon: '🎨' },
      { name: 'Tailwind CSS', icon: '💨' },
      { name: 'Material UI', icon: '🎭' },
    ],
  },
  {
    category: 'Backend',
    color: 'from-green-500 to-emerald-500',
    tools: [
      { name: 'Java Spring Boot', icon: '☕' },
      { name: 'PHP', icon: '🐘' },
    ],
  },
  {
    category: 'Automatisation',
    color: 'from-purple-500 to-pink-500',
    tools: [
      { name: 'N8N', icon: '🤖' },
    ],
  },
  {
    category: 'CMS',
    color: 'from-orange-500 to-red-500',
    tools: [
      { name: 'WordPress', icon: '📝' },
      { name: 'PrestaShop', icon: '🛒' },
    ],
  },
  {
    category: 'Design',
    color: 'from-pink-500 to-rose-500',
    tools: [
      { name: 'Figma', icon: '🎨' },
      { name: 'Adobe XD', icon: '✨' },
      { name: 'Photoshop', icon: '🖼️' },
      { name: 'Illustrator', icon: '🎯' },
    ],
  },
];

export default function Technologies() {
  const [visibleCategories, setVisibleCategories] = useState<boolean[]>(
    new Array(technologies.length).fill(false)
  );
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categories = Array.from(entry.target.querySelectorAll('.tech-category'));
            categories.forEach((category, index) => {
              setTimeout(() => {
                setVisibleCategories((prev) => {
                  const updated = [...prev];
                  updated[index] = true;
                  return updated;
                });
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="technologies" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre Stack <span className="text-[rgb(240,45,58)]">Technologique</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des technologies de pointe pour des solutions robustes, évolutives et performantes.
            Nous maîtrisons un écosystème complet pour répondre à tous vos besoins digitaux.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`tech-category bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                visibleCategories[index]
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-12 opacity-0'
              }`}
            >
              <div className={`bg-gradient-to-r ${tech.color} p-6 text-white`}>
                <h3 className="text-2xl font-bold text-center">{tech.category}</h3>
              </div>

              <div className="p-6 space-y-4">
                {tech.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:translate-x-2 group cursor-pointer"
                  >
                    <div className="text-3xl group-hover:scale-125 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <span className="text-lg font-semibold text-gray-800 group-hover:text-[rgb(240,45,58)] transition-colors duration-300">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Une Expertise Complète à Votre Service
            </h3>
            <p className="text-gray-700 leading-relaxed text-center mb-6">
              Notre maîtrise de ces technologies nous permet de concevoir des solutions sur mesure,
              de la simple page web statique aux applications complexes en passant par l'automatisation
              de vos processus métier. Quelle que soit votre vision, nous avons les outils pour la concrétiser.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-block bg-[rgb(240,45,58)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[rgb(220,35,48)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Discutez de Votre Projet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
