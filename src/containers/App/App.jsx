import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from '../../globalStyles';
import { GridContainer, SectionContainer } from './appStyles';
// components
import Login from '../Auth/Login';
import Dashboard from '../Dashboard/Dashboard';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Playlist from '../Playlists/Playlist';
import LibraryPlaylists from '../Library/LibraryPlaylists';
import Library from '../Library/Library';

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
          <Route path='/app/playlist/:id' component={Playlist} exact />
          <Route path='/app/collection' component={Library} />
          <Route
            path='/collection/playlists'
            component={LibraryPlaylists}
            exact
          />
        </Switch>
      </SectionContainer>
      <div
        style={{ gridArea: 'player', height: 90, backgroundColor: '#333' }}
      ></div>
    </GridContainer>
  </>
);
