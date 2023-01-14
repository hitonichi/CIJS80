import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const people = [
  {name: 'Alice', age: 20},
  {name: 'Bob', age: 10},
  {name: 'Chris', age: 24}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App people={people}></App>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
