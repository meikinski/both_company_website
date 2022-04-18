import './VideoCarousel.css';
import {Carousel} from 'react-bootstrap';
import Video1 from '../assets/video1.mp4';

import ReactPlayer from 'react-player';
import "bootstrap/dist/css/bootstrap.css"; 
import { useInView } from 'react-intersection-observer';
import './devices.css';

export default function VideoCarousel() {
       return(
    <div className='video_wrapper'>
        <div className="videosection_header">
            <h2>Weshalb ein Workshop sinnvoll ist</h2>
        </div>
        <div className="videosection_content_macbook">
            <div class="device device-macbook">
                <div class="device-frame">
                <video src={Video1} autoPlay muted loop controls className='video'/>
                </div>
                <div class="device-stripe"></div>
                <div class="device-header"></div>
                <div class="device-sensors"></div>
                <div class="device-btns"></div>
                <div class="device-power"></div>
            </div> 
            </div>
            <div className="videosection_content_mobile">
            <div class="device device-iphone-x">
                <div class="device-frame">
                <video src={Video1} autoPlay muted loop controls className='video'/>
                </div>
                <div class="device-stripe"></div>
                <div class="device-header"></div>
                <div class="device-sensors"></div>
                <div class="device-btns"></div>
                <div class="device-power"></div>
            </div> 
            </div>
            
       
           
     </div>

       
        
    )
}