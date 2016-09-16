//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Splash from './components/splash.jsx';

//Firebase
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDxo2dWYnQZhpxaPFfiRUPTIji0Q75AUr4",
  authDomain: "friendzone-a9494.firebaseapp.com",
  databaseURL: "https://friendzone-a9494.firebaseio.com",
  storageBucket: "friendzone-a9494.appspot.com"
};

firebase.initializeApp(config);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  ReactDOM.render(<Splash />, root);
});
