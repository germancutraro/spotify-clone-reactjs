import React from 'react';
import {
  EmptyPlaylistContainer,
  EmptyPlaylistTitle,
  EmptyPlaylistSubtitle,
  EmptyPlaylistIconContainer,
} from './PlaylistComponentStyles';
import { ReactComponent as EmptyPlaylistIcon } from '../../assets/icons/empty-playlist.svg';

const EmptyPlaylist = () => {
  return (
    <EmptyPlaylistContainer>
      <EmptyPlaylistIconContainer>
        <EmptyPlaylistIcon fill='#b3b3b3' width='50' />
      </EmptyPlaylistIconContainer>
      <EmptyPlaylistTitle>This is a little empty...</EmptyPlaylistTitle>
      <EmptyPlaylistSubtitle>
        Let's find a couple of songs for your playlist!
      </EmptyPlaylistSubtitle>
    </EmptyPlaylistContainer>
  );
};

export default EmptyPlaylist;
