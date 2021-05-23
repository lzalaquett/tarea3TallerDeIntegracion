import React, { useContext, useEffect, useState } from "react";
import MapaBoard from "../components/Mapa/index";
import { SocketContext } from "../components/Socket";

const MapContainer = () => {
    const socket = useContext(SocketContext);
    const [_, setInfoVuelo] = useState();
    const [listaCodes, setListaCodes] = useState([]);
    const [flightsData, setFlightsData] = useState([]);
    const [lines, setLines] = useState([]);
    const center = [-33.270374,-70.661969];
    const polyline = [
        [-33.280374,-70.681969],
        [-33.270374,-70.661969],
      ];
    const limeOptions = { color: 'blue' };
    

    useEffect(() => {
        socket.on('POSITION', (data) => {
            setInfoVuelo(data);
        
            if (listaCodes.indexOf(data.code) === -1) {
                setListaCodes([...listaCodes, data.code]);
                setFlightsData([...flightsData, data]);
                setLines([...lines, [data.position, data.position]])
            }
            else {
                let idx = listaCodes.indexOf(data.code);
                let auxData = flightsData;
                auxData[idx] = data;
                setFlightsData(auxData);
                let auxLines = lines;
                auxLines[idx][1] = data.position;
            }
        })
        return () => {socket.off()}
    } );


    return (
        <MapaBoard
            center={center}
            polyline={polyline}
            options={limeOptions}
            flightsData={flightsData}
            lines={lines}
        />
    );
};

export default MapContainer;