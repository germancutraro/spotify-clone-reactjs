import styled from 'styled-components';
import { Link } from 'react-router-dom';

// containers
export const TopResultContainer = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
`;

export const SongsContainer = styled.div`
  grid-column: 3 / -1;
  @media screen and (max-width: 1080px) {
    grid-column: 1 / -1;
  }

  display: grid;
  grid-gap: 0.5rem;
`;

export const ArtistsContainer = styled.div`
  grid-column: 1 / -1;
  margin-top: 2rem;
`;
export const AlbumsContainer = styled(ArtistsContainer)``;

// song
export const SongContainer = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  transition: background-color 0.2s linear;
`;

export const SongImageContainer = styled.div`
  position: relative;
  margin-right: 1rem;
  width: 4.5rem;
  height: 4.5rem;
`;

export const SongImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const SongTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SongName = styled(Link)`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.015rem;
  color: #fff;
  font-weight: 400;
  border-bottom: 1px solid transparent;
  margin-right: auto;

  :hover {
    border-color: #fff;
  }
`;
