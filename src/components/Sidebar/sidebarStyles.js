import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideContainer = styled.div`
  grid-area: sidebar;
  width: 230px;
  height: calc(100vh - 90px);
  background-color: #121212;
  background-color: green;
  padding: 24px 0 0 24px;
`;

export const SpotifyLogo = styled.img`
  padding-bottom: 18px;
  width: 100%;
  max-width: 131px;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1rem 1rem 1rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 1rem;
  height: ${({ hasIcon = true }) => (hasIcon ? '2rem' : '1.4rem')};
  width: 100%;
  cursor: pointer;
`;

export const ItemsTitle = styled.p`
  color: #b3b3b3;
  font-size: 0.68rem;
  margin-left: 1rem;
  font-weight: 400;
  letter-spacing: 2px;
`;

export const ItemText = styled.p`
  color: #b3b3b3;
  width: 78%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  padding: ${({ hasIcon = true }) => (hasIcon ? '0.6rem 1rem' : '0.6rem 0')};
  font-weight: ${({ light }) => (light ? '400' : '700')};
  letter-spacing: ${({ light }) => (light ? '.015em' : 'normal')};
  -webkit-font-smoothing: antialiased;
  &:hover {
    color: #fff;
    transition: 0.6s all ease;
  }
`;

export const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #4f4f4f;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #4f4f4f;
  }
`;

export const LibraryContainer = styled.div`
  margin-bottom: 0.6rem;
`;

export const PlaylistContainer = styled.div`
  border-top: 0.5px solid #333;
  margin-top: 1rem;
  height: 400px;
`;

export const IconSquare = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ gradient }) =>
    gradient ? 'linear-gradient(135deg,#450af5,#c4efd9)' : '#9b9b9b'};
  &:hover {
    background-color: #fff;
    transition: 0.4s ease all;
  }
`;

export const Link = styled(NavLink)`
  color: #b3b3b3;
  width: 78%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  padding: 0.6rem 1rem;
  font-weight: 700;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  border-radius: 4px;
  width: 100%;
  padding: 0 16px;
  height: 40px;
  &:hover {
    color: #fff;
    transition: 0.6s all ease;
  }
  &.active {
    background-color: red;
    color: #fff;
  }
`;
