import { Card } from "antd";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Polyline } from 'react-leaflet'
import "./style.css";

const MapaBoard = ({infoVuelo, center, position, options, polyline}) => (
    <Card title="Default size card">
    <div className="mapa-en-si">
      <h2>mapa</h2>
    </div>
      <MapContainer center={center} zoom={3} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <Polyline pathOptions={options} positions={polyline} />
        <LocationMarker />
      </MapContainer>
      <br/>
      <p>{infoVuelo.code}</p> 
      <p>Card content</p>
    </Card>
);

function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default MapaBoard;