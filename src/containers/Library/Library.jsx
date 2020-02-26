import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import LibraryMenu from './LibraryMenu';
import Albums from './Albums';
import Artists from './Artists';
import MadeForYou from './MadeForYou';
import LibraryPlaylists from './LibraryPlaylists';
import Podcasts from './Podcasts';

const Library = () => {
  const path = '/app/collection';

  return (
    <div>
      <LibraryMenu />
      <Switch>
        <Route path={`${path}/playlists`} exact component={LibraryPlaylists} />
        <Route path={`${path}/made-for-you`} exact component={MadeForYou} />
        <Route path={`${path}/albums`} exact component={Albums} />
        <Route path={`${path}/artists`} exact component={Artists} />
        <Route path={`${path}/podcasts`} exact component={Podcasts} />
      </Switch>
    </div>
  );
};

export default Library;
