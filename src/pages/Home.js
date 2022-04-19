import '../App.css';
import Hero from "../components/Hero"
import Story from '../components/Story';
import Disg from '../components/Disg';
import VideoCarousel from '../components/VideoCarousel';
import Angebot from '../components/Angebot';
import Nutzen from '../components/Nutzen';
import Kontakt from '../components/Kontakt';
import Angebot_Pic from '../assets/Workshop.jpg'
import Both_white from '../assets/both_white.png'
import Who from '../assets/whoami.jpg'
import Cologne from '../assets/cologne.jpg';


function Home() {

  
    return (
      <div className="App">
       
        <Hero imageSrc={Cologne}
        title={<h1>Wir sind <br></br>both: cologne</h1>} description={<p>Workshops und Training auf Basis der DiSG&reg;-Persönlichkeitsprofile.</p>}/>
        <Story imageSrc={Both_white} title={"Unsere Story"} text={"Vom Reden zum machen. Wenn wir nicht selbst etwas ändern, wer dann? Für uns war klar: wir wollen das gemeinsam machen. Wir starten ein Business."}/>
        <VideoCarousel />
        <Angebot title={"Unsere Workshops"} imageSrc={Angebot_Pic}/>
        <Nutzen />
        <Disg imageSrc={Who} title={"Das DiSG Modell"} title2={"Wir sind zertifiziert und gehören zum offiziellen Trainer Netzwerk des Wiley Verlags für DISG® Persönlichkeitsprofile."}/>
        <Kontakt />
      </div>
    );
  }
  
  export default Home;
  