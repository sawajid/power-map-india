import React, { Fragment } from 'react'
import MyPopupMarker from './MyPopupMarker'

const MyMarkersList = (props) => {
  const items = props.markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <Fragment>{items}</Fragment>
}

export default MyMarkersList