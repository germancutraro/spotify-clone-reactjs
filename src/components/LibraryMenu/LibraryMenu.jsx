import React from 'react';
import { LibraryMenuContainer, Link } from './libraryMenuStyles';

const path = '/app/collection';

const LibraryMenu = () => (
  <LibraryMenuContainer>
    <Link to={`${path}/playlists`}>PLAYLISTS</Link>
    <Link to={`${path}/albums`}>ALBUMS</Link>
    <Link to={`${path}/artists`}>ARTISTS</Link>
    <Link to={`${path}/podcasts`}>PODCASTS</Link>
  </LibraryMenuContainer>
);

export default LibraryMenu;
