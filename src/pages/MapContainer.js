import React, { useContext, useEffect, useState } from "react";
import MapaBoard from "../components/Mapa/index";
import { SocketContext } from "../components/Socket";

const MapContainer = () => {
    const socket = useContext(SocketContext);
    const [infoVuelo, setInfoVuelo] = useState({code:"", position:[0,0]});
    const center = [-33.270374,-70.661969]
    const polyline = [
        [-33.280374,-70.681969],
        [-33.270374,-70.661969],
        [-33.260374,-70.671969],
      ]
    const limeOptions = { color: 'blue' }
    

    useEffect(() => {
        socket.on('POSITION', (data) => {
            setInfoVuelo(data);
        })

        return () => {socket.off()}
    }, []);


    return (
        <MapaBoard
            infoVuelo={infoVuelo}
            position={infoVuelo.position}
            center={center}
            polyline={polyline}
            options={limeOptions}
        />
    );
};

export default MapContainer;