import React from 'react';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumsStart } from './libraryActions';

const Albums = () => {
  const dispatch = useDispatch();

  const { albums, loading } = useSelector(({ library }) => library);

  React.useEffect(() => {
    dispatch(getAlbumsStart());
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1 style={{ color: '#fff' }}>Albums</h1>
      {albums.map(({ album }) => {
        console.log(album);
        return (
          <LibraryItem
            name={album.name}
            author={album.artists[0].name}
            cover={album.images[0].url}
          />
        );
      })}
    </div>
  );
};

export default Albums;
