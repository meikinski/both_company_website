import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';

import './App.css';
import Logo from "./assets/Logo.png"



const App = () => {
  
  return (
    <Router>
      <Helmet>
          <title>Both:Cologne - Workshops und Training auf Basis der DiSG-Persönlichkeitsprofile in Köln</title>
          <meta
            name="description"
            content="Lerne deine Stärken und Schwächen kennen und nutze deine Potenziale im Beruf und Alltag"
           />
           <meta
            name="keywords"
            content="Workshop, Training, Köln, DiSG, Persönlichkeitsentwicklung, Kommunikation"
           />
      </Helmet>
      <Navbar imageSrc={Logo}/>
      <ScrollToTop />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
