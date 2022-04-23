import { useNavigate } from 'react-router-dom';
import './Danke.css'

export default function Kontakt2() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/home');
    };
    
    return(
        <div className='wrapper_DankePage'>
       <div className='headerDanke'>
            <h2>Vielen Dank für dein Interesse und Deine Nachricht an uns!</h2>
           <h6>Wir melden uns schnellstmöglich bei Dir.</h6>
           <button className='btn btn-4' onClick={goBack}>Zurück</button>

        </div>
        
       </div>   
    )
}
 