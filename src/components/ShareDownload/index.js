/* Modules */
import React from 'react';
import { Button, Icon } from 'antd';
import styled from 'styled-components';

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

const ShareDownload = () => {
    return (
        <Container>
            <Button.Group size='large'>
                <Button type="primary" icon="share-alt">Share</Button>
                <Button type="primary" icon="download">Download</Button>
            </Button.Group>
        </Container>
    );
};

export default ShareDownload;