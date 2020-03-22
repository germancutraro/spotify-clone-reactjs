import React from 'react';
import {
  PlayerCenter,
  PlayerCenterButtonsContainer,
  PlayIconWrapper,
  PlayIcon,
  PauseIcon
} from './trackCenterStyles';
import Duration from '../../TrackControls/Duration';

const TrackCenter = React.forwardRef(
  (
    { isPlaying, handleAudio, song, list, timeElapsed, setTimeElapsed },
    ref
  ) => {
    return (
      <PlayerCenter>
        <PlayerCenterButtonsContainer>
          <PlayIconWrapper>
            {!isPlaying ? (
              <PlayIcon onClick={handleAudio} />
            ) : (
              <PauseIcon onClick={handleAudio} />
            )}
          </PlayIconWrapper>
        </PlayerCenterButtonsContainer>

        <Duration
          timeElapsed={timeElapsed}
          setTimeElapsed={setTimeElapsed}
          isPlaying={isPlaying}
          songId={song?.id}
          songList={list}
          ref={ref}
        />
      </PlayerCenter>
    );
  }
);

export default TrackCenter;
