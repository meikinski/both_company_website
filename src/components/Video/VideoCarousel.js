import './VideoCarousel.css';
import './devices.css';

export default function VideoCarousel() {
       return(
    
<div className="video_wrapper">
        <div className="css-mb">
          <div className="mb-display-position">
            <div className="mb-display">
              <div className="mb-screen-position">
                <div className="mb-screen">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zGDzdps75ns?autoplay=1?mute=1" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>                
                </div>
              </div>
            </div>
          </div>
          <div className="mb-body"></div>
          <div className="mb-bottom-cover"></div>
        </div>
        </div>      
        
     

       
        
    )
}