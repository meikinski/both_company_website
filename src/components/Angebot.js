import React from 'react';
import { NavLink } from "react-router-dom";


export const Angebot = ({ imageSrc, title }) => {

  
  return (
    <div className='section_black'>
    <div className= "angebot_wrapper" id='angebot'> 
        <img src={imageSrc} alt="Logo" id='angebot_picture'/>
        <div className='section_content' id='angebot_content'>
            <h2 className='section_content_title'>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem</p>
            <NavLink to="/angebot">
            <button className='button_black'>Über uns</button>
            </NavLink>
        </div>
    </div>
    </div>
  )
}

export default Angebot;

    