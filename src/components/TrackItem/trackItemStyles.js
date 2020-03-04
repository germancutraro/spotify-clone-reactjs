import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  height: 4.56em;
  user-select: none;
  position: relative;
  transition: background-color 0.2s linear;

  :hover {
    background-color: hsla(0, 0%, 100%, 0.1);
  }
`;

export const MusicIconContainer = styled.div``;

export const TextContainer = styled.div``;

export const Name = styled.h3``;

export const SubTextsContainer = styled.div``;

export const Artist = styled.span`
  font-size: 14px;
`;

export const Album = styled(Artist)``;

export const DurationContainer = styled.div``;

export const Duration = styled.span``;
