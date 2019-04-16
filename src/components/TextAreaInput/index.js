/* Modules */
import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: top;
    margin-bottom: 10px;
    height: ${props => props.height};
`;

const Label = styled.span`
    min-width: 150px;
`;

const TextAreaInput = ({ label, height }) => {
    return (
        <Container height={height}>
            <Label>{ label }:</Label>
            <TextArea rows={5} />
        </Container>
    );
};

export default TextAreaInput;