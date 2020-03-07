import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import {
  LibraryPlaylistContainer,
  LibraryPlaylistCoverContainer,
  LibraryPlaylistCover,
  LibraryPlaylistTitle,
  LibraryPlaylistAuthor,
  LibraryPlaylistPlay,
  DefaultCover
} from './playlistItemStyles';

const LibraryItem = ({
  id,
  name,
  cover,
  author,
  isLikedSongs,
  isPlayable = true
}) => {
  const history = useHistory();

  const handleChangeRoute = () => {
    if (!isLikedSongs) history.push(`/app/playlist/${id}`);
    else history.push('/app/collection/tracks');
  };

  return (
    <LibraryPlaylistContainer
      onClick={id ? handleChangeRoute : null}
      isClickable={!!id}
    >
      {cover ? (
        <LibraryPlaylistCoverContainer>
          <LibraryPlaylistCover src={cover} alt={name} />
        </LibraryPlaylistCoverContainer>
      ) : (
        <LibraryPlaylistCoverContainer>
          <DefaultCover />
        </LibraryPlaylistCoverContainer>
      )}
      <LibraryPlaylistTitle>{name}</LibraryPlaylistTitle>
      {author && (
        <LibraryPlaylistAuthor
          onClick={() =>
            history.push(`/app/user/${author.toLowerCase()}`, { id })
          }
        >
          {author}
        </LibraryPlaylistAuthor>
      )}

      {isPlayable && (
        <LibraryPlaylistPlay data-value='play'>
          <PlayIcon fill='#fff' />
        </LibraryPlaylistPlay>
      )}
    </LibraryPlaylistContainer>
  );
};

LibraryItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  cover: PropTypes.string,
  author: PropTypes.string,
  isPlayable: PropTypes.bool
};

export default React.memo(LibraryItem);
