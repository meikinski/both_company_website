import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../../pages/Home/Home';
import ÜberUns from '../../pages/ÜberUns/ÜberUns';
import Analysetool from '../../pages/Analysetool/Analysetool';
import AngebotPage from '../../pages/Angebot/AngebotPage';
import KontaktPage from '../../pages/KontaktPage/KontaktPage';
import Danke from '../../pages/Danke/Danke';
import Impressum from '../../pages/Impressum/Impressum';

import { AnimatePresence } from 'framer-motion'


export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/ueberuns' element={<ÜberUns />}></Route>
        <Route path='/analysetool' element={<Analysetool />}></Route>
        <Route path='/angebot' element={<AngebotPage />}></Route>
        <Route path='/kontakt' element={<KontaktPage />}></Route>
        <Route path='/danke' element={<Danke />}></Route>
        <Route path='/impressum' element={<Impressum />}></Route>
      </Routes>
      </AnimatePresence>
    );
}