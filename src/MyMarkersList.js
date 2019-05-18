import React, { Fragment } from 'react'
import MyPopupMarker from './MyPopupMarker'

const MyMarkersList = (props) => {
  const items = props.markers.map(({ station_name, ...props }) => (
    <MyPopupMarker key={station_name} {...props} />
  ))
  return <Fragment>{items}</Fragment>
}

export default MyMarkersList