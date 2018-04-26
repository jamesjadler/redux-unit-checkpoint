import React, {Component} from 'react';
import './App.css';

import Nav from './components/Nav';
import Main from './components/Main';
import {connect} from "react-redux";

export class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Nav/>
                <Main/>
            </div>
        );
    }
}


const mapStateToProps = state => ({...state});

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)