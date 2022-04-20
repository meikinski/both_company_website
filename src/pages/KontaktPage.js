import './KontaktPage.css'
import Logo_white from '../assets/both_white.png'
import { useRef } from 'react'; 
import emailjs from 'emailjs-com';


export default function Kontakt_Page() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_PUBLICK_KEY
        ).then((result) => {
            alert("Message sent successfully!");
        }, (error) => {
            alert("Send email failed!"); 
        });
    e.target.reset();
            };

    return(
        <div className='wrapper_kontaktPage'>
       <div className='headerKontakt'>
            <h2>Hast du Fragen oder Interesse an unserem Workshop?</h2>
           <h6>Schreibe uns eine Nachricht und wir melden uns bei dir.</h6>
            <img src={Logo_white} alt='Logo'/>
        </div>
        <div class="container">
        <form action="" ref={form} onSubmit={sendEmail}>
            <div class="name_wrapper">
            <div className='vorname_wrapper'>
            <label for="vorname">Vorname:</label>
            <input type="text" name="vorname" id="vorname" required/>
            </div>
            <div className='nachname_wrapper'>
            <label for="nachname">Nachname:</label>
            <input type="text" name="nachname" id="nachname" required/>
            </div>
            </div>
            <label for="email">Email-Adresse:</label>
            <input type="email" name="email" id="email" required/>
            <label for="message">Deine Nachricht an uns:</label>
            <textarea name="message" id="message" cols="30" rows="8" ></textarea>
            <input type="submit" value="Senden"/>
        </form>
       </div> 
       </div>   
    )
}
 