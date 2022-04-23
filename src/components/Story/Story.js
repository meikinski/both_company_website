import React from 'react';
import { NavLink } from "react-router-dom";
import './Story.css'


export const Story = ({ imageSrc, title, text }) => {


  return (
  <div className='story_section_black'>
    <div className= "story_wrapper"> 
        <img src={imageSrc} alt="Logo" className='story_section_logo' loading='lazy'/>
        <div className='story_section_content'>
            <h2 className='story_section_content_title'>{title}</h2>
            <p>Berufseinstieg, Aufstieg, Erfolge, Rollen im Unternehmen, Teamkonstellationen, Jobsuche, Veränderung, Mitarbeiterentwicklung, Konfliktsituationen – wir sind beide seit einigen Jahren in der Berufswelt angekommen und haben schon immer gerne gemeinsam über die Arbeit reflektiert, Situationen besprochen und uns gegenseitig unterstützt.
            </p>
            <NavLink to="/ueberuns"><button className='button_black'>Über uns</button></NavLink>
        </div>
    </div>
  </div>  
  )
}

export default Story;
