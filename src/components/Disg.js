import React from 'react';
import { NavLink } from "react-router-dom";
import { useInView } from 'react-intersection-observer';




export const Disg = ({ imageSrc, title, text }) => {

  const {ref, inView } = useInView({
    threshold: 0.4,
  });

  return (
    <div className='section_black'>
    <div className= {inView ? "wrapper wrapper--zoom": "wrapper"} id='disg' ref={ref}> 
        <div className='section_content' id='disg_content'>
            <h2 className='section_content_title'>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem</p>
                <NavLink to="/analysetool">
               <button className='button_black'>Erfahre mehr</button>
                </NavLink>
        </div>
        <img src={imageSrc} alt="Logo" className='section_logo' id='disg_logo'/>
    </div>
    </div>
  )
}

export default Disg;