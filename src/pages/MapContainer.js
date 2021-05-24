import React, { useContext, useEffect, useState } from "react";
import MapaBoard from "../components/Mapa/index";
import { SocketContext } from "../components/Socket";
import VuelosBoard from "../components/Vuelos";

const MapContainer = () => {
    const socket = useContext(SocketContext);
    const [vuelos, setVuelos] = useState([]);
    const [listaCodes, setListaCodes] = useState([]);
    const [flightsData, setFlightsData] = useState([{}]);
    const center = [-33.270374,-70.661969];
    const blueOptions = { color: 'blue' };
    console.log('se reenderiza el contgainer del mapa', flightsData);

    useEffect(() => console.log(listaCodes), [listaCodes])
    useEffect(() => console.log(flightsData), [flightsData])

    useEffect(() => {
        socket.on('POSITION', (data) => {
            console.log('recibimos data de position', data, listaCodes)
            if (listaCodes.indexOf(data.code) === -1) {
                setListaCodes([...listaCodes, data.code]);
                setFlightsData([...flightsData, data]);
            }
            else {
                let idx = listaCodes.indexOf(data.code);
                let auxData = flightsData;
                auxData[idx] = data;
                setFlightsData(auxData);
            }
        })
        return () => {socket.off('POSITION');}
    }, [flightsData]);

    const handleClickfuncion = (e) => {
        socket.emit('FLIGHTS', '');
        socket.on('FLIGHTS', (data) => {
            setVuelos(data);
            console.log(vuelos);
        })
        return () => {socket.off('FLIGHTS');}
    }

    return (
        <div>
            <MapaBoard
                center={center}
                options={blueOptions}
                positions={flightsData}
                dataVuelos={vuelos}
            />
            <VuelosBoard
                data={vuelos}
                handleClick={handleClickfuncion}
                positions={flightsData}
            />
        </div>
    );
};

export default MapContainer;