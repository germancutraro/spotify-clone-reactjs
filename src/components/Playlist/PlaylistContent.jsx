import React from "react";
import { useHistory } from "react-router-dom";
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
  PlaylistDescription
} from "./PlaylistComponentStyles";
import TrackItem from "../../components/TrackItem/TrackItem";

import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";

const PlaylistContent = ({ playlist, isLikedSongs }) => {
  const history = useHistory();

  const playlistData = isLikedSongs
    ? {
        ...playlist,
        ...{
          name: "Liked Songs",
          images: [
            {
              url:
                "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
            }
          ]
        }
      }
    : { ...playlist };

  return (
    <>
      <PlaylistLeftWrapper>
        <PlaylistHeader>
          <PlaylistHeaderSubcontainer>
            <PlaylistImageContainer>
              <PlaylistImage src={playlistData?.images[0]?.url} alt="" />
            </PlaylistImageContainer>
            <PlaylistTitle>{playlistData?.name}</PlaylistTitle>
            {!isLikedSongs ? (
              <PlaylistOwner
                onClick={() =>
                  history.push(
                    `/app/user/${playlistData?.owner.display_name}`,
                    {
                      id: playlistData?.owner.id
                    }
                  )
                }
              >
                {playlistData?.owner.display_name}
              </PlaylistOwner>
            ) : null}
          </PlaylistHeaderSubcontainer>

          <PlaylistButtonsContainer>
            <PlaylistPlay onClick={() => alert("play")}>PLAY</PlaylistPlay>
            {!isLikedSongs ? (
              <PlaylistIconsWrapper>
                <IconContainer>
                  <HeartIcon fill="#1db954" width={20} height={20} />
                </IconContainer>
                <IconContainer>
                  <MoreIcon fill="#fff" width={20} />
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
              {playlistData?.tracks?.total} songs
            </PlaylistTotalSongs>
          </PlaylistDescriptionContainer>
        </PlaylistHeader>
      </PlaylistLeftWrapper>
      <PlaylistRightWrapper>
        {playlistData?.tracks?.items.map(track => (
          <TrackItem
            key={track.track.id}
            added_at={track.added_at}
            {...track.track}
          />
        ))}
      </PlaylistRightWrapper>
    </>
  );
};

export default PlaylistContent;
