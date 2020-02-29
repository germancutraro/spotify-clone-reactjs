import React from 'react';
// redux
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../containers/Search/searchActions';
import { SearchContainer, Input, SearchIcon } from './searchInputStyles';

const SearchInput = () => {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setValue(target.value);
    dispatch(setSearchValue({ query: target.value }));
  };

  return (
    <SearchContainer>
      <SearchIcon fill='#121212' width={24} height={24} />
      <Input
        type='text'
        placeholder='Search for Artists, Songs or Podcasts'
        value={value}
        onChange={handleChange}
      />
    </SearchContainer>
  );
};

export default SearchInput;
