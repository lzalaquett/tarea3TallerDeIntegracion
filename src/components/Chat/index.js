import { Card, Input, Form, Button, Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import LogForm from "./LogForm";
import "./style.css";

const ChatBoard = ({ mensajes, userName, handlesubbmit, isLogueado, handleMsg }) => (
    <Card title="Chat">
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      {!isLogueado ?
        <LogForm
            userName={userName}
            handlesubbmit={handlesubbmit}
        /> : 
        <div className="chat-en-si">
          {mensajes.map((mensaje, idx) => (
            <p key={`${idx}-m`} className={mensaje.name === userName ? 'self-msg' : 'other-msg'}>{mensaje.name} at {mensaje.date}: {mensaje.message}</p>
          ))}
          <Form
            name="basic"
            onFinish={handleMsg}
          >
            <Form.Item
              name="message"
              label={userName}
            >
              <Input placeholder='escribe un mensaje'/>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            
          </Form>
        </div>}
        <Layout className="site-layout" style={{ minHeight: '100vh' }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
      </Layout>
    </Card>
);

export default ChatBoard;