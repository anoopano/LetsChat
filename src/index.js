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
  //api key
  
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
