import { Helmet } from 'react-helmet';
import '../../App.css';
import Hero from "../../components/Hero/Hero"
import Story from '../../components/Story/Story';
import Disg from '../../components/Disg/Disg';
import VideoCarousel from '../../components/Video/VideoCarousel';
import Angebot from '../../components/Angebot/Angebot';
import Nutzen from '../../components/Nutzen/Nutzen';
import Kontakt from '../../components/Kontakt/Kontakt';
import Angebot_Pic from '../../assets/Workshop.jpg'
import Both_white from '../../assets/both_white.png'
import Who from '../../assets/whoami.jpg'
import Cologne from '../../assets/cologne.jpg';
import { motion } from 'framer-motion';


function Home() {

    return (
      <motion.div 
      className="home"
      intial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        <Helmet>
                <title>Both: Cologne - Workshops und Trainings in Köln</title>
                <meta
                    name="description"
                    content="Workshops und Trainings auf Basis der DisG-Persönlichkeitsprofile in Köln. Lerne deine Stärken und Schwächen kennen und nutze dieses Wissen im Beruf und Alltag. "
                />
                <meta
                    name="keywords"
                    content="Workshop, Training, Köln, DisG, Persönlichkeitsentwicklung, Berufsalltag, Kommunikation, Potenziale"
                />
            </Helmet>
        <Hero imageSrc={Cologne} title={<h1>Wir sind <br></br>both: cologne</h1>} description={<p>Workshops und Training auf Basis der DiSG&reg;-Persönlichkeitsprofile.</p>}/>
        <Story imageSrc={Both_white} title={"Unsere Story"} text={"Vom Reden zum machen. Wenn wir nicht selbst etwas ändern, wer dann? Für uns war klar: wir wollen das gemeinsam machen. Wir starten ein Business."}/>
        <VideoCarousel />
        <Angebot title={"Unser Workshop"} imageSrc={Angebot_Pic}/>
        <Nutzen />
        <Disg imageSrc={Who} title={"Das DiSG Modell"} title2={"Wir sind zertifiziert und gehören zum offiziellen Trainer Netzwerk des Wiley Verlags für DISG® Persönlichkeitsprofile."}/>
        <Kontakt />
      </motion.div>
    );
  }
  
  export default Home;
  