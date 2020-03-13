import React from 'react';
import { LibraryMenuContainer, LibraryLink } from './libraryMenuStyles';

const path = '/app/collection';

const LibraryMenu = () => (
  <LibraryMenuContainer>
    <LibraryLink to={`${path}/playlists`}>Playlists</LibraryLink>
    <LibraryLink to={`${path}/albums`}>Albums</LibraryLink>
    <LibraryLink to={`${path}/artists`}>Artists</LibraryLink>
  </LibraryMenuContainer>
);

export default LibraryMenu;
