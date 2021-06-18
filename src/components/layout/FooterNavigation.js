import '../../scss/main.scss';
import MapContainer from '../map/MapContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'


const FooterNavigation = () => {
     
    return (
      <section className="mapArea">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-md-12 col-lg-3 text-left">
                            <h6>Features</h6>
                            <p>Event organizer tools</p>
                            <p>Timer tools</p>
                            <p>Charity co-ordinator tools</p>
                            <p>Participant experience</p>
                        </div>
                        <div className="col-md-12 col-lg-3 text-left">
                            <h6>Tools</h6>
                            <p>Dashboard maker</p>
                            <p>Data &amp; analytics</p>
                            <p>Email marketing tool</p>
                            <p>Social promotion tool</p>
                        </div>
                        <div className="col-md-12 col-lg-3 text-left">
                            <h6>Contact</h6>
                            <p><FontAwesomeIcon icon={faPhoneAlt} size="sm"/> 1-888-555-5555</p>
                            <p><FontAwesomeIcon icon={faEnvelope} size="sm"/> example@example.com</p>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} size="sm"/> 123 Fake Street, London, ON</p>
                            <p>A1B 2C3</p>
                        </div>
                        
                        <div className="col-md-12 col-lg-3  mapClass">
                            <MapContainer/>
                        </div>
                    </div>
                </div>
            </section>

            
       
    );
}
 
export default FooterNavigation;