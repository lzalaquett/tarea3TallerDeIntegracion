import { Card, Input, Form, Button } from "antd";
import React, { useEffect, useRef } from "react";
import LogForm from "./LogForm";
import "./style.css";

const ChatBoard = ({ mensajes, userName, handlesubbmit, isLogueado, handleMsg }) => {
  const messageEl = useRef(null);  
  const [form] = Form.useForm();

  useEffect(() => {
    if (messageEl.current) {
        messageEl.current.addEventListener('DOMNodeInserted', event => {
          const { currentTarget: target } = event;
          target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
        });
    }
  }, [])


  const onReset = (values) => {
    handleMsg(values)
    form.resetFields();
  };
  return (
    <Card title="Chat" id='chat-card'>
    <div className='mensajes-box' ref={messageEl}>{isLogueado &&
            mensajes.map((mensaje, idx) => (
              <div>
                <h5 className={mensaje.name === userName ? 'self-msg-username' : 'other-msg-username'}>{mensaje.name} a las {mensaje.date}: </h5>
                <p key={`${idx}-m`} className={mensaje.name === userName ? 'self-msg' : 'other-msg'}>{mensaje.message}</p>
              </div>
            ))}
            </div>
      {!isLogueado ?
        <LogForm
            userName={userName}
            handlesubbmit={handlesubbmit}
        /> : 
          <div className='input-form'>
            <Form
              form={form}
              name="basic"
              onFinish={onReset}
              layout="inline"
              allowClear
            >
              <Form.Item
                name="message"
                className='input.fild'
              >
                <Input placeholder='escribe un mensaje'/>
                
              </Form.Item>

              <Form.Item>
                <Button type="secondary" htmlType="submit">
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>}
    </Card>
)};

export default ChatBoard;