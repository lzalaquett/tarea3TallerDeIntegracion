import { Card, Input, Form, Button } from "antd";
import React from "react";
import LogForm from "./LogForm";
import "./style.css";

const ChatBoard = ({ mensajes, userName, handlesubbmit, isLogueado, handleMsg }) => (
    <Card title="Chat">
    {!isLogueado ?
    <LogForm
        userName={userName}
        handlesubbmit={handlesubbmit}
    /> : 
    <div className="chat-en-si">
      {mensajes.map((mensaje, idx) => (
        <p key={`${idx}-m`} className={mensaje.name === userName ? 'self-msg' : 'other-msg'}>{mensaje.name} at {mensaje.date}: {mensaje.message}</p>
      ))}
    </div>}
    <Form
      name="basic"
      onFinish={handleMsg}
    >
      <Form.Item
        name="message"
        rules={[{ required: true, message: 'escriba un mensaje'}]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      
    </Form>
    </Card>
);

export default ChatBoard;