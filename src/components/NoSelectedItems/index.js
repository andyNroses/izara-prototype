import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Empty } from 'antd';
import useGlobal from '../../store'; 

const Container = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NoSelectedItems = ({ history }) => {
    const [globalState, globalActions] = useGlobal();
    const onClick = () => {
        globalActions.resetSteps('/item-list');
        history.replace('/item-list');
    }
    return (
        <Container>
            <Empty onClick={onClick} description='No items selected' />
        </Container>
    );
}

export default withRouter(NoSelectedItems);