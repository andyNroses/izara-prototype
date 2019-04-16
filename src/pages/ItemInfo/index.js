/* Modules */
import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { Typography, Divider, Input, Row, Col, Card } from 'antd';
const {  Title } = Typography;
import ItemInformation from '../../components/ItemInformation';
import BottomNavigator from '../../components/BottomNavigator';
import steps from '../../steps';
import useGlobal from '../../store'; 
import styled from 'styled-components';

const Space = styled.div`
    height: 100px;
`;

const ItemInfo = ({ location }) => {
    const step = steps[location.pathname];
    const [globalState, globalActions] = useGlobal();
    useEffect(() => {
        globalActions.updateStep(step.prev.to, 'finish');
        globalActions.updateStep(location.pathname, 'process');
        globalActions.updateStep(step.next.to, 'wait');
    }, [])
    const items = globalState.selectedItems.map((item, index) => <ItemInformation key={index} item={item} />);
    return (
        <React.Fragment>
            <Title>Add Item Information</Title>
            <Divider /> 
            { items }
            <Space />
            <BottomNavigator prev={step.prev} next={step.next}/>        
        </React.Fragment>
    );
};

export default withRouter(ItemInfo);