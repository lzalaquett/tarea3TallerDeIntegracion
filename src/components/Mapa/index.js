import { Card } from "antd";
import React from "react";
import { MapContainer, TileLayer, Polyline, Tooltip, CircleMarker } from 'react-leaflet'
import "./style.css";

const MapaBoard = ({ center, dataVuelos, positions, options, options2 }) => (
    <Card title="Mapa" id="mapacard">
      <MapContainer center={center} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
        {dataVuelos.map((data, idx) => (
          <Polyline key={`${idx}-lineas`} pathOptions={options2} positions={[data.origin, data.destination]} />
        ))}
        {positions.map((plane, idx) => (
          <CircleMarker
            key={`${idx}-markers`}
            center={[plane.position[0], plane.position[1]]}
            pathOptions={options}
            radius={10}>
            <Tooltip>{plane.code}</Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </Card>
);

export default MapaBoard;