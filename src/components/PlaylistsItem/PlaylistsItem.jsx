import React from 'react';
import PropTypes from 'prop-types';
import { Item, ItemText } from '../Sidebar/sidebarStyles';

const PlaylistsItem = ({ name }) => {
  return (
    <Item>
      <ItemText light>{name}</ItemText>
    </Item>
  );
};

PlaylistsItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default React.memo(PlaylistsItem);
