/* Modules */
import React from 'react';
import { Card, Table, Button, Icon } from 'antd';
import styled from 'styled-components';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
}];
  
  
const ProjectList = ({ values }) => {
    const dataSource = values.map((value, index) => ({ key: index, name: value }));
    return (
        <Card bodyStyle={{ padding: '0px' }} 
                title='IZARA Projects'
                actions={[<Button>Open</Button>]}>
            <Table dataSource={dataSource} rowSelection={{}} showHeader={false} columns={columns} pagination={false} />
        </Card>
    );
};

export default ProjectList;