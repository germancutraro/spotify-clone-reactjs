import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideContainer = styled.div`
  grid-area: sidebar;
  width: 230px;
  height: calc(100vh - 90px);
  background-color: #121212;
  background-color: green;
  padding: 24px 0 0 8px;
`;

export const SpotifyLogo = styled.img`
  margin: 0 0 18px 16px;
  width: 100%;
  max-width: 131px;
`;

// nav
export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-right: 8px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  /* height: ${({ hasIcon = true }) => (hasIcon ? '2rem' : '1.4rem')}; */
  cursor: pointer;
`;

export const ItemLink = styled(NavLink)`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 10px 16px;

  -webkit-font-smoothing: antialiased;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover,
  &:active {
    p {
      color: #fff;
    }
  }
  &.active {
    background-color: #282828;
  }
`;

export const ItemText = styled.p`
  color: #b3b3b3;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 14px;
  font-weight: ${({ light }) => (light ? '400' : '700')};
  letter-spacing: ${({ light }) => (light ? '.015em' : 'normal')};

  margin-left: ${({ hasIcon = true }) => (hasIcon ? '16px' : 0)};
  -webkit-font-smoothing: antialiased;
  transition: 0.3s all ease;
`;

// library
export const LibraryContainer = styled.div`
  margin: 1.6rem 16px 0.6rem;
`;

export const SectionTitle = styled.p`
  color: #b3b3b3;
  font-size: 0.68rem;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

export const IconSquare = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ gradient }) =>
    gradient ? 'linear-gradient(135deg,#450af5,#c4efd9);' : '#9b9b9b'};
  transition: 0.3s all ease;
`;

export const LibraryItem = styled.div`
  padding: 5px 0;

  :hover {
    ${ItemText} {
      color: #fff;
    }

    ${IconSquare} {
      background-color: #fff;
    }
  }
`;

// export const ScrollContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   overflow-y: auto;
//   overflow-x: hidden;

//   ::-webkit-scrollbar {
//     width: 9px;
//   }

//   ::-webkit-scrollbar-track {
//     border-radius: 10px;
//   }

//   ::-webkit-scrollbar-thumb {
//     background: #4f4f4f;
//     border-radius: 10px;
//   }

//   ::-webkit-scrollbar-thumb:hover {
//     background: #4f4f4f;
//   }
// `;

// export const PlaylistContainer = styled.div`
//   border-top: 0.5px solid #333;
//   margin-top: 1rem;
//   height: 400px;
// `;

// export const Link = styled(NavLink)`
//   color: #b3b3b3;
//   width: 78%;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   font-size: 14px;
//   padding: 0.6rem 1rem;
//   font-weight: 700;
//   width: 100%;
//   -webkit-font-smoothing: antialiased;
//   border-radius: 4px;
//   width: 100%;
//   padding: 0 16px;
//   height: 40px;
//   &:hover {
//     color: #fff;
//     transition: 0.6s all ease;
//   }
//   &.active {
//     background-color: red;
//     color: #fff;
//   }
// `;
