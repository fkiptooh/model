import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import {render} from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom'
// import AboutPage from './components/AboutPage';

render(
    <Router>
        <App />
    </Router>, document.getElementById('root')
    );