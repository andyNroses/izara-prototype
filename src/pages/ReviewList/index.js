/* Modules */
import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { Typography, Divider, Input, Row, Col, Card } from 'antd';
const {  Title } = Typography;
import ReviewInformation from '../../components/ReviewInformation';
import BottomNavigator from '../../components/BottomNavigator';
import steps from '../../steps';
import useGlobal from '../../store'; 
import styled from 'styled-components';

const Space = styled.div`
    height: 100px;
`;

const ReviewList = ({ location }) => {
    const step = steps[location.pathname];
    const [globalState, globalActions] = useGlobal();
    useEffect(() => {
        globalActions.updateStep(step.prev.to, 'finish');
        globalActions.updateStep(location.pathname, 'process');
    }, [])
    const items = globalState.selectedItems.map((item, index) => <ReviewInformation key={index} item={item} />);
    return (
        <React.Fragment>
            <Title>Review List</Title>
            <Divider /> 
            { items }
            <Space />
            <BottomNavigator prev={step.prev} next={step.next}/>        
        </React.Fragment>
    );
};

export default withRouter(ReviewList);