import { Card } from "antd";
import React from "react";
import "./style.css";

const CardVuelo = ({ info }) => (
    
    <Card title={info.code}  className="card-vuelo">
        <h3>{info.airline}</h3>
        <h3>{info.plane}</h3>
        <h3>{info.seats} asientos</h3>
        <ul>
        {info.passengers.map((passenger, idx) => (
            <li key={`${idx}-pasajeros`}>{passenger.name}, edad: {passenger.age}</li>
        ))}
        </ul>
    </Card> 
);

export default CardVuelo;