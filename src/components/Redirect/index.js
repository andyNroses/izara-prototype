/* Modules */
import React from 'react';
import { withRouter } from "react-router-dom";

const Redirect = ({ history }) => {
    history.replace('/create-project');
    return (
        <p>This is 404!</p>
    );
};

export default withRouter(Redirect);