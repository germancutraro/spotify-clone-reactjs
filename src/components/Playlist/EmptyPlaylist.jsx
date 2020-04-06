import React from 'react';
import {
  EmptyPlaylistContainer,
  EmptyPlaylistTitle,
  EmptyPlaylistSubtitle,
  EmptyPlaylistIconContainer,
  RandomTracksContainer,
  RandomTracksTitle,
  EmptySection,
} from './PlaylistComponentStyles';
import { ReactComponent as EmptyPlaylistIcon } from '../../assets/icons/empty-playlist.svg';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import TrackItem from '../TrackItem/TrackItem';
import { addTrackToPlaylistStart } from '../../containers/Playlists/playlistsActions';

const EmptyPlaylist = ({ playlistId }) => {
  const dispatch = useDispatch();
  const { randomTracks, likedSongs, loading } = useSelector(
    ({ playlists }) => playlists
  );

  if (loading) return <Loader />;

  return (
    <EmptyPlaylistContainer>
      <EmptySection>
        <EmptyPlaylistIconContainer>
          <EmptyPlaylistIcon fill='#b3b3b3' width='50' />
        </EmptyPlaylistIconContainer>
        <EmptyPlaylistTitle>This is a little empty...</EmptyPlaylistTitle>
        <EmptyPlaylistSubtitle>
          Let's find a couple of songs for your playlist!
        </EmptyPlaylistSubtitle>
      </EmptySection>

      <RandomTracksContainer>
        <RandomTracksTitle>Recommended songs</RandomTracksTitle>
      </RandomTracksContainer>
      {randomTracks.map(track => (
        <TrackItem
          key={track.id}
          song={track}
          hasDuration={false}
          hasOptions={false}
          btn={{
            title: 'ADD',
            onClick: () =>
              dispatch(
                addTrackToPlaylistStart({ playlistId, tracks: track.uri })
              ),
          }}
          liked={likedSongs.includes(track.id)}
        />
      ))}
    </EmptyPlaylistContainer>
  );
};

export default EmptyPlaylist;
