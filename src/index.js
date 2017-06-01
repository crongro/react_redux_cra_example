import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import todoReducer from './reducer/index';
import thunk from 'redux-thunk'

const store = createStore(todoReducer, applyMiddleware(thunk));

const render = () =>  ReactDOM.render(
    <Provider store={store}>
     <App />
    </Provider>, 
   document.querySelector("#root")
);

render();

registerServiceWorker();
