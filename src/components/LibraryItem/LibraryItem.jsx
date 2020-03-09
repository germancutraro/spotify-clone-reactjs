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
  DefaultCover,
  LibraryPlaylistTag
} from './playlistItemStyles';

const LibraryItem = ({
  id,
  title,
  subtitle,
  cover,
  isLikedSongs,
  isPlayable = true,
  type = 'playlist',
  cardType,
  tag
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
    } else if (isLikedSongs) history.push('/app/collection/tracks');
  };

  return (
    <LibraryPlaylistContainer onClick={handleChangeRoute} isClickable={!!id}>
      {cover ? (
        <LibraryPlaylistCoverContainer cardType={cardType} type={type}>
          <LibraryPlaylistCover src={cover} alt={title} type={type} />
        </LibraryPlaylistCoverContainer>
      ) : (
        <LibraryPlaylistCoverContainer>
          <DefaultCover />
        </LibraryPlaylistCoverContainer>
      )}
      <LibraryPlaylistTitle cardType={cardType}>{title}</LibraryPlaylistTitle>
      {subtitle && (
        <LibraryPlaylistAuthor
          onClick={() =>
            history.push(`/app/user/${subtitle.toLowerCase()}`, { id })
          }
        >
          {subtitle}
        </LibraryPlaylistAuthor>
      )}

      {tag ? <LibraryPlaylistTag>{tag}</LibraryPlaylistTag> : null}

      {isPlayable && (
        <LibraryPlaylistPlay data-value='play' cardType={cardType}>
          <PlayIcon fill='#fff' width={cardType === 'topResult' ? 24 : 16} />
        </LibraryPlaylistPlay>
      )}
    </LibraryPlaylistContainer>
  );
};

LibraryItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  cover: PropTypes.string,
  isPlayable: PropTypes.bool
};

export default React.memo(LibraryItem);
