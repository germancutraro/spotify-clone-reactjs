import React from 'react';
import PropTypes from 'prop-types';
import { Item, PlaylistItemText } from '../Sidebar/sidebarStyles';
import { useHistory } from 'react-router-dom';

const PlaylistsItem = ({ id, name }) => {
  const history = useHistory();
  return (
    <Item hasIcon={false}>
      <PlaylistItemText
        hasIcon={false}
        onClick={() => history.push(`/app/playlist/${id}`)}
        light
      >
        {name}
      </PlaylistItemText>
    </Item>
  );
};

PlaylistsItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default React.memo(PlaylistsItem);
