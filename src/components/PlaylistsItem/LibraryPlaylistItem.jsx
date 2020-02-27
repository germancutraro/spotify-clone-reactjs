import React from 'react';
import {
  LibraryPlaylistWrapper,
  LibraryPlaylistCover,
  LibraryPlaylistTitle,
  LibraryPlaylistAuthor
} from './playlistItemStyles';

const LibraryPlaylistItem = ({ name, cover, author }) => {
  return (
    <LibraryPlaylistWrapper>
      <LibraryPlaylistCover src={cover} alt='' />
      <LibraryPlaylistTitle>{name}</LibraryPlaylistTitle>
      <LibraryPlaylistAuthor>{author}</LibraryPlaylistAuthor>
    </LibraryPlaylistWrapper>
  );
};

export default React.memo(LibraryPlaylistItem);
