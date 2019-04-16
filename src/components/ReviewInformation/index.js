/* Modules */
import React from 'react';
import { Icon, Row, Col } from 'antd';
import styled from 'styled-components';
import TextAreaInput from '../TextAreaInput';
import Feedback from './Feedback';

const InsertFile = styled.div`
    text-align: center;
    font-size: 20px;
`;

const ReviewInformation = ({ item }) => {
    return (
        <Row type="flex" justify="center" align="middle" style={{ marginBottom: '10px' }}>
            <Col span={10}><TextAreaInput label={item.name} height='200px' /></Col>
            <Col span={4}>
                <InsertFile>
                    <Icon type='file' style={{ fontSize: '30px' }}/>
                    <p>File { item.key }</p>
                </InsertFile>
            </Col>
            <Col span={10}><Feedback /></Col>
        </Row>
    );
};

export default ReviewInformation;