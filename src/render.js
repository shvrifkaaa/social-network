import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



export let renderder = (state)=>{
ReactDOM.render(
  <React.StrictMode>

    <App state={state} />

  </React.StrictMode>,
  document.getElementById('root')
);
}