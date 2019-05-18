import React from 'react'
import { Marker, Popup } from 'react-leaflet'

const MyPopupMarker = (props) => {
  return <Marker position={[props.lat, props.lng]}>
    <Popup>{props.total_capacity + ' MW | ' + props.region + ' | ' + props.state}</Popup>
  </Marker>
}

export default MyPopupMarker