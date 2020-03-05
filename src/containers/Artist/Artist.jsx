import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { Link } from '../../components/LibraryMenu/libraryMenuStyles';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getArtistStart } from './artistActions';
// pages
import ArtistAbout from './ArtistAbout';
import ArtistRelated from './ArtistRelated';

const Artist = () => {
  const dispatch = useDispatch();
  const { artist, loading } = useSelector(({ artist }) => artist);

  const { id } = useParams();
  const path = `/app/artist/${id}`;

  React.useEffect(() => {
    dispatch(getArtistStart({ id }));
  }, [dispatch, id]);

  if (loading) return <h1>loading...</h1>;

  return (
    <div style={{ color: '#fff' }}>
      <img src={artist?.images[0].url} alt='' width={200} height={200} />
      <h1>{artist.name}</h1>
      <ul>
        <Link to={`${path}`}>OVERVIEW</Link>
        <Link to={`${path}/related`}>RELATED ARTISTS</Link>
        <Link to={`${path}/about`}>ABOUT</Link>
      </ul>

      <Switch>
        <Route path={`${path}/about`} component={ArtistAbout} />
        <Route path={`${path}/related`} component={ArtistRelated} />
      </Switch>
    </div>
  );
};

export default Artist;
