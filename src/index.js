import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyChnc9TumwKqeI-iv5jRG_QcgM_E5JU-Cg",
  authDomain: "portfolio-c3b53.firebaseapp.com",
  databaseURL: "https://portfolio-c3b53.firebaseio.com",
  projectId: "portfolio-c3b53",
  storageBucket: "portfolio-c3b53.appspot.com",
  messagingSenderId: "650010142573",
  appId: "1:650010142573:web:e6f2449747a9557b5e1c64",
  measurementId: "G-LTHPH1GW8E"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();






ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
