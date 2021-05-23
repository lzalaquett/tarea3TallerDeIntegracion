import React, { useEffect, useState } from 'react';
import HeaderContainer from './pages/HeaderContainer';
import MapContainer from './pages/MapContainer';
import socket, { SocketContext } from "./components/Socket/index";

import './App.css';
import ChatContainer from './pages/ChatContainer';


const App = () => {

  const [vuelos, setchat] = useState([]);

  return (
    <SocketContext.Provider value={socket}>
      <div className="App">
        <HeaderContainer/>
        <div className="body">
          <div className="map-container">
            <MapContainer/>
          </div>
          <div className="chat-container">
            <ChatContainer/>
          </div>
        </div>
      </div>
    </SocketContext.Provider>
    
  );
};


export default App;
