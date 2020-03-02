import React, { useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
// components
import TrackItem from "../../components/TrackItem/TrackItem";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getPlaylistStart, getUserTracksStart } from "./playlistsActions";
import {
  PlaylistTitle,
  PlaylistOwner,
  PlaylistPlay,
  PlaylistTotalSongs,
  PlaylistIconsWrapper,
  PlaylistImage,
  PlaylistContainer,
  PlaylistLeftWrapper,
  PlaylistRightWrapper,
  PlaylistImageContainer,
  PlaylistHeader,
  PlaylistHeaderSubcontainer
} from "./playlistsStyles";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";

const Playlist = () => {
  const dispatch = useDispatch();

  const { playlist, loading } = useSelector(({ playlists }) => playlists);

  const { id } = useParams(),
    { pathname } = useLocation(),
    history = useHistory();

  useEffect(() => {
    if (!pathname.includes("/tracks")) dispatch(getPlaylistStart({ id }));
    else dispatch(getUserTracksStart());
  }, [dispatch, id, pathname]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--color",
      playlist.primary_color
    );

    return () =>
      document.documentElement.style.setProperty("--color", "#121212");
  }, [playlist]);

  if (loading || !Object.keys(playlist).length) {
    document.documentElement.style.setProperty("--color", "#121212");
    return <h1>loading</h1>;
  }

  return (
    <PlaylistContainer>
      {!pathname.includes("/tracks") && playlist ? (
        <>
          <PlaylistLeftWrapper>
            <PlaylistHeader>
              <PlaylistHeaderSubcontainer>
                <PlaylistImageContainer>
                  <PlaylistImage src={playlist?.images[0]?.url} alt="" />
                </PlaylistImageContainer>
                <PlaylistTitle>{playlist?.name}</PlaylistTitle>
                <PlaylistOwner
                  onClick={() =>
                    history.push(`/app/user/${playlist?.owner.display_name}`, {
                      id: playlist?.owner.id
                    })
                  }
                >
                  {playlist?.owner.display_name}
                </PlaylistOwner>
              </PlaylistHeaderSubcontainer>
              <PlaylistPlay>PLAY</PlaylistPlay>
              <PlaylistTotalSongs>
                {playlist?.tracks?.total} songs
              </PlaylistTotalSongs>
              <PlaylistIconsWrapper>
                <HeartIcon fill="#fff" width={20} height={20} />
              </PlaylistIconsWrapper>
            </PlaylistHeader>
          </PlaylistLeftWrapper>
          <PlaylistRightWrapper>
            {playlist?.tracks.items.map(track => (
              <TrackItem
                key={track.track.id}
                added_at={track.added_at}
                {...track.track}
              />
            ))}
          </PlaylistRightWrapper>
        </>
      ) : (
        <>
          <PlaylistLeftWrapper>
            <PlaylistImage
              src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
              alt=""
            />
            <PlaylistTitle>Liked Songs</PlaylistTitle>
            <PlaylistOwner></PlaylistOwner>
            <PlaylistPlay>PLAY</PlaylistPlay>
            <PlaylistTotalSongs>
              {playlist?.tracks?.length} songs
            </PlaylistTotalSongs>
            <PlaylistIconsWrapper>
              <HeartIcon fill="#fff" width={20} height={20} />
            </PlaylistIconsWrapper>
          </PlaylistLeftWrapper>
          <PlaylistRightWrapper>
            {playlist &&
              Array.isArray(playlist) &&
              playlist?.map(track => (
                <TrackItem
                  key={track.track.id}
                  added_at={track.added_at}
                  {...track.track}
                />
              ))}
          </PlaylistRightWrapper>
        </>
      )}
    </PlaylistContainer>
  );
};

export default Playlist;
