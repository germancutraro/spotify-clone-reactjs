import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { LibraryPlaylistPlay } from '../LibraryItem/playlistItemStyles';
import { OptionButtonContainer } from '../TrackItem/trackItemStyles';
import { EllipsisOneLine } from '../Text/textStyles';

// containers
export const TopResultContainer = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
`;

export const SongsContainer = styled.div`
  grid-column: 3 / -1;
  display: grid;
  grid-gap: 0.5rem;
  @media screen and (max-width: 1080px) {
    grid-column: 1 / -1;
  }
`;

export const ArtistsContainer = styled.div`
  grid-column: 1 / -1;
  margin-top: 2rem;
`;

export const AlbumsContainer = styled(ArtistsContainer)``;

const imageSize = '4.5rem';
// song
export const SongContainer = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  transition: background-color 0.2s linear;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${imageSize};
    background-color: rgba(0, 0, 0, 0.6);
    display: none;
    z-index: 1;
  }

  :hover {
    background-color: #282828;

    [data-value='play'],
    [data-value='more'] {
      display: flex;
    }
  }

  :hover::before {
    display: block;
  }
`;

export const SongImageContainer = styled.div`
  position: relative;
  margin-right: 1rem;
  width: ${imageSize};
  height: ${imageSize};
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
  max-width: 100%;
  display: inline-block;
  ${EllipsisOneLine};
  margin-right: auto;

  :hover {
    border-color: #fff;
  }
`;

export const PlayContainer = styled(LibraryPlaylistPlay)`
  --size: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  &:hover {
    transform: translate(-50%, -50%) scale(1.06);
  }
`;

export const OptionButton = styled(OptionButtonContainer)`
  display: none;
  position: relative;
  ${({ active }) =>
    active &&
    css`
      z-index: 100000;
    `}
`;

// no results

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 25%;
`;

const NoResultsText = css`
  color: #fff;
  overflow-wrap: break-word;
  text-align: center;
`;

export const NoResultsTitle = styled.h2`
  ${NoResultsText}
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.36px;
  line-height: 1.6;
`;

export const NoResultsSubtitle = styled.p`
  ${NoResultsText}
  padding-top: 10px;
`;
