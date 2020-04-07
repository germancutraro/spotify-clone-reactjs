import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  PlaylistDescription,
} from './PlaylistComponentStyles';
import TrackItem from '../../components/TrackItem/TrackItem';

import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as HeartOutlineIcon } from '../../assets/icons/heart-outline.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/more.svg';
import { ReactComponent as DefaultSong } from '../../assets/icons/defaultSong.svg';
import MoreMenu from '../MoreMenu/MoreMenu';
import EmptyPlaylist from './EmptyPlaylist';
import { useSelector } from 'react-redux';

const PlaylistContent = ({
  playlist,
  isLikedSongs,
  following,
  handleFollow,
  startPlaylist,
  isPlaying,
  userId,
  inLibrary,
}) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [moreMenuPosition, setMoreMenuPosition] = useState([0, 0]);

  const { likedSongs } = useSelector(({ playlists }) => playlists);

  const history = useHistory();
  const playlistData = isLikedSongs
    ? {
        ...playlist,
        ...{
          name: 'Liked Songs',
          images: [
            {
              url:
                'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
            },
          ],
        },
      }
    : { ...playlist };

  const handleOnClickMore = e => {
    setIsMoreMenuOpen(true);
    setMoreMenuPosition([e.pageX, e.pageY]);
  };

  const isMyPlaylist = playlistData?.owner?.id === userId;

  return (
    <>
      <MoreMenu
        open={isMoreMenuOpen}
        close={() => setIsMoreMenuOpen(false)}
        moreMenuPosition={moreMenuPosition}
        items={[
          {
            title: `${inLibrary ? 'Remove' : 'Add'} from your library`,
            onClick: () => handleFollow(),
          },
          {
            title: 'Copy playlist link',
          },
        ]}
      />
      <PlaylistLeftWrapper>
        <PlaylistHeader>
          <PlaylistHeaderSubcontainer>
            <PlaylistImageContainer>
              {playlistData.images &&
                (playlistData?.images[0]?.url ? (
                  <PlaylistImage
                    src={
                      playlistData?.images ? playlistData?.images[0]?.url : ''
                    }
                    alt=''
                  />
                ) : (
                  <DefaultSong width={100} height={100} />
                ))}
            </PlaylistImageContainer>
            <PlaylistTitle>{playlistData?.name}</PlaylistTitle>
            {!isLikedSongs ? (
              <PlaylistOwner
                onClick={() =>
                  history.push(
                    `/app/user/${playlistData?.owner.display_name}`,
                    {
                      id: playlistData?.owner.id,
                    }
                  )
                }
              >
                {playlistData?.owner?.display_name}
              </PlaylistOwner>
            ) : null}
          </PlaylistHeaderSubcontainer>

          <PlaylistButtonsContainer>
            <PlaylistPlay
              onClick={startPlaylist}
              disabled={!playlistData?.tracks?.total}
            >
              {isPlaying ? 'PAUSE' : 'PLAY'}
            </PlaylistPlay>
            {!isLikedSongs ? (
              <PlaylistIconsWrapper>
                {!isMyPlaylist ? (
                  <IconContainer>
                    {following ? (
                      <HeartIcon
                        fill='#1db954'
                        width={20}
                        height={20}
                        onClick={handleFollow}
                      />
                    ) : (
                      <HeartOutlineIcon
                        fill='#fff'
                        width={20}
                        height={20}
                        onClick={handleFollow}
                      />
                    )}
                  </IconContainer>
                ) : null}
                <IconContainer
                  onClick={handleOnClickMore}
                  active={isMoreMenuOpen}
                >
                  <MoreIcon fill='#fff' width={20} />
                </IconContainer>
              </PlaylistIconsWrapper>
            ) : null}
          </PlaylistButtonsContainer>
          <PlaylistDescriptionContainer>
            {!isLikedSongs ? (
              <PlaylistDescription>
                {playlistData?.description}
              </PlaylistDescription>
            ) : null}
            <PlaylistTotalSongs>
              {playlistData?.tracks?.total ? playlistData?.tracks?.total : 0}{' '}
              songs
            </PlaylistTotalSongs>
          </PlaylistDescriptionContainer>
        </PlaylistHeader>
      </PlaylistLeftWrapper>
      <PlaylistRightWrapper>
        {playlistData?.tracks?.items?.length ? (
          playlistData?.tracks?.items?.map((track, i) => (
            <TrackItem
              key={i}
              added_at={track?.added_at}
              isInPlaylist={isMyPlaylist}
              song={{
                ...track?.track,
                cover: playlistData.images
                  ? playlistData.images[0].url
                  : 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png',
              }}
              liked={likedSongs.includes(track?.track?.id)}
              isLikedSongs={isLikedSongs}
              playlistId={playlistData.id}
            />
          ))
        ) : (
          <EmptyPlaylist playlistId={playlistData.id} />
        )}
      </PlaylistRightWrapper>
    </>
  );
};

export default React.memo(PlaylistContent);
