import React from "react";
import { SearchContainer, Input, SearchIcon } from "./searchInputStyles";

const SearchInput = () => {
  return (
    <SearchContainer>
      <SearchIcon fill="#121212" width={24} height={24} />
      <Input type="text" placeholder="Search for Artists, Songs or Podcasts" />
    </SearchContainer>
  );
};

export default SearchInput;
