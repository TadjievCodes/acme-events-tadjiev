import '../../scss/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons' 


const Footer = () => {
     
  const currentYear = new Date().getFullYear();

    return (
                 <footer>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-6 col-md-4 d-flex justify-content-start pt-2">
                              <p><FontAwesomeIcon icon={faCopyright} size="xs"/> Copyright Acme Inc. {currentYear}</p>
                        </div>
                        <div className="col-6 col-md-4 ml-md-auto d-flex justify-content-end">
                            <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="socialIcons"/>
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="socialIcons"/>
                            <FontAwesomeIcon icon={faInstagram} size="2x" className="socialIcons"/>
                        </div>
                    </div>
                </div>
            </footer>
    );

}

export default Footer
