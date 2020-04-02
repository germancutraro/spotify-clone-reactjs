import React from 'react';
import { MoreMenuContainer, Overlay, MoreMenuItem } from './moreMenuStyles';

const MoreMenu = ({ open, moreMenuPosition = [0, 0], close }) => {
  return (
    open && (
      <>
        <Overlay onClick={close} />
        <MoreMenuContainer x={moreMenuPosition[0]} y={moreMenuPosition[1]}>
          <MoreMenuItem>Iniciar Radio</MoreMenuItem>
          <MoreMenuItem>Guardar en canciones que te gustan</MoreMenuItem>
          <MoreMenuItem>Añadir a la cola</MoreMenuItem>
          <MoreMenuItem>Añadir a playlist</MoreMenuItem>
          <MoreMenuItem>Copiar enlace de la canción</MoreMenuItem>
        </MoreMenuContainer>
      </>
    )
  );
};

export default MoreMenu;
