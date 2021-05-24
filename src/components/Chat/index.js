import { Card, Input, Form, Button, Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import LogForm from "./LogForm";
import "./style.css";

const ChatBoard = ({ mensajes, userName, handlesubbmit, isLogueado, handleMsg }) => (
    <Card title="Chat" id='chat-card'>
      {!isLogueado ?
        <LogForm
            userName={userName}
            handlesubbmit={handlesubbmit}
        /> : 
        <div className="chat-en-si">
          <div className='mensajes-box'>
            {mensajes.map((mensaje, idx) => (
              <p key={`${idx}-m`} className={mensaje.name === userName ? 'self-msg' : 'other-msg'}>{mensaje.name} at {mensaje.date}: {mensaje.message}</p>
            ))}
          </div>
          <div className='input-form'>
            <Form
              name="basic"
              onFinish={handleMsg}
            >
              <Form.Item
                name="message"
              >
                <Input placeholder='escribe un mensaje'/>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>}
    </Card>
);

export default ChatBoard;