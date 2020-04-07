import React from 'react';
import { MoreMenuContainer, Overlay, MoreMenuItem } from './moreMenuStyles';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import { useHistory } from 'react-router-dom';

const MoreMenu = ({ open, moreMenuPosition = [0, 0], close, items }) => {
  const { copyToClipboard } = useCopyToClipboard();

  const history = useHistory();

  const getAlign = () => {
    const xAlign =
      moreMenuPosition[0] + 200 > document.body.offsetWidth ? '-100%' : 0;
    const yAlign =
      items.length * 55 + moreMenuPosition[1] > document.body.offsetHeight
        ? '-100%'
        : 0;

    return `${xAlign}, ${yAlign}`;
  };

  const handleClick = ({ title, onClick }) => {
    if (title.includes('Copy')) copyToClipboard();
    else if (title.includes('Remove from your library')) {
      onClick();
      history.push('/app/collection/playlists');
    } else onClick();
    close();
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
              <MoreMenuItem key={i} onClick={() => handleClick(item)}>
                {item.title}
              </MoreMenuItem>
            ))}
        </MoreMenuContainer>
      </>
    )
  );
};

export default MoreMenu;
