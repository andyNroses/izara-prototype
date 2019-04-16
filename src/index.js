/* Modules */
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import { createGlobalStyle } from 'styled-components';

/* Global style */
const GlobalStyle = createGlobalStyle`
    @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
    body {
        background-color: white;
        margin: 0;
        padding: 30px;
    }
`;

/**
 * App
 */
const App = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Root />
        </React.Fragment>
    );
};

/* Render */
render(<App />, document.getElementById('mountNode'));
