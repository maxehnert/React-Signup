import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App';
import Home from './Components/Home'
import Login from './Components/Login'
import ManageSub from './Components/ManageSub'
import Signup from './Components/Signup'
import SignupStep1 from './Components/SignupStep1'
import SignupStep2 from './Components/SignupStep2'
import SignupStep3 from './Components/SignupStep3'
import ReviewOrder from './Components/ReviewOrder'

import './index.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup}>
        <Route path="/signup/step-1" component={SignupStep1} />
        <Route path="/signup/step-2" component={SignupStep2} />
        <Route path="/signup/step-3" component={SignupStep3} />
        <Route path="/signup/review-information" component={ReviewOrder} />
      </Route>
      <Route path="/manage-subscription" component={ManageSub}/>
    </Route>
  </Router>
),document.getElementById('root'));
