import React from 'react';
// components
import LibraryItem from '../../components/LibraryItem/LibraryItem';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getTopArtistsStart } from './libraryActions';

const Artists = () => {
  const dispatch = useDispatch();

  const { artists, loading } = useSelector(({ library }) => library);

  React.useEffect(() => {
    dispatch(getTopArtistsStart());
  }, [dispatch]);

  if (loading) return <h1>loading</h1>;

  return (
    <div>
      <h1 style={{ color: '#fff' }}>Artists</h1>
      {artists?.map(art => (
        <LibraryItem
          key={art.id}
          name={art.name}
          cover={art.images[0].url}
          author='Artist'
        />
      ))}
    </div>
  );
};

export default Artists;
