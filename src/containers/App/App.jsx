import React from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import Login from '../Auth/Login';

export default () => (
  <Switch>
    <Route path='/' component={Login} exact />
  </Switch>
);
