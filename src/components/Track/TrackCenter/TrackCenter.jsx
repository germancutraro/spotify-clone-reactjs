import React from 'react';
import {
  PlayerCenter,
  PlayerCenterButtonsContainer,
  PlayerProgressContainer,
  PlayIconWrapper,
  PlayIcon,
  PauseIcon
} from './trackCenterStyles';
import Duration from '../../TrackControls/Duration';

const TrackCenter = ({
  isPlaying,
  handleAudio,
  song,
  list,
  timeElapsed,
  setTimeElapsed
}) => {
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
      />
    </PlayerCenter>
  );
};

export default TrackCenter;
