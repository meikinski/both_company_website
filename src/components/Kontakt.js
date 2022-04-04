import { NavLink } from "react-router-dom";
import './Kontakt.css'

export default function Kontakt() {
    return(
    <div className='wrapper_kontakt'>
        <div className='text_wrapper'>
            <h4>Du findest unser Angebot spannend und willst mit uns arbeiten?</h4>
           <h5>Dann schick eine Mail oder ruf uns an.</h5>
           <NavLink to="/kontakt">
           <button className='btn_kontakt'>Kontakt</button></NavLink>
        </div>
    </div>    
    )
}
 


