import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const PlayerLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const SongImage = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  ${({ hasAlbum }) =>
    hasAlbum
      ? css`
          cursor: pointer;
        `
      : null}
`;

export const SongTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3px 1rem 0;
`;

export const SongName = styled(Link)`
  color: #fff;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  margin-right: auto;

  :hover {
    border-color: #fff;
  }
`;

export const SongNameText = styled.p`
  color: #fff;
`;

export const SongArtist = styled(SongName)`
  color: #b3b3b3;
  font-size: 12px;
  :hover {
    border-color: #b3b3b3;
  }
`;
