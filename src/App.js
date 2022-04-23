import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import ÜberUns from './pages/ÜberUns/ÜberUns';
import Analysetool from './pages/Analysetool/Analysetool';
import AngebotPage from './pages/Angebot/AngebotPage';
import Logo from "./assets/Logo.png"
import KontaktPage from './pages/KontaktPage/KontaktPage';
import Danke from './pages/Danke/Danke';
import Impressum from './pages/Impressum';
import './App.css';


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
        <Route path='/angebot' element={<AngebotPage />}></Route>
        <Route path='/kontakt' element={<KontaktPage />}></Route>
        <Route path='/danke' element={<Danke />}></Route>
        <Route path='/impressum' element={<Impressum />}></Route>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
