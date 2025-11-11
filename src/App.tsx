import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import OurService from './components/OurService';
import Blog from './components/Blog';
import ProjetRealiser from './components/ProjetRealiser';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <div className="w-[90%] mx-auto">
        <About />
        <OurService />
        <Blog />
        <ProjetRealiser />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
