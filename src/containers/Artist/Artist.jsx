import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { Link } from '../../components/LibraryMenu/libraryMenuStyles';
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
import TrackItem from '../../components/TrackItem/TrackItem';
import LibraryItem from '../../components/LibraryItem/LibraryItem';

const Artist = () => {
  const dispatch = useDispatch();
  const { artist, tracks, loading } = useSelector(({ artist }) => artist);
  const { albums, singles, appears } = useSelector(({ artist }) => ({
    albums: artist.albums.filter(({ album_type }) => album_type === 'album'),
    singles: artist.albums.filter(({ album_type }) => album_type === 'single'),
    appears: artist.albums.filter(
      ({ album_type }) => album_type === 'compilation'
    )
  }));

  const { id } = useParams();
  const path = `/app/artist/${id}`;

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
        <Link to={`${path}/related`}>RELATED ARTISTS</Link>
        <Link to={`${path}/about`}>ABOUT</Link>
      </ul>

      <Switch>
        <Route path={`${path}/about`} component={ArtistAbout} />
        <Route path={`${path}/related`} component={ArtistRelated} />
      </Switch>

      <h3>Popular</h3>
      {tracks.map((track, i) => (
        <TrackItem key={i} added_at={track?.added_at} {...track} />
      ))}

      <h2>Albums</h2>
      {albums.map(album => (
        <LibraryItem
          key={album.id}
          id={album.id}
          name={album.name}
          author={album.artists[0].name}
          cover={album.images[0].url}
        />
      ))}

      <h2>Singles</h2>
      {singles.map(album => (
        <LibraryItem
          key={album.id}
          id={album.id}
          name={album.name}
          author={album.artists[0].name}
          cover={album.images[0].url}
        />
      ))}

      <h2>Appears on</h2>
      {appears.map(album => (
        <LibraryItem
          key={album.id}
          id={album.id}
          name={album.name}
          author={album.artists[0].name}
          cover={album.images[0].url}
        />
      ))}
    </div>
  );
};

export default Artist;
