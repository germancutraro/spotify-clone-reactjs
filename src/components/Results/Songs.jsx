import React from 'react';
import {
  SongContainer,
  SongImageContainer,
  SongImage,
  SongName,
  PlayContainer,
  OptionButton
} from './resultsStyles';
import {
  TextContainer,
  SubTextsContainer,
  ArtistsContainer,
  ArtistContainer,
  Artist,
  ArtistSeparator
} from '../TrackItem/trackItemStyles';
// icons
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import { ReactComponent as PauseIcon } from '../../assets/icons/pause.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/more.svg';
import { useDispatch, useSelector } from 'react-redux';
import { startSong, pauseSong } from '../../containers/Track/trackActions';

const Songs = ({ name, artists, cover, album, song }) => {
  const dispatch = useDispatch();
  const {
    isPlaying,
    song: { id: songId }
  } = useSelector(({ track }) => track);

  return (
    <SongContainer>
      <SongImageContainer>
        <SongImage src={cover} alt={name} />
        <PlayContainer data-value='play'>
          {isPlaying && songId === song.id ? (
            <PauseIcon
              height='12'
              width='12'
              fill='rgba(255, 255, 255, 1)'
              onClick={() => dispatch(pauseSong())}
            />
          ) : (
            <PlayIcon
              fill='#fff'
              width={16}
              onClick={() => dispatch(startSong({ song: { ...song, cover } }))}
            />
          )}
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
      <OptionButton onClick={() => alert('more options')} data-value='more'>
        <MoreIcon height='18' width='18' fill='rgba(255, 255, 255, 1)' />
      </OptionButton>
    </SongContainer>
  );
};

export default React.memo(Songs);
