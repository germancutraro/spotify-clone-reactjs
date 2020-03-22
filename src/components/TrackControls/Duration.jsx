import React from 'react';
import moment from 'moment';
// redux
import { useDispatch } from 'react-redux';
import { pauseSong, startSong } from '../../containers/Track/trackActions';
import { DurationContainer, DurationProgressBar } from './trackControlsStyles';

const Duration = ({
  timeElapsed,
  setTimeElapsed,
  isPlaying,
  songId,
  songList
}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (timeElapsed === 30) {
        clearInterval(interval);
        setTimeElapsed(0);
        const nextSong = songList.findIndex(track => track.id === songId) + 1;
        if (songList[nextSong])
          dispatch(
            startSong({
              song: songList[nextSong]
            })
          );
        else dispatch(pauseSong());
        // end of queue
      } else if (isPlaying) setTimeElapsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, timeElapsed, setTimeElapsed, songId, songList, dispatch]);

  return (
    <DurationContainer>
      <p>
        {moment()
          .minutes(0)
          .second(timeElapsed)
          .format('m:ss')}
      </p>

      <DurationProgressBar
        type='range'
        min='0'
        max='30'
        step='1'
        value={timeElapsed}
        onChange={e => setTimeElapsed(e.target.value)}
      />
      {/* 
      <div style={{ backgroundColor: 'blue', width: '495px', height: '10px' }}>
        <div
          style={{
            width: timeElapsed * 16.5,
            background: 'red',
            height: '8px'
          }}
        />
      </div> */}
      <p>
        {moment()
          .minutes(0)
          .second(30 - timeElapsed)
          .format('m:ss')}
      </p>
    </DurationContainer>
  );
};

export default React.memo(Duration);
