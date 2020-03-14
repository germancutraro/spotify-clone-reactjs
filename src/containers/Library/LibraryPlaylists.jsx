import React from 'react';
import { useSelector } from 'react-redux';
import LibraryPlaylistItem from '../../components/LibraryItem/LibraryItem';
// styles
import { LibraryPlaylistContainer } from './libraryStyles';
import { LibraryItemsContainer } from '../../components/LibraryItem/playlistItemStyles';
import useTitle from '../../hooks/useTitle';

const LibraryPlaylists = () => {
  useTitle('Spotify - Your Library');

  const playlists = useSelector(({ playlists }) => playlists.list);
  return (
    <LibraryPlaylistContainer>
      <LibraryItemsContainer>
        <LibraryPlaylistItem
          title='Liked Songs'
          cover='https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png'
          isLikedSongs
        />
        {playlists.map(({ id, name, images, description, owner }) => (
          <LibraryPlaylistItem
            key={id}
            id={id}
            title={name}
            cover={images[0]?.url}
            type='playlist'
            subtitle={description || `By ${owner.display_name}`}
          />
        ))}
      </LibraryItemsContainer>
    </LibraryPlaylistContainer>
  );
};

export default LibraryPlaylists;
