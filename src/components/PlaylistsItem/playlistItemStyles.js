import styled from 'styled-components';

export const LibraryPlaylistWrapper = styled.div`
  background-color: #333;
  width: 200px;
  height: 300px;
  margin: 20px;
`;

export const LibraryPlaylistCover = styled.img`
  width: 165px;
  height: 165px;
  margin: 20px;
`;

export const LibraryPlaylistTitle = styled.p`
  color: #fff;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  font-weight: 700;
`;

export const LibraryPlaylistAuthor = styled.span`
  color: #b3b3b3;
  font-size: 12px;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #b3b3b3;
  padding: 0;
  margin-top: 4px;
  white-space: normal;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  -webkit-font-smoothing: antialiased;
`;
