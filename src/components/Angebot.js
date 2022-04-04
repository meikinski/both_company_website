import React from 'react';
import { NavLink } from "react-router-dom";
import { useInView } from 'react-intersection-observer';


export const Angebot = ({ imageSrc, title }) => {

  const {ref, inView } = useInView({
    threshold: 0.4,
  });

  return (
    <div className='section_black'>
    <div className= {inView ? "angebot_wrapper angebot_wrapper--zoom": "angebot_wrapper"} id='angebot' ref={ref}> 
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

    