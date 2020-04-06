import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import TrackItem from '../../components/TrackItem/TrackItem';
// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getAlbumStart,
  saveAlbumStart,
  removeAlbumStart,
} from './albumActions';
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
  PlaylistCopyrightText,
} from '../../components/Playlist/PlaylistComponentStyles';

import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as HeartOutlineIcon } from '../../assets/icons/heart-outline.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/more.svg';
import { ReactComponent as DefaultSong } from '../../assets/icons/defaultSong.svg';
import Loader from '../../components/Loader/Loader';
import useTitle from '../../hooks/useTitle';
import { PlaylistContainer } from '../Playlists/playlistsStyles';
import MoreMenu from '../../components/MoreMenu/MoreMenu';
import { getAlbumsStart } from '../Library/libraryActions';
import { checkLikeSongStart } from '../Playlists/playlistsActions';

const Album = () => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [moreMenuPosition, setMoreMenuPosition] = useState([0, 0]);

  const dispatch = useDispatch();
  const { album, loading } = useSelector(({ album }) => album);
  const { albums, loading: albumsLoading } = useSelector(
    ({ library }) => library
  );
  const { likedSongs, loading: playlistLoading } = useSelector(
    ({ playlists }) => playlists
  );
  const isPlaying = useSelector(({ track }) => track.isPlaying);
  const { id } = useParams();

  const history = useHistory();

  useTitle(`Spotify - ${album.name}`);

  const randomColors = [
    '#1db954',
    '#ffffff',
    '#9A952B',
    '#509BF5',
    '#BA2323',
    '#de681d',
    '#de1d79',
    '#2ad6bc',
    '#312883',
    '#BAF2F3',
  ];

  React.useEffect(() => {
    dispatch(getAlbumStart({ id }));
    dispatch(getAlbumsStart());
    dispatch(checkLikeSongStart());
  }, [dispatch, id]);

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      '--color',
      randomColors[album?.popularity?.toString()[0]]
    );

    return () =>
      document.documentElement.style.setProperty('--color', '#121212');
  }, [album, randomColors]);

  const startAlbum = () => {
    if (isPlaying) dispatch(pauseSong());
    else {
      dispatch(setList({ list: album.tracks.items.filter(track => track) }));
      dispatch(
        startSong({
          song: { ...album.tracks.items[0], cover: album.images[0].url },
        })
      );
    }
  };

  const handleOnClickMore = e => {
    setIsMoreMenuOpen(true);
    setMoreMenuPosition([e.pageX, e.pageY]);
  };

  const iLikeTheAlbum = React.useMemo(
    () => albums.some(({ album: { id } }) => id === album.id),
    [album.id, albums]
  );

  if (loading || albumsLoading || playlistLoading)
    return <Loader isLoading={loading} />;

  return (
    <>
      <MoreMenu
        open={isMoreMenuOpen}
        close={() => setIsMoreMenuOpen(false)}
        moreMenuPosition={moreMenuPosition}
        items={[
          {
            title: `${iLikeTheAlbum ? 'Remove' : 'Save'} in the library`,
            onClick: () =>
              iLikeTheAlbum
                ? dispatch(removeAlbumStart({ id: album.id }))
                : dispatch(saveAlbumStart({ id: album.id })),
          },

          {
            title: 'Copy album link',
          },
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
                  {iLikeTheAlbum ? (
                    <HeartIcon
                      fill='#1db954'
                      width={20}
                      height={20}
                      onClick={() =>
                        dispatch(removeAlbumStart({ id: album.id }))
                      }
                    />
                  ) : (
                    <HeartOutlineIcon
                      fill='#fff'
                      width={20}
                      height={20}
                      onClick={() => dispatch(saveAlbumStart({ id: album.id }))}
                    />
                  )}
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
                {album?.total_tracks ? album?.total_tracks : 0}{' '}
                {album?.total_tracks > 1 ? 'songs' : 'song'}
              </PlaylistTotalSongs>
            </PlaylistDescriptionContainer>
          </PlaylistHeader>
        </PlaylistLeftWrapper>
        <PlaylistRightWrapper>
          {album?.tracks?.items?.map((track, i) => (
            <TrackItem
              key={i}
              song={{ ...track, cover: album.images[0].url }}
              liked={likedSongs.includes(track.id)}
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
