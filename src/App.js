import React, { useEffect, useState } from 'react';
import HeaderContainer from './pages/HeaderContainer';
import MapContainer from './pages/MapContainer';
import socket, { SocketContext } from "./components/Socket/index";

import './App.css';
import ChatContainer from './pages/ChatContainer';
import VuelosContainer from './pages/VuelosContainer';
import { Footer } from 'antd/lib/layout/layout';


const App = () => {
  console.log("SE REnderiza app");
  useEffect(()=>{
    console.log("SE REnderiza app");
  })

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
          <div className="vuelos-container">
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
