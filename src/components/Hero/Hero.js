import React from 'react';
import "./Hero.css"


const Hero = ({ imageSrc, imageBlk, title, title2, description }) => {
    return(
        <div className='hero'>
            {imageSrc && <img src={imageSrc} alt="hero" className='hero_image'loading='lazy'/>}
            {imageBlk && <img src={imageBlk} alt="hero" className='hero_image_blk'loading='lazy'/>}
            <div className='hero_title'>
            {title}
            {title2}
            {description}
            </div>
        </div>
    );
}; 

export default Hero