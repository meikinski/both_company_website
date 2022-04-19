import './Nutzen.css'
import Logo from '../assets/favicin-image.png'

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
                <h4>Argument</h4>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                 numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! </p>
            </div>
            <div className="nutzensection_card">
                <div className='nutzensection_card_title'>
                <img src={Logo} alt="Favicon" className='nutzensection_card_favicon'/>
                <h4>Argument</h4>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum!</p>
            </div>
            <div className="nutzensection_card">
                <div className='nutzensection_card_title'>
                <img src={Logo} alt="Favicon" className='nutzensection_card_favicon'/>
                <h4>Argument</h4>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! </p>
            </div>
            <div className="nutzensection_card">
                <div className='nutzensection_card_title'>
                <img src={Logo} alt="Favicon" className='nutzensection_card_favicon'/>
                <h4>Argument</h4>
                </div>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum!.</p>
            </div>
        </div>
    </div>
    )
}