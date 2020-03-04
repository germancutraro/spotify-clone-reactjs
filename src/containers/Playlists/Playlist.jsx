import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylistStart, getUserTracksStart } from './playlistsActions';
import { PlaylistContainer } from './playlistsStyles';

import PlaylistContent from '../../components/Playlist/PlaylistContent';

const Playlist = () => {
  const dispatch = useDispatch();

  const { playlist, loading } = useSelector(({ playlists }) => playlists);

  const { id } = useParams(),
    { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.includes('/tracks')) dispatch(getPlaylistStart({ id }));
    else dispatch(getUserTracksStart());
  }, [dispatch, id, pathname]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color',
      playlist.primary_color
    );

    // console.log(playlist);

    return () =>
      document.documentElement.style.setProperty('--color', '#121212');
  }, [playlist]);

  if (loading || !Object.keys(playlist).length) {
    document.documentElement.style.setProperty('--color', '#121212');
    return <h1>loading</h1>;
  }

  return (
    <PlaylistContainer>
      {!pathname.includes('/tracks') && playlist ? (
        <PlaylistContent playlist={playlist} />
      ) : (
        <PlaylistContent playlist={playlist} isLikedSongs />
      )}
    </PlaylistContainer>
  );
};

export default Playlist;
