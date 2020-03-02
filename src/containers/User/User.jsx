import React from 'react';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
import { getUserStart, getUserPlaylistsStart } from './userActions';
import { useDispatch, useSelector } from 'react-redux';

const User = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector(({ user }) => user);

  React.useEffect(() => {
    dispatch(getUserStart({ id: 'k4wp05wgc21yzac4s9axvtz44' }));
    dispatch(getUserPlaylistsStart({ id: 'k4wp05wgc21yzac4s9axvtz44' }));
  }, [dispatch]);

  if (loading) return <h1>loading</h1>;

  return (
    <div style={{ color: '#fff' }}>
      <img src={user.images[0].url} alt='' />
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
