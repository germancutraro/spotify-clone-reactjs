import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from '../../globalStyles';
// components
import Login from '../Auth/Login';
import Dashboard from '../Dashboard/Dashboard';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

export default () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Sidebar />
    <Switch>
      <Route path='/' component={Login} exact />
      <Route path='/app' component={Dashboard} exact />
    </Switch>
  </>
);
