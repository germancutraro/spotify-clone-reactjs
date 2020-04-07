import React, { useState, useContext } from 'react';
// styles
import {
  ItemContainer,
  MusicIconContainer,
  TextContainer,
  Name,
  SubTextsContainer,
  Artist,
  Album,
  DurationContainer,
  Duration,
  Separator,
  ArtistContainer,
  ArtistSeparator,
  ArtistsContainer,
  AlbumContainer,
  OptionButtonContainer,
  ImageContainer,
  Image,
  ButtonContainer,
} from './trackItemStyles';

import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import { ReactComponent as PauseIcon } from '../../assets/icons/pause.svg';
import { ReactComponent as MusicIcon } from '../../assets/icons/music.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/more.svg';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startSong, pauseSong } from '../../containers/Track/trackActions';
import MoreMenu from '../MoreMenu/MoreMenu';
import { UpgradeButton, UpgradeText } from '../Navbar/navbarStyles';
import {
  likeSongStart,
  addTrackToPlaylistStart,
} from '../../containers/Playlists/playlistsActions';
import { ModalsContext } from '../ModalsContext/ModalsContextContainer';

const TrackItem = ({
  song,
  hasImage,
  hasSubtext = true,
  hasAlbum = true,
  hasDuration = true,
  hasOptions = true,
  btn,
  align,
  hasPadding,
  isInPlaylist,
  liked,
  isLikedSongs = false,
  playlistId,
}) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [moreMenuPosition, setMoreMenuPosition] = useState([0, 0]);

  const dispatch = useDispatch();
  const {
    id,
    name,
    artists,
    album,
    duration_ms,
    cover,
    uri,
    preview_url,
  } = song;

  const modalsContext = useContext(ModalsContext);

  let { addTrack } = modalsContext;

  const {
    isPlaying,
    song: { id: songId },
  } = useSelector(({ track }) => track);

  const isCurrentlyPlaying = songId === id;

  const handleOnClickMore = e => {
    setIsMoreMenuOpen(true);
    setMoreMenuPosition([e.pageX, e.pageY]);
  };

  const handlePlay = () => {
    if (preview_url) {
      dispatch(
        startSong({
          song,
          cover,
        })
      );
    }
  };

  return (
    <>
      <MoreMenu
        open={isMoreMenuOpen}
        close={() => setIsMoreMenuOpen(false)}
        moreMenuPosition={moreMenuPosition}
        items={[
          {
            title: 'Add to playlist',
            onClick: () => addTrack.setAddTrackData({ isVisible: true, uri }),
          },
          {
            title:
              !liked && !isLikedSongs
                ? 'Save to songs you like'
                : 'Remove from your songs',
            onClick: () =>
              dispatch(
                likeSongStart({
                  songId: id,
                  action: !liked ? 'follow' : 'unfollow',
                })
              ),
          },
          isInPlaylist && {
            title: 'Remove from this playlist',
            onClick: () =>
              dispatch(
                addTrackToPlaylistStart({
                  playlistId,
                  tracks: uri,
                  method: 'DELETE',
                })
              ),
          },
        ]}
      />
      <ItemContainer
        align={align}
        hasPadding={hasPadding}
        isDisabled={!preview_url}
      >
        <MusicIconContainer>
          {isPlaying && songId === id ? (
            <PauseIcon
              height='16'
              width='16'
              fill={isCurrentlyPlaying ? '#1ed760' : 'rgba(255, 255, 255, 1)'}
              onClick={() => dispatch(pauseSong())}
            />
          ) : (
            <PlayIcon
              height='20'
              width='20'
              fill={isCurrentlyPlaying ? '#1ed760' : 'rgba(255, 255, 255, 1)'}
              onClick={handlePlay}
            />
          )}

          <MusicIcon
            height='20'
            width='18'
            fill={isCurrentlyPlaying ? '#1ed760' : 'rgba(255, 255, 255, .6)'}
          />
        </MusicIconContainer>

        {hasImage ? (
          <ImageContainer>
            <Image src={cover || album?.images[0].url} />
          </ImageContainer>
        ) : null}

        <TextContainer>
          <Name current={isCurrentlyPlaying}>{name}</Name>
          {hasSubtext ? (
            <SubTextsContainer>
              <ArtistsContainer>
                {artists?.map((artist, i) => (
                  <ArtistContainer key={i}>
                    <Artist to={`/app/artist/${artist.id}`}>
                      {artist.name}
                    </Artist>
                    {i + 1 !== artists.length ? (
                      <ArtistSeparator>,</ArtistSeparator>
                    ) : null}
                  </ArtistContainer>
                ))}
              </ArtistsContainer>

              {album && hasAlbum && (
                <>
                  <Separator>•</Separator>
                  <AlbumContainer>
                    <Album to={`/app/album/${album.id}`}>{album.name}</Album>
                  </AlbumContainer>
                </>
              )}
            </SubTextsContainer>
          ) : null}
        </TextContainer>

        {btn && (
          <ButtonContainer>
            <UpgradeButton onClick={btn.onClick}>
              <UpgradeText>{btn.title}</UpgradeText>
            </UpgradeButton>
          </ButtonContainer>
        )}

        {hasOptions && (
          <OptionButtonContainer
            onClick={handleOnClickMore}
            active={isMoreMenuOpen}
          >
            <MoreIcon
              height='18'
              width='18'
              fill='rgba(255, 255, 255, 1)'
              data-type='more'
            />
          </OptionButtonContainer>
        )}

        {hasDuration && (
          <DurationContainer>
            <Duration>
              {`${moment.duration(duration_ms)._data.minutes}:${
                moment.duration(duration_ms)._data.seconds > 9
                  ? moment.duration(duration_ms)._data.seconds
                  : `0${moment.duration(duration_ms)._data.seconds}`
              }`}
            </Duration>
          </DurationContainer>
        )}
      </ItemContainer>
    </>
  );
};

export default React.memo(TrackItem);
