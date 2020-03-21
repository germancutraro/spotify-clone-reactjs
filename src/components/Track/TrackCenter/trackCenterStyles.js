import styled from 'styled-components';
import { ReactComponent as PlayIconSvg } from '../../../assets/icons/play.svg';
import { ReactComponent as PauseIconSvg } from '../../../assets/icons/pause.svg';

export const PlayerCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PlayerCenterButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.75rem;
`;

export const PlayerProgressContainer = styled.div`
  display: flex;
  align-items: center;
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
