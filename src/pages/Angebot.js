import "../components/Hero.css"
import AngebotHeader from "../assets/Angebot.png";
import Hero from "../components/Hero"

function Angebot() {
    return (
      <div className="App">
        <Hero imageSrc={AngebotHeader} title={<h1>Unser Angebot</h1>}/>
      </div>
    );
  }
  
  export default Angebot;
  