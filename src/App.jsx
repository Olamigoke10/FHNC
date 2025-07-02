import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Leadership from './pages/Leadership';
import Partnership from './pages/Partnership';
import Navbar from './pages/Navbar';
import Register from './pages/Register';
import { Contact } from 'lucide-react';
import ContactUs from './pages/ContactUs';



function App() {

  return (
    <div className='flex flex-col main-h-screen'>
      <Navbar />
      <Routes>

        <Route  path="/"
        
        element={
        <>

        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="programs"><Programs /></section>
        <section id="leadership"><Leadership /></section>
        <section id='register'><Register/></section>
        <section id="partnership"><Partnership /></section>
        <section id='contact'><ContactUs /></section>
        </>   
        }
      />
      </Routes>
    </div>
  )
}

export default App
