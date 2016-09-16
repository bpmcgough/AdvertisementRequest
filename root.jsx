//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Splash from './components/splash.jsx';

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  ReactDOM.render(<Splash />, root);
});
