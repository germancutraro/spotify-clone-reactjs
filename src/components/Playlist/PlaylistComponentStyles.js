import styled, { css } from 'styled-components';

export const PlaylistLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
`;

export const PlaylistRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
`;

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

  ${({ disabled }) =>
    disabled
      ? css`
          pointer-events: none;
          opacity: 0.35;
        `
      : null} :hover {
    transform: scale(1.06);
    background-color: #1ed760;
  }
`;
export const PlaylistIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.7rem;
`;

export const IconContainer = styled.div`
  padding: 1rem;
  cursor: pointer;
  position: relative;
  ${({ active }) =>
    active &&
    css`
      z-index: 100000;
    `}
`;

// PLAYLIST DESCRIPTION
export const PlaylistDescriptionContainer = styled.div``;

export const PlaylistDescription = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #b3b3b3;
  color: #fff;
  opacity: 0.6;
  overflow-wrap: break-word;
`;

export const PlaylistTotalSongs = styled(PlaylistDescription)`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.16rem;
  margin-top: 0.8rem;
`;

// COPYRIGHT

export const PlaylistCopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2.785rem;
`;

export const PlaylistCopyrightText = styled.span`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.015rem;
  color: #fff;
  opacity: 0.6;
`;

// EMPTY PLAYLIST
export const EmptyPlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptySection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 64px;
`;

export const EmptyPlaylistTitle = styled.h1`
  text-align: center;
  font-size: 48px;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.005rem;
  font-weight: 900;
  color: #fff;
  text-transform: none;
  text-align: center;
  margin-bottom: 36px;
`;

export const EmptyPlaylistSubtitle = styled.p`
  text-align: center;
  color: #b3b3b3;
`;

export const EmptyPlaylistIconContainer = styled.div`
  margin: 40px 0;
`;

export const RandomTracksContainer = styled.div`
  padding-top: 30px;
`;

export const RandomTracksTitle = styled.p`
  font-size: 16px;
  line-height: 22px;
  font-weight: 900;
  color: #fff;
  margin-left: 1rem;
  margin-bottom: 20px;
`;
