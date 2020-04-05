import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Item, PlaylistItemText } from '../Sidebar/sidebarStyles';
import MoreMenu from '../MoreMenu/MoreMenu';
import { followPlaylistStart } from '../../containers/Playlists/playlistsActions';

const PlaylistsItem = ({ id, name, userId, owner }) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [moreMenuPosition, setMoreMenuPosition] = useState([0, 0]);

  const dispatch = useDispatch();

  const following = useSelector(({ playlists }) => playlists.following);

  const handleOnClickMore = e => {
    e.preventDefault();

    setIsMoreMenuOpen(true);
    setMoreMenuPosition([e.pageX, e.pageY]);
  };

  const handleFollow = () => {
    dispatch(
      followPlaylistStart({
        playlistId: id,
        action: following ? 'unfollow' : 'follow',
        userId,
      })
    );
  };

  return (
    <>
      <MoreMenu
        open={isMoreMenuOpen}
        close={() => setIsMoreMenuOpen(false)}
        moreMenuPosition={moreMenuPosition}
        items={[
          {
            title: 'Remove from your library',
            onClick: () => handleFollow(),
          },
          {
            title: 'Copy playlist link',
          },
        ]}
      />
      <Item hasIcon={false}>
        <PlaylistItemText
          hasicon={0}
          to={`/app/playlist/${id}`}
          light={1}
          onContextMenu={handleOnClickMore}
        >
          {name}
        </PlaylistItemText>
      </Item>
    </>
  );
};

PlaylistsItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default React.memo(PlaylistsItem);
