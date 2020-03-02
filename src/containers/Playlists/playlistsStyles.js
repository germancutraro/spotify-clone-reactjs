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

export const PlaylistRightWrapper = styled.div``;

// PLAYLIST HEADER
export const PlaylistHeader = styled.header`
  margin: 0 auto 1.5rem;
  text-align: center;
  max-width: 400px;
`;

export const PlaylistHeaderSubcontainer = styled.div`
  margin: 0 auto;
  padding-bottom: 1rem;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.005rem;
  font-weight: 900;
  overflow-wrap: break-word;
`;

export const PlaylistOwner = styled.p`
  color: #fff;
  margin: 5px auto;
  opacity: 0.4;
  font-size: 14px;
  border-bottom: 1px solid transparent;
  cursor: pointer;

  :hover {
    border-color: #fff;
    opacity: 0.6;
  }
`;

// PLAYLIST BUTTONS
export const PlaylistButtonsContainer = styled.div`
  margin-top: 1rem;
`;

export const PlaylistPlay = styled.button`
  background-color: #1db954;
  padding: 11px 44px;
  text-transform: uppercase;
  letter-spacing: 0.16rem;
  font-size: 11px;
  font-weight: 900;
  min-width: 130px;
  line-height: 1.6;
  user-select: none;
  border: 0;
  border-radius: 100px;
  transition-property: all;
  color: #fff;
  outline: 0;
  cursor: pointer;
  transition: all 33ms cubic-bezier(0.3, 0, 0, 1);

  :hover {
    transform: scale(1.06);
    background-color: #1ed760;
  }
`;
export const PlaylistIconsWrapper = styled.div``;

// PLAYLIST DESCRIPTION
export const PlaylistDescriptionContainer = styled.div``;

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
