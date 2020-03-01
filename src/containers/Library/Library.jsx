import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
// components
import LibraryMenu from '../../components/LibraryMenu/LibraryMenu';
import Albums from './Albums';
import Artists from './Artists';
import LibraryPlaylists from './LibraryPlaylists';
import Playlist from '../Playlists/Playlist';

const Library = () => {
  const path = '/app/collection',
    { pathname } = useLocation();
  return (
    <div>
      {pathname !== `${path}/tracks` && <LibraryMenu />}

      <Switch>
        <Route path={`${path}/playlists`} exact component={LibraryPlaylists} />
        <Route path={`${path}/albums`} exact component={Albums} />
        <Route path={`${path}/artists`} exact component={Artists} />
        <Route path={`${path}/tracks`} exact component={Playlist} />
      </Switch>
    </div>
  );
};

export default Library;
