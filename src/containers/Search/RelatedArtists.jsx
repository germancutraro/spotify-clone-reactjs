import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedArtistsStart } from './searchActions';
import LibraryItem from '../../components/LibraryItem/LibraryItem';

const RelatedArtists = () => {
  const dispatch = useDispatch();
  const { artist, loading } = useSelector(({ search }) => search);

  const { name } = useParams();
  const { state } = useLocation();

  React.useEffect(() => {
    dispatch(getRelatedArtistsStart({ id: state.id }));
  }, [dispatch, state.id]);

  if (loading) return <h1>loading</h1>;

  return (
    <div style={{ color: '#fff' }}>
      <h1>Showing Artists for "{name}"</h1>
      {artist.map(artist => (
        <LibraryItem
          key={artist.id}
          id={artist.id}
          name={artist.name}
          author='Artist'
          cover={artist.images[0].url}
          isPlayable={false}
        />
      ))}
    </div>
  );
};

export default RelatedArtists;
