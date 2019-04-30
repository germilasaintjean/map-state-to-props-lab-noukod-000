
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; /* code change */
import App from './App';
import './index.css';


import manageUsers from './reducers/manageUsers'

const store = createStore(
managgeUsers,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>, /* code change */
 document.getElementById('root')
);
