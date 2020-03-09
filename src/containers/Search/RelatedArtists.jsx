import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedArtistsStart } from './searchActions';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
import { LibraryItemsContainer } from '../../components/LibraryItem/playlistItemStyles';
import Loader from '../../components/Loader/Loader';

const RelatedArtists = () => {
  const dispatch = useDispatch();
  const { artist, loading } = useSelector(({ search }) => search);

  const { name } = useParams();
  const { state } = useLocation();

  React.useEffect(() => {
    dispatch(getRelatedArtistsStart({ id: state.id }));
  }, [dispatch, state.id]);

  if (loading) return <Loader isLoading={loading} />;

  return (
    <div style={{ color: '#fff' }}>
      <h1>Showing Artists for "{name}"</h1>
      <LibraryItemsContainer>
        {artist.map(artist => (
          <LibraryItem
            key={artist.id}
            id={artist.id}
            name={artist.name}
            author='Artist'
            cover={artist.images && artist.images[0].url}
            isPlayable={false}
          />
        ))}
      </LibraryItemsContainer>
    </div>
  );
};

export default RelatedArtists;
