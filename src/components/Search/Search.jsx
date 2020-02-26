import React from 'react';
import { SearchContainer, Input, SearchIcon } from './searchStyles';

const Search = () => {
  return (
    <SearchContainer>
        <SearchIcon fill='#333' width={15} height={15} />
      <Input type='text' placeholder='Search' />
    </SearchContainer>
  );
};

export default Search;
