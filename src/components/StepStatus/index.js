/* Modules */
import React from 'react';
import { Steps, Icon } from 'antd';
import useGlobal from '../../store';
const Step = Steps.Step;

const StepStatus = ({  }) => {
    const [globalState, globalActions] = useGlobal();
    const steps = globalState.steps.map(step => <Step key={step.title} status={step.status} title={step.title} icon={<Icon type={step.icon} />} />);
    return (
        <Steps>
            { steps }
            {/* <Step status="wait" title="Add Information" icon={<Icon type="info-circle" />} />
            <Step status="wait" title="Review List" icon={<Icon type="check" />} />
            <Step status="wait" title="Report" icon={<Icon type="file-text" />} /> */}
        </Steps>
    );
};

export default StepStatus;