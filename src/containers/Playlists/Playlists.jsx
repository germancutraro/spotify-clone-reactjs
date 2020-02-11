import React from 'react';
import { useSelector } from 'react-redux';
import PlaylistsItem from '../../components/PlaylistsItem/PlaylistsItem';

const Playlists = () => {
  const { list } = useSelector(({ playlists }) => playlists);
  return (
    <>
      {list.map(playlist => (
        <PlaylistsItem key={playlist.id} {...playlist} />
      ))}
    </>
  );
};

export default Playlists;
