import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { rootReducer } from './redux/reducers';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={ createStore(rootReducer, applyMiddleware(thunk)) }>
        <App/>
    </Provider>
);
