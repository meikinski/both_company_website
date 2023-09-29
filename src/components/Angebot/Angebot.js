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
                <p>Du kennst deine Stärken und Schwächen im Arbeitskontext nicht oder nimmst sie für selbstverständlich?
                </p>
                <p>Du arbeitest im Vertrieb und möchtest deine Ansprechpartner:innen basierend auf ihren
Persönlichkeitstypen direkt vom ersten Moment an überzeugen?
                </p>
                <p>Du leitest ein Vertriebsteam und möchtest gemeinsam mit deinem Team lernen, das Verhalten von
Kund:innen besser zu verstehen und effektiver zu kommunizieren?
                </p>
                <p>In unseren Workshops lernst du die Grundlagen des DiSG®-Modells und wendest diese gleich auf
konkrete Arbeitssituationen aus deinem Berufsalltag an.
                </p>

                <NavLink to="/angebot"><button className='angebot_button_black'>Angebot</button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Angebot;

    