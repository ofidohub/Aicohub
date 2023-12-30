// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import reportWebVitals from '../src/reportWebVitals';
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)), document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function to log results (for example: reportWebVitals(console.log))
reportWebVitals();
