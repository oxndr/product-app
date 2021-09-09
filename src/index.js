/* eslint-disable import/prefer-default-export */
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';
import 'firebase/auth';
import 'firebase/firestore';
import reportWebVitals from './reportWebVitals';

firebase.initializeApp({
  apiKey: 'AIzaSyA4gMtO86HIZReuOgOi1RD5ygEyNG7a8WA',
  authDomain: 'product-app-80d09.firebaseapp.com',
  projectId: 'product-app-80d09',
  storageBucket: 'product-app-80d09.appspot.com',
  messagingSenderId: '1081086949953',
  appId: '1:1081086949953:web:e7c27e417ba1a5dfb264c0',
  measurementId: 'G-V688GEYFYQ',
});
export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

reportWebVitals();
