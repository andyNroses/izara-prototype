/* Modules */
import React from 'react';
import { Card, Table, Button, Icon } from 'antd';
import styled from 'styled-components';
import useGlobal from '../../store'; 

const columns = [{
    title: 'Select All',
    dataIndex: 'name',
    key: 'name',
}];
  
const StyledTable = styled(Table)`
`;
  
const ItemsList = ({ range }) => {
    const [globalState, globalActions] = useGlobal();
    
    let dataSource = [];
    for (let i = range.start; i <= range.end; i++) {
        dataSource.push({ key: i, name: `Item ${i}`});
    }

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            globalActions.updateSelectedItems(selectedRows);
        }
    };

    return (
        <StyledTable size='small' bordered dataSource={dataSource} rowSelection={rowSelection} columns={columns} pagination={false} />
    );
};

export default ItemsList;