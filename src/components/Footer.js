import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css';


    const Footer = () => (
        <div className="footer">
            <address className="contact">
            <b>BOTH: COLOGNE</b>
            Genter Str. 19<br />
            50672 Köln<br />
            <a href="tel: +49176995852">+49 176 – 99 58 85 52</a>
            <a href="mailto:info@both-cologne.de">info@both-cologne.de</a>
            </address>
            <div className="social">
            <p><b>Folge uns</b></p>
            <a href='https://www.instagram.com/both_cologne/' target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluency/344/instagram-new.png" classname="icon" alt=""/></a>
            <a href='https://www.linkedin.com/company/both-cologne/' target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluency/452/linkedin.png" classname="icon" alt=""/></a>
            </div>
            <div className="about">
            
                <NavLink className="navbar_link_footer" to="/home">Home</NavLink>
                <NavLink className="navbar_link_footer" to="/uberuns">Über uns</NavLink>
                <NavLink className="navbar_link_footer" to="/Analysetool">Analysetool</NavLink>
                <NavLink className="navbar_link_footer" to="/Angebot">Angebot</NavLink>
                <NavLink className="navbar_link_footer" to="/Impressum">Impressum</NavLink>

            </div>       

        
        </div>
    );
    
    export default Footer;
    
    