import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css';


    const Footer = () => (
        <div className="footer">
            <div className="contact">
            <p><b>BOTH: COLOGNE</b></p>
            <p>Adresse</p>
            <p>Adresse</p>
            <p>Mobil: +49 176 – 99 58 85 52 </p>
            <p>Mail: info@both-cologne.de</p>
            </div>
            <div className="social">
            <p>Folge uns</p>
            <a href='https://www.instagram.com/both_cologne/' target="_blank" rel="noreferrer"><img src="https://img.icons8.com/stickers/50/000000/instagram-new--v2.png" classname="icon" alt=""/></a>
            <a href='https://www.linkedin.com/company/both-cologne/' target="_blank" rel="noreferrer"><img src="https://img.icons8.com/stickers/50/000000/linkedin.png" classname="icon" alt=""/></a>
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
    
    