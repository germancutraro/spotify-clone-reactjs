import React from 'react';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
import { getUserStart, getUserPlaylistsStart } from './userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { UserContainer, UserHeader, UserImage, UserName } from './userStyles';
import { LibraryItemsContainer } from '../../components/LibraryItem/playlistItemStyles';

const User = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector(({ user }) => user);

  const { state } = useLocation();

  React.useEffect(() => {
    dispatch(getUserStart({ id: state.id }));
    dispatch(getUserPlaylistsStart({ id: state.id }));
    document.documentElement.style.setProperty('--color', 'rgb(128, 128, 128)');

    return () =>
      document.documentElement.style.setProperty('--color', '#121212');
  }, [dispatch, state.id]);

  if (loading) return <Loader isLoading={loading} />;

  return (
    <UserContainer style={{ color: '#fff' }}>
      <UserHeader>
        {user.images && (
          <UserImage src={user.images[0].url} alt={user.images[0].url} />
        )}
        <UserName>{user.display_name}</UserName>
      </UserHeader>
      {user.playlists && (
        <LibraryItemsContainer hasPadding={false}>
          {user.playlists.map(playlist => (
            <LibraryItem
              key={playlist.id}
              id={playlist.id}
              title={playlist.name}
              subtitle={playlist.owner.display_name}
              cover={playlist.images[0] ? playlist.images[0].url : null}
            />
          ))}
        </LibraryItemsContainer>
      )}
    </UserContainer>
  );
};

export default User;
