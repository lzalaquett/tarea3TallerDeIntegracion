import { Card } from "antd";
import React from "react";
import { MapContainer, TileLayer, Marker, Polyline, Tooltip, Circle } from 'react-leaflet'
import { MarkerPlane } from "../../assets/Marker";
import "./style.css";

const MapaBoard = ({ center, options, polyline, flightsData, lines }) => (
    <Card title="Mapa">
      <MapContainer center={center} zoom={8} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
        {flightsData.map((flight, idx) => (
          <Marker key={`${idx}`} position={flight.position} icon={ MarkerPlane }>
            <Tooltip>{flight.code}</Tooltip>
          </Marker>
        ))}
        {lines.map((line) => (
          <Polyline pathOptions={options} positions={line} />
        ))}

        {lines.map((line, idx) => (
          <Circle key={`${idx}`} pathOptions={options} center={line[0]} radius={20000}/>
        ))}
      </MapContainer>
      <br/>
      <ul>
      {flightsData.map((flight, idx) => (
        <li key={`${idx}`}>{flight.code} : {flight.position[0]}, {flight.position[1]}</li>
      ))}
      {lines.map((line, idx) => (
        <li key={`${idx}`}>lINEA DE: {line[0][0]}, {line[0][1]} to {line[1][0]}, {line[1][1]}</li>
      ))}
      </ul>
    </Card>
);

export default MapaBoard;