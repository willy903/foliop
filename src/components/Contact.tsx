import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message envoyé avec succès !');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez-<span className="text-[rgb(240,45,58)]">Moi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un projet en tête ? Discutons-en ensemble
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-moi un message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(240,45,58)] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(240,45,58)] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(240,45,58)] focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[rgb(240,45,58)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[rgb(220,35,48)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer le message</span>
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h3>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[rgb(240,45,58)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[rgb(240,45,58)]" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600">contact@monportfolio.fr</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[rgb(240,45,58)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[rgb(240,45,58)]" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Téléphone</h4>
                <p className="text-gray-600">+33 6 12 34 56 78</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[rgb(240,45,58)] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[rgb(240,45,58)]" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Localisation</h4>
                <p className="text-gray-600">Paris, France</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl mt-8">
              <h4 className="font-bold text-gray-900 mb-3">Disponibilité</h4>
              <p className="text-gray-600 leading-relaxed">
                Je suis actuellement disponible pour de nouveaux projets. N'hésitez pas à me contacter pour discuter de vos besoins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
