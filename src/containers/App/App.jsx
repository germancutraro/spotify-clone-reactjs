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
import MadeForYou from '../Library/MadeForYou';
import Albums from '../Library/Albums';
import Artists from '../Library/Artists';
import Podcasts from '../Library/Podcasts';
import LibraryPlaylists from '../Library/LibraryPlaylists';

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
          <Route
            path='/collection/playlists'
            component={LibraryPlaylists}
            exact
          />
          <Route path='/collection/made-for-you' component={MadeForYou} exact />
          <Route path='/collection/artists' component={Artists} exact />
          <Route path='/collection/albums' component={Albums} exact />
          <Route path='/collection/podcasts' component={Podcasts} exact />
        </Switch>
      </SectionContainer>
      <div
        style={{ gridArea: 'player', height: 90, backgroundColor: 'red' }}
      ></div>
    </GridContainer>
  </>
);
