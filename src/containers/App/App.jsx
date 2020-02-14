import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from '../../globalStyles';
// components
import Login from '../Auth/Login';
import Dashboard from '../Dashboard/Dashboard';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Playlist from '../Playlists/Playlist';

export default () => (
  <>
    <GlobalStyle />
    {window.location.pathname !== '/' && (
      <>
        <Navbar />
        <Sidebar />
      </>
    )}

    <Switch>
      <Route path='/' component={Login} exact />
      <Route path='/app' component={Dashboard} exact />
      <Route path='/app/playlist' component={Playlist} exact />
    </Switch>
  </>
);
