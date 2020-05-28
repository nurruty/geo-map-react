import React, { useState, useCallback } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import SearchBox from '../SearchBox/SearchBox';
import { useSelector, useDispatch } from 'react-redux';
import { addPlace } from '../../store/actions/places';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export const SimpleMap = (props) => {

  const [activeMarker, setActiveMarker] = useState(undefined);
  const [currentLocation, setCurrentLocation] = useState({lat: 41.3827072, lng: 2.1168128});
  const places = useSelector(state => state.places);
  const dispatch = useDispatch()
  const addPlaceMap = useCallback(
    (place) => dispatch(addPlace(place)),
    [dispatch]
  )

  const onMarkerClicked = (props, marker, e) => {
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
      initialCenter={currentLocation}
    >
      <SearchBox addPlace={addPlaceMap} />
      {places && places.map(p => {

        return <Marker 
        key={p.place_id}
        name={p.name} 
        position={{lat: p.geometry.location.lat(), lng: p.geometry.location.lng()}}
        onClick={onMarkerClicked}
        />
      })}
       {activeMarker && <InfoWindow
          marker={activeMarker.marker}
          visible={activeMarker ? true : false}
          onClose={onClose}
        >
           <div>
            <h3>{activeMarker.place.name}</h3>
            <div>Lat: {activeMarker.place.mapCenter.lat}</div>
            <div>Lng: {activeMarker.place.mapCenter.lng}</div>
          </div>
        </InfoWindow>}
    </Map>
  );
}


export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(SimpleMap);