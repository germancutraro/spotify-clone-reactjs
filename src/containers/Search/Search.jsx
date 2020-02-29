import React from 'react';
import Browse from '../Browse/Browse';
// import { useDispatch, useSelector } from 'react-redux';
// import { searchStart } from './searchActions';
// import BrowseItem from '../../components/BrowseItem/BrowseItem';
// import GenreItem from '../../components/BrowseItem/GenreItem';

const Search = () => {
  // const dispatch = useDispatch();

  // const { list, loading } = useSelector(({ search }) => search);

  // React.useEffect(() => {
  //   dispatch(searchStart());
  // }, [dispatch]);

  // if (loading) return <h1>loading</h1>;
  // console.log(list);
  return (
    <div>
      <Browse />
    </div>
  );
};

export default Search;
