import HeroSection from './components/HeroSection';
import OurService from './components/OurService';
import Testimonial from './components/Testimonial';
import ProjetRealiser from './components/ProjetRealiser';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <OurService />
      <Testimonial />
      <ProjetRealiser />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
