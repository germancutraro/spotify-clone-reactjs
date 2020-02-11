import React from 'react';
import { SearchContainer, Input, SearchIconWrapper } from './searchStyles';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

const Search = () => {
  return (
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon fill='#333' width={15} height={15} />
      </SearchIconWrapper>
      <Input type='text' placeholder='Search' />
    </SearchContainer>
  );
};

export default Search;
