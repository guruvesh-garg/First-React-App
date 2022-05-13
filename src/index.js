import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Register from './MyComponents/Register';
import reportWebVitals from './reportWebVitals';
import Login from './MyComponents/Login';
import Guest from './MyComponents/Guest';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/Register" element={<Register/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Guest" element={<Guest/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
