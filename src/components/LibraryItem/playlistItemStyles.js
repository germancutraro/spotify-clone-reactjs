import styled, { css } from 'styled-components';
import { ReactComponent as DefaultCoverIcon } from '../../assets/icons/defaultSong.svg';

const EllipsisOneLine = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 1px;
  margin-right: -1px;
`;
const EllipsisTwoLines = css`
  display: -webkit-box;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const LibraryItemsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(164px, 1fr));
  padding: 0 2rem;
  margin: 2rem 0;
  grid-gap: 1rem;
`;

// title

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem 0;
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
  ${({ isClickable }) =>
    isClickable
      ? css`
          cursor: pointer;
        `
      : null};

  :hover [data-value='play'] {
    display: flex;
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
`;

export const LibraryPlaylistCover = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const LibraryPlaylistTitle = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  ${EllipsisOneLine}
`;

export const LibraryPlaylistAuthor = styled.span`
  color: #b3b3b3;
  font-size: 12px;
  line-height: 18px;
  margin-top: 4px;
  ${EllipsisTwoLines}
`;

export const LibraryPlaylistPlay = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
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
