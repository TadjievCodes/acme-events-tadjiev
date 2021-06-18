import GoogleMapReact from 'google-map-react';
import '../../scss/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const defaultProps = {
    center: {
      lat: 42.981700,
      lng: -81.251400
    },
    zoom: 11
};

const LocationIcon = () => <div><FontAwesomeIcon icon={faMapMarkerAlt}  size="lg" color="#D7402A"/></div>;


const MapContainer = () => {
    return (
        // Important! Always set the container height explicitly
        <div  className="mapStyling">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCfHFKmGZP2loNbLIA-pZuvtwduzIw8vz4' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                options={{fullscreenControl: false}}
            >

            
            <LocationIcon
                lat={42.981700}
                lng={-81.251400}
            />
            </GoogleMapReact>
        </div>
    );
}
 
export default MapContainer;
