import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'sidebar nav'
    'sidebar content'
    'player player';

  grid-template-columns: 230px 1fr;
  grid-template-rows: 60px calc(100vh - 150px) 90px;
`;

export const SectionContainer = styled.div`
  grid-area: content;
  max-height: 100%;
  overflow-y: auto;
`;
