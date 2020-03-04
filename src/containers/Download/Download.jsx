import React from 'react';

import {
  DownloadContainer,
  DownloadImage,
  DownloadTitle,
  DownloadSubtitle,
  DownloadButton
} from './downloadStyles';

const Download = () => (
  <DownloadContainer>
    <DownloadImage
      src='https://open.scdn.co/cdn/images/devices/mac.80dcea83.png'
      alt=''
    />
    <DownloadTitle>Get our free app</DownloadTitle>
    <DownloadSubtitle>
      Seamlessly listen to music you love. Download the Spotify app for your
      computer.
    </DownloadSubtitle>
    <DownloadButton
      href='https://www.spotify.com/download'
      target='_blank'
      without-rel='noopener noreferrer'
    >
      DOWNLOAD DESKTOP APP
    </DownloadButton>
  </DownloadContainer>
);

export default Download;
