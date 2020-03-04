import React from 'react';
import PropTypes from 'prop-types';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylistStart } from '../../containers/Playlists/playlistsActions';
// styles
import { ModalContainer } from './createPlaylistStyles';

const CreatePlaylist = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const { user } = useSelector(({ auth }) => auth);

  const handleCreatePlaylist = () => {
    if (value.length)
      dispatch(createPlaylistStart({ userId: user?.id, name: value }));
  };

  return (
    <ModalContainer
      style={{
        zIndex: 1000000,
        backgroundColor: 'yellow',
        width: '100vw',
        height: '100vh',
        display: isOpen ? 'block' : 'none'
      }}
    >
      <input
        type='text'
        placeholder='New Playlist'
        onChange={e => setValue(e.target.value.trim())}
      />
      <button onClick={handleClose}>Cancel</button>
      <button onClick={handleCreatePlaylist}>Create</button>
    </ModalContainer>
  );
};

CreatePlaylist.propTypes = {
  isOpen: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default CreatePlaylist;
