import React from 'react';
import moment from 'moment';
// redux
import { useDispatch } from 'react-redux';
import { pauseSong } from '../../containers/Track/trackActions';

const Duration = ({ timeElapsed, setTimeElapsed, isPlaying }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (timeElapsed === 30) {
        clearInterval(interval);
        setTimeElapsed(0);
        dispatch(pauseSong());
      } else if (isPlaying) setTimeElapsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, timeElapsed, setTimeElapsed, dispatch]);

  return (
    <div>
      <p>
        {moment()
          .minutes(0)
          .second(timeElapsed)
          .format('m:ss')}
      </p>
      <div style={{ backgroundColor: 'blue', width: '495px', height: '10px' }}>
        <div
          style={{
            width: timeElapsed * 16.5,
            background: 'red',
            height: '8px'
          }}
        />
      </div>
      <p>
        {moment()
          .minutes(0)
          .second(30 - timeElapsed)
          .format('m:ss')}
      </p>
    </div>
  );
};

export default React.memo(Duration);
