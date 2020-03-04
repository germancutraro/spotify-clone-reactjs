import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  height: 4.56rem;
  user-select: none;
  position: relative;
  transition: background-color 0.2s linear;

  svg:nth-child(2) {
    display: none;
  }

  :hover {
    background-color: hsla(0, 0%, 100%, 0.1);
    svg:nth-child(1) {
      display: none;
    }
    svg:nth-child(2) {
      display: block;
    }
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
