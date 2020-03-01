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

const LibraryItem = ({ id, name, cover, author, isLikedSongs }) => {
  const history = useHistory();

  const handleChangeRoute = () => {
    if (!isLikedSongs) history.push(`/app/playlist/${id}`);
    else history.push('/app/collection/tracks');
  };

  return (
    <LibraryPlaylistWrapper onClick={handleChangeRoute}>
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
