import React from 'react';
import {
  SongContainer,
  SongImageContainer,
  SongImage,
  SongName,
  PlayContainer
} from './resultsStyles';
import {
  TextContainer,
  SubTextsContainer,
  ArtistsContainer,
  ArtistContainer,
  Artist,
  ArtistSeparator
} from '../TrackItem/trackItemStyles';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';

const Songs = ({ name, artists, cover, album }) => {
  return (
    <SongContainer>
      <SongImageContainer>
        <SongImage src={cover} alt={name} />
        <PlayContainer data-value='play' onClick={() => alert('play')}>
          <PlayIcon fill='#fff' width={16} />
        </PlayContainer>
      </SongImageContainer>

      <TextContainer>
        <SongName to={`/app/album/${album.id}`}>{name}</SongName>
        <SubTextsContainer>
          <ArtistsContainer>
            {artists.map((artist, i) => (
              <ArtistContainer key={i}>
                <Artist to={`/app/artist/${artist.id}`}>{artist.name}</Artist>
                {i + 1 !== artists.length ? (
                  <ArtistSeparator>,</ArtistSeparator>
                ) : null}
              </ArtistContainer>
            ))}
          </ArtistsContainer>
        </SubTextsContainer>
      </TextContainer>
      {/* <OptionButtonContainer  onClick={() => alert('more options')}>
        <MoreIcon height='18' width='18' fill='rgba(255, 255, 255, 1)' />
      </OptionButtonContainer> */}
    </SongContainer>
  );
};

export default React.memo(Songs);
