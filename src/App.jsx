import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
// import Leadership from './pages/Leadership';
import Partnership from './pages/Partnership';
import Navbar from './pages/Navbar';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound'; // New component for 404

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Footer from './pages/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='flex flex-col main-h-screen'>
      <Navbar />
      <Routes>
        {/* Home page (now standalone) */}
        <Route path="/" element={<Home />} />
        
        {/* All other pages as separate routes */}
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        {/* <Route path="/leadership" element={<Leadership />} /> */}
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        
        {/* 404 handler */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;