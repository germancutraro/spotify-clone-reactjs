import React from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';
import { SearchContainer, Input, SearchIcon } from './searchStyles';

const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon>
        <MaterialIcon icon='search' size={18} color={colorPalette.grey} />
      </SearchIcon>
      <Input type='text' placeholder='Search' />
    </SearchContainer>
  );
};

export default Search;
