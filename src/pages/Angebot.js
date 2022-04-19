import { NavLink } from "react-router-dom";
import "../components/Hero.css"
import Hero from "../components/Hero"
import './Angebot.css'
import Ort from '../assets/ort.png'
import Datum from '../assets/datum.png'
import Uhr from '../assets/uhr.png'
import Kosten from '../assets/euro.png'
import Workshop2 from '../assets/workshop_background1.jpg'


function Angebot() {
    return (
      <div className="App">
          <Hero imageBlk={Workshop2} id="hero" title={<h1>Unser Angebot</h1>} title2={<p>Wie bin ich? Wie wirke ich? Wie handle ich? Und was bringt mir dieses Wissen im Arbeitsalltag?</p>} />
        <div className="workshop_wrapper">
          <div className="workshop_section">
            <h2>Workshop: "DiSG® &amp; ME"</h2>
            <p>In unerem Einsteigerworkshop <b>"DiSG® &amp; ME"</b> wollen wir folgende Fragen beantworten: Wie bin ich? Wie wirke ich? Wie handle ich? Und was bringt mir dieses Wissen im Arbeitsalltag? </p> 
            <p>Du triffst drei bis fünf andere Teilnehmer:innen, um gemeinsam einen Feierabend zu verbringen, bei dem wir uns in Wohlfühlatmosphäre über Persönlichkeitstypen austauschen.</p>
            <p>Als zertfizierte DisG®-Trainerinnen bearbeiten wir im Workshop die Grundlagen, aber vor allem die Anwendung auf konkrete Arbeitssituationen.</p>
            <h3>Inhalt des Workshops:</h3>
            <ul>
              <li>&raquo; Du machst einen <b>DiSG®-Kurztest</b> und lernst mehr über deinen <b>Persönlichkeitstypen</b>, deine <b>Stärken</b> und deine <b>Schwächen</b> im Arbeitskontext.</li><br></br>
              <li>&raquo; Wir sprechen über deine <b>Wirkung</b> auf andere und das <b>Zusammenspiel</b> mit anderen Persönlichkeitstypen</li><br></br>
              <li>&raquo; Du wendest DiSG® auf Arbeitssituationen aus deinem und dem Berufsalltag der anderen Teilnehmer:innen an.</li>
            </ul>
            
          </div>
          <div className="workshop_section_info">
              <div className="workshop_info_side_left">
              <div className="workshop_info_card">
              <div className="workshop_info_icon">
              <img src={Datum} alt="Datum"/>
              </div>
              <div className="workshop_info_text">
              <p>05.05.2022</p>
              <p>23.06.2022</p>
              </div>
              </div>
              
              <div className="workshop_info_card">
              <div className="workshop_info_icon">
              <img src={Uhr} alt="Uhr"/>
              </div>
              <p>17.00 - 21.00 Uhr</p>
              </div>
              
              <div className="workshop_info_card">
              <div className="workshop_info_icon">
                <img src={Kosten} alt="Kosten"/>
              </div>  
              <p>129,9€ inkl. Snacks&amp;Getränken</p>
              </div>
              </div>
              
              <div className="workshop_info_side_right">
              <div className="workshop_info_card" id="icon_ort">
              <div className="workshop_info_icon" >
              <img src={Ort} alt="Ort"/>
              </div>
              <div className="workshop_info_text">
              <p><b>Die Etage - Workshops, Produktion, Streaming</b></p>
              <p>Kurfürstenstr. 6</p>
              <p>50678 Köln</p>

              </div>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.2093641227507!2d6.958710715484669!3d50.91984397954286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25943850cffd%3A0x772f7788f0580e57!2sDie%20Etage%20-%20Workshops%2C%20Produktion%2C%20Streaming!5e0!3m2!1sde!2sde!4v1650205390620!5m2!1sde!2sde" width="400" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="karte"></iframe>

              </div>
              <br></br>
              <p>Interesse? Dann kontaktiere uns gerne über unser <NavLink to="/kontakt">Kontaktformular</NavLink> oder klicke <a href="https://www.eventbrite.de/o/both-cologne-43680950163" target="_blank" rel="noreferrer">
hier</a>, um direkt zur Buchung zu gelangen.</p>
            </div>
            
          </div>
          
          
        </div>
        
        
        
      
      
    );
  }
  
  export default Angebot;
  