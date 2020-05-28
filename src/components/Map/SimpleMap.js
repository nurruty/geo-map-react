import React, { useState } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export const SimpleMap = (props) => {

  const [activeMarker, setActiveMarker] = useState(undefined)

  const markers = [
    {
      name: 'A', 
      position: {lat: 37.762391, lng: -122.439192}
    },
    {
      name: 'B',
      position: {lat: 37.759703, lng: -122.428093}
    }
  ]

  const onMarkerClick = (props, marker, e) => {
    setActiveMarker({marker, place: props})
  }

  const onClose = props => {
    if (activeMarker) {
      setActiveMarker(undefined)
    }
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: -1.2884,
        lng: 36.8233
      }}
    >
      {markers && markers.map(m => {
        return <Marker 
        name={m.name} 
        position={m.position}
        onClick={onMarkerClick}
        />
      })}
       {activeMarker && <InfoWindow
          marker={activeMarker.marker}
          visible={activeMarker ? true : false}
          onClose={onClose}
        >
           <div>
            <h4>{activeMarker.place.name}</h4>
          </div>
        </InfoWindow>}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA-HqtvtPceZbIZnhUNYpcZgXZ_SQ3BJM0'
})(SimpleMap);