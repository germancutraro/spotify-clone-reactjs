import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistSongsStart } from './searchActions';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
import { LibraryItemsContainer } from '../../components/LibraryItem/playlistItemStyles';
import Loader from '../../components/Loader/Loader';

const Artist = () => {
  const dispatch = useDispatch();
  const { artist, loading } = useSelector(({ search }) => search);

  const { name } = useParams();
  const { state } = useLocation();

  React.useEffect(() => {
    dispatch(getArtistSongsStart({ id: state.id }));
  }, [dispatch, state.id]);

  if (loading) return <Loader isLoading={loading} />;

  return (
    <div style={{ color: '#fff' }}>
      <h1>Showing Songs for "{name}"</h1>
      <LibraryItemsContainer>
        {artist.map(track => (
          <LibraryItem
            key={track.id}
            id={track.id}
            name={track.name}
            author={track.artists[0].name}
            cover={track.album.images[0].url}
          />
        ))}
      </LibraryItemsContainer>
    </div>
  );
};

export default Artist;
