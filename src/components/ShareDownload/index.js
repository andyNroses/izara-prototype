/* Modules */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Icon } from 'antd';
import styled from 'styled-components';
import useGlobal from '../../store'; 

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

const ShareDownload = ({ history }) => {
    const [globalState, globalActions] = useGlobal();
    const onNewProject = () => {
        globalActions.resetSteps('/create-project');
        globalActions.resetItems();
        history.replace('/create-project');
    }
    return (
        <Container>
            <Button.Group size='large'>
                <Button type="primary" icon="share-alt">Share</Button>
                <Button type="primary" icon="download">Download</Button>
                <Button icon="plus" onClick={onNewProject}>New Project</Button>
            </Button.Group>
        </Container>
    );
};

export default withRouter(ShareDownload);