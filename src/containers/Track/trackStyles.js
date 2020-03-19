import styled, { css } from 'styled-components';
import { ReactComponent as PlayIconSvg } from '../../assets/icons/play.svg';
import { ReactComponent as PauseIconSvg } from '../../assets/icons/pause.svg';
import { Link } from 'react-router-dom';

export const TrackContainer = styled.div`
  grid-area: player;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: #333;
  color: #fff;
`;

// left

export const PlayerLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const SongImage = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  ${({ hasAlbum }) =>
    hasAlbum
      ? css`
          cursor: pointer;
        `
      : null}
`;

export const SongTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3px 1rem 0;
`;

export const SongName = styled(Link)`
  color: #fff;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  margin-right: auto;

  :hover {
    border-color: #fff;
  }
`;

export const SongNameText = styled.p`
  color: #fff;
`;

export const SongArtist = styled(SongName)`
  color: #b3b3b3;
  font-size: 12px;
  :hover {
    border-color: #b3b3b3;
  }
`;

// center

export const PlayerCenter = styled.div``;

// right

export const PlayerRight = styled.div``;

export const PlayIconWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.1);
  }
`;

export const PlayIcon = styled(PlayIconSvg)`
  width: 14px;
  height: 14px;
  fill: #fff;
`;
export const PauseIcon = styled(PauseIconSvg)`
  width: 11px;
  height: 11px;
  fill: #fff;
`;
