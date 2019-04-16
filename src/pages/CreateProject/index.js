/* Modules */
import React, { useEffect }from 'react';
import { withRouter } from "react-router-dom";
import { Typography, Divider, Input, Row, Col } from 'antd';
const {  Title } = Typography;
import TextInput from '../../components/TextInput';
import SelectInput from '../../components/SelectInput';
import TextAreaInput from '../../components/TextAreaInput';
import ProjectList from '../../components/ProjectList';
import BottomNavigator from '../../components/BottomNavigator';
import steps from '../../steps';
import useGlobal from '../../store'; 

/**
 * Root component
 */
const CreateProject = ({ location }) => {
    const step = steps[location.pathname];
    const [globalState, globalActions] = useGlobal();
    useEffect(() => {
        globalActions.updateStep(location.pathname, 'process');
        globalActions.updateStep(step.next.to, 'wait');
    }, []);
    return (
        <React.Fragment>
            <Title>Create New Project</Title>
            <Divider />
            <TextInput label='Project Name'/>
            <SelectInput label='Project Owner' options={['Bob', 'Lucy']} />
            <SelectInput label='Knowledge Broker' options={['Bob', 'Lucy']} />
            <TextInput label='Contact Person'/>
            <Row gutter={16}>
                <Col span={18}><TextAreaInput label='Project Description' height='200px' /></Col>
                <Col span={6}><ProjectList values={['Climate A/S', 'Smiley Aps']} /></Col>
            </Row>    
            <BottomNavigator prev={step.prev} next={step.next}/>        
        </React.Fragment>
    );
};

export default withRouter(CreateProject);