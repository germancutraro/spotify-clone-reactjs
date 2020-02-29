import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import {
  LibraryPlaylistWrapper,
  LibraryPlaylistCover,
  LibraryPlaylistTitle,
  LibraryPlaylistAuthor,
  LibraryPlaylistPlay
} from './playlistItemStyles';

const LibraryItem = ({ id, name, cover, author }) => {
  const history = useHistory();
  return (
    <LibraryPlaylistWrapper onClick={() => history.push(`/app/playlist/${id}`)}>
      <LibraryPlaylistCover src={cover} alt='' />
      <LibraryPlaylistTitle>{name}</LibraryPlaylistTitle>
      <LibraryPlaylistAuthor>{author}</LibraryPlaylistAuthor>
      <LibraryPlaylistPlay>
        <PlayIcon fill='#fff' />
      </LibraryPlaylistPlay>
    </LibraryPlaylistWrapper>
  );
};

LibraryItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  author: PropTypes.string
};

export default React.memo(LibraryItem);
