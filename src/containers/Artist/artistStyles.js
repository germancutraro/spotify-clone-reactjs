import styled from 'styled-components';

export const ArtistContainer = styled.div``;

export const ArtistBackground = styled.div`
  height: 600px;
  width: 100%;
  background-image: linear-gradient(${({ color }) => color}, #121212 300px);
  position: absolute;
  top: 0;
  opacity: 0.5;
`;

export const ArtistSubContainer = styled.div`
  position: relative;
  z-index: 100;
`;
