import React from 'react';
import { LibraryMenuContainer, Link } from './libraryStyles';

const path = '/app/collection';

const LibraryMenu = () => (
  <LibraryMenuContainer>
    <Link to={`${path}/playlists`}>PLAYLISTS</Link>
    <Link to={`${path}/made-for-you`}>MADE FOR YOU</Link>
    <Link to={`${path}/albums`}>ALBUMS</Link>
    <Link to={`${path}/artists`}>ARTISTS</Link>
    <Link to={`${path}/podcasts`}>PODCASTS</Link>
  </LibraryMenuContainer>
);

export default LibraryMenu;
