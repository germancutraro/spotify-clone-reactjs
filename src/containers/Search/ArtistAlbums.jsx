import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistAlbumsStart } from './searchActions';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
import {
  LibraryItemsContainer,
  SectionTitleContainer,
  SectionTitle
} from '../../components/LibraryItem/playlistItemStyles';
import Loader from '../../components/Loader/Loader';
import useNotifier from '../../hooks/useNotifier';

const Album = () => {
  const dispatch = useDispatch();
  const { artist, loading, error } = useSelector(({ search }) => search);

  const { showSnackbar } = useNotifier({
    message: 'Oooops something went wrong.'
  });

  const { name } = useParams();
  const { state } = useLocation();

  React.useEffect(() => {
    dispatch(getArtistAlbumsStart({ id: state.id }));
  }, [dispatch, state.id]);

  if (loading) return <Loader isLoading={loading} />;
  if (!loading && error) showSnackbar();

  return (
    <>
      <SectionTitleContainer>
        <SectionTitle>Showing Albums for "{name}"</SectionTitle>
      </SectionTitleContainer>
      <LibraryItemsContainer>
        {artist.map(album => (
          <LibraryItem
            key={album.id}
            id={album.id}
            title={album.name}
            subtitle={album.artists && album.artists[0].name}
            cover={album.images && album.images[0].url}
            type='album'
          />
        ))}
      </LibraryItemsContainer>
    </>
  );
};

export default Album;
