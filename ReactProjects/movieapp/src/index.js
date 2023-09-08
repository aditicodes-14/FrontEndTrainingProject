import React from 'react';
import ReactDOM from 'react-dom/client'; //(index.html directly)
import './index.css';
import App from './App'; // the same name as exported which is the same name as fnc in app file. It is by default js file.
import reportWebVitals from './reportWebVitals';
//ReactDOM.render(<h1> Welcome </h1> -> sdisplay the content in older verisons )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
