import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Partnership from './pages/Partnership';
import Navbar from './pages/Navbar';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import AiEthics from './pages/minicomponents/AiEthics';
import NotFound from './pages/NotFound';
import Preloader from './pages/Preloader';
import AOS from 'aos';
import "aos/dist/aos.css";
import Footer from './pages/Footer';
import DriverTraining from './pages/minicomponents/DriverTraining';
import Leadership from './pages/Leadership';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const loadAssets = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.error("Error loading assets:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAssets();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'auto';
  }, [isLoading]);

  return (
    <div className={`flex flex-col min-h-screen ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
      {isLoading && <Preloader />}

      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/AiEthics" element={<AiEthics />} />
          <Route path="/DriverTraining" element={<DriverTraining />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
