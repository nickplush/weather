import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducer from '../src/reducers'
import reduxThunk from 'redux-thunk'
import App from './App';

const store = createStore(reducer, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}><App/></Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
