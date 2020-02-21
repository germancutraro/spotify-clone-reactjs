import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'sidebar nav'
    'sidebar content'
    'player player';

  grid-template-columns: 230px 1fr;
  grid-template-rows: 60px 1fr 90px;
`;

export const SectionContainer = styled.div`
  grid-area: content;
`;
