import React from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { pauseSong, resumeSong } from './trackActions';
// styles
import {
  TrackContainer,
  PlayIconWrapper,
  PlayIcon,
  PauseIcon
} from './trackStyles';
import Volume from '../../components/TrackControls/Volume';
import Duration from '../../components/TrackControls/Duration';

const Track = () => {
  const dispatch = useDispatch();
  const { song, isPlaying, list } = useSelector(({ track }) => track);
  const audioRef = React.useRef();

  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const [volume, setVolume] = React.useState(1.0);

  React.useEffect(() => {
    const { current: audio } = audioRef;
    if (isPlaying) audio.play();
    else audio.pause();
  }, [isPlaying, song]);

  const handleAudio = () => {
    if (isPlaying) dispatch(pauseSong());
    else dispatch(resumeSong());
  };

  return (
    <TrackContainer>
      <img
        src={'https://i.scdn.co/image/ab67616d0000b2733ba0f99c6f2d716698cc5c90'}
        width={50}
        height={50}
        alt=''
      />
      <audio src={song.preview_url} ref={audioRef}></audio>
      <p>{song?.name}</p>
      <p>{song?.artists && song?.artists[0].name}</p>

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
      <Volume ref={audioRef} volume={volume} setVolume={setVolume} />
    </TrackContainer>
  );
};

export default Track;
