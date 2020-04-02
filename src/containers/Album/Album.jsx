import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import TrackItem from '../../components/TrackItem/TrackItem';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumStart } from './albumActions';
import { setList, startSong, pauseSong } from '../Track/trackActions';
// styles

import {
  PlaylistTitle,
  PlaylistOwner,
  PlaylistPlay,
  PlaylistTotalSongs,
  PlaylistIconsWrapper,
  PlaylistImage,
  PlaylistLeftWrapper,
  PlaylistRightWrapper,
  PlaylistImageContainer,
  PlaylistHeader,
  PlaylistHeaderSubcontainer,
  PlaylistButtonsContainer,
  PlaylistDescriptionContainer,
  IconContainer,
  PlaylistCopyrightContainer,
  PlaylistCopyrightText
} from '../../components/Playlist/PlaylistComponentStyles';

import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/more.svg';
import { ReactComponent as DefaultSong } from '../../assets/icons/defaultSong.svg';
import Loader from '../../components/Loader/Loader';
import useTitle from '../../hooks/useTitle';
import { PlaylistContainer } from '../Playlists/playlistsStyles';
import MoreMenu from '../../components/MoreMenu/MoreMenu';

const Album = () => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [moreMenuPosition, setMoreMenuPosition] = useState([0, 0]);

  const dispatch = useDispatch();
  const { album, loading } = useSelector(({ album }) => album);
  const isPlaying = useSelector(({ track }) => track.isPlaying);
  const { id } = useParams();

  const history = useHistory();

  useTitle(`Spotify - ${album.name}`);

  React.useEffect(() => {
    dispatch(getAlbumStart({ id }));
  }, [dispatch, id]);

  const startAlbum = () => {
    if (isPlaying) dispatch(pauseSong());
    else {
      dispatch(setList({ list: album.tracks.items.filter(track => track) }));
      dispatch(
        startSong({
          song: { ...album.tracks.items[0], cover: album.images[0].url }
        })
      );
    }
  };

  const handleOnClickMore = e => {
    setIsMoreMenuOpen(true);
    setMoreMenuPosition([e.pageX, e.pageY]);
  };

  if (loading) return <Loader isLoading={loading} />;

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
      <PlaylistContainer>
        <PlaylistLeftWrapper>
          <PlaylistHeader>
            <PlaylistHeaderSubcontainer>
              <PlaylistImageContainer>
                {album?.images &&
                  (album?.images[0]?.url ? (
                    <PlaylistImage src={album?.images[0].url} alt='' />
                  ) : (
                    <DefaultSong width={100} height={100} />
                  ))}
              </PlaylistImageContainer>
              <PlaylistTitle>{album?.name}</PlaylistTitle>
              {album?.artists?.map((artist, i) => (
                <PlaylistOwner
                  key={i}
                  onClick={() => history.push(`/app/artist/${artist?.id}`)}
                >
                  {artist?.name}
                </PlaylistOwner>
              ))}
            </PlaylistHeaderSubcontainer>

            <PlaylistButtonsContainer>
              <PlaylistPlay onClick={startAlbum}>
                {isPlaying ? 'PAUSE' : 'PLAY'}
              </PlaylistPlay>
              <PlaylistIconsWrapper>
                <IconContainer>
                  <HeartIcon
                    fill={false ? '#1db954' : '#fff'}
                    width={20}
                    height={20}
                    onClick={() => null}
                  />
                </IconContainer>
                <IconContainer
                  onClick={handleOnClickMore}
                  active={isMoreMenuOpen}
                >
                  <MoreIcon fill='#fff' width={20} />
                </IconContainer>
              </PlaylistIconsWrapper>
            </PlaylistButtonsContainer>
            <PlaylistDescriptionContainer>
              <PlaylistTotalSongs>
                {album?.tracks?.total ? album?.tracks?.total : 0}{' '}
                {album?.tracks?.total > 1 ? 'songs' : 'song'}
              </PlaylistTotalSongs>
            </PlaylistDescriptionContainer>
          </PlaylistHeader>
        </PlaylistLeftWrapper>
        <PlaylistRightWrapper>
          {album?.tracks?.items?.map((track, i) => (
            <TrackItem
              key={i}
              song={{ ...track, cover: album.images[0].url }}
            />
          ))}
          <PlaylistCopyrightContainer>
            {album?.copyrights?.map(({ text }, i) => (
              <PlaylistCopyrightText key={i}>{text}</PlaylistCopyrightText>
            ))}
          </PlaylistCopyrightContainer>
        </PlaylistRightWrapper>
      </PlaylistContainer>
    </>
  );
};

export default Album;
