import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ÜberUns from './pages/ÜberUns';
import Analysetool from './pages/Analysetool';
import Angebot from './pages/Angebot';
import './App.css';
import Logo from "./assets/Logo.png"
import KontaktPage from './pages/KontaktPage';


function App() {
  return (
    <div className="App">
      <Navbar imageSrc={Logo}/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/ueberuns' element={<ÜberUns />}></Route>
        <Route path='/analysetool' element={<Analysetool />}></Route>
        <Route path='/angebot' element={<Angebot />}></Route>
        <Route path='/kontakt' element={<KontaktPage />}></Route>
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
