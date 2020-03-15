import React from 'react';
import { ReactComponent as SoundIcon } from '../../assets/icons/sound.svg';

const Volume = React.forwardRef(({ setVolume, volume }, ref) => {
  const handleVolume = ({ target }) => {
    const value = target.value / 100;
    setVolume(value);
    ref.current.volume = value;
  };
  return (
    <div>
      <SoundIcon width={13} fill='#fff' />
      <input
        className='volume'
        type='range'
        min={0}
        max={100}
        value={volume * 100}
        onChange={handleVolume}
      />
    </div>
  );
});

export default React.memo(Volume);
