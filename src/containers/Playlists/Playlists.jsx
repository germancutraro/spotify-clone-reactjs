import React from 'react';
import { useSelector } from 'react-redux';
import PlaylistsItem from '../../components/PlaylistsItem/PlaylistsItem';

const Playlists = () => {
  const { list } = useSelector(({ playlists }) => playlists);
  return (
    <>
      {list.map(({ name }) => (
        <PlaylistsItem key={name} name={name} />
      ))}
    </>
  );
};

export default Playlists;
