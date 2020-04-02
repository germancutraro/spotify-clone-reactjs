import React, { useState } from 'react';
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
import MoreMenu from '../MoreMenu/MoreMenu';

const Songs = ({ name, artists, cover, album, song }) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [moreMenuPosition, setMoreMenuPosition] = useState([0, 0]);

  const dispatch = useDispatch();
  const {
    isPlaying,
    song: { id: songId }
  } = useSelector(({ track }) => track);

  const handleOnClickMore = e => {
    setIsMoreMenuOpen(true);
    setMoreMenuPosition([e.pageX, e.pageY]);
  };

  return (
    <>
      <MoreMenu
        open={isMoreMenuOpen}
        close={() => setIsMoreMenuOpen(false)}
        moreMenuPosition={moreMenuPosition}
        items={[
          { title: 'Iniciar Radio', onClick: () => alert('Iniciar radio') },
          {
            title: 'Guardar en canciones que te gustan',
            onClick: () => alert('Guardar en canciones que te gustan')
          },
          {
            title: 'Añadir a la cola',
            onClick: () => alert('Añadir a la cola')
          },
          {
            title: 'Añadir a playlist',
            onClick: () => alert('Añadir a playlist')
          },
          {
            title: 'Copiar enlace de la canción',
            onClick: () => alert('Copiar enlace de la canción')
          }
        ]}
      />
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
                onClick={() =>
                  dispatch(startSong({ song: { ...song, cover } }))
                }
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
        <OptionButton
          onClick={handleOnClickMore}
          active={isMoreMenuOpen}
          data-value='more'
        >
          <MoreIcon height='18' width='18' fill='rgba(255, 255, 255, 1)' />
        </OptionButton>
      </SongContainer>
    </>
  );
};

export default React.memo(Songs);
