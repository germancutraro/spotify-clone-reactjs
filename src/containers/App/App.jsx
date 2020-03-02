import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from '../../globalStyles';
import { GridContainer, SectionContainer } from './appStyles';
// components
import Login from '../Auth/Login';
import User from '../User/User';
import Dashboard from '../Dashboard/Dashboard';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Playlist from '../Playlists/Playlist';
import LibraryPlaylists from '../Library/LibraryPlaylists';
import Library from '../Library/Library';
import Search from '../Search/Search';
import ArtistSongs from '../Search/ArtistSongs';
import ArtistAlbums from '../Search/ArtistAlbums';
import RelatedArtists from '../Search/RelatedArtists';

export default () => (
  <>
    <GlobalStyle />
    <GridContainer>
      <Sidebar />
      <SectionContainer
        onScroll={e => {
          let opacity = (300 - (300 - e.target.scrollTop)) / 300;
          opacity = opacity > 1 ? 1 : opacity;

          document.documentElement.style.setProperty('--opacity', opacity);
        }}
      >
        <Navbar />
        <Switch>
          <Route path='/' component={Login} exact />
          <Route path='/app' component={Dashboard} exact />
          <Route path='/app/user/:name' component={User} exact />
          <Route path='/app/search' component={Search} exact />
          <Route
            path='/app/search/:name/albums'
            component={ArtistAlbums}
            exact
          />
          <Route
            path='/app/search/:name/tracks'
            component={ArtistSongs}
            exact
          />
          <Route
            path='/app/search/:name/artists'
            component={RelatedArtists}
            exact
          />
          <Route path='/app/playlist/:id' component={Playlist} exact />
          <Route path='/app/collection' component={Library} />
          <Route path='/app/collection/tracks' component={Playlist} />
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
