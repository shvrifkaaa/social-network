import './index.css';
import reportWebVitals from './reportWebVitals';
import { renderder } from './render';
import state from './redux/state';
import App from './App'
// import React from 'react';
import ReactDOM from 'react-dom'
import 'react-router-dom'
  ReactDOM.render(<App state={state}  />, document.getElementById('root'));



// ReactDOM.render(<App state ={state} /> ), document.getElementById('root');

renderder(state)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
