import { Button, Form, Input } from "antd";
import React from "react";
import "./style.css";


const LogForm = ({ userName, handlesubbmit }) => (
    <div>
        <h3>Coloque un nombre de usuario para activar el chat</h3>
        <Form 
            name="basic"
            onFinish={handlesubbmit}
            layout="inline"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
);

export default LogForm;