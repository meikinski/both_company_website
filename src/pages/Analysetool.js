import Hero from '../components/Hero';
import AnalysetoolPic from '../assets/Analysetool.png';

function Analysetool() {
    return (
      <div className="App">
        <Hero imageSrc={AnalysetoolPic} title={<h1>Das DiSG-Modell</h1>}/>
      </div>
    );
  }
  
  export default Analysetool;
  