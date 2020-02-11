import styled from 'styled-components';

export const SideContainer = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #121212;
  position: fixed;
  top: 0;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  height: 2rem;
  width: 100%;
  cursor: pointer;
`;

export const ItemsTitle = styled.p`
  color: #b3b3b3;
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 2px;
`;

export const ItemText = styled.p`
  font-family: 'Montserrat-Bold', sans-serif;
  color: #b3b3b3;
  font-size: 0.8rem;
  padding: 0.6rem 0; // padding for icons
  &:hover {
    color: #fff;
  }
`;

export const ScrollContainer = styled.div`
  width: 100%;
  overflow-y: auto;

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
