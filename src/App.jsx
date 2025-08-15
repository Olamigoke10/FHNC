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
import Preloader from './pages/Preloader' // Import the Preloader component
import AOS from 'aos';
import "aos/dist/aos.css";
import Footer from './pages/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Simulate loading of critical assets
    const loadAssets = async () => {
      try {
        // You can add actual asset loading here if needed
        // For example: await loadFonts(), await loadImages(), etc.
        
        // Minimum show time for the preloader (2 seconds)
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.error("Error loading assets:", error);
      } finally {
        setIsLoading(false);
        document.body.style.overflow = 'auto'; 
      }
    };

    loadAssets();

    return () => {
      // Cleanup if component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
      {/* Show preloader while loading */}
      {isLoading && <Preloader />}
      
      {/* Main app content */}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/AiEthics" element={<AiEthics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;