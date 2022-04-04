import './VideoCarousel.css';
import {Carousel} from 'react-bootstrap';
import Video1 from '../assets/video1.mp4';
import Video2 from '../assets/video2.mp4';
import Video3 from '../assets/video3.mp4';
import ReactPlayer from 'react-player';
import "bootstrap/dist/css/bootstrap.css"; 
import { useInView } from 'react-intersection-observer';





export default function VideoCarousel() {
    const {ref, inView } = useInView({
        threshold: 0.4,
      });

    const videos = [
        {
            id: 1,
            title: "Video1",
            src: Video1,
            credit: "Video Number 1",
        },
        {
            id: 2,
            title: "Video2",
            src: Video2,
            credit: "Video Number 2",
        },
        {
            id: 3,
            title: "Video3",
            src: Video3,
            credit: "Video Number 3",
        },
    ]

    return(
    <div className='CarouselWrapper'>
         
        <div className= {inView ? "VideoCarousel VideoCarousel--zoom": "VideoCarousel"} ref={ref}>
           
            <Carousel variant="dark" d-block className='Carousel'>
                {videos.map((video) => {
                    return(
                        <Carousel.Item key={video.id}>
                            <ReactPlayer
                                url={video.src}
                                pip={true}
                                controls={true}
                                playing={true}
                                />
                        <Carousel.Caption>
                            <h3>{video.title}</h3>
                            <p>{video.credit}</p>    
                        </Carousel.Caption>    

                        </Carousel.Item>
                    )
                })}
            </Carousel>
           
        </div>
       
        
        </div>
    )
}