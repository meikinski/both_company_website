import {useState} from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import {FiMenu, FiX} from 'react-icons/fi';



const Navbar = ({navbarLinks, imageSrc}) => {

    const [menuClicked, setMenuClicked] = useState(true);
    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
    };

    const toggleSiteClick = () => {
        setMenuClicked(true);
    }

    return(
        <nav> 
            <span className="navbar_logo"><img src={imageSrc} alt="" className="navbar_logo"/></span>
            
            {menuClicked ? (
            <FiMenu size={35} className="navbar_menu" onClick={toggleMenuClick} />
            ) : (
            <FiX size={35} className="navbar_menu" onClick={toggleMenuClick} />
            )} 
            <div className={menuClicked ? "navbar_list" : "navbar_list navbar_list--active"}> 
                <NavLink onClick={toggleSiteClick} className="navbar_link" to="/home">Home</NavLink>
                <NavLink onClick={toggleSiteClick} className="navbar_link" to="/ueberuns">Über uns</NavLink>
                <NavLink onClick={toggleSiteClick} className="navbar_link" to="/analysetool">Analysetool</NavLink>
                <NavLink onClick={toggleSiteClick} className="navbar_link" to="/angebot">Angebot</NavLink>
                <NavLink onClick={toggleSiteClick} className="navbar_link" to="/kontakt">Kontakt</NavLink>
                  
            </div>
        </nav>
    );;
}

export default Navbar;