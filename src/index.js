import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

const MainApp = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
};

ReactDOM.render(<MainApp />, document.getElementById('root'));