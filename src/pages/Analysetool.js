import Hero from '../components/Hero';
import AnalysetoolPic from '../assets/Analysetool.png';
import CountUp from 'react-countup';
import { NavLink } from 'react-router-dom';
import './Analysetool.css';
import Disg_Logo from '../assets/Disg.png';
import Favicon from '../assets/favicin-image.png';
import Disg from '../assets/disg_header.jpg';


function Analysetool() {
  
    return (
      <div className="App">
        <Hero imageBlk={Disg} title={<h1>Das DiSG-Modell</h1>} title2={<p>Wir sind zertifiziert und gehören zum offiziellen Trainer Netzwerk des Wiley Verlags für DISG® Persönlichkeitsprofile.</p>}/>
        <div className="counter_wrapper">
          <div className="counter">
          <div className='counter_content'>
            <CountUp start={0} end={45000000} duration={5} delay={3} redraw={true} separator=","/>
            <h2>Anwendungen</h2>
          </div>
          </div>
          <div className="counter">
          <div className='counter_content'>
            <CountUp start={0} end={12} duration={5} delay={3} redraw={true} separator=","/>
            <h2>Persönlichkeitsstile</h2>
          </div>
          </div>
          <div className="counter">
            <div className='counter_content'>
            <CountUp start={0} end={30} duration={5} delay={3} redraw={true} separator=","/>
            <h2>Kulturen</h2>
            </div>
          </div>
          
          <div className="counter">
          <div className='counter_content'>
            <CountUp start={0} end={48} duration={5} delay={3} redraw={true} separator=","/>
            <h2>Jahre</h2>
            </div>
          </div>
      </div>
      <div className='disg_section_wrapper'>
        <div className="disg_section_heading">
      <h2>Was genau ist das DiSG Modell?</h2>
      </div>
      <div className='disg_section'>
        <img src={Disg_Logo} alt="DiSG Logo" className='disg_section_logo'/>
        <div className='disg_section_content'>
          <p>Das DiSG® Persönlichkeitsmodell wurde 1972 von John G. Geier, Psychologe und Leiter der Verhaltenswissenschaften an der University of Minnesota, veröffentlicht.</p>
          <br></br>
          <p>DISG®: ist ein Akronym aus den <b>vier Grundverhaltenstendenzen:</b> Dominant, Intuitiv, Stetig, Gewissenhaft. Diese sind mit unterschiedlichen Farben hinterlegt, weshalb es umgangssprachlich auch <b>„Vierfarben Modell“</b> genannt wird.</p>
          <br></br>
          <p>Es ist ein <b>Quadranten Modell</b>, geteilt durch die Koordinatenachsen aufgabenorientiert/menschenorientiert, introvertiert/extrovertiert woraus sich die vier Quadranten <b>D</b>, <b>i</b>, <b>S</b> und <b>G</b> ergeben. Um das Koordinatensystem sind kreisrund acht verschiedene Prioritäten angeordnet. Daraus ergeben sich <b>12 verschiedene Persönlichkeitstypen.</b></p>
          <br></br>
          <p>Jeder Persönlichkeitstyp hat eigene <b>Prioritäten, Stärken, Schwächen, Stressfaktoren und Motivatoren,</b> die in den unterschiedlichen Profilen genauer untersucht werden. Da es sich um bevorzugte Verhaltenspräferenzen handelt, hat man die Möglichkeit diese weiterzuentwickeln oder zu ändern, wenn man daran arbeiten möchte.</p>
          <b></b>
          <p>Das Modell wird alle <b>8 Jahre erneut validiert</b>, geprüft und auf einzelne Kulturen individuell angepasst. Aktuell umfasst es <b>30 verschiedene Ausführungen</b>, entwickelt für verschiedene Sprachen und Kulturkreise und arbeitet mit einem <b>adaptiven Fragebogen</b> gestützt durch eine Business Intelligence.</p>
      </div>
      </div>
      <div className='disg_section_types'>
        <div className='disg_type_card' id="green">
          <h5>Dominant</h5>
          <p>Entschlossen</p><br></br>
          <p>Ergebnisorientiert</p><br></br>
          <p>Risikobereit</p><br></br>
          <p>Durchsetzungsstark</p><br></br>
          <p>Konfliktbereit</p><br></br>
          <p>Übernimmt Führung</p><br></br>
          <p>Mag Herausforderungen</p>
        </div>
        <div className='disg_type_card' id="red">
          <h5>Initiativ</h5>
          <p>Kreativ</p><br></br>
          <p>Ideenreich</p><br></br>
          <p>Offen</p><br></br>
          <p>Begeisterungsfähig</p><br></br>
          <p>Optimistisch</p><br></br>
          <p>Unterhaltsam</p><br></br>
          <p>Arbeitet gern im Team</p>
        </div>
        <div className='disg_type_card' id="blue">
          <h5>Stetig</h5>
          <p>Loyal</p><br></br>
          <p>Hilfsbereit</p><br></br>
          <p>Verlässlich</p><br></br>
          <p>Geduldig</p><br></br>
          <p>Guter Zuhörer</p><br></br>
          <p>Teamfähig</p><br></br>
          <p>Arbeitet gern im Hintergrund</p>
        </div>
        <div className='disg_type_card' id="yellow">
          <h5>Gewissenhaft</h5>
          <p>Qualitätsbewusst</p><br></br>
          <p>Präzise</p><br></br>
          <p>Diplomatisch</p><br></br>
          <p>Analytisch</p><br></br>
          <p> Kritisch</p><br></br>
          <p>Distanziert</p><br></br>
          <p>Mag Standards</p>
        </div>
        </div>
      
      </div>
      <div className='disg_einsatz_wrapper'>
        <div className='disg_einsatz_heading'>
      <h2>Das DiSG-Modell wird in folgenden Bereichen eingesetzt:</h2>
      </div>
      <div className='disg_einsatz'>
        <div className='disg_einsatz_card'>
          <img src={Favicon} alt="Favicon" className='disg_einsatz_card_favicon'/>
          <h5>Soft Skill <br></br>Entwicklung</h5>
        </div>
      
        <div className='disg_einsatz_card'>
        <img src={Favicon} alt="Favicon" className='disg_einsatz_card_favicon'/>
          <h5>Training <br></br>Kommunikation</h5>
        </div>
        <div className='disg_einsatz_card'>
        <img src={Favicon} alt="Favicon" className='disg_einsatz_card_favicon'/>
          <h5>Team-<br></br>entwicklung</h5>
        </div>
        <div className='disg_einsatz_card'>
        <img src={Favicon} alt="Favicon" className='disg_einsatz_card_favicon'/>
          <h5>Vertrieb &amp;<br></br>Verhandlung</h5>
        </div>
        <div className='disg_einsatz_card'>
        <img src={Favicon} alt="Favicon" className='disg_einsatz_card_favicon'/>
          <h5>Personal-<br></br>auswahl</h5>
        </div>
        <div className='disg_einsatz_card'>
        <img src={Favicon} alt="Favicon" className='disg_einsatz_card_favicon'/>
          <h5>Marketing</h5>
        </div>
        <div className='disg_einsatz_card'>
        <img src={Favicon} alt="Favicon" className='disg_einsatz_card_favicon'/>
          <h5>Führungskräfte-<br></br>training</h5>
        </div>
        <div className='disg_einsatz_card'>
       
        <img src={Favicon} alt="Favicon" className='disg_einsatz_card_favicon'/>
       
        
          <h5>Persönlichkeits-<br></br>entwicklung</h5>
          
        </div>
        </div>
        </div>
        <div className='wrapper_kontakt' id='kontakt_überuns'>
          
        <div className='text_wrapper'>
            <h4>Du findest unser Angebot spannend und willst mit uns arbeiten?</h4>
           <h5>Dann schick eine Mail oder ruf uns an.</h5>
           <NavLink to="/kontakt">
           <button className='btn btn-4 btn-sep icon-send'>Kontakt</button></NavLink>
        </div>
    </div> 
    
      </div>
    );
  }
  
  export default Analysetool;
  