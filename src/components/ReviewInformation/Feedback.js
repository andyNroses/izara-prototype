/* Modules */
import React from 'react';
import { Card, Row, Col, Input, Checkbox } from 'antd';
const { TextArea } = Input;
import styled from 'styled-components';

const Feedback = ({ item }) => {
    return (
        <Card>
            <Row type="flex" justify="center" align="middle">
                <Col span={8}>
                    <Checkbox>Accept</Checkbox>
                    <br />
                    <Checkbox>Reject</Checkbox>
                </Col>
                <Col span={16}>
                    <TextArea style={{ height: '200px' }} />
                </Col>
            </Row>
        </Card>
    );
};

export default Feedback;