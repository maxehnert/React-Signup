import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App';
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import ManageSub from './Components/ManageSub'

import './index.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/login" component={Login}>
        <Route path="/manage-subscription" component={ManageSub}/>
      </Route>
      <Route path="/signup" component={Signup}>

      </Route>
    </Route>
  </Router>
),document.getElementById('root'));
