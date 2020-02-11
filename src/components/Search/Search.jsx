import React from 'react';
import { SearchContainer, Input, SearchIcon } from './searchStyles';

const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon>X</SearchIcon>
      <Input type='text' placeholder='Search' />
    </SearchContainer>
  );
};

export default Search;
