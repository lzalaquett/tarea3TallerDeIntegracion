import React, { useEffect, useState } from 'react';
import HeaderContainer from './pages/HeaderContainer';
import MapContainer from './pages/MapContainer';
import socket, { SocketContext } from "./components/Socket/index";

import './App.css';
import ChatContainer from './pages/ChatContainer';
import VuelosContainer from './pages/VuelosContainer';


const App = () => {

  const [vuelos, setVuelos] = useState([]);

  return (
    <SocketContext.Provider value={socket}>
      <div className="App">
        <HeaderContainer/>
        <div className="body">
          <div className="map-container">
            <MapContainer
              dataVuelos={vuelos}
              />
          </div>
          <div className="chat-container">
            <ChatContainer/>
          </div>
          <div className="vuelos-container">
            <VuelosContainer
              vuelos={vuelos}
              setVuelos={setVuelos}
            />
          </div>
        </div>
      </div>
    </SocketContext.Provider>
    
  );
};


export default App;
