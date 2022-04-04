import {useState} from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import {FiMenu, FiX} from 'react-icons/fi';



const Navbar = ({navbarLinks, imageSrc}) => {

    const [menuClicked, setMenuClicked] = useState(true);
    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
    };

    return(
        <nav className="navbar"> 
            <span className="navbar_logo"><img src={imageSrc} alt="" className="navbar_logo"/></span>
            
            {menuClicked ? (
            <FiX size={35} className="navbar_menu" onClick={toggleMenuClick} />
            ) : (
            <FiMenu size={35} className="navbar_menu" onClick={toggleMenuClick} />
            )} 
            <div className={menuClicked ? "navbar_list" : "navbar_list navbar_list--active"}> 
                <NavLink className="navbar_link" to="/home">Home</NavLink>
                <NavLink className="navbar_link" to="/ueberuns">Über uns</NavLink>
                <NavLink className="navbar_link" to="/analysetool">Analysetool</NavLink>
                <NavLink className="navbar_link" to="/angebot">Angebot</NavLink>
                <NavLink className="navbar_link" to="/kontakt">Kontakt</NavLink>
                  
            </div>
        </nav>
    );;
}

export default Navbar;