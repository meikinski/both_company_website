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
                   <iframe width="960" height="480" src="https://www.youtube.com/embed/GUEZCxBcM78?rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;controls=2" frameBorder="0" title="video"></iframe>
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