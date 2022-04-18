import Hero from "../components/Hero"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import './ÜberUns.css'
import "../components/Hero.css"
import Gründerinnen from "../assets/Gründerinnen.png";
import Antje from "../assets/Antje.jpeg"
import Lena from "../assets/Lena.jpeg"
import Glühbirne from "../assets/Glühbirne.png"
import Prozess from "../assets/prozess.png"
import Positiv from "../assets/positive.png"
import Group from '../assets/group.png'

function ÜberUns() {
  const [showMoreAntje, setShowMoreAntje] = useState(false);
  const handleShowMoreAntje = () =>
    !showMoreAntje ? setShowMoreAntje(true) : setShowMoreAntje(false);
  
  const [showMoreLena, setShowMoreLena] = useState(false);
  const handleShowMoreLena = () =>
    !showMoreLena ? setShowMoreLena(true) : setShowMoreLena(false);


    return (
      <div className="app">
        <Hero imageSrc={Gründerinnen} title={<h1>Über Uns</h1>} title2={<p>A SUCCESSFUL TEAM BEATS WITH ONE HEART</p>} />
        
        <div className="ueberuns_section_wrapper">
        <div className="section_wrapper">
        <h2>Unsere Story</h2>
        <p>Berufseinstieg, Erfolge, Rollen im Unternehmen, Jobsuche, Veränderung, Mitarbeiterentwicklung, Teamkonstellationen, Konfliktsituationen – wir zwei sind seit einigen Jahren in der Berufswelt angekommen und haben schon immer gerne gemeinsam über die Arbeit und über uns bei der Arbeit reflektiert, Situationen besprochen und uns gegenseitig unterstützt.
        </p>
        <br></br>
        <p>Nach den ersten Jobjahren und den ersten positiven, wie negativen Erfahrungen kamen wir in unseren Gesprächen immer öfter an den Punkt, dass man „das doch besser machen müsse“, „gemeinsam viel mehr erreichen könne“, „dass Gleichberechtigung doch irgendwie konsequenter Einzug in die Arbeitswelt erhalten müsse “.</p>
        </div>
        <div className="section_wrapper">
        <h3>Vom Reden zum Machen</h3>
        <p>Wenn wir nicht selbst etwas ändern, wer dann?
Und für uns war klar: wir wollen das gemeinsam machen. Wir starten ein Business.</p>
        <br></br>
        <p>Also haben wir uns auf die Suche gemacht. Auf die Suche nach unserem Warum, nach unseren Werten, nach denen wir arbeiten wollen und schnell wurde die Idee geboren: eine bewusste Wahrnehmung von mir und meinem Arbeitsumfeld, mit den unterschiedlichen Persönlichkeiten und unterschiedlichen Bedürfnissen, ist der Schlüssel für bessere Kommunikation und einen respektvollen und reflektierten Umgang miteinander. Und eine Möglichkeit, sich selbst stärker im Berufsleben zu positionieren und Teams erfolgreicher zu machen.
Ein Herzensthema, das wir weitergeben möchten. Und zwar in einem Prozess, der transparent und einfach verständlich ist, mit konkreten Tools &amp; Ideen, die jeder direkt anwenden kann.</p>
        <br></br>
        
        <p>Dafür haben wir uns mit vielen Persönlichkeitstools auseinandergesetzt und sie getestet und uns daraufhin für das DiSG®-Persönlichkeitstool zertifizieren lassen und verschiedene Angebote entwickelt, dieses Tool und unsere Philosophie zu erklären, zu testen und anzuwenden.</p>
        <br></br>
        <p><b>Und damit geht es los! Wir freuen uns auf den Austausch mit dir!</b></p>
        </div>
        </div>
        <div className="cards_wrapper">
          <div className="card">
            <div className="card_image">
              <img src={Antje} alt="digs-logo" />
            </div>
            <div className="card_content">
              <h4>Antje Schüth</h4>
              <h6>Co-Founder</h6>
              <p>„Ich bin begeistert und kreiere Ideen, um andere zu inspirieren und mitzureißen, das treibt mich an.“</p>
              <br></br>
              <button className="button_black" id="button_überuns" onClick={handleShowMoreAntje}>Mehr über mich</button>

              {showMoreAntje && (
                <>
              <ul>
                <li>✓ Zertifizierte DISG®-Trainerin</li>
                <li>✓ Master of Science mit Schwerpunkt Marketing</li>
                <li>✓ Bachelor of Commerce mit Schwerpunkt strategisches Marketing in Emmen (NL) und Tandil (ARG)</li>
              </ul>
              <br></br>
              <p>Als Produktmanagerin in einem global tätigem Unternehmen habe ich in unzähligen Projekten mit Menschen gearbeitet. Hier fungiere ich als Vernetzungsstelle für verschiedene Fachbereiche, Abteilungen und Mitarbeiter. Dabei habe ich gelernt, dass das Wahrnehmen von Stärken, Schwächen und Bedürfnissen im Arbeitskontext ein wichtiger Erfolgsfaktor ist.</p>
              <br></br>
              <p>In den letzten 10 Jahren habe ich in vier Ländern gelebt und arbeite in einem internationalen Team. Dadurch habe ich ein breites Wissen über interkulturelle und vernetzte Zusammenarbeit.</p>
              <br></br>
              <p>&raquo; <b>Kernkompetenzen: Lösungsorientiertes Denken  Empathie</b></p></>)}
            </div>
          </div>  
          <div className="card">
            <div className="card_image">
              <img src={Lena} alt="digs-logo" />
            </div>
            <div className="card_content">
              <h4>Lena Bonato</h4>
              <h6>Co-Founder</h6>
              <p>“Wir haben mehr Potenzial, als wir uns zutrauen oder zeigen. Sich gegenseitig fordern und fördern, das treibt mich an.“</p>
              <br></br>
              <button className="button_black" id="button_überuns" onClick={handleShowMoreLena}>Mehr über mich</button>
              {showMoreLena && (
                <>
              <ul>
                <li>✓ Zertifizierte DISG®-Trainerin</li>
                <li>✓ Bachelor of Communication mit Schwerpunkt strategische Kommunikation in Groningen (NL), Göteborg (SWE) und Köln.</li>
                <li>✓ Gründungsmitglied und Partnerin in der Kreativagentur onliveline – Büro für Konzept und Kommunikation (live, online, hybrid, VR).</li>
              </ul>
              <br></br>
              <p>Seit 9 Jahren arbeite ich bei onliveline in der Kreation und Live-Kommunikationsberatung. Mein Schwerpunkt liegt hier vor allem auf dem Erzeugen von Inhalten - gemeinsam mit dem Kunden - und diese dann wirkungsvoll, verständlich und nachhaltig in Szene zu setzen.</p>
              <br></br>
              <p>Außerdem verantworte ich die Personalentwicklung unseres 8-köpfigen Teams.</p>
              <br></br>
              <p>&raquo; <b>Kernkompetenzen: Kreativität &amp; Pragmatismus</b></p></>)}
            </div>
          </div>
          
        </div>
        <div className="werte_cards_wrapper">
            <div className="werte_header">
              <h2>Unsere Werte</h2>
             </div>
            <div className="werte_content">
            <div className="werte_card">
                <div className="icon">
                <img src={Glühbirne} alt="Glühbirne" />
                </div>
                <h5>Qualtität durch Wissen</h5>
                <p>Wir sind zertifizierte Trainer für das am meisten genutzte Persönlichkeitstool der Welt. Das Tool macht persönliche Qualitäten sichtbar. Dadurch haben Einzelpersonen und Teams die Möglichkeit, die Qualität ihrer Arbeit nachhaltig zu reflektieren und zu steigern.</p>
            </div>
            <div className="werte_card">
            <div className="icon">
                <img src={Prozess} alt="Glühbirne" />
              </div>
                <h5>Transparenz durch Einfachheit</h5>
                <p>Wir bieten einen klar strukturierten Prozess, bei dem wissenschaftliche Theorien von Persönlichkeitstypen transparent und einfach erklärt werden. Die genutzten Methoden helfen, die Theorie im Alltag anzuwenden.</p>
            </div>
            <div className="werte_card">
            <div className="icon">
                <img src={Positiv} alt="Glühbirne" />
              </div>
                <h5>Nachhaltig positiv</h5>
                <p>Durch die Verbindung von Persönlichkeits- und Teamanalyse mit konkreten Handlungsempfehlungen für den Arbeitsalltag, schaffen wir eine positive Veränderung in der Zusammenarbeit mit Kollegen, Kunden und Vorgesetzten.</p>
            </div>
            <div className="werte_card">
            <div className="icon">
                <img src={Group} alt="Glühbirne" />
              </div>
                <h5>Bewusste Wahrnehmung</h5>
                <p>Wir ermöglichen eine bewusste Selbstwahrnehmung, sowie verschiedene Ausprägungen und Verhaltenstendenzen von Kollegen und Kunden, zu verstehen. Dadurch schaffen wir Transparenz und ein positives Bewusstsein für Diversität, Bedürfnisse, Qualitäten, Erfolgs- sowie Konfliktpotenziale im Berufsleben.</p>
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
  
  export default ÜberUns;
  