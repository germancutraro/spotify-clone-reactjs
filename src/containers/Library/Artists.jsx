import React from 'react';
// components
import LibraryItem from '../../components/LibraryItem/LibraryItem';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getTopArtistsStart } from './libraryActions';
import Loader from '../../components/Loader/Loader';

const Artists = () => {
  const dispatch = useDispatch();

  const { artists, loading } = useSelector(({ library }) => library);

  React.useEffect(() => {
    dispatch(getTopArtistsStart());
  }, [dispatch]);

  if (loading) return <Loader isLoading={loading} />;

  return (
    <div>
      <h1 style={{ color: '#fff' }}>Artists</h1>
      {artists?.map(art => (
        <LibraryItem
          key={art.id}
          id={art.id}
          name={art.name}
          cover={art.images[0].url}
          author='Artist'
        />
      ))}
    </div>
  );
};

export default Artists;
