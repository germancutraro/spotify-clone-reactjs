import styled from "styled-components";

export const PlaylistContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 1.75rem 2rem 0;
  color: #fff;

  @media screen and (max-width: 1500px) {
    grid-template-columns: 1fr 3fr;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
  }
`;

export const PlaylistLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PlaylistHeader = styled.header`
  margin: 0 auto 1.5rem;
  text-align: center;
  max-width: 400px;
`;

export const PlaylistHeaderSubcontainer = styled.div`
  margin: 0 auto;
  padding-bottom: 15px;
  max-width: 320px;
`;

export const PlaylistRightWrapper = styled.div``;

export const PlaylistImageContainer = styled.div`
  position: relative;
`;

export const PlaylistImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PlaylistTitle = styled.h1`
  color: #fff;
  text-align: center;
  margin: 0.75rem 0 0.3rem 0;
`;

export const PlaylistOwner = styled.p`
  color: #fff;
  opacity: 0.6;
  font-size: 14px;
`;

export const PlaylistPlay = styled.button`
  background-color: #1db954;
  padding: 11px 44px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 11px;
  min-width: 130px;
  white-space: normal;
  will-change: transform;
  line-height: 1.6;
  vertical-align: middle;
  touch-action: manipulation;
  user-select: none;
  border: 0;
  border-radius: 500px;
  transition-property: all;
  color: #fff;
`;

export const PlaylistTotalSongs = styled.p`
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.015em;
  font-weight: 400;
  color: #b3b3b3;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #fff;
  opacity: 0.6;
`;

export const PlaylistIconsWrapper = styled.div``;
