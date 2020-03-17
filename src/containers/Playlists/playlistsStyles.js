import styled from 'styled-components';
import {
  PlaylistLeftWrapper,
  PlaylistRightWrapper
} from '../../components/Playlist/PlaylistComponentStyles';

export const PlaylistContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 'left right' '. right';
  padding: 1.75rem 2rem 0;
  color: #fff;

  @media screen and (max-width: 1500px) {
    grid-template-columns: 1fr 3fr;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    grid-template-areas: 'left' 'right';
  }

  ${PlaylistLeftWrapper} {
    height: auto;
    grid-area: left;

    @media (min-height: 870px) and (min-width: 1200px) {
      position: sticky;
      top: 100px;
    }
  }

  ${PlaylistRightWrapper} {
    grid-area: right;
  }
`;
