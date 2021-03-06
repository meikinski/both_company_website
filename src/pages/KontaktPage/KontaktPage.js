import { useRef } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import './KontaktPage.css'
import Logo_white from '../../assets/both_white.png'
import { motion } from 'framer-motion';



export default function Kontakt_Page() {
    const form = useRef();
    const navigate = useNavigate();
    

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY)
            .then(
                result => console.log(result.text),
                error => console.log(error.text)

            );
            navigate('/danke');
            e.target.reset();
      };


    return(
        <motion.div 
        className='wrapper_kontaktPage'
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <Helmet>
                <title>Both: Cologne - Kontaktiere uns</title>
                <meta
                    name="description"
                    content="Kontaktiere uns bei Interesse an unserem Workshop."
                />
                <meta
                    name="keywords"
                    content="Workshop, Köln, Persönlichkeitsentwicklung"
                />
            </Helmet>
            <div className='headerKontakt'>
                <h2>Hast du Fragen oder Interesse an unserem Workshop?</h2>
                <h6>Schreibe uns eine Nachricht und wir melden uns bei dir.</h6>
                <img src={Logo_white} alt='Logo'/>
        </div>
        <div className="wrapper_formular">
        <form ref={form} onSubmit={sendEmail}>
            <div className="name_wrapper">
            <div className='vorname_wrapper'>
            <label>Vorname:</label>
            <input type="text" name="vorname" required/>
            </div>
            <div className='nachname_wrapper'>
            <label>Nachname:</label>
            <input type="text" name="nachname" required/>
            </div>
            </div>
            <label>Email-Adresse:</label>
            <input type="email" name="email" required/>
            <label>Deine Nachricht an uns:</label>
            <textarea name="message" cols="30" rows="8" ></textarea>
            <input type="submit" value="Senden"/>
        </form>
        
       </div> 
       </motion.div>   
    )
}
 