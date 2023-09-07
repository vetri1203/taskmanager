import React from 'react';
import ReactDOM from 'react-dom/client';

import {Routes,Route, BrowserRouter} from 'react-router-dom';
import App from './App';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Home from './Component/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/app' Component={App}/>
    <Route path='/login' Component={Login}/>
    <Route path='/signup' Component={Signup}/>
    <Route path='/home' Component={Home}/>
  </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
