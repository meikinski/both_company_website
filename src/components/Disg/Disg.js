import React from 'react';
import { NavLink } from "react-router-dom";
import './Disg.css'


export const Disg = ({ imageSrc, title }) => {

  return (
    <div className='disg_section_black'>
      <div className= "disg_wrapper" id='disg'> 
        <div className='disg_section_content' id='disg_content'>
            <h2 className='disg_section_content_title'>{title}</h2>
            <p>Das DiSG® Persönlichkeitsmodell basiert auf vier Grundverhaltenstendenzen, aus denen sich verschiedene Persönlichkeitsprofile ergeben. Diese Profile ermöglichen es das eigene Verhalten, Motivatoren, Stärken, Schwächen, Prioritäten und Stressoren kennenzulernen sowie die verschiedenen Ausprägungen und Verhaltenstendenzen von Kollegen und Kunden zu verstehen.</p>
            <NavLink to="/analysetool"><button className='disg_button_black'>Analysetool</button></NavLink>
        </div>
        <img src={imageSrc} alt="Logo" className='disg_section_logo' id='disg_picture'/>
      </div>
    </div>
  )
}

export default Disg;