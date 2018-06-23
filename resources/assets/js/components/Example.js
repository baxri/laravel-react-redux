import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/index';
import Posts from './Posts';
import Postform from './Postform';

export default class Example extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
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
