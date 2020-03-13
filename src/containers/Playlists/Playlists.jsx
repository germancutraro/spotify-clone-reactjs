import React from 'react';
import { useSelector } from 'react-redux';
import PlaylistsItem from '../../components/LibraryItem/PlaylistsItem';
import useNotifier from '../../hooks/useNotifier';

const Playlists = () => {
  const { list, loading, error } = useSelector(({ playlists }) => playlists);
  const { showSnackbar } = useNotifier({
    message: 'Oooops something went wrong.'
  });

  if (!loading && error) showSnackbar();

  return (
    <>
      {list.map(playlist => (
        <PlaylistsItem key={playlist.id} {...playlist} />
      ))}
    </>
  );
};

export default Playlists;
