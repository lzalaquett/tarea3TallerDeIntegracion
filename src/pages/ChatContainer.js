import React, { useContext, useEffect, useState } from "react";
import ChatBoard from "../components/Chat";
import { Form } from "antd";
import { SocketContext } from "../components/Socket";

const ChatContainer = () => {
    const socket = useContext(SocketContext);
    const [chatMsg, setChatMsg] = useState([]);
    const [userName, setUsername] = useState('');
    const [logueado, setLogueado] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        socket.on('CHAT', (data) => {
            setChatMsg([...chatMsg, data]);
        })
        return () => {socket.off('CHAT');}
    }, [chatMsg]);

    const handleLogin = (values) => {
        setUsername(values.username);
        setLogueado(true);
    };

    const handleMsg = (values) => {
        socket.emit('CHAT', {name: userName, message: values.message});
        form.resetFields();
    }

    return (
        <div>
            <ChatBoard
                mensajes={chatMsg}
                userName={userName}
                handlesubbmit={handleLogin}
                isLogueado={logueado}
                handleMsg={handleMsg}
                form={form}
            />
        </div>
    );
};

export default ChatContainer;