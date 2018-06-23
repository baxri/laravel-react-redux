import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Link } from 'react-router';

import store from './store/index';
import Posts from './Posts';
import Postform from './Postform';
import { Router, Route, Switch } from 'react-router'


export default class Example extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <h1>
                        <a href="/">Reduxstagram</a>
                    </h1>
                    <Postform />
                    <Posts />
                </div>
            </Provider>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
