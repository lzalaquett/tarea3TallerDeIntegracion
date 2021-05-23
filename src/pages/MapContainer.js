import React, { useContext, useEffect, useState } from "react";
import MapaBoard from "../components/Mapa/index";
import { SocketContext } from "../components/Socket";

const MapContainer = ({ dataVuelos }) => {
    const socket = useContext(SocketContext);
    const [_, setInfoVuelo] = useState({code: '0000000'});
    const [listaCodes, setListaCodes] = useState([]);
    const [flightsData, setFlightsData] = useState([]);
    const center = [-33.270374,-70.661969];
    const blueOptions = { color: 'blue' };

    useEffect(() => {
        socket.on('POSITION', handlePositionEvent)
        return () => {socket.off();}
    }, [flightsData]);

    const handlePositionEvent = (data) => {
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
    }

    return (
        <div>
            <MapaBoard
                center={center}
                options={blueOptions}
                positions={flightsData}
                dataVuelos={dataVuelos}
            />
        </div>
    );
};

export default MapContainer;