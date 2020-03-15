import React from 'react';
import PropTypes from 'prop-types';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylistStart } from '../../containers/Playlists/playlistsActions';
// styles
import { ModalContainer, ModalDialog } from './createPlaylistStyles';

const CreatePlaylist = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const { user } = useSelector(({ auth }) => auth);

  const handleCreatePlaylist = () => {
    if (value.length)
      dispatch(createPlaylistStart({ userId: user?.id, name: value }));
  };

  return (
    <ModalDialog
      style={{
        display: isOpen ? 'block' : 'none'
      }}
    >
      <ModalContainer>
        <input
          type='text'
          placeholder='New Playlist'
          onChange={e => setValue(e.target.value.trim())}
        />
        <button onClick={handleClose}>Cancel</button>
        <button onClick={handleCreatePlaylist}>Create</button>
      </ModalContainer>
    </ModalDialog>
  );
};

CreatePlaylist.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default CreatePlaylist;
