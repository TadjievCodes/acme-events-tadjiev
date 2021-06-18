import React, { Component } from 'react';
import '../../scss/main.scss'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const defaultProps = {
    center: {
      lat: 42.981701,
      lng: -81.251401
    },

    zoom: 10
};

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


  render() {
    return (

     <div className="map-responsive" style={{ height: '150px', width: '100%' }}>
      <Map
        google={this.props.google}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{fullscreenControl: true}}
        initialCenter={{
         lat: 42.981700,
         lng: -81.251400
        }} 
      
      >
      <Marker 
      position={{ lat: 42.981701,  lng: -81.251401 }} 
      onClick={this.onMarkerClick}
      name={'Race Roster & Runkeeper'}

      />

      <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4 className="selectedPlaceText">{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        

     </Map> 

     </div> 

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCfHFKmGZP2loNbLIA-pZuvtwduzIw8vz4'
})(MapContainer);