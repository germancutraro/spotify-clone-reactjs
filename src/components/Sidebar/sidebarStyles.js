import styled from 'styled-components';

export const SideContainer = styled.div`
  width: 180px;
  height: 100vh;
  background-color: #121212;
  position: fixed;
  top: 0;
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
  height: 2rem;
  width: 100%;
`;

export const ItemsTitle = styled.p`
  color: #b3b3b3;
  font-size: 0.68rem;
  margin-left: 1rem;
  font-weight: 400;
  letter-spacing: 2px;
`;

export const ItemText = styled.p`
  font-family: ${({ light }) => (light ? 'Montserrat' : 'Montserrat-Bold')};
  color: #b3b3b3;
  font-size: 0.8rem;
  padding: 0.6rem 0; // padding for icons
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    color: #fff;
  }
`;

export const ScrollContainer = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #b3b3b3;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
  }
`;

export const LibraryContainer = styled.div`
  margin-bottom: 2rem;
`;

export const PlaylistContainer = styled.div``;
