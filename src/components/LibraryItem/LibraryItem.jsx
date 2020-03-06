import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import { ReactComponent as DefaultCover } from '../../assets/icons/defaultSong.svg';
import {
  LibraryPlaylistWrapper,
  LibraryPlaylistCover,
  LibraryPlaylistTitle,
  LibraryPlaylistAuthor,
  LibraryPlaylistPlay,
  DefaultContainer
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
    <LibraryPlaylistWrapper onClick={handleChangeRoute}>
      {cover ? (
        <LibraryPlaylistCover src={cover} alt='' />
      ) : (
        <DefaultContainer>
          <DefaultCover width={150} height={150} />
        </DefaultContainer>
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
        <LibraryPlaylistPlay>
          <PlayIcon fill='#fff' />
        </LibraryPlaylistPlay>
      )}
    </LibraryPlaylistWrapper>
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
