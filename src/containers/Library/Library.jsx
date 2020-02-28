import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import LibraryMenu from '../../components/LibraryMenu/LibraryMenu';
import Albums from './Albums';
import Artists from './Artists';
import LibraryPlaylists from './LibraryPlaylists';

const Library = () => {
  const path = '/app/collection';

  return (
    <div>
      <LibraryMenu />
      <Switch>
        <Route path={`${path}/playlists`} exact component={LibraryPlaylists} />
        <Route path={`${path}/albums`} exact component={Albums} />
        <Route path={`${path}/artists`} exact component={Artists} />
      </Switch>
    </div>
  );
};

export default Library;
