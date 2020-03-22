import React from 'react';
import moment from 'moment';
// redux
import { useDispatch } from 'react-redux';
import { pauseSong, startSong } from '../../containers/Track/trackActions';
import {
  DurationContainer,
  ProgressBar,
  ProgressBarTime
} from './trackControlsStyles';

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

  console.log(
    timeElapsed,
    moment()
      .minutes(0)
      .second(timeElapsed)
      .format('m:ss'),
    moment()
      .minutes(0)
      .second(30 - timeElapsed)
      .format('m:ss')
  );

  return (
    <DurationContainer>
      <ProgressBarTime>
        {moment()
          .minutes(0)
          .second(timeElapsed)
          .format('m:ss')}
      </ProgressBarTime>

      <ProgressBar
        type='range'
        min='0'
        max='30'
        step='1'
        value={parseInt(timeElapsed)}
        onChange={e => setTimeElapsed(parseInt(e.target.value))}
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
      <ProgressBarTime>
        {moment()
          .minutes(0)
          .second(30 - timeElapsed)
          .format('m:ss')}
      </ProgressBarTime>
    </DurationContainer>
  );
};

export default React.memo(Duration);
