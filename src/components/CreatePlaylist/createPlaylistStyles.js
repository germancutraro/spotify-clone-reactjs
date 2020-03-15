import styled, { css } from 'styled-components';
import { ReactComponent as CrossIcon } from '../../assets/icons/cancel.svg';
import { PlaylistPlay } from '../Playlist/PlaylistComponentStyles';
import { UpgradeButton, UpgradeText } from '../Navbar/navbarStyles';

export const ModalDialog = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ModalContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalCrossContainer = styled.div`
  padding: 0.75rem;
  cursor: pointer;
`;

export const ModalCross = styled(CrossIcon)``;

const title = css`
  color: #fff;
  font-size: 3rem;
  line-height: 56px;
  letter-spacing: -0.005rem;
  font-weight: 900;
`;

export const ModalTitle = styled.h1`
  ${title}
  margin: 1rem 0;
`;

export const ModalLabel = styled.div`
  width: 100%;
  background-color: #282828;
  padding: 2rem 20%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

export const ModalInputTitle = styled.span`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.015rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
`;

export const ModalInput = styled.input`
  ${title}
  caret-color: #1db954;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: 0;

  ::placeholder {
    color: #535353;
  }
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  padding: 1.75rem 0;
`;

export const ModalButtonOutline = styled(UpgradeButton)``;
export const ModalButtonOutlineText = styled(UpgradeText)``;

export const ModalButton = styled(PlaylistPlay)``;
