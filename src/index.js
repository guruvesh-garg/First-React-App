import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Register from './MyComponents/Register';
import reportWebVitals from './reportWebVitals';
//import Login from './MyComponents/Login';
//import Guest from './MyComponents/Guest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
reportWebVitals();
