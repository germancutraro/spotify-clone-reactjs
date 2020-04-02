import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Item, PlaylistItemText } from '../Sidebar/sidebarStyles';
import { useHistory } from 'react-router-dom';
import MoreMenu from '../MoreMenu/MoreMenu';

const PlaylistsItem = ({ id, name }) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [moreMenuPosition, setMoreMenuPosition] = useState([0, 0]);

  const history = useHistory();

  const handleOnClickMore = e => {
    e.preventDefault();

    setIsMoreMenuOpen(true);
    setMoreMenuPosition([e.pageX, e.pageY]);
  };
  return (
    <>
      <MoreMenu
        open={isMoreMenuOpen}
        close={() => setIsMoreMenuOpen(false)}
        moreMenuPosition={moreMenuPosition}
        items={[
          { title: 'Iniciar Radio', onClick: () => alert('Iniciar radio') },
          {
            title: 'Guardar en canciones que te gustan',
            onClick: () => alert('Guardar en canciones que te gustan')
          },
          {
            title: 'Añadir a la cola',
            onClick: () => alert('Añadir a la cola')
          },
          {
            title: 'Añadir a playlist',
            onClick: () => alert('Añadir a playlist')
          },
          {
            title: 'Copiar enlace de la canción',
            onClick: () => alert('Copiar enlace de la canción')
          }
        ]}
      />
      <Item hasIcon={false}>
        <PlaylistItemText
          hasIcon={false}
          onClick={() => history.push(`/app/playlist/${id}`)}
          light
          onContextMenu={handleOnClickMore}
        >
          {name}
        </PlaylistItemText>
      </Item>
    </>
  );
};

PlaylistsItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default React.memo(PlaylistsItem);
