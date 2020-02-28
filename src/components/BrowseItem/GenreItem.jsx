import React from 'react';
import { GenreContainer, GenreCover, BrowseTitle } from './browseItemStyles';

const BrowseItem = ({ name, cover }) => {
  console.log(cover);
  return (
    <GenreContainer>
      <BrowseTitle>{name}</BrowseTitle>
      <GenreCover src={cover} />
    </GenreContainer>
  );
};

export default React.memo(BrowseItem);
