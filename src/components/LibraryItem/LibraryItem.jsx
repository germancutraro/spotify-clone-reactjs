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
  isPlayable = true,
  coverSize = 'xl',
  type = 'playlist'
}) => {
  const history = useHistory();

  const handleChangeRoute = () => {
    if (!isLikedSongs && id) {
      const PARAMS = {
        artist: 'artist',
        playlist: 'playlist',
        album: 'album',
        song: 'album'
      };
      history.push(`/app/${PARAMS[type.toLowerCase()]}/${id}`);
    } else history.push('/app/collection/tracks');
  };

  return (
    <LibraryPlaylistContainer onClick={handleChangeRoute} isClickable={!!id}>
      {cover ? (
        <LibraryPlaylistCoverContainer coverSize={coverSize} type={type}>
          <LibraryPlaylistCover src={cover} alt={name} type={type} />
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
  isPlayable: PropTypes.bool,
  isAlbum: PropTypes.bool
};

export default React.memo(LibraryItem);
