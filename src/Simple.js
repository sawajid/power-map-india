import React, { Component } from 'react'
import { latLngBounds } from 'leaflet'
import { Map, TileLayer } from 'react-leaflet'
import MyMarkersList from './MyMarkersList'
import markerData from './json/power_india.json'
import stringHash from 'string-hash'

export default class Simple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markerList: [],
      mapBounds: {}
    };
  }

  componentDidMount() {
    let mb = []
    let stations = []
    markerData.forEach((station) => {
      station["key"] = stringHash(station.station_name)
      stations.push(station)
      mb.push(window.L.latLng(station.lat, station.lng))
    });
    const bounds = latLngBounds(mb)
    this.setState({
      markerList: stations,
      mapBounds: bounds
    });
  }

  render() {
    return (
      <Map center={[20.5937, 78.9629]} zoom={6} fitBounds={this.state.mapBounds}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={this.state.markerList} />
      </Map>
    )
  }
}