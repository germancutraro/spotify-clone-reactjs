import React from 'react';
import LibraryItem from '../LibraryItem/LibraryItem';

const Albums = ({ title, artist, cover }) => {
  return (
    <LibraryItem cover={cover} title={title} type='ALBUM' subtitle={artist} />
  );
};

export default React.memo(Albums);
