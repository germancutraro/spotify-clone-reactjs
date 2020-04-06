import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { EllipsisOneLine } from '../Text/textStyles';

export const SideContainer = styled.div`
  grid-area: sidebar;
  width: 230px;
  max-height: calc(100vh - 90px);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 24px 0 0 8px;

  display: flex;
  flex-direction: column;
`;

export const SpotifyLogo = styled.img`
  margin: 0 0 18px 16px;
  width: 100%;
  max-width: 131px;
  cursor: pointer;
`;

// nav
export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-right: 8px;
`;

const ItemTextStyles = css`
  color: #b3b3b3;
  ${EllipsisOneLine};
  font-size: 14px;
  font-weight: ${({ light }) => (light ? '400' : '700')};
  letter-spacing: ${({ light }) => (light ? '.015em' : 'normal')};

  margin-left: ${({ hasicon = true }) => (hasicon ? '16px' : 0)};
  -webkit-font-smoothing: antialiased;
  transition: 0.3s all ease;
`;

export const ItemText = styled.p`
  ${ItemTextStyles}
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;

  svg {
    transition: 0.3s all ease;
  }

  :hover,
  .active {
    ${ItemText} {
      color: #ffffff;
    }
    ${({ svgTransition = true }) =>
      svgTransition
        ? css`
            svg {
              fill: #ffffff;
            }
          `
        : null}
  }
`;

export const ItemLink = styled(NavLink)`
  display: flex;
  align-items: center;

  width: 100%;
  ${({ padding }) =>
    padding !== 0
      ? css`
          padding: 10px 16px;
        `
      : null};

  -webkit-font-smoothing: antialiased;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover,
  &.active {
    p {
      color: #fff;
    }
  }

  &.active {
    ${({ bgc }) =>
      bgc !== 'transparent'
        ? css`
            background-color: #282828;
          `
        : null}
  }
`;

// library
export const LibraryContainer = styled.div`
  margin: 1.6rem 16px 0.6rem;
  padding-bottom: 8px;
  border-bottom: 1px solid #282828;
`;

export const SectionTitle = styled.p`
  color: #b3b3b3;
  font-size: 0.68rem;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

const IconSquareGradientBackground = css`
  ::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(135deg, #450af5, #c4efd9);
    z-index: 0;
    transition: 0.3s all ease;
    opacity: 0.6;
  }
`;

export const IconSquare = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ gradient }) =>
    gradient ? IconSquareGradientBackground : 'background-color: #9b9b9b'};
  transition: 0.3s all ease;

  svg {
    z-index: 10;
  }
`;

export const LibraryItem = styled.div`
  padding: 5px 0;

  :hover,
  .active {
    ${ItemText} {
      color: #fff;
    }

    ${IconSquare} {
      ${({ gradient }) =>
        gradient
          ? css`
              ::before {
                opacity: 1;
              }
            `
          : css`
              background-color: #ffffff;
            `};
    }
  }
`;

// Playlist

export const PlaylistContainer = styled.div`
  margin: 0.5rem 16px 0.25rem;
  max-width: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
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

export const PlaylistItemText = styled(NavLink)`
  ${ItemTextStyles};
  padding: 8px 0;
  transition: all 0.3s ease;

  &.active,
  :hover {
    color: #fff;
  }
`;

export const InstallItem = styled(Item)`
  padding: 0.7rem 0.5rem 0.7rem 0;
`;
