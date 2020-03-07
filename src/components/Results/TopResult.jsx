import React from 'react';
import { TopResultContainer } from './resultsStyles';
import {
  SectionTitleContainer,
  SectionTitle
} from '../LibraryItem/playlistItemStyles';

const TopResult = ({ name, cover, type = 'ARTIST' }) => {
  return (
    <TopResultContainer>
      <SectionTitleContainer>
        <SectionTitle>Top result:</SectionTitle>
      </SectionTitleContainer>
      <img src={cover} alt='' width={100} height={100} />
      <h3>{name}</h3>
      <p>{type}</p>
    </TopResultContainer>
  );
};

export default React.memo(TopResult);
