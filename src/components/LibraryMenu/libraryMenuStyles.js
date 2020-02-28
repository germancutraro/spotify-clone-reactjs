import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LibraryMenuContainer = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 2%;
`;

export const Link = styled(NavLink)`
  color: #b3b3b3;
  margin: 5px;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  font-weight: 600;
  letter-spacing: 0.16em;
  line-height: 2;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  &.active {
    color: #fff;
    border-bottom: 1.5px solid #1db954;
  }
`;
