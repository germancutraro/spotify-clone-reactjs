import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import Albums from './Albums';
import Artists from './Artists';
import LibraryPlaylists from './LibraryPlaylists';
import Playlist from '../Playlists/Playlist';
import useTitle from '../../hooks/useTitle';

const Library = () => {
  const path = '/app/collection';
  useTitle('Spotify - Your Library');
  return (
    <Switch>
      <Route path={`${path}/playlists`} exact component={LibraryPlaylists} />
      <Route path={`${path}/albums`} exact component={Albums} />
      <Route path={`${path}/artists`} exact component={Artists} />
      <Route path={`${path}/tracks`} exact component={Playlist} />
    </Switch>
  );
};

export default Library;
