import React from 'react';
import LibraryItem from '../LibraryItem/LibraryItem';

const Albums = ({ name, artist, cover }) => {
  return <LibraryItem cover={cover} name={name} type='ALBUM' author={artist} />;
};

export default React.memo(Albums);
