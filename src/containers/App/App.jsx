import React from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import Login from '../Auth/Login';
import Dashboard from '../Dashboard/Dashboard';

export default () => (
  <Switch>
    <Route path='/' component={Login} exact />
    <Route path='/app' component={Dashboard} exact />
  </Switch>
);
