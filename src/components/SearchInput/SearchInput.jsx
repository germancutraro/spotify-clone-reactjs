import React from 'react';
// redux
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../containers/Search/searchActions';
import {
  SearchContainer,
  Input,
  SearchIcon,
  CancelIcon
} from './searchInputStyles';

const SearchInput = () => {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setValue(target.value);
    dispatch(setSearchValue({ query: target.value }));
  };

  const handleReset = () => {
    setValue('');
    dispatch(setSearchValue({ query: '' }));
  };

  return (
    <SearchContainer>
      <SearchIcon fill='#121212' width={24} height={24} />
      {value.trim().length && (
        <CancelIcon
          fill='#121212'
          width={24}
          height={24}
          onClick={handleReset}
        />
      )}

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
