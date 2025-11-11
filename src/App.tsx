import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import OurService from './components/OurService';
import Blog from './components/Blog';
import ProjetRealiser from './components/ProjetRealiser';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogArticle from './components/BlogArticle';

function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="w-[90%] mx-auto">
        <About />
        <OurService />
        <Blog />
        <ProjetRealiser />
        <Contact />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:articleId" element={<BlogArticle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
