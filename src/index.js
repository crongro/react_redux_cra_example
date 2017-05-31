import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import todoReducer from './reducer/index';

const store = createStore(todoReducer);

const render = () =>  ReactDOM.render(
    <Provider store={store}>
     <App />
    </Provider>, 
   document.querySelector("#root")
);

render();

registerServiceWorker();
