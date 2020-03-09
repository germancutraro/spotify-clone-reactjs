import React from 'react';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumsStart } from './libraryActions';
import Loader from '../../components/Loader/Loader';

const Albums = () => {
  const dispatch = useDispatch();

  const { albums, loading } = useSelector(({ library }) => library);

  React.useEffect(() => {
    dispatch(getAlbumsStart());
  }, [dispatch]);

  if (loading) return <Loader isLoading={loading} />;

  return (
    <div>
      <h1 style={{ color: '#fff' }}>Albums</h1>
      {albums.map(({ album }) => {
        return (
          <LibraryItem
            id={album.id}
            title={album.name}
            subtitle={album.artists[0].name}
            cover={album.images[0].url}
          />
        );
      })}
    </div>
  );
};

export default Albums;
