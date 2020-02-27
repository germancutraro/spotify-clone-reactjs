import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    "sidebar content"
    "player player";

  grid-template-columns: 230px 1fr;
  grid-template-rows: calc(100vh - 90px) 90px;
`;

export const SectionContainer = styled.div`
  grid-area: content;
  max-height: 100%;
  overflow-y: auto;
  position: relative;
  background-color: ${({ color = "#121212" }) => color};
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), #121212 40%);
  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    background: #4f4f4f;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #4f4f4f;
  }
`;
