import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LibraryMenuContainer = styled.nav`
  display: flex;
  align-items: center;
  /* background-color: red; */
`;

export const LibraryLink = styled(NavLink)`
  margin-right: 0.5rem;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: #fff;
  position: relative;
  border: 0;
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &.active {
    background-color: #333;
  }
`;
