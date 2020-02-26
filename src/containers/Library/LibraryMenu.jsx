import React from 'react';
import { Link } from 'react-router-dom';

const LibraryMenu = () => {
  const path = '/app/collection';

  return (
    <div style={{ marginLeft: '25%', marginTop: '2%', display: 'flex' }}>
      <Link to={`${path}/playlists`} style={{ color: '#fff', margin: 5 }}>
        PLAYLISTS
      </Link>
      <Link to={`${path}/made-for-you`} style={{ color: '#fff', margin: 5 }}>
        MADE FOR YOU
      </Link>
      <Link to={`${path}/albums`} style={{ color: '#fff', margin: 5 }}>
        ALBUMS
      </Link>
      <Link to={`${path}/artists`} style={{ color: '#fff', margin: 5 }}>
        ARTISTS
      </Link>
      <Link to={`${path}/podcasts`} style={{ color: '#fff', margin: 5 }}>
        PODCASTS
      </Link>
    </div>
  );
};

export default LibraryMenu;
