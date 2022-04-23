import React from 'react';
import { NavLink } from "react-router-dom";
import './Angebot.css'


export const Angebot = ({ imageSrc, title }) => {

  
  return (
    <div className='angebot_section_black'>
      <div className= "angebot_wrapper" id='angebot'> 
        <img src={imageSrc} alt="Logo" id='angebot_picture' loading='lazy'/>
        <div className='angebot_section_content' id='angebot_content'>
            <h2 className='angebot_section_content_title'>{title}</h2>
                <p>Du kennst deine Stärken und Schwächen im Arbeitskontext nicht oder nimmst sie für selbstverständlich? Vielen Menschen fällt es schwer, ihre eigenen Stärken zu benennen, daran arbeiten wir im Workshop. Außerdem bekommst du Tools, mit denen du im Berufsalltag Kolleg*innen und Situationen besser einschätzen und lösen kannst. Die Workshops finden in kleinen Gruppen statt, damit die Teilnehmer*innen möglichst viel lernen können.
                </p>
                <NavLink to="/angebot"><button className='angebot_button_black'>Angebot</button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Angebot;

    