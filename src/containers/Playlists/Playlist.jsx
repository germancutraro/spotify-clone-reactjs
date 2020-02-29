import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// components
import TrackItem from "../../components/TrackItem/TrackItem";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getPlaylistStart } from "./playlistsActions";
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

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPlaylistStart({ id }));
  }, [dispatch, id]);

  if (loading) return <h1>loading</h1>;

  return (
    <div style={{ color: "#fff" }}>
      <PlaylistImage src={playlist?.images[0]?.url} alt="" />
      <PlaylistTitle>{playlist?.name}</PlaylistTitle>
      <PlaylistOwner>{playlist?.owner.display_name}</PlaylistOwner>
      <PlaylistPlay>PLAY</PlaylistPlay>
      <PlaylistTotalSongs>{playlist?.tracks?.total} songs</PlaylistTotalSongs>
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
    </div>
  );
};

export default Playlist;
