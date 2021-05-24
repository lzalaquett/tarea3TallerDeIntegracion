import { Button, Card, Row } from "antd";
import React from "react";
import CardVuelo from "./CardVuelo";
import "./style.css";

const VuelosBoard = ({ data, handleClick }) => (
    <Card title="Vuelos">
        <Button onClick={handleClick} className="btn-cargar">cargar vuelos</Button>
        <Row>
        {data.map((vuelo, idx) => (
            <CardVuelo
                info={vuelo}
                key={`${idx}-card-vuelo`}
            />
        ))}
        </Row>
    </Card>
);

export default VuelosBoard;