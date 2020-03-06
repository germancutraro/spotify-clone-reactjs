import React from 'react';
import LibraryItem from '../LibraryItem/LibraryItem';

const ArtistContentItem = ({ albums }) => {
  return albums.map(album => (
    <LibraryItem
      key={album.id}
      id={album.id}
      name={album.name}
      author={album.artists[0].name}
      cover={album.images[0].url}
    />
  ));
};

export default React.memo(ArtistContentItem);
