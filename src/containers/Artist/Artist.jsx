import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { Link } from '../../components/LibraryMenu/libraryMenuStyles';
import TrackItem from '../../components/TrackItem/TrackItem';
import ArtistContentItem from '../../components/ArtistContentItem/ArtistContentItem';
// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getArtistStart,
  getArtistTracksStart,
  getArtistAlbumsStart
} from './artistActions';
// pages
import ArtistAbout from './ArtistAbout';
import ArtistRelated from './ArtistRelated';

const Artist = () => {
  const dispatch = useDispatch();
  const { artist, tracks, loading } = useSelector(({ artist }) => artist);
  const { albums, singles, appears } = useSelector(
    ({ artist: { albums } }) => ({
      albums: albums.filter(({ album_type }) => album_type === 'album'),
      singles: albums.filter(({ album_type }) => album_type === 'single'),
      appears: albums.filter(({ album_type }) => album_type === 'compilation')
    })
  );

  const { id } = useParams();
  const path = `/app/artist`;

  React.useEffect(() => {
    dispatch(getArtistStart({ id }));
    dispatch(getArtistTracksStart({ id }));
    dispatch(getArtistAlbumsStart({ id }));
  }, [dispatch, id]);

  if (loading) return <h1>loading...</h1>;

  return (
    <div style={{ color: '#fff' }}>
      {artist.images && (
        <img src={artist?.images[0].url} alt='' width={200} height={200} />
      )}

      <h1>{artist.name}</h1>

      <ul>
        <Link to={`${path}`}>OVERVIEW</Link>
        <Link to={`${path}/${id}/related`}>RELATED ARTISTS</Link>
        <Link to={`${path}/${id}/about`}>ABOUT</Link>
      </ul>

      <Switch>
        <Route path={`${path}/:id/about`} component={ArtistAbout} exact />
        <Route path={`${path}/:id/related`} component={ArtistRelated} exact />
      </Switch>

      <h3>Popular</h3>
      {tracks.map((track, i) => (
        <TrackItem key={i} added_at={track?.added_at} {...track} />
      ))}

      <h2>Albums</h2>
      <ArtistContentItem albums={albums} />

      <h2>Singles</h2>
      <ArtistContentItem albums={singles} />

      <h2>Appears on</h2>
      <ArtistContentItem albums={appears} />
    </div>
  );
};

export default Artist;
