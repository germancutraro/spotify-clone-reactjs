import React from 'react';
import { ReactComponent as SpeakerIcon } from '../../assets/icons/speaker.svg';
import { ReactComponent as SpeakerIcon2 } from '../../assets/icons/speaker-2.svg';
import { ReactComponent as SpeakerIcon3 } from '../../assets/icons/speaker-3.svg';
import { ReactComponent as SpeakerIconMute } from '../../assets/icons/speaker-mute.svg';
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
        {volume === '0' ? (
          <SpeakerIconMute width={16} fill='#fff' />
        ) : volume <= '0.4' ? (
          <SpeakerIcon3 width={18} fill='#fff' />
        ) : volume <= '0.8' ? (
          <SpeakerIcon2 width={18} fill='#fff' />
        ) : (
          <SpeakerIcon width={18} fill='#fff' />
        )}
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
