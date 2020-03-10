import React, { Component } from 'react'
import { BrowserRouter as Router}  from 'react-router-dom';
import Routes from './routes'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import './app.scss'
import 'assets/css/style.css'
import 'services/api'
import 'services/lodash'
import 'services/utilities'
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Routes />
            </Router>
        )
    }
}
