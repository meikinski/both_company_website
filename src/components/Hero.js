import React from 'react';
import "./Hero.css"


const Hero = ({ imageSrc, title, title2, description }) => {
    return(
        <div className='hero'>
            <img src={imageSrc} alt="Cologne" className='hero_image'/>
            <div className='hero_title'>
            {title}
            {title2}
            {description}
            </div>
        </div>
    );
}; 

export default Hero