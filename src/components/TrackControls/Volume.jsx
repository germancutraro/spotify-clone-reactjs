import React from 'react';
import { ReactComponent as SoundIcon } from '../../assets/icons/sound.svg';
import {
  VolumeContainer,
  VolumeIconContainer,
  ProgressBar
} from './trackControlsStyles';

const Volume = React.forwardRef(({ setVolume, volume }, ref) => {
  const handleVolume = ({ target }) => {
    const value = target.value / 100;
    localStorage.setItem('volume', value);
    setVolume(localStorage.getItem('volume'));
    ref.current.volume = localStorage.getItem('volume');
  };
  return (
    <VolumeContainer>
      <VolumeIconContainer>
        <SoundIcon width={13} fill='#fff' />
      </VolumeIconContainer>
      <ProgressBar
        className='volume'
        type='range'
        min={0}
        max={100}
        value={volume * 100}
        onChange={handleVolume}
      />
    </VolumeContainer>
  );
});

export default React.memo(Volume);
