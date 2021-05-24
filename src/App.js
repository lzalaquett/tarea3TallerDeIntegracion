import React, { useState } from 'react';
import HeaderContainer from './pages/HeaderContainer';
import MapContainer from './pages/MapContainer';
import socket, { SocketContext } from "./components/Socket/index";

import './App.css';
import ChatContainer from './pages/ChatContainer';
import VuelosContainer from './pages/VuelosContainer';
import { Footer } from 'antd/lib/layout/layout';


const App = () => {
  const [vuelos, setVuelos] = useState([]);

  return (
    <SocketContext.Provider value={socket}>
      <div className="App">
        <HeaderContainer/>
        <div className="body">
          <div className="map-container">
            <MapContainer
              vuelos={vuelos}
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
        <div>
          <Footer style={{ textAlign: 'center' }}>Creado por Lucas Zalaquett para la tarea 3 de taller de integración</Footer>
        </div>
      </div>
    </SocketContext.Provider>
    
  );
};


export default App;
