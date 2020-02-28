import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrowseStart } from './searchActions';
import BrowseItem from '../../components/BrowseItem/BrowseItem';
import GenreItem from '../../components/BrowseItem/GenreItem';

const Search = () => {
  const dispatch = useDispatch();

  const { browse, topGenres, loading } = useSelector(({ search }) => search);

  React.useEffect(() => {
    dispatch(getBrowseStart());
  }, [dispatch]);

  if (loading) return <h1>loading</h1>;
  console.log(browse);
  return (
    <div>
      <h1 style={{ color: '#fff' }}>Your top genres</h1>
      {topGenres?.map(({ name, images }) => (
        <GenreItem key={name} name={name} cover={images[0].url} />
      ))}

      <h1 style={{ color: '#fff' }}>Browse all</h1>
      {browse?.map(({ name }) => (
        <BrowseItem key={name} name={name} />
      ))}
    </div>
  );
};

export default Search;
