import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SamuraiJSApp from "./App";


// let rerenderEntireTree = (state) => {
ReactDOM.render(
        <SamuraiJSApp />, document.getElementById('root'));
// };

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//     let state = store.getState();
//     (rerenderEntireTree(state));
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

serviceWorker.unregister();
