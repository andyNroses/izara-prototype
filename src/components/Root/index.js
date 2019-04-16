/* Modules */
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from '../Routes';
import StepStatus from '../StepStatus';

/**
 * Root component
 */
const Root = () => {
    return (
        <Router>
            <StepStatus />
            <Routes />
        </Router>
    );
};

export default Root;