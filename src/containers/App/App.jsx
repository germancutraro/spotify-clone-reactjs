import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from '../../globalStyles';
// components
import Login from '../Auth/Login';
import Dashboard from '../Dashboard/Dashboard';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Playlist from '../Playlists/Playlist';
import { GridContainer, SectionContainer } from './appStyles';

export default () => (
  <>
    <GlobalStyle />

    <GridContainer>
      <Navbar />
      <Sidebar />
      <SectionContainer>
        <Switch>
          <Route path='/' component={Login} exact />
          <Route path='/app' component={Dashboard} exact />
          <Route path='/app/playlist' component={Playlist} exact />
        </Switch>
      </SectionContainer>
      <div
        style={{ gridArea: 'player', height: 90, backgroundColor: 'red' }}
      ></div>
    </GridContainer>
  </>
);
