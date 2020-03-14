import styled from 'styled-components';
import { ReactComponent as PlayIconSvg } from '../../assets/icons/play.svg';
import { ReactComponent as PauseIconSvg } from '../../assets/icons/pause.svg';

export const TrackContainer = styled.div`
  grid-area: player;
  height: 90px;
  background-color: #333;
  color: #fff;

  display: flex;
`;

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
