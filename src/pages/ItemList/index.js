/* Modules */
import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { Typography, Divider, Input, Row, Col, Card } from 'antd';
const {  Title } = Typography;
import ItemsList from '../../components/ItemsList';
import BottomNavigator from '../../components/BottomNavigator';
import steps from '../../steps';
import useGlobal from '../../store'; 
import styled from 'styled-components';

const Space = styled.div`
    height: 100px;
`;

const ItemList = ({ location }) => {
    const step = steps[location.pathname];
    const [globalState, globalActions] = useGlobal();
    useEffect(() => {
        globalActions.resetSteps(location.pathname);
    }, []);
    return (
        <React.Fragment>
            <Title>Select List Items</Title>
            <Divider /> 
            <Card title={globalState.projectName}>
                <Row gutter={16}>
                    <Col span={6}><ItemsList range={{start: 1, end: 6}} /></Col>
                    <Col span={6}><ItemsList range={{start: 7, end: 12}} /></Col>
                    <Col span={6}><ItemsList range={{start: 13, end: 18}} /></Col>
                    <Col span={6}><ItemsList range={{start: 19, end: 24}} /></Col>
                </Row>
                <Row gutter={16} style={{ marginTop: '20px' }}>
                    <Col span={6}><ItemsList range={{start: 25, end: 30}} /></Col>
                    <Col span={6}><ItemsList range={{start: 31, end: 36}} /></Col>
                    <Col span={6}><ItemsList range={{start: 37, end: 42}} /></Col>
                    <Col span={6}><ItemsList range={{start: 42, end: 47}} /></Col>
                </Row>
            </Card>
            <Space />
            <BottomNavigator prev={step.prev} next={step.next}/>        
        </React.Fragment>
    );
};

export default withRouter(ItemList);