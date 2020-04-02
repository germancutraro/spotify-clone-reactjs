import styled, { css } from 'styled-components';

export const MoreMenuContainer = styled.ul`
  position: fixed;
  background-color: #282828;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  z-index: 1000000;
  border: 1px solid rgba(0, 0, 0, 0.15);
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  border-radius: 0.25rem;

  ${({ align }) => css`
    transform: translate(${align});
  `}
`;

export const MoreMenuItem = styled.li`
  width: 100%;
  padding: 3px 20px;
  line-height: 32px;
  white-space: nowrap;
  color: #b3b3b3;
  cursor: default;
  user-select: none;

  :hover {
    color: #fff;
    background-color: #333;
    border-color: #333;
    text-decoration: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
`;
