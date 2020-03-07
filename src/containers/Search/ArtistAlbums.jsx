import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistAlbumsStart } from './searchActions';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
import { LibraryItemsContainer } from '../../components/LibraryItem/playlistItemStyles';

const Album = () => {
  const dispatch = useDispatch();
  const { artist, loading } = useSelector(({ search }) => search);

  const { name } = useParams();
  const { state } = useLocation();

  React.useEffect(() => {
    dispatch(getArtistAlbumsStart({ id: state.id }));
  }, [dispatch, state.id]);

  if (loading) return <h1>loading</h1>;

  return (
    <div style={{ color: '#fff' }}>
      <h1>Showing Albums for "{name}"</h1>
      <LibraryItemsContainer>
        {artist.map(album => (
          <LibraryItem
            key={album.id}
            id={album.id}
            name={album.name}
            author={album.artists[0].name}
            cover={album.images[0].url}
          />
        ))}
      </LibraryItemsContainer>
    </div>
  );
};

export default Album;
