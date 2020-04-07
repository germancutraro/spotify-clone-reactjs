import React, { useEffect } from 'react';
import moment from 'moment';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { pauseSong, startSong } from '../../containers/Track/trackActions';
import {
  DurationContainer,
  ProgressBar,
  ProgressBarTime,
  ProgressBarContainer,
} from './trackControlsStyles';

const Duration = React.forwardRef(
  ({ timeElapsed, setTimeElapsed, isPlaying, songId, songList }, ref) => {
    const dispatch = useDispatch();
    const existSong = useSelector(
      ({ track }) => Object.keys(track.song).length
    );

    React.useEffect(() => {
      const interval = setInterval(() => {
        if (timeElapsed === 30) {
          clearInterval(interval);
          setTimeElapsed(0);

          const nextSong =
            songList?.findIndex(track => track.id === songId) + 1;
          if (songList && songList[nextSong])
            dispatch(
              startSong({
                song: songList[nextSong],
              })
            );
          else dispatch(pauseSong());
          // end of queue
        } else if (isPlaying) setTimeElapsed(timeElapsed + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, [isPlaying, timeElapsed, setTimeElapsed, songId, songList, dispatch]);

    const handleChangeRange = ({ target }) => {
      setTimeElapsed(parseInt(target.value));
      ref.current.currentTime = target.value;
    };

    useEffect(() => {
      if (ref.current.currentTime < 0.5) setTimeElapsed(0);
    });

    return (
      <DurationContainer>
        <ProgressBarTime>
          {moment().minutes(0).second(timeElapsed).format('m:ss')}
        </ProgressBarTime>
        <ProgressBarContainer>
          <ProgressBar
            type='range'
            min='0'
            max={existSong ? '30' : '0'}
            step='1'
            maxValue={30}
            value={parseInt(timeElapsed)}
            onChange={handleChangeRange}
          />
        </ProgressBarContainer>

        <ProgressBarTime>
          {moment()
            .minutes(0)
            .second(existSong ? 30 : 0 - timeElapsed)
            .format('m:ss')}
        </ProgressBarTime>
      </DurationContainer>
    );
  }
);

export default React.memo(Duration);
