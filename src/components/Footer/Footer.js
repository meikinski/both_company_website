import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css';
import Logo from '../../assets/both_white.png';


    const Footer = () => (
        <div className="footer_wrapper">
        <div className="footer">
            <div className="logo_footer">
                <img src={Logo} alt="Logo" className="logo_footer_img" loading='lazy'/>
                
            </div>
            <address className="contact">
                <b>BOTH: COLOGNE</b>
                Genter Str. 19<br />
                50672 Köln<br />
                <a href="tel: +49176995852">+49 176 – 99 58 85 52</a>
                <a href="mailto:info@both-cologne.de">info@both-cologne.de</a>
            </address>
            
            <div className="about">
                <NavLink className="navbar_link_footer" to="/home">Home</NavLink>
                <NavLink className="navbar_link_footer" to="/ueberuns">Über uns</NavLink>
                <NavLink className="navbar_link_footer" to="/Analysetool">Analysetool</NavLink>
                <NavLink className="navbar_link_footer" to="/Angebot">Angebot</NavLink>
                <NavLink className="navbar_link_footer" to="/Impressum">Impressum</NavLink>
            </div> 
                 
        </div>
        <div className="social">
                <a href='https://www.instagram.com/both_cologne/' target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluency/344/instagram-new.png" className="icon" alt=""/></a>
                <a href='https://www.linkedin.com/company/both-cologne/' target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluency/452/linkedin.png" className="icon" alt=""/></a>
            </div> 
        </div>
    );
    
    export default Footer;
    
    