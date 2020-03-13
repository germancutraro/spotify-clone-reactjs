import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedArtistsStart } from './searchActions';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
import { LibraryItemsContainer } from '../../components/LibraryItem/playlistItemStyles';
import Loader from '../../components/Loader/Loader';
import useNotifier from '../../hooks/useNotifier';

const RelatedArtists = () => {
  const dispatch = useDispatch();
  const { artist, loading, error } = useSelector(({ search }) => search);

  const { showSnackbar } = useNotifier({
    message: 'Oooops something went wrong.'
  });

  const { name } = useParams();
  const { state } = useLocation();

  React.useEffect(() => {
    dispatch(getRelatedArtistsStart({ id: state.id }));
  }, [dispatch, state.id]);

  if (loading) return <Loader isLoading={loading} />;
  if (!loading && error) showSnackbar();

  return (
    <div style={{ color: '#fff' }}>
      <h1>Showing Artists for "{name}"</h1>
      <LibraryItemsContainer>
        {artist.map(artist => (
          <LibraryItem
            key={artist.id}
            id={artist.id}
            title={artist.name}
            subtitle='Artist'
            cover={artist.images && artist.images[0].url}
            isPlayable={false}
          />
        ))}
      </LibraryItemsContainer>
    </div>
  );
};

export default RelatedArtists;
