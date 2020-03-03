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
