import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// components
import TrackItem from '../../components/TrackItem/TrackItem';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylistTracksStart } from './playlistsActions';
import {
  PlaylistTitle,
  PlaylistOwner,
  PlaylistPlay,
  PlaylistTotalSongs,
  PlaylistIconsWrapper,
  PlaylistImage
} from './playlistsStyles';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';

const Playlist = () => {
  const [query /* ,setQuery*/] = useState('');
  const { state } = useLocation();
  const dispatch = useDispatch();

  const { tracks, loading } = useSelector(({ playlists }) => playlists);

  useEffect(() => {
    dispatch(getPlaylistTracksStart({ id: state.id }));
  }, [dispatch, state.id]);

  return (
    <div style={{ color: '#fff' }}>
      <PlaylistImage src={state.image} alt='' />
      <PlaylistTitle>{state.name}</PlaylistTitle>
      <PlaylistOwner>{state.owner}</PlaylistOwner>
      <PlaylistPlay>PLAY</PlaylistPlay>
      <PlaylistTotalSongs>54 songs</PlaylistTotalSongs>
      <PlaylistIconsWrapper>
        <HeartIcon fill='#fff' width={20} height={20} />
      </PlaylistIconsWrapper>
      {/* <input
        type='text'
        placeholder='Filter...'
        onChange={e => setQuery(e.target.value)}
      /> */}
      {!loading &&
        tracks.map(track => (
          <TrackItem
            key={track.track.id}
            query={query.trim().toLowerCase()}
            added_at={track.added_at}
            {...track.track}
          />
        ))}
    </div>
  );
};

export default Playlist;
