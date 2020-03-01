import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
// components
import TrackItem from "../../components/TrackItem/TrackItem";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  getPlaylistStart,
  getUserTracksStart,
  cleanLoading
} from "./playlistsActions";
import {
  PlaylistTitle,
  PlaylistOwner,
  PlaylistPlay,
  PlaylistTotalSongs,
  PlaylistIconsWrapper,
  PlaylistImage
} from "./playlistsStyles";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";

const Playlist = () => {
  const dispatch = useDispatch();

  const { playlist, loading } = useSelector(({ playlists }) => playlists);

  const { id } = useParams(),
    { pathname } = useLocation();

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
    <div style={{ color: "#fff" }}>
      {!pathname.includes("/tracks") && playlist ? (
        <>
          <PlaylistImage src={playlist?.images[0]?.url} alt="" />
          <PlaylistTitle>{playlist?.name}</PlaylistTitle>
          <PlaylistOwner>{playlist?.owner.display_name}</PlaylistOwner>
          <PlaylistPlay>PLAY</PlaylistPlay>
          <PlaylistTotalSongs>
            {playlist?.tracks?.total} songs
          </PlaylistTotalSongs>
          <PlaylistIconsWrapper>
            <HeartIcon fill="#fff" width={20} height={20} />
          </PlaylistIconsWrapper>
          {playlist?.tracks.items.map(track => (
            <TrackItem
              key={track.track.id}
              added_at={track.added_at}
              {...track.track}
            />
          ))}
        </>
      ) : (
        <>
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
          {playlist &&
            Array.isArray(playlist) &&
            playlist?.map(track => (
              <TrackItem
                key={track.track.id}
                added_at={track.added_at}
                {...track.track}
              />
            ))}
        </>
      )}
    </div>
  );
};

export default Playlist;
