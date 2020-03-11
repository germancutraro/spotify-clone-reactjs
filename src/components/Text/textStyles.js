import { css } from 'styled-components';

export const EllipsisOneLine = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 1px;
  margin-right: -1px;
`;

export const EllipsisTwoLines = css`
  display: -webkit-box;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
