import React from 'react';
import { NavLink } from "react-router-dom";


export const Story = ({ imageSrc, title, text }) => {


  return (
  <div className='section_black'>
    <div className= "wrapper"> 
        <img src={imageSrc} alt="Logo" className='section_logo' />
        <div className='section_content'>
            <h2 className='section_content_title'>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem</p>
                <NavLink to="/ueberuns">
                <button className='button_black'>Über uns</button>
                </NavLink>
        </div>
    </div>
    </div>  
  )
}

export default Story;
