import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FunApp from './FunApp';
import * as serviceWorker from './serviceWorker';
import NewApp from './NewApp';

ReactDOM.render(<NewApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
