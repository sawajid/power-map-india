import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import hydel from './assets/hydro-power.png'
import thermal from './assets/thermal.png'
import nuclear from './assets/nuclear-plant.png'
import ccpp from './assets/industry.png'
import gas from './assets/gas.png'
import diesel from './assets/oil.png'

const hydelIcon = new L.Icon({
  iconUrl: hydel
})

const thermalIcon = new L.Icon({
  iconUrl: thermal
})

const nuclearIcon = new L.Icon({
  iconUrl: nuclear
})

const cppIcon = new L.Icon({
  iconUrl: ccpp
})

const gasIcon = new L.Icon({
  iconUrl: gas
})

const dieselIcon = new L.Icon({
  iconUrl: diesel
})

const MyPopupMarker = (props) => {
  if (props.station_name.includes(' HPS'))
    return <Marker position={[props.lat, props.lng]} icon={hydelIcon}>
      <Popup>{props.station_name + ' | ' + props.total_capacity + ' MW | ' + props.region + ' | ' + props.state}</Popup>
    </Marker>
  else if (props.station_name.includes(' TPS') || props.station_name.includes(' TPP')
    || props.station_name.includes(' STPS'))
    return <Marker position={[props.lat, props.lng]} icon={thermalIcon}>
      <Popup>{props.station_name + ' | ' + props.total_capacity + ' MW | ' + props.region + ' | ' + props.state}</Popup>
    </Marker>
  else if (props.station_name.includes(' A.P.S'))
    return <Marker position={[props.lat, props.lng]} icon={nuclearIcon}>
      <Popup>{props.station_name + ' | ' + props.total_capacity + ' MW | ' + props.region + ' | ' + props.state}</Popup>
    </Marker>
  else if (props.station_name.includes(' CCPP'))
    return <Marker position={[props.lat, props.lng]} icon={cppIcon}>
      <Popup>{props.station_name + ' | ' + props.total_capacity + ' MW | ' + props.region + ' | ' + props.state}</Popup>
    </Marker>
  else if (props.station_name.includes(' GT'))
    return <Marker position={[props.lat, props.lng]} icon={gasIcon}>
      <Popup>{props.station_name + ' | ' + props.total_capacity + ' MW | ' + props.region + ' | ' + props.state}</Popup>
    </Marker>
  else if (props.station_name.includes(' DG'))
    return <Marker position={[props.lat, props.lng]} icon={dieselIcon}>
      <Popup>{props.station_name + ' | ' + props.total_capacity + ' MW | ' + props.region + ' | ' + props.state}</Popup>
    </Marker>
  else
    return <Marker position={[props.lat, props.lng]}>
      <Popup>{props.station_name + ' | ' + props.total_capacity + ' MW | ' + props.region + ' | ' + props.state}</Popup>
    </Marker>
}

export default MyPopupMarker