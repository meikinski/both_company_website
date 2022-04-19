import React from 'react';
import { NavLink } from "react-router-dom";


export const Disg = ({ imageSrc, title }) => {

  return (
    <div className='section_black'>
    <div className= "wrapper" id='disg'> 
        <div className='section_content' id='disg_content'>
            <h2 className='section_content_title'>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem</p>
                <NavLink to="/analysetool">
               <button className='button_black'>Analysetool</button>
                </NavLink>
        </div>
        <img src={imageSrc} alt="Logo" className='section_logo' id='disg_picture'/>
    </div>
    </div>
  )
}

export default Disg;