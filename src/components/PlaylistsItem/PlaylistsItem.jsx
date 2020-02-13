import React from 'react';
import PropTypes from 'prop-types';
import { Item, ItemText } from '../Sidebar/sidebarStyles';
import { useHistory } from 'react-router-dom';

const PlaylistsItem = ({
  id,
  name,
  description,
  images,
  owner: { display_name },
  tracks: { total }
}) => {
  const history = useHistory();
  return (
    <Item hasIcon={false}>
      <ItemText
        hasIcon={false}
        onClick={() =>
          history.push('/app/playlist', {
            id,
            name,
            description,
            totalSongs: total,
            image: images[0].url,
            owner: display_name
          })
        }
        light
      >
        {name}
      </ItemText>
    </Item>
  );
};

PlaylistsItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default React.memo(PlaylistsItem);
