import { Descriptions, PageHeader } from "antd";
import React from "react";
import "./style.css"

const Header = () => (
    <div className="header-container">
        <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Fly Traker"
            subTitle="have everything under control in one place"
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created">Lucas Zalaquett</Descriptions.Item>
        <Descriptions.Item label="Entrega">Tarea n°3</Descriptions.Item>
        <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
      </Descriptions>
    </PageHeader>
    </div>
);

export default Header;