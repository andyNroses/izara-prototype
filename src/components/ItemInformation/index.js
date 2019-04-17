/* Modules */
import React from 'react';
import { Icon, Row, Col } from 'antd';
import styled from 'styled-components';
import TextAreaInput from '../TextAreaInput';
import useGlobal from '../../store'; 

const InsertFile = styled.div`
    text-align: center;
    font-size: 20px;
`;

const ItemInformation = ({ item }) => {
    const info = item.info ? item.info : '';
    const [globalState, globalActions] = useGlobal();

    const onChange = (e) => {
        globalActions.addItemInfo(item, e.target.value);
    }

    return (
        <Row type="flex" justify="center" align="middle">
            <Col span={18}><TextAreaInput label={item.name} height='200px' onChange={onChange} content={info} /></Col>
            <Col span={6}>
                <InsertFile>
                    <Icon type='file' style={{ fontSize: '30px' }}/>
                    <p>Insert File</p>
                </InsertFile>
            </Col>
        </Row>
    );
};

export default ItemInformation;