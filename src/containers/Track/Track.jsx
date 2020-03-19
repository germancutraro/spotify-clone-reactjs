import React from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { pauseSong, resumeSong } from './trackActions';
// styles
import {
  TrackContainer,
  PlayIconWrapper,
  PlayIcon,
  PauseIcon,
  PlayerCenter,
  PlayerRight,
  PlayerLeft,
  SongImage,
  SongTextContainer,
  SongName,
  SongArtist,
  SongNameText
} from './trackStyles';
import Volume from '../../components/TrackControls/Volume';
import Duration from '../../components/TrackControls/Duration';
import { useHistory } from 'react-router-dom';

const Track = () => {
  const dispatch = useDispatch();
  const { song, isPlaying, list } = useSelector(({ track }) => track);
  const audioRef = React.useRef();

  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const [volume, setVolume] = React.useState(
    localStorage.getItem('volume') ?? 1.0
  );

  const history = useHistory();

  React.useEffect(() => {
    const { current: audio } = audioRef;
    if (isPlaying) audio.play();
    else audio.pause();
  }, [isPlaying, song]);

  React.useEffect(() => {
    if (audioRef) audioRef.current.volume = volume;
  }, [audioRef, volume]);

  const handleAudio = () => {
    if (isPlaying) dispatch(pauseSong());
    else dispatch(resumeSong());
  };

  const handleChangeRoute = route => history.push(`/app/${route}`);
  return (
    <TrackContainer>
      <PlayerLeft>
        <SongImage
          src={song.cover}
          alt={song.cover}
          hasAlbum={song?.album?.id}
          onClick={() =>
            song?.album?.id
              ? handleChangeRoute(`album/${song?.album?.id}`)
              : null
          }
        />

        <audio src={song.preview_url} ref={audioRef}></audio>
        <SongTextContainer>
          {song?.album?.id ? (
            <SongName to={`/app/album/${song?.album?.id}`}>
              {song?.name}
            </SongName>
          ) : (
            <SongNameText>{song?.name}</SongNameText>
          )}
          <SongArtist to={`/app/artist/${song.artists[0].id}`}>
            {song?.artists && song?.artists[0].name}
          </SongArtist>
        </SongTextContainer>
      </PlayerLeft>

      <PlayerCenter>
        <PlayIconWrapper>
          {!isPlaying ? (
            <PlayIcon onClick={handleAudio} />
          ) : (
            <PauseIcon onClick={handleAudio} />
          )}
        </PlayIconWrapper>

        <Duration
          timeElapsed={timeElapsed}
          setTimeElapsed={setTimeElapsed}
          isPlaying={isPlaying}
          songId={song.id}
          songList={list}
        />
      </PlayerCenter>

      <PlayerRight>
        <Volume ref={audioRef} volume={volume} setVolume={setVolume} />
      </PlayerRight>
    </TrackContainer>
  );
};

export default Track;
