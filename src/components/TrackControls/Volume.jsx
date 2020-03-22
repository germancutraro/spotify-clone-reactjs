import React, { useState } from 'react';
import { ReactComponent as SpeakerIcon } from '../../assets/icons/speaker.svg';
import { ReactComponent as SpeakerIcon2 } from '../../assets/icons/speaker-2.svg';
import { ReactComponent as SpeakerIcon3 } from '../../assets/icons/speaker-3.svg';
import { ReactComponent as SpeakerIconMute } from '../../assets/icons/speaker-mute.svg';
import {
  VolumeContainer,
  VolumeIconContainer,
  ProgressBar,
  ProgressBarContainer
} from './trackControlsStyles';

const Volume = React.forwardRef(({ setVolume, volume }, ref) => {
  const [lastVolume, setLastVolume] = useState(0.4);

  const handleVolume = ({ target }) => {
    const value = target.value / 100;
    setLastVolume(localStorage.getItem('volume'));
    localStorage.setItem('volume', value);
    setVolume(localStorage.getItem('volume'));
    ref.current.volume = localStorage.getItem('volume');
  };

  const handleMuteVolume = () => {
    volume === '0' && lastVolume > '0.1'
      ? handleVolume({ target: { value: lastVolume * 100 } })
      : volume === '0'
      ? handleVolume({ target: { value: 40 } })
      : handleVolume({ target: { value: 0 } });
  };

  return (
    <ProgressBarContainer>
      <VolumeContainer>
        <VolumeIconContainer onClick={handleMuteVolume}>
          {volume === '0' ? (
            <SpeakerIconMute width={16} fill='#b3b3b3' />
          ) : volume <= '0.4' ? (
            <SpeakerIcon3 width={18} fill='#b3b3b3' />
          ) : volume <= '0.8' ? (
            <SpeakerIcon2 width={18} fill='#b3b3b3' />
          ) : (
            <SpeakerIcon width={18} fill='#b3b3b3' />
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
    </ProgressBarContainer>
  );
});

export default React.memo(Volume);
