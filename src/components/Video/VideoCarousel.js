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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zGDzdps75ns?playlist=zGDzdps75ns&autoplay=1&controls=0&loop=1&mute=1" frameborder="0" allowfullscreen title="video"></iframe>
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