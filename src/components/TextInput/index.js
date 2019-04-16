/* Modules */
import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Label = styled.span`
    min-width: 150px;
`;

const TextInput = ({ label }) => {
    return (
        <Container>
            <Label>{ label }:</Label>
            <Input style={{ width: '300px' }} placeholder='Write here' />
        </Container>
    );
};

export default TextInput;