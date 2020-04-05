import React from 'react';
import { MoreMenuContainer, Overlay, MoreMenuItem } from './moreMenuStyles';

const MoreMenu = ({ open, moreMenuPosition = [0, 0], close, items }) => {
  const getAlign = () => {
    const xAlign =
      moreMenuPosition[0] + 200 > document.body.offsetWidth ? '-100%' : 0;
    const yAlign =
      items.length * 55 + moreMenuPosition[1] > document.body.offsetHeight
        ? '-100%'
        : 0;

    return `${xAlign}, ${yAlign}`;
  };

  return (
    open && (
      <>
        <Overlay onClick={close} />
        <MoreMenuContainer
          x={moreMenuPosition[0]}
          y={moreMenuPosition[1]}
          align={() => getAlign()}
        >
          {items
            .filter(el => el)
            .map((item, i) => (
              <MoreMenuItem key={i} onClick={item.onClick}>
                {item.title}
              </MoreMenuItem>
            ))}
        </MoreMenuContainer>
      </>
    )
  );
};

export default MoreMenu;
