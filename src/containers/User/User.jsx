import React from 'react';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
import { getUserStart, getUserPlaylistsStart } from './userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const User = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector(({ user }) => user);

  const { state } = useLocation();

  React.useEffect(() => {
    dispatch(getUserStart({ id: state.id }));
    dispatch(getUserPlaylistsStart({ id: state.id }));
  }, [dispatch, state.id]);

  if (loading) return <Loader isLoading={loading} />;

  return (
    <div style={{ color: '#fff' }}>
      {user.images && <img src={user.images[0].url} alt='' />}
      <h3>{user.display_name}</h3>
      {user.playlists &&
        user.playlists.map(playlist => (
          <LibraryItem
            key={playlist.id}
            id={playlist.id}
            name={playlist.name}
            author={playlist.owner.display_name}
            cover={playlist.images[0].url}
          />
        ))}
    </div>
  );
};

export default User;
