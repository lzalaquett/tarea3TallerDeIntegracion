import React, { useContext } from "react";
import { SocketContext } from "../components/Socket";
import VuelosBoard from "../components/Vuelos";

const VuelosContainer = ({vuelos, setVuelos }) => {
    const socket = useContext(SocketContext);

    const handleClickfuncion = (e) => {
        socket.emit('FLIGHTS', '');
        socket.on('FLIGHTS', (data) => {
            setVuelos(data);
            console.log(vuelos);
        })
        return () => {socket.off('FLIGHTS');}
    }

    return (
        <VuelosBoard
            data={vuelos}
            handleClick={handleClickfuncion}
        />
    );
};

export default VuelosContainer;