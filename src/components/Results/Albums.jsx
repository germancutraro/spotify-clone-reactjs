import React from 'react';
import LibraryItem from '../LibraryItem/LibraryItem';

const Albums = ({ id, title, artist, cover }) => (
  <LibraryItem
    id={id}
    cover={cover}
    title={title}
    type='album'
    subtitle={artist}
  />
);

export default React.memo(Albums);
