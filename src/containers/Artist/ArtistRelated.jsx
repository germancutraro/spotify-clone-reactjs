import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
import { LibraryItemsContainer } from '../../components/LibraryItem/playlistItemStyles';
import { ArtistRouteContainer } from './artistStyles';

const ArtistRelated = () => {
  const { related, loading } = useSelector(({ artist }) => artist);

  if (loading) return <Loader isLoading={loading} />;

  return (
    <ArtistRouteContainer>
      <LibraryItemsContainer hasPadding={false}>
        {related.map(({ id, name, images }) => (
          <LibraryItem
            key={id}
            id={id}
            cover={images[0].url}
            title={name}
            type='ARTIST'
            subtitle='Artist'
          />
        ))}
      </LibraryItemsContainer>
    </ArtistRouteContainer>
  );
};

export default ArtistRelated;
