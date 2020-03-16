import React from 'react';
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
  IconContainer
} from '../../components/Playlist/PlaylistComponentStyles';

import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/more.svg';
import { ReactComponent as DefaultSong } from '../../assets/icons/defaultSong.svg';
import Loader from '../../components/Loader/Loader';
import useTitle from '../../hooks/useTitle';

const Album = () => {
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

  if (loading) return <Loader isLoading={loading} />;

  return (
    <>
      <PlaylistLeftWrapper>
        <PlaylistHeader>
          <PlaylistHeaderSubcontainer>
            <PlaylistImageContainer>
              {album.images &&
                (album?.images[0]?.url ? (
                  <PlaylistImage src={album.images[0].url} alt='' />
                ) : (
                  <DefaultSong width={100} height={100} />
                ))}
            </PlaylistImageContainer>
            <PlaylistTitle>{album.name}</PlaylistTitle>
            {album?.artists.map((artist, i) => (
              <PlaylistOwner
                key={i}
                onClick={() => history.push(`/app/artist/${artist.id}`)}
              >
                {artist.name}
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
              <IconContainer>
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
        {album.tracks.items?.map((track, i) => (
          <TrackItem key={i} song={{ ...track, cover: album.images[0].url }} />
        ))}
      </PlaylistRightWrapper>
      <div
        style={{
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '.015em',
          color: '#fff',
          opacity: '.6',
          padding: '0 5% 2em'
        }}
      >
        {album?.copyrights.map(({ text }, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </>
  );
};

export default Album;
