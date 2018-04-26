import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";
import {getComments, getPosts} from "./actions";

//Initial page load
 store.dispatch(getPosts())
 store.dispatch(getComments())


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
document.getElementById('root'));
