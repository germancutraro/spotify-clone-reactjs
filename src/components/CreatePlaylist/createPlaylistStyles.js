import styled from 'styled-components';
import { ReactComponent as CrossIcon } from '../../assets/icons/cancel.svg';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: green;
`;

export const ModalCross = styled(CrossIcon)``;

export const ModalTitle = styled.h1`
  color: #fff;
`;

export const ModalLabel = styled.div`
  background-color: yellow;
  width: 100%;
`;

export const ModalInputTitle = styled.span``;

export const ModalInput = styled.input``;

export const ModalButtonOutline = styled.button``;

export const ModalButton = styled.button``;
