import React from 'react';
import { BrowseContainer, BrowseTitle } from './browseItemStyles';

const BrowseItem = ({ name }) => {
  return (
    <BrowseContainer>
      <BrowseTitle>{name}</BrowseTitle>
    </BrowseContainer>
  );
};

export default React.memo(BrowseItem);
