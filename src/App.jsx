import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Leadership from './pages/Leadership';
import Partnership from './pages/Partnership';
import Navbar from './pages/Navbar';
import Register from './pages/Register';



function App() {

  return (
    <div className='flex flex-col main-h-screen'>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/programs" element={<Programs />} />
        <Route  path="/leadership" element={<Leadership />} />
        <Route  path="/partnerships" element={<Partnership />} />
        <Route  path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
