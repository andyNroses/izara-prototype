/* Modules */
import React from 'react';
import { Icon, Row, Col, Typography, Card } from 'antd';
const { Paragraph } = Typography;
import styled from 'styled-components';

const InsertFile = styled.div`
    text-align: center;
    font-size: 20px;
`;

const ItemReport = ({ item }) => {
    return (
        <Row type="flex" justify="center" align="middle" style={{ marginBottom: '10px' }}>
            <Col span={18}>
                <Card title={`Title ${item.key} (${item.name})`}>
                    <Paragraph>{ item.info}</Paragraph>
                </Card>
            </Col>
            <Col span={6}>
                <InsertFile>
                    <Icon type='file' style={{ fontSize: '30px' }}/>
                    <p>File { item.key }</p>
                </InsertFile>
            </Col>
        </Row>
    );
};

export default ItemReport;