import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcFmIodL2pK49eRran-jbWyJeAm3CPsKk",
  authDomain: "jonathanbrown-80897.firebaseapp.com",
  projectId: "jonathanbrown-80897",
  storageBucket: "jonathanbrown-80897.appspot.com",
  messagingSenderId: "297184712206",
  appId: "1:297184712206:web:194d45e829f335eeb70e5f",
  measurementId: "G-5FS91FRHQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
ReactDOM.render(
  <>
  
    <App />
    
    </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
