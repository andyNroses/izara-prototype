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

const TextAreaInput = ({ label, height, onChange, content }) => {
    return (
        <Container height={height}>
            <Label>{ label }:</Label>
            <TextArea rows={5} onChange={onChange} defaultValue={content} />
        </Container>
    );
};

export default TextAreaInput;