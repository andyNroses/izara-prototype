/* Modules */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StepStatus from '../StepStatus';
import Redirect from '../Redirect';
import ItemList from '../../pages/ItemList';
import CreateProject from '../../pages/CreateProject';
import ItemInfo from '../../pages/ItemInfo';
import ReviewList from '../../pages/ReviewList';
import Report from '../../pages/Report';

/**
 * Root component
 */
const Root = () => {
    return (
        <Router>
            <StepStatus />
            <Switch>
                {/* <Routes /> */}
                <Route path='/create-project' component={CreateProject} />
                <Route path='/item-list' component={ItemList} />
                <Route path='/item-info' component={ItemInfo} />
                <Route path='/review-list' component={ReviewList} />
                <Route path='/report' component={Report} />
                <Route path='*' component={Redirect} />
            </Switch>
        </Router>
    );
};

export default Root;