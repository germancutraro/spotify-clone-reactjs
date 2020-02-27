import React from 'react';
import { useDispatch } from 'react-redux';
import { getBrowseStart } from './searchActions';

const Search = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBrowseStart());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ color: '#fff' }}>Your top genres</h1>
    </div>
  );
};

export default Search;
