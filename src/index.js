import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route ,BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard'

const firebase =require("firebase")
require("firebase/firestore")

firebase.initializeApp ({
  apiKey: "AIzaSyCl0Bnaq-wm3WFAhXze47YQQ3eJPuIXm_M",
    authDomain: "im-tutorial-aece7.firebaseapp.com",
    databaseURL: "https://im-tutorial-aece7.firebaseio.com",
    projectId: "im-tutorial-aece7",
    storageBucket: "im-tutorial-aece7.appspot.com",
    messagingSenderId: "29738718254",
    appId: "1:29738718254:web:bb2df59a8cdad9945bbbbf"
})
const routing =(
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
)


ReactDOM.render(
  routing,document.getElementById('root')
);


serviceWorker.unregister();
