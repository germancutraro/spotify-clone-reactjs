import React from 'react';
import { SearchContainer, Input, SearchIcon } from './searchInputStyles';

const SearchInput = () => {
  return (
    <SearchContainer>
      <SearchIcon fill='#333' width={25} height={25} />
      <Input type='text' placeholder='Search for Artists, Songs, or Podcasts' />
    </SearchContainer>
  );
};

export default SearchInput;
