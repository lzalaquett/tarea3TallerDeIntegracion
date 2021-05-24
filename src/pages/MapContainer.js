import React, { useContext, useEffect, useState } from "react";
import MapaBoard from "../components/Mapa/index";
import { SocketContext } from "../components/Socket";

const MapContainer = ({ vuelos }) => {
    const socket = useContext(SocketContext);
    const [listaCodes, setListaCodes] = useState([]);
    const [_, setInfoVuelo] = useState({code: '0000000'});
    const [flightsData, setFlightsData] = useState([{code:'000', position: [0,0]}]);
    const center = [-33.270374,-70.661969];
    const blueOptions = { color: 'blue' };
    const blackOptions = { color: 'red' };

    useEffect(() => {
        socket.on('POSITION', (data) => {
            setInfoVuelo(data);
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
    }, [flightsData, listaCodes]);

    return (
        <div>
            <MapaBoard
                center={center}
                options={blueOptions}
                options2={blackOptions}
                positions={flightsData}
                dataVuelos={vuelos}
            />
        </div>
    );
};

export default MapContainer;