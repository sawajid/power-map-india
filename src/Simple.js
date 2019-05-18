import React, { Component } from 'react'
import { latLngBounds } from 'leaflet'
import { Map, TileLayer } from 'react-leaflet'
import MyMarkersList from './MyMarkersList'
import markerData from './json/power_india.json'

export default class Simple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markerList: [],
      mapBounds: {}
    };
  }

  handleChangeValue = e => this.setState({ mapBounds: e.target.value });

  componentDidMount() {
    let mb = [];
    markerData.forEach((messageObj) => {
      mb.push(window.L.latLng(messageObj.lat, messageObj.lng))
    });
    const bounds = latLngBounds(mb);
    this.setState({
      markerList: markerData,
      mapBounds: bounds
    });
  }

  render() {

    return (
      <Map center={[20.5937, 78.9629]} zoom={5} fitBounds={this.state.mapBounds}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={this.state.markerList} />
      </Map>
    )
  }
}