import React from 'react';
import { TopResultContainer } from './resultsStyles';

const TopResult = ({ name, cover, type = 'ARTIST' }) => {
  return (
    <TopResultContainer>
      <h1 style={{ color: '#fff' }}>Top result:</h1>
      <img src={cover} alt='' width={100} height={100} />
      <h3>{name}</h3>
      <p>{type}</p>
    </TopResultContainer>
  );
};

export default React.memo(TopResult);
