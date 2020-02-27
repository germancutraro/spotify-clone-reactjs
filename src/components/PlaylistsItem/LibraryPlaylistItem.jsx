import React from 'react';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import {
  LibraryPlaylistWrapper,
  LibraryPlaylistCover,
  LibraryPlaylistTitle,
  LibraryPlaylistAuthor,
  LibraryPlaylistPlay
} from './playlistItemStyles';

const LibraryPlaylistItem = ({ name, cover, author }) => {
  return (
    <LibraryPlaylistWrapper>
      <LibraryPlaylistCover src={cover} alt='' />
      <LibraryPlaylistTitle>{name}</LibraryPlaylistTitle>
      <LibraryPlaylistAuthor>{author}</LibraryPlaylistAuthor>
      <LibraryPlaylistPlay>
        <PlayIcon fill='#fff' />
      </LibraryPlaylistPlay>
    </LibraryPlaylistWrapper>
  );
};

export default React.memo(LibraryPlaylistItem);
