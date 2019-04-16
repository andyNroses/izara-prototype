/* Modules */
import React from 'react';
import { Button, Icon } from 'antd';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: #fafafa;
    border-top: 1px solid #e8e8e8;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BottomNavigator = ({ prev, next, history }) => {

    const moveTo = (path) => {
        history.replace(path);
    }

    const Prev = () => prev ? <Button onClick={() => moveTo(prev.to)} type="primary"><Icon type="left" />{prev.label}</Button> : null;
    const Next = () => next ? <Button onClick={() => moveTo(next.to)} type="primary"><Icon type="right" />{next.label}</Button> : null;

    return (
        <Container>
            <Button.Group size='large'>
                <Prev />
                <Next />
            </Button.Group>
        </Container>
    );
};

export default withRouter(BottomNavigator);