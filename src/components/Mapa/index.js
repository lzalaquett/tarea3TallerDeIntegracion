import { Card } from "antd";
import React from "react";
import { MapContainer, TileLayer, Marker, Polyline, Tooltip, Circle } from 'react-leaflet'
import { MarkerPlane } from "../../assets/Marker";
import "./style.css";

const MapaBoard = ({ center, dataVuelos, positions, options }) => (
    <Card title="Mapa">
      <MapContainer center={center} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
        {positions.map((plane, idx) => (
          <Marker key={`${idx}-markers`} position={plane.position} icon={ MarkerPlane }>
            <Tooltip>{plane.code}</Tooltip>
          </Marker>
        ))}
        {dataVuelos.map((data, idx) => (
          <Polyline key={`${idx}-lineas`} pathOptions={options} positions={[data.origin, data.destination]} />
        ))}
      </MapContainer>
    </Card>
);

export default MapaBoard;