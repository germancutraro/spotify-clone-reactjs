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

const Track = () => {
  const dispatch = useDispatch();
  const { song, isPlaying } = useSelector(({ track }) => track);
  const audioRef = React.useRef();

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
        {!audioRef?.current?.paused ? (
          <PlayIcon onClick={handleAudio} />
        ) : (
          <PauseIcon onClick={handleAudio} />
        )}
      </PlayIconWrapper>

      {audioRef?.current?.currentTime ? (
        <p>
          {Math.floor(audioRef?.current?.currentTime) +
            ' / ' +
            Math.floor(audioRef?.current?.duration)}
        </p>
      ) : null}
    </TrackContainer>
  );
};

export default Track;
