import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';
import "../../components/Hero/Hero.css"
import Hero from "../../components/Hero/Hero"
import './AngebotPage.css'
import Ort from '../../assets/ort.png'
import Datum from '../../assets/datum.png'
import Uhr from '../../assets/uhr.png'
import Kosten from '../../assets/euro.png'
import Workshop2 from '../../assets/workshop_background1.jpg'
import { motion } from 'framer-motion';



function Angebot() {
    return (
      <motion.div 
      className="angebot"
      intial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        <Helmet>
                <title>Both: Cologne - Workshop</title>
                <meta
                    name="description"
                    content="Workshops und Training auf Basis der DiSG®-Persönlichkeitsprofile."
                />
                <meta
                    name="keywords"
                    content="Workshop Köln, DiSG Köln, Weiterentwicklung Köln, DiSG-Test Köln, Persönlichkeitsentwicklung Köln"
                />
            </Helmet>
        <Hero imageBlk={Workshop2} id="hero" title={<h1>Unser Angebot</h1>} title2={<p>Workshops und Training auf Basis der DiSG®-Persönlichkeitsprofile.</p>} />
        <div className="workshop_wrapper">
        <div className="workshop_section">
            <h2>Workshop: "DiSG® &amp; Sales"</h2>
              <p>Weiterbildungen für Soft Skills im Sales: Nutze Persönlichkeitsprofile für deine Verkaufsgespräche. </p> 
              <p>Überzeuge deine Ansprechpartner:innen basierend auf ihren Persönlichkeitstypen direkt vom ersten
Moment an. Schätze deine Gesprächspartner:innen schnell richtig ein und lerne dein Produkt
entsprechend zu pitchen.</p><br></br><br></br>
              <p>Du triffst drei bis fünf andere Teilnehmer*innen aus dem Salesbereich, um gemeinsam einen
Feierabend zu verbringen, bei dem wir uns in Wohlfühlatmosphäre über Persönlichkeitstypen und
die Nutzung für den Salesbereich austauschen.</p><br></br><br></br>
              <p>Als zertifizierte DISG®-Trainerinnen bearbeiten wir im Workshop die Grundlagen,
aber vor allem die Anwendung auf konkrete Arbeitssituationen.</p><br></br>

            <h3>Inhalt des Workshops:</h3>
            <p>Im Einstiegsworkshop <b>"DiSG® &amp; Sales":</b></p> 
              <ul>
                <li>&raquo; lernst du die Grundlagen des <b>DiSG®-Modells</b>: welche <b>Persönlichkeitstypen</b> gibt es, wie
erkenne ich sie im <b>Verkaufsgespräch</b> und was brauchen sie von mir für ihre
<b>Entscheidungsfindung</b>.</li><br></br>
                <li>&raquo; machst du einen <b>DiSG®-Kurztest</b> und lernst mehr über deinen <b>Persönlichkeitstypen</b>, deine
Stärken, deine Schwächen und das Zusammenspiel mit anderen Persönlichkeitstypen.</li><br></br>
                <li>&raquo; wendest du DISG® auf <b>konkrete Arbeitssituationen</b> (Qualification Call, Discovery und
Demo/Pitch) an.</li>
              </ul>
            </div>
            <div className="workshop_section_info">
              <div className="workshop_info_side_left">
                <div className="workshop_info_card">
                <div className="workshop_info_icon">
                  <img src={Datum} alt="Datum"/>
                </div>
                <div className="workshop_info_text">
                  
                  <p>Donnerstag, 9.11.2023</p>
                  <p>Dienstag, 21.11.2023</p>
                </div>
                </div>
                <div className="workshop_info_card">
                  <div className="workshop_info_icon">
                    <img src={Uhr} alt="Uhr"/>
                  </div>
                  <div className="workshop_info_text">
                  <p>17.00 - 21.30 Uhr</p>
                  </div>
                </div>
                <div className="workshop_info_card">
                  <div className="workshop_info_icon">
                    <img src={Kosten} alt="Kosten"/>
                  </div>
                  <div className="workshop_info_text"> 
                  <p>Auf Anfrage</p>
                  
                  </div>
                </div>
              </div>
              <div className="workshop_info_side_right">
                <div className="workshop_info_card" id="icon_ort">
                  <div className="workshop_info_icon" >
                    <img src={Ort} alt="Ort"/>
                  </div>
                  <div className="workshop_info_text">
                    <p><b>Die Etage</b></p>
                    <p>Kurfürstenstr. 6</p>
                    <p>50678 Köln</p>
                  </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.2093641227507!2d6.958710715484669!3d50.91984397954286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25943850cffd%3A0x772f7788f0580e57!2sDie%20Etage%20-%20Workshops%2C%20Produktion%2C%20Streaming!5e0!3m2!1sde!2sde!4v1650205390620!5m2!1sde!2sde" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="karte"></iframe>
              </div>
              <br></br>
                <p>Interesse? Dann kontaktiere uns gerne über unser <NavLink to="/kontakt">Kontaktformular</NavLink>.</p>
            </div>
        <div className="workshop_section">
            <h2>Teamworkshop: "DiSG® &amp; Sales"</h2>
              <p>Weiterbildungen für Soft Skills im Sales: Kundentypen erkennnen und so Ziele erreichen </p> 
              <p>Dein Team soll lernen, das Verhalten von Kund:innen besser zu verstehen und effektiver zu
kommunizieren?</p>
              <p>Mit dem DiSG®-Persönlichkeitsmodell überzeugt ihr eure Ansprechpartner:innen basierend auf ihren
Persönlichkeitstypen direkt vom ersten Moment an. Für eine schnelle Einschätzung des Gegenübers
und einen überzeugenden Pitch.</p><br></br><br></br>
              <p>Ein Teamworkshop bestehend aus einem Einstiegsimpuls und zwei Praxisparts, ganz konkret
zugeschnitten auf euer Geschäftsmodell und euer Produkt.</p><br></br>
<p>Ein Teamworkshop bestehend aus einem Einstiegsimpuls und zwei Praxisparts, ganz konkret
zugeschnitten auf euer Geschäftsmodell und euer Produkt.</p>
            <h3>Inhalt des Workshops:</h3>
            <p>Im Teamworkshop <b>"DiSG® &amp; Sales":</b></p> 
              <ul>
                <li>&raquo; lernt dein Team die Grundlagen des DiSG®-Modells: welche <b>Persönlichkeitstypen</b> gibt es, wie
erkenne ich sie im <b>Verkaufsgespräch</b> und was brauchen sie von mir für ihre
Entscheidungsfindung.</li><br></br>
                <li>&raquo; wendet ihr im Team das DISG®-Modell direkt auf konkrete Situationen aus eurem <b>Vertriebsalltag</b> (Qualification Call, Discovery und Demo/Pitch) an.</li><br></br>
                <li>&raquo; Die erarbeiteten Inhalte sind für euch direkt im Arbeitsalltag nutzbar.</li>
              </ul>
            </div>
            <div className="workshop_section_info">
              <div className="workshop_info_side_left">
                <div className="workshop_info_card">
                <div className="workshop_info_icon">
                  <img src={Datum} alt="Datum"/>
                </div>
                <div className="workshop_info_text">
                  
                  <p>Auf Anfrage</p>
                </div>
                </div>
                <div className="workshop_info_card">
                  <div className="workshop_info_icon">
                    <img src={Uhr} alt="Uhr"/>
                  </div>
                  <div className="workshop_info_text">
                  <p>Auf Anfrage</p>
                  </div>
                </div>
                <div className="workshop_info_card">
                  <div className="workshop_info_icon">
                    <img src={Kosten} alt="Kosten"/>
                  </div>
                  <div className="workshop_info_text"> 
                  <p>Auf Anfrage</p>
                  
                  </div>
                </div>
              </div>
              <div className="workshop_info_side_right">
                <div className="workshop_info_card" id="icon_ort">
                  <div className="workshop_info_icon" >
                    <img src={Ort} alt="Ort"/>
                  </div>
                  <div className="workshop_info_text">
                    <p><b>Die Etage</b></p>
                    <p>Kurfürstenstr. 6</p>
                    <p>50678 Köln</p>
                    
                  </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.2093641227507!2d6.958710715484669!3d50.91984397954286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25943850cffd%3A0x772f7788f0580e57!2sDie%20Etage%20-%20Workshops%2C%20Produktion%2C%20Streaming!5e0!3m2!1sde!2sde!4v1650205390620!5m2!1sde!2sde" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="karte"></iframe>
              </div>
              <br></br>
                <p>Interesse? Dann kontaktiere uns gerne über unser <NavLink to="/kontakt">Kontaktformular</NavLink>.</p>
            </div>
          <div className="workshop_section">
            <h2>Workshop: "DiSG® &amp; ME"</h2>
              <p>In unserem Einsteigerworkshop <b>"DiSG® &amp; ME"</b> wollen wir folgende Fragen beantworten: Wie bin ich? Wie wirke ich? Wie handle ich? Und was bringt mir dieses Wissen im Arbeitsalltag? </p> 
              <p>Du triffst drei bis fünf andere Teilnehmer*innen, um gemeinsam einen Feierabend zu verbringen, bei dem wir uns in Wohlfühlatmosphäre über Persönlichkeitstypen austauschen.</p>
              <p>Als zertfizierte DiSG®-Trainerinnen bearbeiten wir im Workshop die Grundlagen, aber vor allem die Anwendung auf konkrete Arbeitssituationen aus dem Berufsalltag der Teilnehmer*innen.</p>
              <p>Wir halten den Workshop extra klein, so dass eine persönliche Atmosphäre entsteht und
                  Jede / Jeder zu Wort kommen kann.</p>
            <h3>Inhalt des Workshops:</h3>
              <ul>
                <li>&raquo; Du machst einen <b>DiSG®-Kurztest</b> und lernst mehr über deinen <b>Persönlichkeitstypen</b>, deine <b>Stärken</b> und deine <b>Schwächen</b> im Arbeitskontext.</li><br></br>
                <li>&raquo; Wir sprechen über deine <b>Wirkung</b> auf andere und das <b>Zusammenspiel</b> mit anderen Persönlichkeitstypen</li><br></br>
                <li>&raquo; Du wendest DiSG® auf Arbeitssituationen aus deinem und dem Berufsalltag der anderen Teilnehmer*innen an.</li>
              </ul>
            </div>
          <div className="workshop_section_info">
              <div className="workshop_info_side_left">
                <div className="workshop_info_card">
                <div className="workshop_info_icon">
                  <img src={Datum} alt="Datum"/>
                </div>
                <div className="workshop_info_text">
                  
                  <p>Auf Anfrage</p>
                </div>
                </div>
                <div className="workshop_info_card">
                  <div className="workshop_info_icon">
                    <img src={Uhr} alt="Uhr"/>
                  </div>
                  <div className="workshop_info_text">
                  <p>Auf Anfrage</p>
                  </div>
                </div>
                <div className="workshop_info_card">
                  <div className="workshop_info_icon">
                    <img src={Kosten} alt="Kosten"/>
                  </div>
                  <div className="workshop_info_text"> 
                  <p>129€ brutto</p>
                  <p>inkl. Workbook</p>
                  </div>
                </div>
              </div>
              <div className="workshop_info_side_right">
                <div className="workshop_info_card" id="icon_ort">
                  <div className="workshop_info_icon" >
                    <img src={Ort} alt="Ort"/>
                  </div>
                  <div className="workshop_info_text">
                    <p><b>Die Etage</b></p>
                    <p>Kurfürstenstr. 6</p>
                    <p>50678 Köln</p>
                  </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.2093641227507!2d6.958710715484669!3d50.91984397954286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25943850cffd%3A0x772f7788f0580e57!2sDie%20Etage%20-%20Workshops%2C%20Produktion%2C%20Streaming!5e0!3m2!1sde!2sde!4v1650205390620!5m2!1sde!2sde" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="karte"></iframe>
              </div>
              <br></br>
                <p>Interesse? Dann kontaktiere uns gerne über unser <NavLink to="/kontakt">Kontaktformular</NavLink>.</p>
            </div>
          </div>
        </motion.div>
        
    );
  }
  
  export default Angebot;
  