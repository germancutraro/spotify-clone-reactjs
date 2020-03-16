import React from 'react';
import { Switch, useParams } from 'react-router-dom';
import { LibraryLink } from '../../components/LibraryMenu/libraryMenuStyles';
import TrackItem from '../../components/TrackItem/TrackItem';
import ArtistContentItem from '../../components/ArtistContentItem/ArtistContentItem';
// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getArtistStart,
  getArtistTracksStart,
  getArtistAlbumsStart,
  isUserFollowingStart,
  followArtistStart
} from './artistActions';

import Loader from '../../components/Loader/Loader';
import useTitle from '../../hooks/useTitle';
import ArtistRoutes from './ArtistRoutes';
import {
  ArtistContainer,
  ArtistBackground,
  ArtistSubContainer
} from './artistStyles';

const Artist = () => {
  const dispatch = useDispatch();
  const { artist, tracks, following, loading } = useSelector(
    ({ artist }) => artist
  );
  const { albums, singles, appears } = useSelector(
    ({ artist: { albums } }) => ({
      albums: albums.filter(({ album_type }) => album_type === 'album'),
      singles: albums.filter(({ album_type }) => album_type === 'single'),
      appears: albums.filter(({ album_type }) => album_type === 'compilation')
    })
  );

  useTitle(`Spotify - ${artist.name}`);

  const { id } = useParams();

  React.useEffect(() => {
    dispatch(getArtistStart({ id }));
    dispatch(isUserFollowingStart({ id }));
    dispatch(getArtistTracksStart({ id }));
    dispatch(getArtistAlbumsStart({ id }));
  }, [dispatch, id]);

  const handleFollow = async () => {
    // await is important here!
    await dispatch(
      followArtistStart({ id, action: following ? 'unfollow' : 'follow' })
    );
    dispatch(isUserFollowingStart({ id }));
  };

  if (loading) return <Loader isLoading={loading} />;

  const randomColors = [
    '#1db954',
    '#fff',
    'transparent',
    '#509BF5',
    '#BA2323',
    '#82233C',
    '#350F21',
    '#0D433B',
    '#312883',
    '#BAF2F3'
  ];

  return (
    <ArtistContainer style={{ color: '#fff' }}>
      <ArtistBackground
        color={randomColors[artist.followers.total.toString()[0]]}
      />
      <ArtistSubContainer>
        {artist.images && (
          <img src={artist?.images[0].url} alt='' width={200} height={200} />
        )}

        <h1>{artist.name}</h1>

        <h3 onClick={handleFollow}>{following ? 'UnFollow' : 'Follow'}</h3>

        <ul>
          <LibraryLink to={`/app/artist/${id}`}>OVERVIEW</LibraryLink>
          <LibraryLink to={`/app/artist/${id}/related`}>
            RELATED ARTISTS
          </LibraryLink>
          <LibraryLink to={`/app/artist/${id}/about`}>ABOUT</LibraryLink>
        </ul>

        <Switch>
          <ArtistRoutes />
        </Switch>

        <h3>Popular</h3>
        {tracks.map((track, i) => (
          <TrackItem
            key={i}
            added_at={track?.added_at}
            song={{
              ...track,
              cover: artist.images[0].url
            }}
          />
        ))}

        <h2>Albums</h2>
        <ArtistContentItem albums={albums} />

        <h2>Singles</h2>
        <ArtistContentItem albums={singles} />

        <h2>Appears on</h2>
        <ArtistContentItem albums={appears} />
      </ArtistSubContainer>
    </ArtistContainer>
  );
};

export default Artist;
