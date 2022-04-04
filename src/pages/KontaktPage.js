import './KontaktPage.css'
import Logo_white from '../assets/both_white.png'


export default function Kontakt_Page() {
    return(
        <div className='wrapper_kontaktPage'>
       <div className='headerKontakt'>
            <h2>Hast du Fragen oder Interesse an unserem Workshop?</h2>
           <h6>Schreibe uns eine Nachricht und wir melden uns bei dir.</h6>
            <img src={Logo_white} alt='Logo'/>
        </div>
        <div class="container">
        <form action="">
            <label for="name">Dein Name:</label>
            <input type="text" name="name" id="name" required/>
            <label for="email">Deine Email-Adresse:</label>
            <input type="email" name="email" id="email" required/>
            <label for="message">Deine Nachricht an uns:</label>
            <textarea name="message" id="message" cols="30" rows="8" ></textarea>
            <input type="submit" value="Send"/>
        </form>
       </div> 
       </div>   
    )
}
 