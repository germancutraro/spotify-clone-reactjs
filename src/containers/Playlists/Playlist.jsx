import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getPlaylistStart,
  getUserTracksStart,
  checkUserFollowPlaylistStart,
  followPlaylistStart
} from './playlistsActions';
import { PlaylistContainer } from './playlistsStyles';
import { setList, startSong } from '../Track/trackActions';

import PlaylistContent from '../../components/Playlist/PlaylistContent';
import Loader from '../../components/Loader/Loader';
// hooks
import useNotifier from '../../hooks/useNotifier';
import useTitle from '../../hooks/useTitle';

const Playlist = () => {
  const dispatch = useDispatch();

  const { playlist, following, loading, error } = useSelector(
      ({ playlists }) => playlists
    ),
    { id: userId } = useSelector(({ auth }) => auth.user);

  const { id } = useParams(),
    { pathname } = useLocation();

  const { showSnackbar } = useNotifier({
    message: 'Oooops something went wrong.'
  });

  useTitle(`Spotify - ${playlist.name}`);

  useEffect(() => {
    if (!pathname.includes('/tracks')) {
      dispatch(getPlaylistStart({ id }));
      dispatch(checkUserFollowPlaylistStart({ playlistId: id, userId }));
    } else dispatch(getUserTracksStart());
  }, [dispatch, id, pathname, userId]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color',
      pathname.includes('/tracks') ? '#5f54a0' : playlist.primary_color
    );
    return () =>
      document.documentElement.style.setProperty('--color', '#121212');
  }, [pathname, playlist]);

  if (loading || !Object.keys(playlist).length) {
    document.documentElement.style.setProperty('--color', '#121212');
    return <Loader isLoading={loading} />;
  }

  const handleFollow = () => {
    dispatch(
      followPlaylistStart({
        playlistId: playlist.id,
        action: following ? 'unfollow' : 'follow'
      })
    );
    setTimeout(
      () =>
        dispatch(
          checkUserFollowPlaylistStart({ playlistId: playlist.id, userId })
        ),
      100
    );
  };

  const startPlaylist = () => {
    dispatch(
      setList({ list: playlist.tracks.items.map(({ track }) => track) })
    );
    dispatch(
      startSong({
        song: {
          ...playlist.tracks.items[0].track,
          cover: playlist.images[0].url
        }
      })
    );
  };

  if (!loading && error) showSnackbar();

  return (
    <PlaylistContainer>
      {!pathname.includes('/tracks') && playlist ? (
        <PlaylistContent
          playlist={playlist}
          following={following}
          handleFollow={handleFollow}
          startPlaylist={startPlaylist}
        />
      ) : (
        <PlaylistContent playlist={playlist} isLikedSongs />
      )}
    </PlaylistContainer>
  );
};

export default Playlist;
