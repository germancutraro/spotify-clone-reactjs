import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const EllipsisOneLine = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 1px;
  margin-right: -1px;
`;

export const ItemContainer = styled.div`
  display: flex;
  user-select: none;
  position: relative;
  transition: background-color 0.2s linear;
  padding: 0.7rem 1rem 0.7rem 0;

  svg:nth-child(1) {
    display: none;
  }

  :hover {
    background-color: hsla(0, 0%, 100%, 0.1);
    svg:nth-child(1) {
      display: inline-block;
    }
    svg:nth-child(2) {
      display: none;
    }
  }
`;

export const MusicIconContainer = styled.div`
  margin-right: 14px;
  width: 2rem;
  text-align: right;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  width: 0;
`;

export const Name = styled.h3`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.015rem;
  color: #fff;
  font-weight: 400;
`;

export const SubTextsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

// ARTIST
export const ArtistsContainer = styled.span`
  ${EllipsisOneLine}
`;

export const ArtistContainer = styled.span``;

const OpacityColor = css`
  font-size: 14px;
  color: #fff;
  opacity: 0.6;
`;

export const Artist = styled(Link)`
  ${OpacityColor}
  transition: opacity 0.2s linear;
  border-bottom: 1px solid transparent;
  :hover {
    opacity: 1;
    border-color: #fff;
  }
`;

export const ArtistSeparator = styled.span`
  ${OpacityColor}
  padding-right: .2rem;
`;

export const Separator = styled.span`
  ${OpacityColor}
  transform: translateY(-1px);
  font-size: 0.8rem;
  padding: 0 0.5rem;
`;

export const AlbumContainer = styled.span`
  ${EllipsisOneLine}
`;

export const Album = styled(Artist)``;

// options
export const OptionButtonContainer = styled.div`
  padding: 0 2rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// duration

export const DurationContainer = styled.div`
  margin-left: auto;
`;

export const Duration = styled.span`
  ${OpacityColor}
`;
