import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css';
import Logo from '../../assets/both_white.png';


    const Footer = () => (
        <div className="footer_wrapper">
        <div className="footer">
            
            <address className="contact">
                <b>BOTH: COLOGNE</b>
                <br/>
                <p>Genter Str. 19</p>
                <p>50672 Köln</p>
                <p><a href="tel: +49176995852">+49 176 – 99 58 85 52</a></p>
                <p><a href="mailto:info@both-cologne.de">info@both-cologne.de</a></p>
                <p><NavLink className="navbar" to="/Impressum">Impressum</NavLink></p>
            </address>
            <div className="logo_footer">
                <img src={Logo} alt="Logo" className="logo_footer_img" loading='lazy'/>
                
            </div>
            
            <div className="about">
                <NavLink className="navbar_link_footer" to="/home">Home</NavLink>
                <NavLink className="navbar_link_footer" to="/ueberuns">Über uns</NavLink>
                <NavLink className="navbar_link_footer" to="/Analysetool">Analysetool</NavLink>
                <NavLink className="navbar_link_footer" to="/Angebot">Angebot</NavLink>
                
            </div> 
                 
        </div>
        <div className="social_header">
        <p>Folge uns:</p>
        </div>
        <div className="social">
                
                <a href='https://www.instagram.com/both_cologne/' target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluency/344/instagram-new.png" className="icon" alt=""/></a>
                <a href='https://www.linkedin.com/company/both-cologne/' target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluency/452/linkedin.png" className="icon" alt=""/></a>
            </div> 
        </div>
    );
    
    export default Footer;
    
    