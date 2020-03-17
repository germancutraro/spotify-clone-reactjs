import React from 'react';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumsStart } from './libraryActions';
import Loader from '../../components/Loader/Loader';
import {
  SectionTitleContainer,
  SectionTitle,
  LibraryItemsContainer
} from '../../components/LibraryItem/playlistItemStyles';

// hooks
import useNotifier from '../../hooks/useNotifier';
import useTitle from '../../hooks/useTitle';

const Albums = () => {
  const dispatch = useDispatch();
  useTitle('Spotify - Your Library');

  const { albums, loading, error } = useSelector(({ library }) => library);
  const { showSnackbar } = useNotifier({
    message: 'Oooops something went wrong.'
  });

  React.useEffect(() => {
    dispatch(getAlbumsStart());
  }, [dispatch]);

  if (loading) return <Loader isLoading={loading} />;
  if (!loading && error) showSnackbar();
  return (
    <div>
      <SectionTitleContainer>
        <SectionTitle>Albums</SectionTitle>
      </SectionTitleContainer>

      <LibraryItemsContainer>
        {albums.map(({ album }) => {
          return (
            <LibraryItem
              key={album.id}
              id={album.id}
              title={album.name}
              subtitle={album.artists[0].name}
              cover={album.images[0].url}
              type='album'
            />
          );
        })}
      </LibraryItemsContainer>
    </div>
  );
};

export default Albums;
