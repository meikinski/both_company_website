import './Nutzen.css'
import Logo from '../../assets/favicin-image.png'

export default function Nutzen() {
    

    return(
    <div className="nutzen_wrapper">
        <div className="nutzensection_header">
            <h2>Weshalb ein Workshop sinnvoll ist</h2>
        </div>
        <div className="nutzensection_content">
            <div className="nutzensection_card">
                <div className='nutzensection_card_title'>
                    <img src={Logo} alt="Favicon" className='nutzensection_card_favicon'/>
                    <h4>Stärke Dein Selbstbewusstsein</h4>
                </div>
                    <p>Lerne deine Stärken, Schwächen, Bedürfnisse, Motivatoren und Stressoren kennen.</p>
            </div>
            <div className="nutzensection_card">
                <div className='nutzensection_card_title'>
                    <img src={Logo} alt="Favicon" className='nutzensection_card_favicon'/>
                    <h4>Kommuniziere erfolgreicher</h4>
                </div>
                    <p>Lerne zielgerichtet und abgestimmt auf Bedürfnisse mit deinem Arbeitsumfeld zu kommunizieren, um deine Ziele zu erreichen.</p>
            </div>
            <div className="nutzensection_card">
                <div className='nutzensection_card_title'>
                    <img src={Logo} alt="Favicon" className='nutzensection_card_favicon'/>
                    <h4>Nutze Deine Potenziale</h4>
                </div>
                    <p>Im Team oder für sich alleine - Durch die Kenntnis über die eigenen Stärken und Schwächen kann die Produktivät und die Stimmung am Arbeitsplatz verbessert werden.</p>
            </div>
            <div className="nutzensection_card">
                <div className='nutzensection_card_title'>
                    <img src={Logo} alt="Favicon" className='nutzensection_card_favicon'/>
                    <h4>Sei glücklich im Beruf</h4>
                </div>
                    <p>Wer Stärken kennt, nutzt und ausbaut, die eigenen und die anderer, arbeitet und lebt motivierter, stressärmer, effizienter, ja: glücklicher!</p>
            </div>
        </div>
    </div>
    )
}