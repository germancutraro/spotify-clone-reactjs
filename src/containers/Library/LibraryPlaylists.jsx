import React from 'react';
import { useSelector } from 'react-redux';
import LibraryPlaylistItem from '../../components/LibraryItem/LibraryItem';
// styles
import { LibraryPlaylistContainer } from './libraryStyles';

const LibraryPlaylists = () => {
  const playlists = useSelector(({ playlists }) => playlists.list);
  return (
    <LibraryPlaylistContainer>
      <LibraryPlaylistItem
        name='Liked Songs'
        cover='https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png'
        author=''
      />
      {playlists.map(({ id, name, images, description, owner }) => (
        <LibraryPlaylistItem
          key={id}
          id={id}
          name={name}
          cover={images[0].url}
          author={description || `By ${owner.display_name}`}
        />
      ))}
    </LibraryPlaylistContainer>
  );
};

export default LibraryPlaylists;
