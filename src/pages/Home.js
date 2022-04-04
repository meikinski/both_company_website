import '../App.css';
import Köln_Home from "../assets/Köln Home.png"
import DisgLogo from "../assets/Disg_logo.webp";
import Hero from "../components/Hero"
import Story from '../components/Story';
import Disg from '../components/Disg';
import VideoCarousel from '../components/VideoCarousel';
import Angebot from '../components/Angebot';
import Nutzen from '../components/Nutzen';
import Kontakt from '../components/Kontakt';
import Angebot_Pic from '../assets/Workshop.jpg'
import Disg_Logo from '../assets/Disg.png'
import Both_white from '../assets/both_white.png'
import Disg_Logo_neu from '../assets/Disg_logo_neu.png'


function Home() {
    return (
      <div className="App">
        <Hero imageSrc={Köln_Home} title={<h1>Wir sind both:cologne</h1>} title2={<p>Wie bin ich? Wie wirke ich? Wie handle ich?</p>} description={<p>Workshops und Coaching auf der Basis der DiSG-Persönlichkeitsprofile.</p>}/>
        <Story imageSrc={Both_white} title={"Unsere Story"} text={"Vom Reden zum machen. Wenn wir nicht selbst etwas ändern, wer dann? Für uns war klar: wir wollen das gemeinsam machen. Wir starten ein Business."}/>
        <VideoCarousel />
        <Angebot title={"Unsere Workshops"} imageSrc={Angebot_Pic}/>
        <Nutzen />
        <Disg imageSrc={Disg_Logo_neu} title={"Das DiSG Modell"} />
        <Kontakt />
      </div>
    );
  }
  
  export default Home;
  