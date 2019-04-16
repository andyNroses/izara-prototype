/* Modules */
import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { Typography, Divider, Input, Row, Col, Card } from 'antd';
const {  Title } = Typography;
import ItemReport from '../../components/ItemReport';
import ShareDownload from '../../components/ShareDownload';
import steps from '../../steps';
import useGlobal from '../../store'; 
import styled from 'styled-components';

const Space = styled.div`
    height: 100px;
`;

const Report = ({ location }) => {
    const step = steps[location.pathname];
    const [globalState, globalActions] = useGlobal();
    useEffect(() => {
        globalActions.updateStep(step.prev.to, 'finish');
        globalActions.updateStep(location.pathname, 'process');
    }, [])
    const items = globalState.selectedItems.map((item, index) => <ItemReport key={index} item={item} />);
    return (
        <React.Fragment>
            <Title>Report</Title>
            <Divider /> 
            { items }
            <Space />
            <ShareDownload />
        </React.Fragment>
    );
};

export default withRouter(Report);