import styled, { css } from 'styled-components';
import { ReactComponent as DefaultCoverIcon } from '../../assets/icons/defaultSong.svg';
import { EllipsisOneLine, EllipsisTwoLines } from '../Text/textStyles';

export const LibraryItemsContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${({ itemMinWidth = '164' }) => `${itemMinWidth}px`}, 1fr)
  );

  grid-gap: 1rem;
  ${({ hasPadding = true }) =>
    hasPadding
      ? css`
          padding: 0 2rem;
          margin: 2rem 0;
        `
      : null};
`;

// title

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ hasPadding = true }) =>
    hasPadding
      ? css`
          padding: 1rem 2rem 0;
        `
      : css`
          padding: 1rem 0;
        `};
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  color: #fff;
`;

export const SectionTitleSeeAll = styled.span`
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 1.76px;
  text-transform: uppercase;
  border: 0;
  background: transparent;
  color: #b3b3b3;
  flex: 0;
  white-space: nowrap;
  margin-left: 20px;
  margin-top: 1px;
  cursor: default;
  border-bottom: 1px solid transparent;

  :hover {
    border-color: #b3b3b3;
  }
`;

// item

export const LibraryPlaylistContainer = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  background: #282828;
  border-radius: 8px;
  isolation: isolate;
  list-style: none;
  flex: 1;
  ${({ isClickable }) =>
    isClickable
      ? css`
          cursor: pointer;
        `
      : null};

  :hover [data-value='play'] {
    display: flex;
  }

  * {
    user-select: none;
  }
`;

export const LibraryPlaylistCoverContainer = styled.div`
  height: 0;
  width: 100%;
  padding-top: 100%;
  position: relative;
  margin-bottom: 16px;
  background-color: #333;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  ${({ type }) =>
    type === 'ARTIST'
      ? css`
          border-radius: 100px;
        `
      : null}
  ${({ cardType }) =>
    cardType === 'topResult'
      ? css`
          width: 92px;
          padding-top: 92px;
        `
      : null}
`;

export const LibraryPlaylistCover = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;

  ${({ type }) =>
    type === 'ARTIST'
      ? css`
          border-radius: 100px;
        `
      : null}
`;

export const LibraryPlaylistTitle = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  ${EllipsisOneLine}

  ${({ cardType }) =>
    cardType === 'topResult'
      ? css`
          font-size: 28px;
          line-height: 36px;
          font-weight: 700;
          letter-spacing: -0.36px;
        `
      : null}
`;

export const LibraryPlaylistAuthor = styled.span`
  color: #b3b3b3;
  font-size: 12px;
  line-height: 18px;
  margin-top: 4px;
  ${EllipsisTwoLines}
`;

export const LibraryPlaylistTag = styled.span`
  font-size: 11px;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 1.76px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.6px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  display: inline-block;
  padding: 4px 12px;
  border-radius: 500px;
  margin-right: auto;
  margin-top: 4px;
`;

export const LibraryPlaylistPlay = styled.div`
  --size: ${({ cardType }) => (cardType === 'topResult' ? '48px' : '40px')};

  display: none;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);
  position: absolute;
  right: ${({ cardType }) => (cardType === 'topResult' ? '1.5rem' : '1rem')};
  bottom: ${({ cardType }) => (cardType === 'topResult' ? '2.25rem' : '1rem')};
  border-radius: 100%;
  background-color: #1db954;
  box-shadow: 0 0 10px 10px #282828;
  cursor: auto;

  &:hover {
    transform: scale(1.06);
  }
`;

export const DefaultCover = styled(DefaultCoverIcon)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 52.5%;
  transform: translateX(-50%);
`;
