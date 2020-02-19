import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'sidebar nav'
    'sidebar content'
    'player player';

  grid-template-columns: 230px 1fr;
`;

export const SectionContainer = styled.div`
  grid-area: content;
`;
