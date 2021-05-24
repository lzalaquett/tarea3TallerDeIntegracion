import React, { useContext, useEffect, useState } from "react";
import ChatBoard from "../components/Chat";
import LogForm from "../components/Chat/LogForm";
import { SocketContext } from "../components/Socket";

const ChatContainer = () => {
    const socket = useContext(SocketContext);
    const [chatMsg, setChatMsg] = useState([]);
    const [userName, setUsername] = useState('');
    const [logueado, setLogueado] = useState(false);

    useEffect(() => {
        socket.on('CHAT', (data) => {
            setChatMsg([...chatMsg, data]);
        })
        return () => {socket.off('CHAT', '');}
    }, [chatMsg]);

    const handleLogin = (values) => {
        console.log('Success:', values);
        setUsername(values.username)
        setLogueado(true);
    };

    const handleMsg = (values) => {
        console.log('Success:', values);
        socket.emit('CHAT', {name: userName, message: values.message});

    }

    return (
        <div>
            <ChatBoard
                mensajes={chatMsg}
                userName={userName}
                handlesubbmit={handleLogin}
                isLogueado={logueado}
                handleMsg={handleMsg}
            />
        </div>
    );
};

export default ChatContainer;