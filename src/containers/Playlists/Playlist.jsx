import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// components
import TrackItem from '../../components/TrackItem/TrackItem';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylistTracksStart } from './playlistsActions';

const Playlist = () => {
  const [query, setQuery] = useState('');
  const { state } = useLocation();
  const dispatch = useDispatch();

  const { tracks, loading } = useSelector(({ playlists }) => playlists);

  useEffect(() => {
    dispatch(getPlaylistTracksStart({ id: state.id }));
  }, [dispatch, state.id]);

  return (
    <div style={{ color: '#fff', marginLeft: '30%' }}>
      <h1>{state.name}</h1>
      <img src={state.image} alt='' />
      <h5>{state.description}</h5>
      <small>
        Created by {state.owner} - {state.totalSongs} songs{' '}
      </small>
      <input
        type='text'
        placeholder='Filter...'
        onChange={e => setQuery(e.target.value)}
      />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table style={{ marginTop: '1rem' }}>
          <thead>
            <tr>
              <td>TITLE</td>
              <td>ARTIST</td>
              <td>ALBUM</td>
            </tr>
          </thead>
          <tbody>
            {tracks.map(({ track }) => (
              <TrackItem
                key={track.id}
                query={query.trim().toLowerCase()}
                {...track}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Playlist;
