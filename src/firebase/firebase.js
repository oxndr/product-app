import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA4gMtO86HIZReuOgOi1RD5ygEyNG7a8WA',
  authDomain: 'product-app-80d09.firebaseapp.com',
  projectId: 'product-app-80d09',
  storageBucket: 'product-app-80d09.appspot.com',
  messagingSenderId: '1081086949953',
  appId: '1:1081086949953:web:e7c27e417ba1a5dfb264c0',
  measurementId: 'G-V688GEYFYQ',
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
