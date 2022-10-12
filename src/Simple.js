import React, { useState, useEffect, Fragment, useContext } from 'react'
import { latLngBounds } from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'
import MyMarkersList from './MyMarkersList'
import markerData from './json/power_india.json'
import stringHash from 'string-hash'
import RadioBar from './RadioBar'
import { PlantTypeContext } from "./PlantTypeContext";

const Simple = () => {
  const [markerList, setMarkerList] = useState([]);
  const [mapBounds, setMapBounds] = useState({});
  const [state, setState] = useContext(PlantTypeContext);

  useEffect(() => {
    let mb = []
    let stations = []
    markerData.forEach((station) => {
      station["key"] = stringHash(station.station_name)
      if ((state.plantType === 'hydel' && station.station_name.includes(' HPS')) ||
        (state.plantType === 'thermal' && (station.station_name.includes(' STPS') || station.station_name.includes(' TPS')
          || station.station_name.includes(' TPP')))
        || (state.plantType === 'nuclear' && station.station_name.includes(' A.P.S'))
        || (state.plantType === 'cpp' && station.station_name.includes(' CCPP'))
        || (state.plantType === 'gt' && station.station_name.includes(' GT'))
        || (state.plantType === 'dg' && station.station_name.includes(' DG'))
        || (state.plantType === 'other' && !station.station_name.includes(' HPS') && !station.station_name.includes(' TPS')
          && !station.station_name.includes(' TPP') && !station.station_name.includes(' A.P.S')
          && !station.station_name.includes(' CCPP') && !station.station_name.includes(' GT')
          && !station.station_name.includes(' DG') && !station.station_name.includes(' STPS'))
      ) {
        stations.push(station)
        mb.push(window.L.latLng(station.lat, station.lng))
      }
    })
    const bounds = latLngBounds(mb)
    setMarkerList(stations)
    setMapBounds(bounds)
  }, [state]);

  return (
    <Fragment>
      <RadioBar />
      <MapContainer center={[20.5937, 78.9629]} zoom={6} bounds={mapBounds}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={markerList} />
      </MapContainer>
    </Fragment>
  )
}

export default Simple