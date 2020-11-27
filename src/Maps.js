import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const Maps = ({lat, long, google}) => {

    const mapStyles = {
        width: '100%',
        height: '100%',
    };

    return (
        <div>
            <Map google={google} zoom={8} style={mapStyles} initialCenter={{ lat: lat, lng: long }}>
              <Marker position={{ lat: lat, lng: long }} />
            </Map>
        </div> 
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBu1IQJGKaeBoXfld09yzRi5oTA5jJzGqs'
  })(Maps);