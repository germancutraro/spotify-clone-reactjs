import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrowseStart, getReleasesStart } from './browseActions';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
import GenreItem from '../../components/BrowseItem/GenreItem';
import { GenresContainer } from './browseStyles';

const Browse = () => {
  const dispatch = useDispatch();

  const { list, releases, loading } = useSelector(({ browse }) => browse);

  React.useEffect(() => {
    dispatch(getBrowseStart());
    dispatch(getReleasesStart());
  }, [dispatch]);

  if (loading) return <h1>loading</h1>;
  return (
    <div>
      <h1 style={{ color: '#fff' }}>New Releases</h1>
      {releases?.map(({ name, images }) => (
        <LibraryItem key={name} name={name} cover={images[0].url} />
      ))}
      <h1 style={{ color: '#fff' }}>Your top genres</h1>
      <GenresContainer>
        {list?.map(({ name, icons }) => (
          <GenreItem key={name} name={name} cover={icons[0]?.url} />
        ))}
      </GenresContainer>
    </div>
  );
};

export default React.memo(Browse);
