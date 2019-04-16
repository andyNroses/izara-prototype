/* Modules */
import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Label = styled.span`
    min-width: 150px;
`;

const SelectInput = ({ label, options, defaultValue }) => {
    if (!defaultValue) {
        defaultValue = options[0];
    }
    return (
        <Container>
            <Label>{ label }:</Label>
            <Select defaultValue={defaultValue} style={{ width: '300px' }}>
                { options.map(option => <Option key={option} value={option}>{option}</Option>) }
            </Select>
        </Container>
    );
};

export default SelectInput;