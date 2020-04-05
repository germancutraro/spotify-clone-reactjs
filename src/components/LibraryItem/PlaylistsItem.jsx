import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Item, PlaylistItemText } from '../Sidebar/sidebarStyles';
import MoreMenu from '../MoreMenu/MoreMenu';

const PlaylistsItem = ({ id, name, userId, owner }) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [moreMenuPosition, setMoreMenuPosition] = useState([0, 0]);

  const handleOnClickMore = e => {
    e.preventDefault();

    setIsMoreMenuOpen(true);
    setMoreMenuPosition([e.pageX, e.pageY]);
  };

  const isMyPlaylist = owner?.id === userId;

  return (
    <>
      <MoreMenu
        open={isMoreMenuOpen}
        close={() => setIsMoreMenuOpen(false)}
        moreMenuPosition={moreMenuPosition}
        items={[
          isMyPlaylist
            ? {
                title: 'Delete playlist',
                onClick: () => alert('Delete playlist'),
              }
            : {
                title: 'Remove from your library',
                onClick: () => alert('Delete playlist'),
              },
          isMyPlaylist && {
            title: 'Make secret',
            onClick: () => alert('Delete playlist'),
          },
          {
            title: 'Copy playlist link',
            onClick: () => alert('Copy playlist link'),
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
