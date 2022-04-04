import './Nutzen.css'
import {BsExclamationCircle} from "react-icons/bs";

export default function Nutzen() {
    

    return(
    <div className="nutzen_wrapper">
        <div className="nutzensection_header">
            <h2>Weshalb ein Workshop sinnvoll ist</h2>
        </div>
        <div className="nutzensection_content">
            <div className="nutzensection_card">
                <BsExclamationCircle className='icon'/>
                <h4>Argument</h4>
                <div>_______</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                 numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! </p>
            </div>
            <div className="nutzensection_card">
                <BsExclamationCircle className='icon'/>
                <h4>Argument</h4>
                <div>_______</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum!</p>
            </div>
            <div className="nutzensection_card">
                <div className='section_card_header'>
                <BsExclamationCircle className='icon'/>
                <h4>Argument</h4>
                <div>_______</div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! </p>
            </div>
            <div className="nutzensection_card">
                <BsExclamationCircle className='icon'/>
                <h4>Argument</h4>
                <div>_______</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum!.</p>
            </div>
        </div>
    </div>
    )
}