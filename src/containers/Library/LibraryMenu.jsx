import React from 'react';
import { Link } from 'react-router-dom';

const LibraryMenu = () => {
  return (
    <div style={{ marginLeft: '50%', display: 'flex' }}>
      <Link to='/collection/playlists' style={{ color: '#fff' }}>
        Playlists
      </Link>
      <Link to='/collection/playlists' style={{ color: '#fff' }}>
        Playlists
      </Link>
      <Link to='/collection/playlists' style={{ color: '#fff' }}>
        Playlists
      </Link>
      <Link to='/collection/playlists' style={{ color: '#fff' }}>
        Playlists
      </Link>
    </div>
  );
};

export default LibraryMenu;
