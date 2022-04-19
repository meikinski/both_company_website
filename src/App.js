import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ÜberUns from './pages/ÜberUns';
import Analysetool from './pages/Analysetool';
import Angebot from './pages/Angebot';
import './App.css';
import Logo from "./assets/Logo.png"
import KontaktPage from './pages/KontaktPage';
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  return (
    <Router>
      <Navbar imageSrc={Logo}/>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/ueberuns' element={<ÜberUns />}></Route>
        <Route path='/analysetool' element={<Analysetool />}></Route>
        <Route path='/angebot' element={<Angebot />}></Route>
        <Route path='/kontakt' element={<KontaktPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
